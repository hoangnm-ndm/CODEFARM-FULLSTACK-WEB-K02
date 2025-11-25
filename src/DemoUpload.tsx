import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useState } from "react";

const { Dragger } = Upload;

const CLOUD_NAME = "dzygsvls1"; // Thay bằng của bạn
const UPLOAD_PRESET = "mypreset"; // Unsigned preset

const DemoUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const props: UploadProps = {
    name: "file",
    multiple: false,
    fileList,
    accept: "image/*",
    customRequest: async ({ file, onError, onSuccess }) => {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);
      // Tùy chọn thêm (không bắt buộc)
      // formData.append('folder', 'antd-uploads');
      // formData.append('tags', 'antd, demo');

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        if (res.ok) {
          onSuccess?.(data, file as any);
          message.success("Upload thành công!");
          console.log("Cloudinary response:", data);

          // data.secure_url là link ảnh đã upload
          // data.public_id để xóa hoặc quản lý sau này
        } else {
          onError?.(new Error(data.error?.message || "Upload thất bại"));
          message.error(data.error?.message || "Upload thất bại");
        }
      } catch (err: any) {
        onError?.(err);
        message.error(err.message || "Lỗi mạng");
      } finally {
        setUploading(false);
      }
    },

    onChange(info) {
      let newFileList = [...info.fileList];
      // Chỉ giữ lại 1 file (nếu muốn upload nhiều thì bỏ đoạn này)
      newFileList = newFileList.slice(-1);

      // Khi upload xong thành công, hiển thị thumbnail
      newFileList = newFileList.map((file) => {
        if (file.response) {
          // Link ảnh từ Cloudinary
          file.url = file.response.secure_url;
        }
        return file;
      });

      setFileList(newFileList);
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <Dragger {...props} disabled={uploading}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Kéo thả ảnh vào đây hoặc click để chọn
        </p>
        <p className="ant-upload-hint">
          Chỉ hỗ trợ 1 ảnh mỗi lần. Gói Free: tối đa 10MB/ảnh.
        </p>
      </Dragger>

      {/* Hiển thị ảnh đã upload (nếu có) */}
      {fileList.length > 0 && fileList[0]?.url && (
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <img
            src={fileList[0].url}
            alt="uploaded"
            style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
          />
          <p style={{ marginTop: 8, wordBreak: "break-all", fontSize: 12 }}>
            {fileList[0].url}
          </p>
        </div>
      )}
    </div>
  );
};

export default DemoUpload;
