import PropTypes from "prop-types"

export default function TodoList({ todos }) {
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    return (
                    <li key={todo.id}>
                        {todo.value}
                    </li>
                    )
                })}
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}