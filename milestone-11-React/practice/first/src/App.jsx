import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
		<button onClick={() => setCount((count) => count + 1)}>
			Increase count (click)  {count}
		</button>
    </>
  )
}

export default App;


