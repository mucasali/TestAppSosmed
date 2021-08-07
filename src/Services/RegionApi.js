import apisauce from 'apisauce';

export default (baseURL = '') => {
  const api = apisauce.create({
    baseURL,
    timeout: 10000,
  });
  const getProvince = param => api.get('/provinsi', param);
  const getCity = param => api.get('/kota', param);
  const getDistrict = param => api.get('/kecamatan', param);
  const getVillage = param => api.get('/kelurahan', param);

  return {
    api,
    getProvince,
    getCity,
    getDistrict,
    getVillage,
  };
};
