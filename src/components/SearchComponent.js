import React, { Component } from "react";

class SearchComponent extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <form>
                <input type="text" onInput={(event) => this.props.onSearchInput(event.target.value)} />
                <button type="button" onClick={(event) => this.props.onSearchStart()}>Search</button>
            </form>
        );
    }
} 

export default SearchComponent;