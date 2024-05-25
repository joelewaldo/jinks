"use client"
import { useEffect, useState } from "react"
import { TodoStatus } from "../_types"

type TodoItemProps = {
    title: string;
    description: string;
    status: TodoStatus;
}

export default function TodoItem(props: TodoItemProps) {
  // assuming data will come in from the backend
    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <p>
            {props.description}
            </p>
        </div>
    )
}
