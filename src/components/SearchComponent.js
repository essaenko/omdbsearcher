import React, { Component } from "react";

class SearchComponent extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <form onSubmit={(event) => this.props.onSearchStart(event)}>
                <input type="text" onInput={(event) => this.props.onSearchInput(event.target.value)} />
                <button type="submit">Search</button>
            </form>
        );
    }
} 

export default SearchComponent;