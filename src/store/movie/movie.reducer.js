import {ADD_MOVIE, DELETE_MOVIE, GET_MOVIE, ADD_USER} from "./movie.types";

const initialState = {
    Movie: [],
    UserData: []
}


export const movieReducer = (state = initialState, action) => {

    switch (action.type){

        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            }

        case DELETE_MOVIE:
            return {
                ...state,
                movie: []
            }

        case ADD_MOVIE:
            return {
                ...state,
                movie: action.payload
            }

        case ADD_USER:
                return {
                    ...state,
                    UserData: action.payload
                }
    

        default:
            return state
    }
}




