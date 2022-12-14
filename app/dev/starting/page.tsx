import ProgrammingImage from "public/assets/svg/programming-start.svg";

const DevStartingPage = () => {
  return (
    <div className="aspect-video bg-black flex flex-col align-center justify-center">
      <h1 className="text-white text-5xl font-bold p-8 h-1/4">
        <span className="mr-4">$ (imjpfeliciano.dev):</span>
        <span className="text-lime-400">Stream starting soon ...</span>
      </h1>

      <div className="flex flex-col items-center h-3/4">
        <ProgrammingImage />
      </div>
    </div>
  );
};

export default DevStartingPage;
