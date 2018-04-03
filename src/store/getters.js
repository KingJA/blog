// export const currentCount = state => state.count;
export const currentCount = function (state) {
  return state.count;
};
export const msg = function (state) {
  return state.msg;
};

export const article = function (state) {
  return state.article;
};
