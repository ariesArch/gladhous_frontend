import setJwtHeader from './setJwtHeader';

export default {
  getItemsList: that => that.$axios.$get('items'),
  createNewItem: (that, param) => that.$axios.post('items', param, setJwtHeader)
};
