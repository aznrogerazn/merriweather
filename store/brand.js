/* Initialise Default Values Here */
let defaultBrandName = '';
let defaultMarqueeContent = '';
switch (process.env.DENV) {
  default:
    //
    defaultBrandName = 'MERRIWEATHER';
    defaultMarqueeContent = '親愛的會員您好，建議您使用最新版 Google Chrome 開啟本平台。會員中心提供支付與銀行卡綁定功能，若有任何使用上的問題、請與我們的客服人員聯絡';
}

export const state = () => ({
  name: defaultBrandName,
  marqueeContent: defaultMarqueeContent,
});

export const mutations =  {
  setName(state, _name) {
    state.name = _name;
  },
  clearName(state) {
    state.name = defaultBrandName;
  },
  setMarqueeContent(state, _content) {
    state.marqueeContent = _content;
  },
  clearMarqueeContent(state) {
    state.marqueeContent = defaultMarqueeContent;
  },
};

export const getters = {
  name: state => state.name,
  marqueeContent: state => state.marqueeContent,
};
