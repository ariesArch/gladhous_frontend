import City from './City';
import Zone from './Zone';
import Branch from './Branch';
import ItemCategory from './ItemCategory';
export default {
  ...City,
  ...Zone,
  ...Branch,
  ...ItemCategory
};
