import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import api from "../api";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const nav = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/login", data);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
      nav("/");
    } catch (err) {
      console.log(err);
      alert(err.response.data);
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="form-control"
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          password
        </label>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="form-control"
        />
        {errors.password && (
          <span className="text-danger">{errors.password.message}</span>
        )}
      </div>

      <div className="mb-3">
        <button className="w-100 btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default LoginPage;
