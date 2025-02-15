import { useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

const Tictato = () => {
  console.log("length is:", data.length);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
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
  };
  const checkWin=()=>{
    if(data[0]===data[1] && data[1]===data[2]&&data[2]!==''){
      won(data)
    }else if(data[3]===data[4] && data[4]===data[5]&&data[5]!==''){
      won(data)
    }else if(data[6]===data[7] && data[7]===data[8]&&data[8]!==''){
      won(data)
    }
  }
  const won=(winner)=>{
    setLock(true)
  }

  return (
    <>
      <div className="container text-center h-[110%] w-screen">
        <div className="title mt-[8px] text-white text-[50px] flex justify-center items-center font-semibold">
          Tic Tac Toe Game in
          <span className="text-[#26ffcb] pl-[15px]"> React</span>
        </div>
        <div className="h-[365px] w-[380px] flex justify-center items-center mx-auto">
          <div className="row1">
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 0)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 1)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 2)}
            ></div>
          </div>
          <div className="row2">
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 3)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 4)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 5)}
            ></div>
          </div>
          <div className="row3">
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 6)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 7)}
            ></div>
            <div
              className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer text-6xl font-bold justify-center items-center text-slate-500"
              onClick={(e) => toggle(e, 8)}
            ></div>
          </div>
        </div>
        <button className=" w-[150px] h-[50px] border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-[23px] mt-[25px] mb-[25px] text-[#26ffcb]  ">
          Reset
        </button>
      </div>
    </>
  );
};

export default Tictato;
