export type User = {
  id?: number | string;
  email: string;
  password: string;
  fullname?: string | null;
  gender?: "female" | "male" | "other";
};
