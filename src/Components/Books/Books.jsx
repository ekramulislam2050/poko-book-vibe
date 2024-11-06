import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

 

const Books = () => {
    const [Books,setBooks]=useState([])
    // console.log(Books)
    useEffect(()=>{
          fetch("./Books.json")
        .then(res=>res.json())
        .then(res=>setBooks(res))
    },[])
    return (
        <div>
            <h1 className="py-3 text-3xl font-bold text-center">Books</h1>
           <div  className="grid gap-6 pb-4 lg:grid-cols-3 md:grid-cols-2">
           {
                Books.map((book)=><Book key={book.bookId} book={book}></Book>)
             }
           </div>
        </div>
    );
};

export default Books;