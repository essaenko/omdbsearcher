import React, { Component } from "react";
import {TextField, Button, FormControl} from "@material-ui/core"
import {withRouter} from "react-router-dom";

class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            submited: false,
            initialPhrase: props.searchPhrase
        }
    }
    render(){
        return (<form onSubmit={(event) => {
                    event.preventDefault();
                    this.setState({...this.state, submited:true})
                    this.props.onSearchStart()
                }}>
                    <FormControl>
                        <TextField
                            id="outlined-name"
                            label="Movie title"
                            // value={this.state.name}
                            onChange={(event) => this.props.onSearchInput(event.target.value)}
                            margin="normal"
                            variant="outlined"
                            fullWidth={false}
                            defaultValue={this.state.initialPhrase}
                        />
                        <Button variant="outlined" color="primary" type="submit">
                            Search
                        </Button>
                    </FormControl>
                </form>);
    }
} 

export default SearchComponent;