import React from 'react';
import {runInAction, makeObservable, action, observable} from 'mobx';

import {regionApi} from '../Services/Api';

const META = {
  page: 1,
  total: 0,
  limit: 10,
  loadMore: false,
};
const DEFAULT_STATE = {fetching: false, message: '', meta: META};

class RegionStore {
  provinceState = {...DEFAULT_STATE};
  provinces = [];

  cityState = {...DEFAULT_STATE};
  cities = [];

  districtState = {...DEFAULT_STATE};
  districts = [];

  villageState = {...DEFAULT_STATE};
  villages = [];

  constructor() {
    makeObservable(this, {
      provinceState: observable,
      cityState: observable,
      districtState: observable,
      villageState: observable,
      getProvince: action.bound,
      getCity: action.bound,
      getDistrict: action.bound,
      getVillage: action.bound,
    });
  }

  async getProvince(params = META) {
    try {
      if (this.provinceState.fetching) {
        return false;
      }
      if (params.page === 1) {
        this.users = [];
      }
      console.log('RegionStore.getRegion ', params);
      runInAction(() => {
        this.provinceState = {...this.provinceState, fetching: true};
      });
      const response = await regionApi.getProvince(params);
      const {ok, data} = response;
      if (ok) {
        runInAction(() => {
          this.provinces = data.provinsi;
          this.provinceState = {fetching: false, message: ''};
        });
      } else {
        throw {messag: 'Request Failed'};
      }
    } catch (err) {
      console.log('ERROR RegionStore.getRegion ', err.message);
      runInAction(() => {
        this.provinceState = {
          ...this.provinceState,
          fetching: false,
          message: err.message,
        };
      });
    }
  }

  async getCity(params = META) {
    try {
      if (this.cityState.fetching) {
        return false;
      }
      if (params.page === 1) {
        this.users = [];
      }
      console.log('RegionStore.getCity ', params);
      runInAction(() => {
        this.cityState = {...this.cityState, fetching: true};
      });
      const response = await regionApi.getCity(params);
      console.log('getCity.response ', response);
      const {ok, data} = response;
      if (ok) {
        runInAction(() => {
          this.cities = data.kota_kabupaten;
          this.cityState = {fetching: false, message: ''};
        });
      } else {
        throw {messag: 'Request Failed'};
      }
    } catch (err) {
      console.log('ERROR RegionStore.getCity ', err.message);
      runInAction(() => {
        this.cityState = {
          ...this.cityState,
          fetching: false,
          message: err.message,
        };
      });
    }
  }

  async getDistrict(params = META) {
    try {
      if (this.districtState.fetching) {
        return false;
      }
      if (params.page === 1) {
        this.users = [];
      }
      console.log('RegionStore.getDistrict ', params);
      runInAction(() => {
        this.districtState = {...this.districtState, fetching: true};
      });
      const response = await regionApi.getDistrict(params);
      const {ok, data} = response;
      if (ok) {
        runInAction(() => {
          this.districts = data.kecamatan;
          this.districtState = {fetching: false, message: ''};
        });
      } else {
        throw {messag: 'Request Failed'};
      }
    } catch (err) {
      console.log('ERROR RegionStore.getDistrict ', err.message);
      runInAction(() => {
        this.districtState = {
          ...this.districtState,
          fetching: false,
          message: err.message,
        };
      });
    }
  }

  async getVillage(params = META) {
    try {
      if (this.villageState.fetching) {
        return false;
      }
      if (params.page === 1) {
        this.users = [];
      }
      console.log('RegionStore.getVillage ', params);
      runInAction(() => {
        this.villageState = {...this.villageState, fetching: true};
      });
      const response = await regionApi.getVillage(params);
      const {ok, data} = response;
      if (ok) {
        runInAction(() => {
          this.villages = data.kelurahan;
          this.villageState = {fetching: false, message: ''};
        });
      } else {
        throw {messag: 'Request Failed'};
      }
    } catch (err) {
      console.log('ERROR RegionStore.getVillage ', err.message);
      runInAction(() => {
        this.villageState = {
          ...this.villageState,
          fetching: false,
          message: err.message,
        };
      });
    }
  }
}

// Instantiate the counter store.
const userStore = new RegionStore();
// Create a React Context with the counter store instance.
export const RegionStoreContext = React.createContext(userStore);
export const useRegionStore = () => React.useContext(RegionStoreContext);
