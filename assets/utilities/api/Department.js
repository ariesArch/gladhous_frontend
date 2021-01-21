import setJwtHeader from './setJwtHeader';

export default {
  getDepartmentsList: that => that.$axios.$get('departments'),
  createNewDepartment: (that, param) => that.$axios.post('departments', param, setJwtHeader)
};
