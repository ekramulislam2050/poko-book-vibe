import { toast } from "react-toastify"

const storedToList =()=>{
     const getFromLS = localStorage.getItem("read-list")
     if(getFromLS){
        const readingList = JSON.parse(getFromLS)
        return readingList
     }else{
        return []
     }
}
const getId =(id)=>{
      
     const addToList = storedToList()
    if(addToList.includes(id)){
        console.log(id,"This read list id all ready exit")
    } 
    else{
        addToList.push(id)
        const addToListStr = JSON.stringify(addToList)
        localStorage.setItem('read-list',addToListStr)
         toast("added this book in your read list")
    }
}


const getWishListFromLs =()=>{
    const getWishListFromLS = localStorage.getItem("items")
    if(getWishListFromLS){
          const convertToJsObject = JSON.parse(getWishListFromLS)
          return convertToJsObject
    }
    else{
        return []
    }
}


 const setWishListInLS = (id) =>{
    const callGetWishListFromLs= getWishListFromLs() 
        if(callGetWishListFromLs.includes(id)){
               console.log(id,'This wish list id is all ready exit')
        }
        else{
              callGetWishListFromLs.push(id);

              localStorage.setItem('items',JSON.stringify(callGetWishListFromLs))


        }
 }


export {getId,setWishListInLS,storedToList}
