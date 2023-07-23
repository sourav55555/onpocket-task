import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import toast, { Toaster } from "react-hot-toast";
import CounterComponent from "./components/CounterComponent";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("mockData.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const onClickHandler = () => {
    toast.success("Button Clicked!");
    console.log("clicked");
  };

  return (
    <div className=" bg-slate-200">
    
      {/* Button component  */}
      <ButtonComponent label="Click Here" onClickHandler={onClickHandler} />
      <Toaster />

      {/* increment & decrement  */}
      <CounterComponent number={number} setNumber={setNumber} />

      {/* render list  */}
      <p className="mt-24 mb-6 text-center text-2xl font-semibold">List</p>

      <ul className="pb-20">

        {list.map((data) => (
          <li key={data.id}>

            <div className="flex justify-center items-center gap-6 border-b-2 mb-3 border-black w-fit mx-auto py-2 px-3 rounded-lg">
              <p>{data.name}</p>
              <p>{data.description}</p>
            </div>

          </li>
        ))}

      </ul>
    </div>
  );
}

export default App;
