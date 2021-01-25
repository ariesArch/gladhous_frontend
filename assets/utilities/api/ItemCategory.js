
import setJwtHeader from './setJwtHeader';

export default {
    getItemCategoriesList: that => that.$axios.$get('itemcategories'),
    createNewItemCategory: (that, param) => that.$axios.post('itemcategories', param, setJwtHeader)
};
