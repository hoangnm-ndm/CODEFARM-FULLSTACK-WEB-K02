import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import api from "../api";

import { loginSchema } from "../validations/authSchema";
import { Link } from "react-router-dom";
import type { User } from "../types/User";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<User> = async (data) => {
    const res = await api.post("/login", data);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("accessToken", res.data.accessToken);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor=""
            className="form-label d-flex justify-content-between"
          >
            <span>Password</span>
            <Link to="/register">You have not an account?</Link>
          </label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
