import { useLoaderData, useParams } from "react-router-dom";
import  {getId, setWishListInLS }   from "../../addToListBD/addToListBD";

  const handleRead =(id)=>{
    getId(id)
    
  }

  const handleWishList = (id)=>{
        setWishListInLS(id)
    
  }


const BookDetail = () => {
    const { bookId } = useParams()
    const data = useLoaderData()
    //  console.log(data)
    const book = data.find(bookData => bookData.bookId === parseInt(bookId))
    const { image,author,bookName,review,category,bookId:currentId } = book;
   
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}!</h1>
                    <h2>{category}</h2>
                    <p className="py-6">
                       {review}
                    </p>
                    <button className="btn btn-primary" onClick={()=>handleRead(currentId)}>Mark as Read</button>
                    <button className="ml-4 btn btn-primary" onClick={()=>handleWishList(currentId)}>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;