import { handleResponse, handleError } from './apiUtil';
import axios from 'axios';
// const API_URL = process.env.RN_APP_API_URL + '/api/v1/register';

import { API_URL } from './apiEnv';

// const path = '/api/v1/register';

export const getDocumentInfo = async (url) => {
    return await axios(url)
        .then(handleResponse)
        .catch(handleError);
}

export const getImgBySlug = async (slug) => {
    return await axios(API_URL + "?slug=" + slug)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok.');
            return response.json().then(img => {
                if (img.length !== 1) throw new Error('Course not found: '+slug);
                return img[0];  // should only find one course for a given slug,
                //so return it
            })
        })
        .catch(handleError);
}

export const saveData = async (newUser) => {
    return await axios(API_URL + (newUser.id || ''), {
        method: newUser.id? 'PUT' : 'POST',  //POST for create, 
        //PUT to update when id already exists.
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            ...newUser,
            newUserId: newUser.id 
        })
    })
        .then(handleResponse)
        .catch(handleError);
}

export const deleteImg = async (imgId) => {
    return await axios(API_URL + imgId, {method: 'DELETE'})
        .then(handleResponse)
        .catch(handleError);
}