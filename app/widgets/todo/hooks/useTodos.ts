import { useEffect } from "react";
import { Todo } from "../_types";
import useHttp from "@/app/hooks/useHttp";

export default function useTodo() {
    const { data: todos, loading, error, sendRequest } = useHttp<Todo[]>()

    useEffect(() => {
        sendRequest('/todos', { method: 'GET' })
    }, [sendRequest])

    return { todos, loading, error }
}
