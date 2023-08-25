import {ADD_MOVIE, ADD_USER, DELETE_MOVIE, GET_MOVIE,} from "./movie.types";



export const AddMovie = ( list ) => {
    return{
        type: GET_MOVIE,
        payload: list
    }
}

export const deleteTodo = ( ) => {
    return{
        type: DELETE_MOVIE
    }
}

// export const AddData = ( list ) => {
//     return{
//         type: ADD_MOVIE,
//         payload: list
//     }
// }


export const AddData = ( list ) => {
    return{
        type: ADD_USER,
        payload: list
    }
}





