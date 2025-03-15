import { useState, useEffect } from 'react';

function useCounter() {
    // Obtener el valor almacenado en localStorage o iniciar en 0
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    // Actualizar localStorage cada vez que cambia el contador
    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    const DicreaseCount = () => {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    };

    const IncreaseCount = () => {
        setCount((count) => count + 1);
    };

    return { count, IncreaseCount, DicreaseCount };
}

export default useCounter;
