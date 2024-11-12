import React from 'react';
import useCounterStore from './store';

const Counter = () => {
  const {counter, max, increment, reset} = useCounterStore();
  return (
    <div>
      Max ({max})
      Counter ({counter})
      <button
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
