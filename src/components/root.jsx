import { Link, Outlet, useNavigation } from "react-router-dom";
import { addTodo, getTodos } from "../services/todo";

export async function todoLoader() {
  const todos = await getTodos();
  return { todos };
}

export async function todoAction({ request }) {
  const formData = await request.formData();
  const newTodo = formData.get("newTodo");
  await addTodo(newTodo)
  return null
}

export default function Root() {
  const navigation = useNavigation()

  return (
    <>
      <div id="sidebar">
        <h1>Fullstack Demo Apps</h1>
        <nav>
          <ul>
            <li>
              <Link to={`home`}>Home</Link>
            </li>
            <li>
              <Link to={`todo`}>Todo App</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}
