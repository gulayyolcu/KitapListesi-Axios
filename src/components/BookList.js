import React from 'react';

const BookList=(props)=>{
    return(
        <div className="grid lg:grid-cols-3 gap-x-16 sm:grid-cols-1 sm:mx-auto">
        
        {
            props.books.map((book)=>{
                return(
                   
                        <div className="py-6" key={book.id}>
                            <div className="flex max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
                                <div className="w-full bg-cover">
                                    <img src={book.imageURL} className="w-full h-full rounded-lg rounded-b-none" alt=".."/>
                                </div> 
                                <div className="w-full p-4">
                                <h1 className="text-gray-900 font-bold text-2xl">{book.name}</h1>
                                <p className="mt-2 text-gray-600 text-sm">{book.overview}</p>
                            
                                <div className="flex item-center justify-between mt-3">
                                    <h1><span class="mr-2 bg-blue-400 font-bold text-white p-2 rounded  leading-none flex items-center">{book.rating}</span></h1>
                                    <button onClick={(event)=>props.deleteBookProp(book)} className="px-3 py-2 bg-red-500 text-white text-xs font-bold rounded">Sil</button>
                                </div>
                                </div>
                            </div>
                        </div>
                   
                )
            })
        }


</div>
            
    )
}

export default BookList;