import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import APIclient from '../services/apiClient';
import todoService,{Todo} from '../services/todoService';


const useTodos = () => {
    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: todoService.getAll,
        staleTime: 1000 * 5,
    })
}

export default useTodos;