export default function Welcome() {
  return (
    <main className="h-screen flex justify-center align-center">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="text-5xl md:text-7xl">
          Make language <br /> teaching{" "}
          <span className="text-orange-500 underline text-shadow-xs text-shadow-orange-200">
            easier!
          </span>
        </h1>
        <div className="flex justify-around text-lg">
          <button className="bg-purple-700 p-3 rounded-md hover:bg-purple-600">
            Why us?
          </button>
          <button className="bg-blue-700 p-3 rounded-md	hover:bg-blue-600 ">
            Get started &rarr;
          </button>
        </div>
      </div>
      <button className="fixed bg-purple-600 bottom-4 text-xl rounded-full h-10 w-10 animate-bounce hover:bg-purple-500">
        &darr;
      </button>
    </main>
  );
}
