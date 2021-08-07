import DummyApi from './DummyApi';
import RegionApi from './RegionApi';

const dummyApi = DummyApi('https://dummyapi.io/data/api/');
const regionApi = RegionApi('https://dev.farizdotid.com/api/daerahindonesia/');

export {dummyApi, regionApi};
