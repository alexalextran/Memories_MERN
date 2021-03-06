import * as api from '../api';

import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {

    try{
        dispatch({type: "LOADING"})
        const {data} = await api.fetchPosts();

        dispatch({type: FETCH_ALL, payload: data})
        dispatch({type: "NOTLOADING"})
    } catch(error){
        console.log(error)
    }
  

}

export const createPost = (post) => async (dispatch) => {
    try{
        dispatch({type: "LOADING"})
        const {data} = await api.createPost(post)
        dispatch({type: CREATE, payload: data})
        dispatch({type: "NOTLOADING"})
    } catch (error){

    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try{
        const { data } = await api.updatePost(id, post)

        dispatch({type: UPDATE, payload: data})
    } catch (error) {
            console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id)

        dispatch({ type: DELETE, payload: id})
    } catch(error){
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)

        dispatch({type: UPDATE, payload: data})

    } catch (error) {
       console.log(error) 
    }

}