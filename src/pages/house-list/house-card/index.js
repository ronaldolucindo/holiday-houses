import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageGallery from 'react-image-gallery';
import HouseIcon from '@material-ui/icons/House';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PeopleIcon from '@material-ui/icons/People';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import { formatCurrency, getFullLink } from 'utils';

import './styles.css';
import HouseReview from '../house-review';

function HouseCard(props) {
  const { details, photos, price, provider, rating, link } = props;

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
          showFullscreenButton={false}
        />
        <div className="card-text-container">
          <Typography gutterBottom variant="h5" component="h2">
            {details.name}
          </Typography>
          <div className="card-sumary">
            <HouseReview count={rating.count} rating={rating.value} />
            <Typography gutterBottom variant="h6" component="span">
              {formatCurrency(price.currency, price.daily)}
              <Typography variant="subtitle1" component="span">
                / night
              </Typography>
            </Typography>
          </div>
          <div className="house-group-container">
            <ul className="house-details">
              {details.apartmentTypeTitle && (
                <li>
                  <HouseIcon /> {details.apartmentTypeTitle}
                </li>
              )}
              {details.area && (
                <li>
                  <ZoomOutMapIcon /> {details.area.value} sq. ft.
                </li>
              )}
              {details.bedroomsCount && (
                <li>
                  <MeetingRoomIcon /> {details.bedroomsCount} bedrooms
                </li>
              )}
              {details.guestsCount && (
                <li>
                  <PeopleIcon /> {details.guestsCount} guests
                </li>
              )}
            </ul>
            <div className="cta-container">
              <img
                title={provider.shortName}
                alt={provider.shortName}
                src={provider.logoUrl}
                variant="square"
                className="house-provider"
              />
              <Button
                color="primary"
                variant="contained"
                href={getFullLink(link)}
                target="_blank"
                rel="noopener"
              >
                View Offer
              </Button>
            </div>
          </div>
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
  rating: PropTypes.object,
  link: PropTypes.string
};

export default HouseCard;
