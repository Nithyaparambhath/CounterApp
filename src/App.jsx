import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/counterSlice";



function App() {

  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <div className="min-h-screen bg-amber-100 flex justify-center items-center">
        <div className="flex gap-8 items-center justify-center">
          <button onClick={()=>dispatch(decrement())} className="border w-20 h-20 rounded-2xl text-6xl flex items-center justify-center cursor-pointer">
            -
          </button>

          <h1 className="font-bold text-6xl"> {count}  </h1>

          <button onClick={()=>dispatch(increment())} className="border w-20 h-20 rounded-2xl text-6xl flex items-center justify-center cursor-pointer">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
