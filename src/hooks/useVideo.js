import { useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideo = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
  };

  return [videos, search]
};

export default useVideo;