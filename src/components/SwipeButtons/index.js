import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  Swipe,
  ButtonRepeat,
  ButtonClose,
  ButtonStar,
  ButtonDrive,
  ButtonFlash,
} from "./SwipeButtons";
import DriveModal from './DriveModal';

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
      <DriveModal showModal={showModal} setShowModal={setShowModal} />
        <ButtonDrive
          onClick={openModal}
          fontSize="large"
          alt="Drive"
        />
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
