import axios from 'axios'
import { BASE_URL } from '../constants'

const getTodos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/todo`)
        const todos = response.data.todos
        return todos
    } catch (error) {
        console.log(error)
    }
}

const addTodo = async (newTodo) => {
    const todo = {
        value: newTodo
    }
    try {
        const response = await axios.post(`${BASE_URL}/todo`, todo)
        const addedTodo = response.data
        return addedTodo
    } catch (error) {
        console.log(error)
    }
}

export {
    getTodos,
    addTodo
}