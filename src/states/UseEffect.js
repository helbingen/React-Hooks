import { useState, useEffect } from 'react'
export default function UseEffect() {

  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('first render');
  }, [])

  useEffect(() => {
    console.log("counter");
  }, [counter])

  useEffect(() => {
    console.log("name");
  }, [name])

  function handleAdd() {
    setCounter((prevState) => prevState + 1);
  }
  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinus}>-</button>
      <br />
      <span>{name}</span>
      <br />
      <input onChange={e => setName(e.target.value)} />
    </div>
  );
}