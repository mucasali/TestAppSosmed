import React from 'react';
import {runInAction, makeObservable, action, observable} from 'mobx';

import {dummyApi} from '../Services/Api';

const META = {
  page: 1,
  total: 0,
  limit: 10,
  loadMore: false,
};
const DEFAULT_STATE = {fetching: false, data: [], message: '', meta: META};

class UserStore {
  user = {...DEFAULT_STATE};
  users = [];

  constructor() {
    makeObservable(this, {
      user: observable,
      getUser: action.bound,
    });
  }

  async getUser(params = META) {
    try {
      if (this.user.fetching) {
        return false;
      }
      if (params.page === 1) {
        this.users = [];
      }
      console.log('UserStore.getUser ', params);
      runInAction(() => {
        this.user = {...this.user, fetching: true};
      });
      const response = await dummyApi.getUser(params);
      const {ok, data} = response;
      if (ok) {
        const meta = {
          page: data.page,
          nextPage: data.page + 1,
          total: data.total,
          limit: data.limit,
          loadMore: data.page * data.limit < data.total,
        };
        console.log('meta ', meta);
        const newData = params.page == 1 ? data.data : this.users.concat(data.data);
        runInAction(() => {
          this.user = {fetching: false, message: '', meta};
          this.users = newData;
        });
      } else {
        throw {messag: 'Request Failed'};
      }
    } catch (err) {
      console.log('ERROR UserStore.getUser ', err.message);
      runInAction(() => {
        this.user = {...this.user, fetching: false, message: err.message};
      });
    }
  }
}

// Instantiate the counter store.
const userStore = new UserStore();
// Create a React Context with the counter store instance.
export const UserStoreContext = React.createContext(userStore);
export const useUserStore = () => React.useContext(UserStoreContext);
