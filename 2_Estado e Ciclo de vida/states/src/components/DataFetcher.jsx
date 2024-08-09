import { useEffect } from "react";
import { useState } from "react";

const DataFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData({ message: 'Sucess, we got the data!' })
        }, 2000)
    }, [])

    if (!data) {
        return <p>Loading ...</p>
    }
    return (
        <p>{data.message}</p>
    )
}

export default DataFetcher