
import Vue from 'vue';
import * as VeeValidate from 'vee-validate';
import { required, digits, email, max, regex } from 'vee-validate/dist/rules';
VeeValidate.extend('required', {
    ...required,
    message: '{_field_} can not be empty'
});
VeeValidate.extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})'
});
VeeValidate.extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters'
});

VeeValidate.extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}'
});

VeeValidate.extend('email', {
    ...email,
    message: 'Email must be valid'
});
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

Vue.use(VeeValidate);
