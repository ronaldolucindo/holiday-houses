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
          provider={item.provider}
          rating={item.rating}
          link={item.outboundLink || item.outboundLinkV2}
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
      provider: PropTypes.object,
      rating: PropTypes.object,
      outboundLink: PropTypes.string,
      outboundLinkV2: PropTypes.string
    })
  )
};

export default HouseCardList;
