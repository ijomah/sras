import { handleResponse, handleError } from './apiUtil';
import axios from 'axios';
// const API_URL = process.env.RN_APP_API_URL + '/api/v1/register';

import { API_URL } from './apiEnv';

// const path = '/api/v1/register';

export const getDocumentInfo = async (path) => {
    return await axios.get(API_URL + path)
        .then(handleResponse)
        .catch(handleError);
}

export const getImgBySlug = async (slug, path) => {
    return await axios.get(API_URL + path + "?slug=" + slug)
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

export const saveData = async (newData, path) => {
    return await axios({
        method: newData.id? 'PUT' : 'POST',  //POST for create, 
        url: API_URL + path + '/' + (newData.id || ''),
        //PUT to update when id already exists.
        // headers: {"content-type": "application/json"},
        data: {
            ...newData,
            newDataId: newData.id 
        }
    })
        .then(handleResponse)
        .catch(handleError);
}

export const deleteImg = async (path, imgId) => {
    return await axios(API_URL + path + '/' + imgId, {method: 'DELETE'})
        .then(handleResponse)
        .catch(handleError);
}