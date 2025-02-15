import { useRef, useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

const Tictato = () => {
  console.log("length is:", data.length);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null);
  let boxArray=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<h1 }>X<h1/>`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<h1>O<h1/>`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin();
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner == "x") {
      titleRef.current.innerHTML = `Congratulation: <h1> X</h1>`;
    } else {
      titleRef.current.innerHTML = `Congratulation: <h1>O</h1>`;
    }
  };
  const reset=()=>{
    setLock(false)
     data = ["", "", "", "", "", "", "", "", ""];
     titleRef.current.innerHTML=" Tic Tac Toe Game in <span> React</span>"
     boxArray.map((item)=>{
      item.current.innerHTML=""
     })
  }

  return (
    <>
      <div className="container text-center h-[110%] w-screen">
        <div className="">
          <h1
            className="title mt-[8px] text-white text-[50px] flex justify-center items-center font-semibold"
            ref={titleRef}
          >
            {" "}
            Tic Tac Toe Game in
            <span className="text-[#26ffcb] pl-[15px]"> React</span>
          </h1>
        </div>
        <div className="h-[365px] w-[380px] flex justify-center items-center mx-auto">
          <div className="row1">
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box1}
              onClick={(e) => toggle(e, 0)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box2}
              onClick={(e) => toggle(e, 1)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box3}
              onClick={(e) => toggle(e, 2)}
            ></div>
          </div>
          <div className="row2">
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box4}
              onClick={(e) => toggle(e, 3)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box5}
              onClick={(e) => toggle(e, 4)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box6}
              onClick={(e) => toggle(e, 5)}
            ></div>
          </div>
          <div className="row3">
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box7}
              onClick={(e) => toggle(e, 6)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box8}
              onClick={(e) => toggle(e, 7)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500" ref={box9 }
              onClick={(e) => toggle(e, 8)}
            ></div>
          </div>
        </div>
        <button className=" w-[150px] h-[50px] border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-[23px] mt-[25px] mb-[25px] text-[#26ffcb]  " onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Tictato;
