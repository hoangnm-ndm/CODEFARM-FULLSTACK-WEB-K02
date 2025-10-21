import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas/authSchema";
import { registerAuth } from "../../api/apiAuth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data) => {
    setDisabled(true);
    data.confirmPassword = undefined;
    await registerAuth(data);
    toast.success("dang ky thanh cong!");
    setDisabled(false);
  };

  const handleCheck = (event) => {
    console.log(event.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Confirm Password
          </label>
          <input
            className="form-control"
            type="password"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (
            <span className="text-danger">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          <select
            name="gender"
            id="gender"
            {...register("gender", { valueAsNumber: true, required: true })}
            className="form-control"
          >
            <option value="">Vui long chon</option>
            <option value="0">Nam</option>
            <option value="1">Nữ</option>
            <option value="2">Khác</option>
          </select>
          {errors.gender && (
            <span className="text-danger">{errors.gender.message}</span>
          )}
        </div>
        <div className="mb-3">
          <input type="checkbox" onChange={handleCheck} />
          <span>
            Tôi đã đọc kỹ{" "}
            <Link to="/term-policy">chính sách và điều khoản</Link>
          </span>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100" disabled={disabled}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
