import Image from "next/image";

const DevStartingPage = () => {
  return (
    <div className="aspect-video bg-black flex flex-col align-center justify-center">
      <h1 className="text-white font-bold p-8 h-1/4 flex flex-row gap-4 items-center justify-center">
        <span className="">$ (imjpfeliciano.dev):</span>
        <span className="text-lime-400">Stream starting soon ...</span>
      </h1>

      <div className="flex flex-col items-center justify-center h-3/4">
        <div className="w-1/2">
          <Image src="/assets/svg/programming-start.svg" alt="Programming Start" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default DevStartingPage;
