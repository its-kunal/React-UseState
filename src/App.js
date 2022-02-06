import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { v4 } from 'uuid';


import "./app.css"
const rcKey = "rcKey"
const rcKey2 = "rck"

function App() {
  const [val, setVal] = useState(0)
  const [uid, setuid] = useState(v4())
  useEffect(() => {
    if (!uid) {
      setuid(v4())
    }
    const newVal = JSON.parse(localStorage.getItem(rcKey))
    const upid = JSON.parse(localStorage.getItem(rcKey2))
    if (upid) { setuid(upid) }
    else { setuid(v4()) }
    setVal(newVal)
  }, [])
  useEffect(() => {
    localStorage.setItem(rcKey, JSON.stringify(val))
    localStorage.setItem(rcKey2, JSON.stringify(uid))
  }, [val, uid])

  function _handleUUID() {
    setuid(v4())
  }
  function _dec() {
    if (val > 0) {
      setVal(val - 1)
    }
    else {
      alert("I don't know how to count below 0")
      setVal(0)
    }
  }
  function _convZero(){
    setVal(0)
  }
  return (
    <div className='contCent'>
      <h3 style={{
        color: "darkblue",
        textDecoration: "underline",
        textDecorationColor: "black",
        fontSize: "22px"
      }}>This is used to demonstrate useState() and Localstorage</h3>
      <p>You clicked me {val} {val > 1 ? "times" : "time"}.</p>
      <button onClick={() => setVal(val + 1)}>+</button>
      <button onClick={_dec}>-</button >
      <button onClick={_convZero}>To Zero</button >

      <br />
      <br />

      <button onClick={_handleUUID}>Click to generate another UUID</button>
      <p>{uid}</p>
    </div >
  );
}

export default App;
