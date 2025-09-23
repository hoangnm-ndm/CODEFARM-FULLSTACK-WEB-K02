import { students } from "../data";

const TableList = () => {
  const totalFail = students.filter((item) => item.score < 5).length;
  const totalPassScore = students
    .filter((item) => item.score > 5)
    .reduce((acc, cur) => (acc += cur.score), 0);
  return (
    <div>
      <h2>Kết quả học tập</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Họ và tên</td>
            <td>Tuổi</td>
            <td>Giới tính</td>
            <td>Điểm</td>
            <td>Kết quả</td>
            {students.some((item) => item.score < 5) && <td>Actions</td>}
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr style={{ color: item.score < 5 ? "red" : "" }} key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.score}</td>
                <td>
                  <p>{item.score < 5 ? "fail" : "pass"}</p>
                </td>
                <td>{item.score < 5 && <button>Đăng ký học lại</button>}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Tổng số học viên: {students.length}</td>
          </tr>
          <tr>
            <td>Tổng điểm học viên qua môn: {totalPassScore}</td>
          </tr>
          {!!totalFail && (
            <tr>
              <td>
                Tổng số học viên học lại:
                {totalFail}
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};

export default TableList;
