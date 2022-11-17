import {useEffect, useState} from "react";


const useFetch = (url: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState();

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()
        const signal = controller.signal

        fetch(url, {signal})
            .then((res) => res.json())
            .then((json) => {
                setLoading(false)
                setData(json)
            })

        return () => controller.abort()
    }, [url])


    return [loading, data];
}

export default useFetch;