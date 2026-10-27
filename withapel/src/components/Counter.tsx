import { useCounter } from "../Hook/useCounter";


const Counter = () => {
    const { count, CallerDecrement, CallerIncrement } = useCounter();

    // this is virtual dom & rerendering
    return (
        <div className="border-3 border-dashed border-green-300 mt-5 ml-5 flex flex-col w-80 rounded-xl">
            <p className="text-4xl text-green-500 ml-3 ml-5 mr-5 justify-center items-center"> {count} </p>
            <div className="flex flex-row g-5">
                <button onClick={CallerIncrement} className="hover:animate-bounce transition duration-150 ease-in-out active:scale-115 active:bg-green-500 active:text-white border-2 m-3 border-solid border-green-500 p-3 rounded-xl text-green-500 "> Tambah </button>
                <button onClick={CallerDecrement} className="hover:animate-spin transition duration-150 ease-in-out active:scale-115 active:bg-green-500 active:text-white border-2 m-3 border-solid border-green-500 p-3 rounded-xl text-green-500 "> Kurang </button>
            </div>
        </div>
    );
}

export default Counter;