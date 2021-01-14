import React from "react";

//Material UI for Buttons below:
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import "./SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
    <IconButton>
      <ReplayIcon className="swipeButtons__repeat" fontSize="large" />
    </IconButton>
    <IconButton>  
      <CloseIcon className="swipeButtons__close" fontSize="large" />
    </IconButton>
    <IconButton>  
      <StarRateIcon className="swipeButtons__star" fontSize="large" />
    </IconButton>
    <IconButton>  
      <FavoriteIcon className="swipeButtons__favorite" fontSize="large" />
    </IconButton>
    <IconButton>
      <FlashOnIcon className="swipeButtons__flash" fontSize="large" />
    </IconButton>
    </div>
  );
};

export default SwipeButtons;
