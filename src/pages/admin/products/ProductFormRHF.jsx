import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProduct } from "../../../api/apiProduct";
import { toast } from "react-toastify";

/**
 * 1. Quản lý các trạng thái data form dễ dàng hơn.
 * 2. Dễ dàng validation.
 * 3. Dễ dàng thao tác form (reset, refresh, watch, register...)
 * 4. Cấu hình nhẹ
 */

const productSchema = z.object({
  title: z
    .string({ message: "Title phai la string" })
    .min(6, { message: "Title toi thieu 6 ky tu" }),
  price: z
    .number({ message: "Price la bat buoc va phai la so" })
    .min(0, { message: "Price la 1 so khong am" }),
  description: z.string().optional(),
});

const ProductFormRHF = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const product = await createProduct(data);
      console.log(product);
      toast.success("Them thanh cong!");
      reset();
      setLoading(false);
    } catch (error) {
      toast.error("Them that bai!");
      setLoading(false);
    }
  };

  // * reset của react hook form có thể tự kích hoạt theo state.
  // * reset của html thì chỉ kích hoạt khi handle từ người dùng.

  return (
    <div>
      <form
        style={{ with: "400px", borderRadius: "8px", padding: "40px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div className="mb-3">
          {" "}
          <textarea
            className="form-control"
            placeholder="description"
            {...register("description")}
          />
        </div>

        <div className="mb-3">
          {" "}
          <button className="btn btn-primary" disabled={loading}>
            Submit
          </button>{" "}
          <button className="btn btn-secondary" type="reset">
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormRHF;
