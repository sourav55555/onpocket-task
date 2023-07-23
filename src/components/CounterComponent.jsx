import React, { Component } from "react";

class CounterComponent extends Component {
  render() {
    const { number, setNumber } = this.props;

    // increment , decrement functions 
    const increment = () => {
      setNumber(number + 1);
    };

    const decrement = () => {
      setNumber(number - 1);
    };

    return (
      <div className="mt-32">
        <p className="px-6 text-xl mx-auto py-3 rounded-full w-fit bg-slate-600 text-white font-semibold">
          {number}
        </p>
        <div className="text-center mt-6">
          <button
            className=" me-4 px-10 py-2 bg-sky-900 text-white rounded-3xl hover:bg-transparent hover:text-sky-900 border-[3px] border-sky-900 font-semibold transition-all duration-300 shadow-md shadow-sky-400 "
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="px-10 py-2 hover:bg-sky-900 hover:text-white rounded-3xl bg-transparent text-sky-900 border-[3px] border-sky-900 font-semibold transition-all duration-300 shadow-md shadow-sky-400 "
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default CounterComponent;
