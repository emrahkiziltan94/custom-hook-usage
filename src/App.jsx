import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useCounter } from './hooks/useCounter';
import { useCounter2 } from './hooks/useCounter2';

function App() {
  // Kullanım 1 NOT: sıralama önemli
  // const [count, increase, decrease] = useCounter(10);

  //kullanım 2 destructure yada aynı isimleri kullanmak gerekir.
  const {
    count: myCount,
    increment: increase,
    decrement: decrease,
  } = useCounter2(20);

  // yanlış kullanım function isimleri ya destructure edilmeli kullanım 2 deki gibi yada aynı olmalı.
  /*const {
    count: myCount,
    inc,
    dec,
  } = useCounter2(20);*/

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {myCount}
        </button>
        <p>
          <button className="incremet" onClick={increase}>
            increment
          </button>
          <button className="incremet" onClick={decrease}>
            decrement
          </button>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
