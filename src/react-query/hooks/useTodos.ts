import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import APIclient from '../services/apiClient';

const apiClient = new APIclient<Todo>('/todos');

export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () => {
    return useQuery<Todo[], Error>({
        queryKey: ['todos'],
        queryFn: apiClient.getAll,
        staleTime: 1000 * 5,
    })
}

export default useTodos;