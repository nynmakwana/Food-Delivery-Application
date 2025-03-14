
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../../components/FoodItem/FoodItem';


const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const { food_list } = useContext(StoreContext);
  
  
  const filteredItems = food_list.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='search-results' id='search-results'>
      <h2>Results for "{query}"</h2>
      <div className='food-display-list'>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <FoodItem 
              key={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
              id={item._id}
            />
          ))
        ) : (
          <p>No items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;