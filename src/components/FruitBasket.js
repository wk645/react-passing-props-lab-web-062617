import React  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
    <div className="fruit-basket">
      <Filter handleChange={props.handleChange} />
      <FilteredFruitList filter={props.selectedFilter} />
    </div>

// export default FruitBasket;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}


export default FruitBasket