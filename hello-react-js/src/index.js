import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css";
import img1 from './img/car1.png';
import img2 from './img/car2.png';
import img3 from './img/car3.png';
import bulb1 from './img/light-bulb-off.png';
import bulb2 from './img/light-bulb-on.png';

// function Hi() {
//   return <div>Hello World!</div>;
// }

// ReactDOM.render(<Hi/>, document.querySelector('#root'));


// function Card() {
//   return <div className='cardBox'>
//     <h2>Heading</h2>
//     <p>Description text here</p>
//     <img src={car1}></img>
//   </div>;
// }

// ReactDOM.render(<Card/>, document.querySelector('#root'));


// Passing Data through props
// function Card(props) {
//   return <div className='cardBox'>
//     <h2>{props.heading}</h2>
//     <p>{props.description}</p>
//     <img src={props.imgUrl}></img>
//   </div>;
// }

// ReactDOM.render( <div>
// <Card heading={"Test Heading Prop 1"} description={"This is some text here..."} imgUrl={img1} /> 
// <Card heading={"Test Heading Prop 2"} description={"This is some text here..."} imgUrl={img2} />
// <Card heading={"Test Heading Prop 3"} description={"This is some text here..."} imgUrl={img3} />
// </div>, document.querySelector('#root'));


// Arrow Functions, use small brakets, ternory operators
// let Card = ({ heading, description, imgUrl }) => (
//   <div className='cardBox'>
//     <h2>{heading}</h2>
//     <p>{description}</p>
//     {
//       (imgUrl) ? <img width={300} src={imgUrl}></img> : null
//     }
//   </div>
// )

// ReactDOM.render( <div>
// <Card heading={"Test Heading Prop 1"} description={"This is some text here..."} imgUrl={img1} /> 
// <Card heading={"Test Heading Prop 2"} description={"This is some text here..."} imgUrl={img2} />
// <Card heading={"Test Heading Prop 3"} description={"This is some text here..."} />
// </div>, document.querySelector('#root'));






// State in React JS
// let Room = () => {
//   const [isLit, setLit] = useState(true);
//   return (
//     <div className={`room ${isLit ? "lit" : "dark"}`}>
//       the room is { isLit ? 'lit' : 'dark'}
//       <br />
//       <button onClick={() => setLit(!isLit)}>
//         flip
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(<Room />, document.getElementById('root'));



// Bulb ON/OFF using State
// let Bulb = () => {
//   const [isOn, setOn] = useState(true);
//   return (
//     <div className="bulBox">
//       <img src={ isOn ? bulb1 : bulb2 }></img>
//       <br></br>
//       <button onClick={() => setOn(!isOn)}>{ (isOn) ? "On" : "Off" }</button>
//     </div>
//   );
// }

// ReactDOM.render(<Bulb />, document.getElementById('root'));


let Bulb = () => {
  const [isOn, setOn] = useState(true);
  const [roomTemp, setRoomTemp] = useState(22);

  const turnOff = () => {
    setOn(true);
  }

  const turnOn = () => {
    setOn(false);
  }

  const increaseTemp = () => {
    setRoomTemp( addTemp => addTemp + 1 );
  }

  const decreaseTemp = () => {
    setRoomTemp( minusTemp => minusTemp - 1 );
  }

  return (
    <div className="bulBox">
      <img width={300} src={ isOn ? bulb1 : bulb2 }></img>
      <br></br>
      <button onClick={turnOff}>Off</button>
      <button onClick={turnOn}>On</button>
      <h2>Room Temperature: {roomTemp}</h2>
      <button onClick={increaseTemp}>+</button>
      <button onClick={decreaseTemp}>-</button>
    </div>
  );
}

ReactDOM.render(<Bulb />, document.getElementById('root'));