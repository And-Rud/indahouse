import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>
        inda<span>house</span>
      </h1>
      <p>React + Vite on Cloudflare Workers</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
    </main>
  )
}

export default App
