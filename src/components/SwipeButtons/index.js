import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  Swipe,
  ButtonRepeat,
  ButtonClose,
  ButtonStar,
  ButtonFavorite,
  ButtonFlash,
} from "./SwipeButtons";
import FavoriteModal from './FavoriteModal';

const SwipeButtons = () => {
  const [ showModal, setShowModal ] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev)
  };

  return (
    <Swipe>
      <IconButton>
        <ButtonRepeat
          onClick={() => window.location.reload()}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <ButtonClose
          onClick={() => alert("💰 BUY 💰")}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <ButtonStar
          onClick={() => alert("🚿 WASH 🚿")}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <ButtonFavorite
          onClick={openModal}
          fontSize="large"
        />
        <FavoriteModal showModal={showModal} setShowModal={setShowModal} />
      </IconButton>
      <IconButton>
        <ButtonFlash
          onClick={() => alert("⛽ FUEL ⛽")}
          fontSize="large"
        />
      </IconButton>
    </Swipe>
  );
};

export default SwipeButtons;
