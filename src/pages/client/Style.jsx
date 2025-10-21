import React, { useState } from "react";
import styles from "./Style.module.css";
import {Flex, Button} from 'antd'
const StylePage = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div>
        <h1 className={isActive ? styles.danger : styles.notDanger}>
          Lương Chính Quốc
        </h1>
        <h2 className="text-black">Tailwindcss</h2>
        <button onClick={() => setIsActive(!isActive)}>click</button>
      </div>
      <Flex gap="small" wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </>
  );
};
{
  /**
   * * INLINE STYLE
   * ? Ưu điểm
   * * Tiện, nhanh, hiệu năng, dễ đọc
   * ! Nhược điểm
   * * Không sử dụng pseudo class - element
   * * Không tai sử dụng được
   * * Code khó maintain
   *
   * * CSS Thuần (Global CSS)
   * ? Ưu điểm
   * * Dễ hiểu, quên thuộc, dễ dàng tái sử dụng với nhiều element
   * * Không cần cài thêm thư viện
   * ! Nhược điểm
   * * Dễ gây lỗi trùng class/ Ghi đè style giữa các component
   * * Không có scope riêng
   * * Khó maintain khi dự án lớn
   *
   *
   * * CSS MODULES
   * ? Ưu điểm
   * * Scope riêng
   * * Dễ tổ chức theo component
   * ! Nhược điểm
   * * Không dễ để làm dynamic style theo props
   *
   *
   * * Styled Components (CSS in JS)
   * ? Ưu điểm
   * * Viết CSS trực tiếp trong JS => Dynamic dễ
   * * Hỗ trợ theme, nesting, props
   * * Tránh trùng class
   * ! Nhược điểm
   * * Phải học thêm cú pháp styled
   * * Tốn hiệu năng hơn
   * * Bundle to nếu lạm dụng
   *
   * * Emotion (CSS in JS)
   * ? Ưu điểm
   * * Gần giống style-components nhưng lại nhanh hơn.
   * * Có 2 API: style và css linh hoạt
   * * Hỗ trợ typescript
   * ! Nhược điểm
   * * Cần cấu hình thêm khi dùng SSR (next.js)
   * * Hơi phức tạp với người mới
   *
   * * Tailwind CSS (utility-first css)
   * ? Ưu điểm
   * * Không cần đặt tên class
   * * Không trùng css
   * * Hiệu suất cao
   * * Hỗ trợ dark mode cực dễ
   * ! Nhược diểm
   * * ClassName dài, JSX khó đọc
   * * Style lẫn với logic
   * * Người mới hơi dễ choáng vì có quá nhiều utility
   *
   * * Framework UI có sẵn như (shadcnUI, chakraUI, ant Design, MUI)
   * ? Ưu điểm
   * * Có style sẵn, theme, có sẵn luôn component cực đẹp và chuẩn UX
   * * Giúp build nhanh những giao diện phức tạp
   * ! Nhược điểm
   * * Bundle to
   * * Giới hạn tùy biến (Khó custom)
   * * Dễ bị lú nếu tham gia nhiều dự án sử dụng thư viện khác nhau
   */
}
export default StylePage;
