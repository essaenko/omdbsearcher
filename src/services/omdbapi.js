import axios from "axios";
export default class API {
    constructor(){
        this.apiKey = "b9802b79";
        this.apiUrl = "http://www.omdbapi.com/";
    }
    getEndpoint(type, query){
        let payload = "";
        if(type === 'id'){
            payload = "i=" + query;
        }
        if(type === "search"){
            payload = "t=" + query;
        }
        return this.apiUrl + '?apikey=' + this.apiKey + '&' + payload + "&plot=full";
    }
    getMovieById(id){
        return axios.get(this.getEndpoint('id', id));
    }
    getMovieByTitle(title){
        return axios.get(this.getEndpoint('search', title));
    }
}