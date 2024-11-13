import { useLoaderData, Form } from "react-router-dom"
import TodoList from './TodoList'

export default function TodoListContainer() {
    const { todos } = useLoaderData()

    return (
        <>
            <h1>ToDo list</h1>
            <div>
                <Form method="post">
                    <input
                        name="newTodo"
                        aria-label="Add new todo"
                        placeholder="Enter new todo"
                    />
                    <button type="submit">Add</button>
                </Form>
            </div>
            <TodoList
                todos={todos}
            />
        </>
    )
}
