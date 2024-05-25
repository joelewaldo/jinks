export type TodoStatus = 
     | "pending"
     | "ongoing"
     | "done";

export type Todo = {
    id: number;
    title: string;
    description: string;
    status: TodoStatus;
}
