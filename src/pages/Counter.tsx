import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(5);
  const [subCount, setSubCount] = useState(5);
  const decrementCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      setSubCount(count - 1);
    }
    console.log(`Current Count : ${count}`);
    console.log(`Current subCount : ${count}`);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>SubCount: {subCount}</p>
      {count && subCount && <button onClick={decrementCount}>Decrement</button>}
    </div>
  );
}

export default Counter;
