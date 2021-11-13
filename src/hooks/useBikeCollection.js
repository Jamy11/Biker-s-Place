import {useState,useEffect} from 'react'

const useBikeCollection = () => {
    const [bikeCollection, setBikeCollection] = useState([])
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/bike-collection/`)
        .then(res =>res.json())
        .then(result => setBikeCollection(result))
    }, [bikeCollection])

    return {
        bikeCollection,
        setBikeCollection
    }
}

export default useBikeCollection