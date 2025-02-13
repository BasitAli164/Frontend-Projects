const Tictato = () => {
  return (
    <>
      <div className="container text-center h-[110%] w-screen">
        <div className="title mt-[8px] text-white text-[50px] flex justify-center items-center font-semibold">
          Tic Tac Toe Game in
          <span className="text-[#26ffcb] pl-[15px]"> React</span>
        </div>
        <div className="h-[365px] w-[380px] flex justify-center items-center mx-auto">
          <div className="row1">
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
          </div>
          <div className="row2">
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
          </div>
          <div className="row3">
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
            <div className="flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-[#0f1b21] rounded-[12px] cursor-pointer"></div>
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
