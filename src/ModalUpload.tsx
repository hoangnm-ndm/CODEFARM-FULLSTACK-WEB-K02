import { Modal } from "antd";
import DemoUpload from "./DemoUpload";
import React, { useState, type ReactElement } from "react";

const ModalUpload = ({
  children,
  title,
}: {
  children: ReactElement;
  title?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {React.cloneElement(children, {
        onClick: () => showModal(),
      } as { onClick: () => void })}
      <Modal
        title={title || "Chưa cập nhật"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DemoUpload />
      </Modal>
    </>
  );
};

export default ModalUpload;
