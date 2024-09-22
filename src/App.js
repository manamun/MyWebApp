import React, {useState} from 'react';

function App(){
  const [count, setCount] = useState(10);

  return (
    <div style={{textAlign: 'center' }}>
      <h1>カウンターアプリ</h1>
      <p>カウント: {count}</p>
      <button onClick = {() => setCount(count + 1)}>増やす</button>
      <button onClick = {() => setCount(count - 1)}>減らす</button>
    </div>
  );
}

export default App;