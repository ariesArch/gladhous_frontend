
import setJwtHeader from './setJwtHeader';

export default {
    getBranchesList: that => that.$axios.$get('branches'),
    createNewBranch: (that, param) => that.$axios.post('branches', param, setJwtHeader)
};
