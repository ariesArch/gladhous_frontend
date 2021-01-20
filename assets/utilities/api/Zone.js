import setJwtHeader from './setJwtHeader';
export default {
  getZonesList: that => that.$axios.$get('zones'),
  createNewZone: (that, param) => that.$axios.post('zones', param, setJwtHeader)
};
