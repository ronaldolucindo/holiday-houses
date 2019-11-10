import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageGallery from 'react-image-gallery';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { formatCurrency } from 'utils';

import './styles.css';
import HouseReview from '../house-review';

function HouseCard(props) {
  const { details, photos, price, provider, rating } = props;

  const images = photos.map(item => ({
    thumbnail: item.t,
    original: item.m || item.l,
    originalAlt: details.name,
    originalClass: 'card-image'
  }));

  return (
    <Card className="house-card">
      <CardContent className="card-contend">
        <ImageGallery
          items={images}
          lazyLoad={true}
          showThumbnails={false}
          showPlayButton={false}
          showIndex={true}
          //   showBullets={true}
          showFullscreenButton={false}
        />
        <div className="card-text-container">
          <Typography gutterBottom variant="h5" component="h2">
            {details.name}
          </Typography>
          <div className="card-sumary">
            {details.area && <span>{details.area.value}m² • </span>}
            {details.bedroomsCount && (
              <span>{details.bedroomsCount} bedrooms • </span>
            )}
            {details.guestsCount && (
              <span>{details.guestsCount} guests • </span>
            )}
            <HouseReview count={rating.count} rating={rating.value} />
          </div>
          <Chip
            className="card-chip"
            color="primary"
            label={details.apartmentTypeTitle}
            variant="outlined"
          />
          <img
            alt={provider.shortName}
            src={provider.logoUrl}
            variant="square"
            className="house-provider"
          />
          <p>{formatCurrency(price.currency, price.daily)}</p>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </div>
      </CardContent>
    </Card>
  );
}

HouseCard.propType = {
  id: PropTypes.number,
  details: PropTypes.object,
  photos: PropTypes.array,
  price: PropTypes.object,
  provider: PropTypes.object,
  rating: PropTypes.object
};

export default HouseCard;
