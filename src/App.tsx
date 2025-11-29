import { Button } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import ModalUpload from "./ModalUpload";
function App() {
  return (
    <>
      <ModalUpload title="Ảnh bìa">
        <Button type="primary">Tải lên ảnh bìa</Button>
      </ModalUpload>
      <ModalUpload title="Ảnh đại diện">
        <Button type="primary">Tải lên ảnh đại diện</Button>
      </ModalUpload>
    </>
  );
}

export default App;
