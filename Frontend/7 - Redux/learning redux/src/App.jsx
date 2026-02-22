import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply } from './redux/counter/counterslice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span style={{ margin: '0 10px' }}>Currently count is {count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())} style={{ marginLeft: '10px' }}>
          x2
        </button>
      </div>
    </>
  )
}

export default App