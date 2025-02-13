const Tictato = () => {
  return (
    <>
      <div className="container text-center ">
        <div className="title mt-[50px] text-white text-[60px] flex justify-center items-center font-semibold">
          Tic Tac Toe Game in
          <span className="text-[#26ffcb] pl-[15px]"> React</span>
        </div>
        <div className="board">
          <div className="row1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
        <button className="w-[250px] h-[75px] border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-[26px] mt-[25px] mb-[50px] text-[#26ffcb]  ">
          Reset
        </button>
      </div>
    </>
  );
};

export default Tictato;
