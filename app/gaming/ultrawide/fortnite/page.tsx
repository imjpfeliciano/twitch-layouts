const FortniteLayoutPage = () => (
  <div className="aspect-video bg-blue-400 flex flex-col">
    <div className="w-full aspect-[21/9] bg-black flex flex-col items-center justify-center border-8 border-blue-400 text-white">
      Streaming video here
    </div>
    <div className="border-8 border-blue-400 flex flex-row items-center justify-center w-full h-1/4">
      <div className="h-full flex flex-row w-full flex-start">
        <div className="bg-red-500 h-full w-1/4 border-2 border-white flex items-center justify-center">camera here</div>
        <div className="bg-transparent h-full w-1/2 flex flex-col">
          <div className="w-full h-5/6">
            {/* notifications here */}
          </div>
          <div className="flex flex-row items-center justify-center gap-4 h-1/6 text-white">
            <span className="underline">twitch.tv/imjpfeliciano.dev</span>
            <span className="underline">youtube.com/imjpfeliciano</span>
          </div>
        </div>
        <div className="bg-black h-full w-1/4 text-white flex items-center justify-center border-2 border-white">chat here</div>
      </div>
    </div>
  </div>
);

export default FortniteLayoutPage;
