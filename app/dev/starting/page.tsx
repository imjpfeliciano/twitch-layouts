import ProgrammingImage from "public/assets/svg/programming-start.svg";

const DevStartingPage = () => {
  return (
    <div className="aspect-video bg-black flex flex-col align-center justify-center">
      <h1 className="text-white font-bold p-8 h-1/4 flex flex-row gap-4 items-center justify-center">
        <span className="">$ (imjpfeliciano.dev):</span>
        <span className="text-lime-400">Stream starting soon ...</span>
      </h1>

      <div className="flex flex-col items-center justify-center h-3/4">
        <div className="w-1/2">

        <ProgrammingImage className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default DevStartingPage;
