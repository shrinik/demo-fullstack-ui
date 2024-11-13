import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { todoLoader as todoLoader, todoAction as todoAction } from './components/root.jsx'
import ErrorPage from './components/error-page.jsx'
import './index.css'
import TodoListContainer from './components/todo/TodoListContainer.jsx'
import App from './components/home/App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <App />,
      },
      {
        path: 'todo',
        element: <TodoListContainer />,
        loader: todoLoader,
        action: todoAction
      }
    ]
  }  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)
