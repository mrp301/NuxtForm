import Vue from 'vue';
import { isValidNumber } from 'libphonenumber-js';
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend,
} from "vee-validate";

import ja from 'vee-validate/dist/locale/ja.json';
import { required, email } from "vee-validate/dist/rules";

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

/* Rules */
extend("required", {
  ...required,
  message: (name) => {
    return `${name}は必須項目です`;
  },
});

extend('kana', {
  validate(value) {
    return value.match(/^[ァ-ヶー]*$/);
  },
  message: 'カタカナで入力してください',
});

extend('tel', {
  validate(value) {
    return isValidNumber(value, 'JP');
  },
  message: '電話番号の形式が不正です',
});

extend('email', {
  ...email,
  message: 'メールアドレスの形式が不正です',
});

/* Localize */
localize('ja', ja);
