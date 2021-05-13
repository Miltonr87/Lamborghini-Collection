import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  Swipe,
  ButtonRepeat,
  ButtonClose,
  ButtonStar,
  ButtonFavorite,
  ButtonFlash,
} from "./SwipeButtons";

const SwipeButtons = () => {
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
          onClick={() => alert("✅ FAVORITE ✅")}
          fontSize="large"
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
