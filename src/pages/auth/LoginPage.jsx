import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAuth, registerAuth } from "../../api/apiAuth";
import { loginSchema } from "../../schemas/authSchema";

const LoginPage = () => {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const nav = useNavigate();
  const onSubmit = async (data) => {
    try {
      setDisabled(true);
      data.confirmPassword = undefined;
      const { data: response } = await loginAuth(data);
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("accessToken", response.accessToken);
      toast.success("dang nhap thanh cong!");
      setDisabled(false);
      nav("/");
    } catch (error) {
      setDisabled(false);
      toast.error(error.response.data.message);
    }
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
          <button className="btn btn-primary w-100" disabled={disabled}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
