import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    // console.log(book)
    const { bookName, author, image, tags,bookId } = book
    return (
        <Link to={`/books/${bookId}`}>
             <div className="flex p-6 shadow-xl card bg-base-100 w-96">
            <figure className='py-8 bg-gray-200'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    {
                        tags.map((tag,index) => <button key={index} className="text-green-400 bg-green-100 btn btn-xs">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{author}</p>
                <div className='border border-dashed border-top-2'></div>
                <div className="justify-end card-actions">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-xl'>Rating</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="bg-orange-400 mask mask-star-2"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                        <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                        <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
                    </div>
                </div>
            </div>
        </div>
        
        </Link>
    );
};

export default Book;