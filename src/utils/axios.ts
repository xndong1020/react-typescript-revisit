import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://registry.npmjs.org/-/v1/'
})

export default instance 