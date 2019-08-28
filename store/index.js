/**
 * Global Vuex Store Definition File
 * Corresponding to the "Modules Mode" on official Nuxt Guide
 */
export const state = () => ({
  isMobile: false,
  bgImageUrl: '',
  showingNavBar: true,
  showingTabBar: true,
  showingTitleBar: true,
});

export const mutations = {
  clientIsDesktop: state => {
    state.isMobile = false;
  },
  clientIsMobile: state => {
    state.isMobile = true;
  },
  showNavBar: state => {
    state.showingNavBar = true;
  },
  hideNavBar: state => {
    state.showingNavBar = false;
  },
  showTabBar: state => {
    state.showingTabBar = true;
  },
  hideTabBar: state => {
    state.showingTabBar = false;
  },
  showTitleBar: state => {
    state.showingTitleBar = true;
  },
  hideTitleBar: state => {
    state.showingTitleBar = false;
  },
};

export const actions = {
  detectDevice: ({ commit, state }) => {
    const userAgent = typeof (navigator) === 'undefined' ? state.userAgent : navigator.userAgent;
    const _isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (_isMobile) {
      commit('clientIsMobile');
    } else {
      commit('clientIsDesktop');
    }
  }
};

export const getters = {
  isMobile: state => state.isMobile,
  showingNavBar: state => state.showingNavBar,
  showingTabBar: state => state.showingTabBar,
  showingTitleBar: state => state.showingTitleBar,
};
