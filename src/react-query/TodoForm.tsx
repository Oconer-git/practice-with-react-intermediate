import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from './hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo,Error,Todo>({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
      .then(res => res.data),
    onSuccess: (savedTodo, Todo) => 
     queryClient.setQueryData<Todo[]>(['todos'], todos => [savedTodo, ...(todos || [])])
  })

  return (
    <>
      {addTodo.error &&<div className="alert alert-danger">{addTodo.error.message}</div>}
      <form 
        onSubmit={event => {
          event.preventDefault();
          console.log('clicked submitted')
          if(ref.current && ref.current.value){
            addTodo.mutate({
              id: 0,
              title: ref.current.value,
              userId: 1,
              completed: false
            });
          } 
          if(ref.current) ref.current.value = '';
        }} 
        className="row mb-3"
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button disabled={addTodo.isLoading} className="btn btn-primary">
            {addTodo.isLoading ? 'adding...' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
