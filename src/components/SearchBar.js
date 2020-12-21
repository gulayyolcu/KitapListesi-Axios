import React from 'react';

class SearchBar extends React.Component{
    handleSubmitForm=(event)=>{
        event.preventDefault();
    }
    render(){
        return(
            <div className="mt-5 md:col-span-3">
                <form onSubmit={this.handleSubmitForm}>
                    <input onChange={this.props.searchBookProp} type="text" className="p-4 border-solid border-2 border-indigo-100 shadow-xl flex-1 block w-full mx-auto rounded sm:text-lg" placeholder="Kitap ara.."/>
                </form>
            </div>
        )
    }
}

export default SearchBar;