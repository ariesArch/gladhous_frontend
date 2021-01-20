import setJwtHeader from './setJwtHeader';

export default {
  getStaffsList: that => that.$axios.$get('staffs'),
  createNewStaff: (that, param) => that.$axios.post('staffs', param, setJwtHeader)
};
