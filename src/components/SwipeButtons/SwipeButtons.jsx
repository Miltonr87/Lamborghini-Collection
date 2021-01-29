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
      <ReplayIcon className="swipeButtons__repeat" onClick={() => window.location.reload() } fontSize="large" />
    </IconButton>
    <IconButton>  
      <CloseIcon className="swipeButtons__close" onClick={() => alert('💔 DISLIKE THE GIRL! REALLY? 💔')} fontSize="large" />
    </IconButton>
    <IconButton>  
      <StarRateIcon className="swipeButtons__star" onClick={() => alert('🌟 OUTSTANDING STAR 🌟')} fontSize="large" />
    </IconButton>
    <IconButton>  
      <FavoriteIcon className="swipeButtons__favorite" onClick={() => alert('💗 SEXY GIRL! 💗')} fontSize="large" />
    </IconButton>
    <IconButton>
      <FlashOnIcon className="swipeButtons__flash" onClick={() => alert('⚡ FLASHBACK! ⚡')} fontSize="large" />
    </IconButton>
    </div>
  );
};

export default SwipeButtons;
