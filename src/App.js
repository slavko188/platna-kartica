import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className=" bg-yellow flex flex-row">
      <div className="container mx-auto w-[400px] h-[700px] ">
        <div
          className="flex flex-col text-center mt-[50px]
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
              <button
                onClick={() => {
                  navigate("uplata");
                }}
                type="submit"
                className="bg-yellow rounded-full w-[150px] h-[50px] mt-[50px]"
              >
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
