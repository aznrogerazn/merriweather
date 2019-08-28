export const state = () => ({
  token: '',
  username: '',
  user_id: 0,
  balance: 0,
  next_refresh: new Date,
});

export const mutations =  {
  setToken(state, _token) {
    state.token = _token;
    localStorage.setItem('__JWT', _token);
  },
  clearToken(state) {
    state.token = '';
  },
  setRefreshTime(state, timeout) {
    const now = new Date();
    state.next_refresh = new Date(now.setSeconds(now.getSeconds() + timeout));
    localStorage.setItem('__REFRESHTIME', Number(state.next_refresh));
  },
  setNextRefresh(state, time) {
    if (time instanceof Date) {
      state.next_refresh = time;
    } else {
      state.next_refresh = new Date(Number(time));
    }
    console.log('setting refresh time to ' + Number(state.next_refresh));
    localStorage.setItem('__REFRESHTIME', Number(state.next_refresh));
  },
  setUsername(state, _username) {
    state.username = _username;
    localStorage.setItem('__USERNAME', _username);
  },
  clearUsername(state) {
    state.username = '';
  },
  setUserId(state, _user_id) {
    state.user_id = _user_id;
    localStorage.setItem('__USER_ID', _user_id);
  },
  clearUserId(state) {
    state.user_id = 0;
  },
  logout(state) {
    state.token = '';
    localStorage.removeItem('__JWT');
    localStorage.removeItem('__USERNAME');
    localStorage.removeItem('__USER_ID');
  },
  setBalance(state, n) {
    state.balance = n;
  },
  clearBalance(state) {
    state.balance = 0;
  },
};

export const getters = {
  token: state => state.token,
  username: state => state.username,
  user_id: state => state.user_id,
  next_refresh: state => state.next_refresh,
  balance: state => state.balance,
};
