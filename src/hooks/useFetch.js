import {useCallback, useState} from "react"
import axios from 'axios'

export const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const doFetch = useCallback(async (url, method, body = null) => {
        setLoading(true)
        try {
            const response = await axios({url, method, body})
            setLoading(false)
            return response.data
        } catch (e) {
            setError(e)
            setLoading(false)
        }
    })

    return {loading, error, doFetch}
}
