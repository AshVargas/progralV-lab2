import React from 'react';
import useCounter from '../hooks/useCounter';

function CardComponent() {
    const { count, IncreaseCount, DicreaseCount } = useCounter();

    return (
        <div className="card"> 
            <h2>{count}</h2>
            <button className='btn' onClick={IncreaseCount}>➕</button>
            <button className='btn' onClick={DicreaseCount}>➖</button>
            {count === 6 && <p>Mi número favorito es el 6</p>}
        </div>
    );
}

export default CardComponent;
