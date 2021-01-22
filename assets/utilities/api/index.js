import City from './City';
import Zone from './Zone';
import Department from './Department';
import Staff from './Staff';
import Item from './Item';
import Branch from './Branch';
import ItemCategory from './ItemCategory';
import ItemSubCategory from './ItemSubCategory';
import Role from './Role';
export default {
  ...City,
  ...Zone,
  ...Department,
  ...Staff,
  ...Item,
  ...Branch,
  ...ItemCategory,
  ...Role,
  ...ItemSubCategory
};
