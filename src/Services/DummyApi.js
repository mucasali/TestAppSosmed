import apisauce from 'apisauce';

export default (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'app-id': '6101e9d79f0d1daf002c16a3',
    },
    timeout: 10000,
  });
  const getRoot = () => api.get('');
  const getUser = param => api.get('/user', param);

  return {
    api,
    getRoot,
    getUser,
  };
};
