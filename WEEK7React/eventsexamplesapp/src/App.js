import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function increment() {
    setCount(prev => prev + 1);
    sayHello();
    sayMessage();
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function sayHello() {
    setMessage("Hello");
  }

  function sayMessage() {
    setMessage("Hello, this is a static message.");
  }

  function sayWelcome(msg) {
    setMessage(msg);
  }

  function handleClick(e) {
    setMessage("I was clicked");
  }

  return (
    <div>
      <h1>Event Examples App</h1>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      <button onClick={handleClick}>Synthetic Event</button>
      <p>{message}</p>
      <CurrencyConvertor />
    </div>
  );
}

export default App;
