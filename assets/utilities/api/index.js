import City from './City';
import Zone from './Zone';
import Branch from './Branch';
import ItemCategory from './ItemCategory';
import ItemSubCategory from './ItemSubCategory';
export default {
  ...City,
  ...Zone,
  ...Branch,
  ...ItemCategory,
  ...ItemSubCategory
};
