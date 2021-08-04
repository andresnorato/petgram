import {useState} from 'react';


export const useLocalStorage = (likekey, initialValue) => {
    const [storeValue, setValue] = useState(()=>{
      try {
        const item = window.localStorage.getItem(likekey)
        return item  != null ? JSON.parse(item) : initialValue 
      } catch(e){
        return initialValue
      }
    })
  
    const setLocalStorage = value => {
      try {
        window.localStorage.setItem(likekey, JSON.stringify(value))
        setValue(value)
      } catch(e) {
        console.log(e)
      }
    }
  
    return [storeValue, setLocalStorage]
  
  }
  
  