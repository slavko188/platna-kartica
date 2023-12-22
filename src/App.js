function App() {
  return (
    <div className="bg-body mt-0">
      <h1 className="text-center text-purple text-2xl py-[30px]">
        Payment App
      </h1>

      <div className="container mx-auto w-[400px] h-[700px] ">
        <div
          className="flex flex-col text-center mt-[100px]
         bg-akvacolor w-[400px] h-[500px] rounded-[20px] shadow-2xl shadow-cyan-500/70"
        >
          <div className="flex flex-col">
            <h4 className="text-[30px] mt-[35px]">PayPal / Kartica</h4>
            <span className="text-[100px] opacity-50 text-white md:font-bold">
              rata
            </span>
            <span className="text-[60px] text-pink md:font-bold">140e</span>
            <p>Placanje jedne rate</p>
            <div className="flex justify-center">
              <button className="bg-yellow rounded-full w-[150px] h-[50px] mt-[50px]">
                Detaljnije
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
