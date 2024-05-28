import { useState } from 'react';

const Counter = () => {
    const [val, setVal] = useState(0);
    const handleAdd = () => setVal((prev) => prev + 1);
    const handleMinus = () => setVal((prev) => prev - 1);
    return (
        <div className="flex gap-2">
            <button className="text-xl w-4 bg-yellow-200" onClick={handleAdd}>
                +
            </button>
            <input className="text-xl w-6 text-center" value={val} readOnly />
            <button className="text-xl w-4 bg-yellow-200" onClick={handleMinus}>
                -
            </button>
        </div>
    );
};

export default Counter;
