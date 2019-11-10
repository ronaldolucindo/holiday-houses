import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';

import './styles.css';

function HouseReview({ count, rating }) {
  const calculateRating = () => {
    return (rating * 5) / 100;
  };

  return (
    <div className="house-review-container">
      <Rating
        name="half-rating"
        value={calculateRating()}
        precision={0.5}
        readOnly
      />
      <span className="reviews-counter">{count} reviews</span>
    </div>
  );
}

HouseReview.propType = {
  rating: PropTypes.number,
  count: PropTypes.number
};

export default HouseReview;
