import setJwtHeader from './setJwtHeader';

export default {
    getCitiesList: that => that.$axios.$get('cities'),
    createNewCity: (that, param) => that.$axios.post('cities', param, setJwtHeader)
};
