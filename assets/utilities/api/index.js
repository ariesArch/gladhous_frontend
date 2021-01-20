import City from './City';
import Zone from './Zone';
import Department from './Department';
import Staff from './Staff';
import Item from './Item';
export default {
  ...City,
  ...Zone,
  ...Department,
  ...Staff,
  ...Item
};
