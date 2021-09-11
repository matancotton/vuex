export default {
  loginAction(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logoutAction(context) {
    context.commit('setAuth', { isAuth: false });
  }
};
