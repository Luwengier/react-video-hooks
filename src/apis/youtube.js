import axios from 'axios';

const KEY = 'AIzaSyBVulY7Z1WJLlnvlPmE6c65qHC2fEvZ8OU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY
  }
});