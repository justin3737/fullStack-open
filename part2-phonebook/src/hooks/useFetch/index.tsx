import { useState, useEffect } from 'react';

function useFetch<T = unknown>(url: string, initialData?: T) {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                setError(err);
            });
    }, []);

    return { data, error };
}
export default useFetch;
