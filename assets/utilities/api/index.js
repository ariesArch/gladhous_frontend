import City from './City';
import Zone from './Zone';
import Role from './Role';
import ItemSubCategory from './ItemSubCategory';
export default {
  ...City,
  ...Zone,
  ...Role,
  ...ItemSubCategory
};
