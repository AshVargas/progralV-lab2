import { useState } from 'react';
function useCounter() {

    const [count, setCount] = useState(0)

    const DicreaseCount = () => {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    }

    const IncreaseCount = () => {
        setCount((count) => count + 1);
    }
    return { count, IncreaseCount, DicreaseCount }
}


export default useCounter;