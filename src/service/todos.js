import axios from 'axios';

export const getTodosAsync = async () => {
    return await axios.get('http://localhost:3001/todos')
}