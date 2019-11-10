import React from 'react';
import PropTypes from 'prop-types';
import HouseCard from '../house-card';

import './styles.css';

function HouseCardList({ houses }) {
  return (
    <div className="house-card-list-container">
      {(houses || []).map(item => (
        <HouseCard
          key={item.id}
          details={item.details}
          photos={item.photos}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

HouseCardList.propType = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      details: PropTypes.object,
      photos: PropTypes.array,
      price: PropTypes.object,
      rating: PropTypes.object
    })
  )
};

export default HouseCardList;
