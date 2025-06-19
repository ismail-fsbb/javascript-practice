import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
  
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <h2>Count: {count}</h2>
        </div>
    );
}
export default Count;