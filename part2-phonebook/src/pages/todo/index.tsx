import useFetch from '@/hooks/useFetch';
import { TodoProps } from './types';

const TodoPage = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const { data } = useFetch(url, []);

    return (
        <div>
            <h1>Todo list數據:</h1>
            {data && data.map((item: TodoProps) => <li key={item.id}>{item.title}</li>)}
        </div>
    );
};

export default TodoPage;
