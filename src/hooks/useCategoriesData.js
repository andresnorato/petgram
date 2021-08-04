import { useState, useEffect } from "react";


export const useCategoriesData = () => {
    
    const [loading, setLoading] = useState(false)    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        setLoading(true)
        window.fetch('https://petgram-server-45d62f6we-andresnorato.vercel.app/categories')
        .then(res => res.json())
        .then(response => {
            setCategories(response)
            setLoading(false)
        });    
    },[]);
    
    return {categories , loading}
}