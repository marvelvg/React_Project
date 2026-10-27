import { useState } from "react";

export const useCounter = () => { // Custom React Hook MUst be declared as "use" + "Name" 
    const [count, setCount] = useState(0);

    // let count = 0;
    const CallerIncrement = () => {
        // alert("success");
        // count += 1; 
        let current = count;
        current++;
        setCount(current)
    }

    const CallerDecrement = () => {
        // alert("success");
        // count -= 1;X
        let current = count;
        current--;
        setCount(current)
    }

    return {
        count,
        CallerDecrement,
        CallerIncrement,

    };
}