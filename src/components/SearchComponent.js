import React, { Component } from "react";
import {TextField, Button, FormControl} from "@material-ui/core"

class SearchComponent extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <form onSubmit={(event) => this.props.onSearchStart(event)}>
                <FormControl>
                    <TextField
                        id="outlined-name"
                        label="Movie title"
                        // value={this.state.name}
                        onChange={(event) => this.props.onSearchInput(event.target.value)}
                        margin="normal"
                        variant="outlined"
                        fullWidth={false}
                    />
                    {/* <input type="text" onInput={(event) => this.props.onSearchInput(event.target.value)} /> */}
                    {/* <button type="submit">Search</button> */}
                    <Button variant="outlined" color="primary" type="submit">
                        Search
                    </Button>
                </FormControl>
            </form>
        );
    }
} 

export default SearchComponent;