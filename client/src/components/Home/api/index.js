import { useEffect, useState } from "react";
import instance from "src/config";

export const GetJson = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const Get = async (endpoint) => {
            const { data } = await instance.get(endpoint);
            setData(data)
        };
        setLoading(false);
        Get(endpoint);
    }, [])

    return { data, loading }
}
