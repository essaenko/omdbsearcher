import axios from "axios";
import {credintails} from "./credintails";
export default class API {
    constructor(){
        this.apiKey = credintails.apiKey;
        this.apiUrl = credintails.apiUrl;
    }
    getEndpoint(type, query){
        let payload = "";
        if(type === 'id'){
            payload = "i=" + query;
        }
        if(type === "search"){
            payload = "s=" + query;
        }
        if(type === 'prefetch'){
            payload = "s=" + query;
        }
        return this.apiUrl + '?apikey=' + this.apiKey + '&' + payload + "&plot=full";
    }
    getMovieById(id){
        return axios.get(this.getEndpoint('id', id));
    }
    getMovieByTitle(title){
        return axios.get(this.getEndpoint('search', title));
    }
    prefetchMovies(){
        return axios.get(this.getEndpoint("prefetch"));
    }
}