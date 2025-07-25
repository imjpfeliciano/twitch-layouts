import Image from "next/image";
// images obtained from https://undraw.co/illustrations
// image color: #A4FF63

const DevEndingPage = () => {
  return (
    <div className="aspect-video bg-black flex flex-col align-center justify-center">
      <h1 className="text-white text-5xl font-bold p-8 h-1/4">
        <span className="mr-4">$ (imjpfeliciano.dev):</span>
        <span className="text-lime-400">Stream ending soon ...</span>
      </h1>

      <div className="flex flex-col items-center h-3/4">
        <Image src="/assets/svg/programming-ending.svg" alt="Programming Ending" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default DevEndingPage;
