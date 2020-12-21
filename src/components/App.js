import React from 'react';

import BookList from './BookList';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component{
    state={
        books:[],
        searchBook:""
    }

    /* async componentDidMount(){
        const adres="http://localhost:3002/books";
        const cevap=await fetch(adres);
        const veri=await cevap.json();
        this.setState({
            books:veri
        })
    } */

    async componentDidMount(){
        const response=await axios.get("http://localhost:3005/books");
        console.log(response);
        this.setState({
            books:response.data
        })
    }

  /*   deleteBook=(book)=>{
        const newBookList=this.state.books.filter(
            b=>b.id!==book.id
        )
        this.setState({
            books:newBookList
        })
        this.setState(state=>({
            books:newBookList
        }))
    } */

    //FETCH API
  /*   deleteBook=async (book)=>{

        const baseURL=`http://localhost:3005/books/${book.id}`

        await fetch(baseURL,{
            method:"DELETE"
        })

        const newBookList=this.state.books.filter(
            b=>b.id!==book.id
        )
   
        this.setState(state=>({
            books:newBookList
        }))
    } */

    //AXIOS API
    deleteBook=async (book)=>{

        await axios.delete(`http://localhost:3005/books/${book.id}`)

        const newBookList=this.state.books.filter(
            b=>b.id!==book.id
        )
   
        this.setState(state=>({
            books:newBookList
        }))
    }

    searchBook=(event)=>{
        this.setState({
            searchBook:event.target.value
        })
    }

    render(){

        let filteredBook=this.state.books.filter(
            (book)=>{
                return book.name.toLowerCase().indexOf(this.state.searchBook.toLowerCase())!==-1
            }
        )

        return(
            <div className="container mx-auto mt-5 mb-5">
                <SearchBar searchBookProp={this.searchBook}/>
                <div className="h-auto grid grid-rows-1 gap-4">
                
                        <BookList books={filteredBook} deleteBookProp={this.deleteBook}/>
              
                </div>
                
            </div>
        )
    }
}

export default App;