import City from './City';
import Zone from './Zone';
import Department from './Department';
import Staff from './Staff';
import Item from './Item';
import Branch from './Branch';
import ItemCategory from './ItemCategory';
export default {
  ...City,
  ...Zone,
  ...Department,
  ...Staff,
  ...Item,
  ...Branch,
  ...ItemCategory
};
