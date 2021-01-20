import setJwtHeader from './setJwtHeader';

export default {
  getRolesList: that => that.$axios.$get('roles'),
  createNewRole: (that, param) => that.$axios.post('roles', param, setJwtHeader)
};
