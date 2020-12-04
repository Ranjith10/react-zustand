import React from "react";
import create from "zustand";

import "./styles.css";

let globalStore = create((set) => ({
  counter: 0,
  increment: () =>
    set((state) => ({
      counter: state.counter + 1
    })),
  decrement: () =>
    set((state) => ({
      counter: state.counter - 1
    }))
}));

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const { counter, increment, decrement } = globalStore();
  return (
    <div className="counter-container">
      <div className="counter">The count is: {counter}</div>
      <button className="increment" onClick={increment}>
        +
      </button>
      <button className="decrement" onClick={decrement}>
        -
      </button>
    </div>
  );
};
