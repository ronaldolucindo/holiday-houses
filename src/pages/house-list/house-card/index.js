import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageGallery from 'react-image-gallery';

import './styles.css';

function HouseCard(props) {
  const { details, photos, price, rating } = props;

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
          showBullets={true}
          showFullscreenButton={false}
        />
        <div className="card-text-container">
          <Typography gutterBottom variant="h5" component="h2">
            {details.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

HouseCard.propType = {
  id: PropTypes.number,
  details: PropTypes.object,
  photos: PropTypes.array,
  price: PropTypes.object,
  rating: PropTypes.object
};

export default HouseCard;
