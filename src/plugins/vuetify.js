import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.indigo.accent2,
        secondary: colors.indigo.accent1,
        accent: '#29E7CD',
        info: '#FC642D',
        error: '#b71c1c',
      }
    }
  }
});
