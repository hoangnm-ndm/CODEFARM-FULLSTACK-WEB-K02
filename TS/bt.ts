import { response } from "./data";

export type Response = {
  success: boolean;
  status: number;
  message: string | null;
  data: Data;
};

type Data = {
  category: Category;
  filters: Filters;
};

type Category = {
  data: DataCategory;
  pagination: Pagination;
};
type Filters = {};

type DataCategory = {};

type Pagination = {};

const res: Response = response;

console.log(res);
