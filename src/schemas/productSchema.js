import z from "zod";

export const productSchema = z.object({
  title: z
    .string({ message: "Title phai la string" })
    .min(6, { message: "Title toi thieu 6 ky tu" }),
  price: z
    .number({ message: "Price la bat buoc va phai la so" })
    .min(0, { message: "Price la 1 so khong am" }),

  description: z.string().optional(),
  date: z.date(),
});
