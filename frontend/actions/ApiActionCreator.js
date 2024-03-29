import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiActions';

const apiActionCreator = url => dispatch => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchSuccess(response.data.topalbums));
        console.log(response.data.topalbums.album[0].image[2]['#text']);
      })
      .catch(error => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;
