import { useRef } from 'react';
import useAddTodos from './hooks/useAddTodos';

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodos(() => {
    if(ref.current) ref.current.value = '';
  });
  return (
    <>
      {addTodo.error &&<div className="alert alert-danger">{addTodo.error.message}</div>}
      <form 
        onSubmit={event => {
          event.preventDefault();
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
