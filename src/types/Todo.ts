export interface Todo {
  id?: string;
  name: string;
  description: string;
  priority: "high" | "medium" | "low";
  isCompleted: boolean;
}
