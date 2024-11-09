import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../contants";
import APIclient from "../services/apiClient";

const apiClient = new APIclient<Todo>('/todos');

interface AddTodoContext{
    previousTodos: Todo[]
  }

const useAddTodos = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: apiClient.post,
  
      onMutate: (newTodo: Todo) => {
        const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [newTodo, ...todos]);

        onAdd();
        return {previousTodos};
      },
  
      onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(
          CACHE_KEY_TODOS, 
          todos => todos?.map(todo => todo === newTodo ? savedTodo : todo)
        )
      },
  
      onError: (error, newTodo, context) => {
        if(!context) return;
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos)
      }
    })
}

export default useAddTodos;