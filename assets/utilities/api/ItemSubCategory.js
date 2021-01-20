import setJwtHeader from './setJwtHeader';

export default {
  getItemSubCategoriesList: that => that.$axios.$get('itemsubcategories'),
  createNewItemSubCategory: (that, param) => that.$axios.post('itemsubcategories', param, setJwtHeader)
};
