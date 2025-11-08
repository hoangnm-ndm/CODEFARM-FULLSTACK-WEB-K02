import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api";
import { registerSchema } from "../validations/authSchema";
import type { User } from "../types/User";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(registerSchema),
  });
  const nav = useNavigate();
  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      await api.post("/register", data);
      nav("/login");
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="Email"
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
            <Link to="/login">You have an account?</Link>
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
          <button className="btn btn-primary w-100">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
