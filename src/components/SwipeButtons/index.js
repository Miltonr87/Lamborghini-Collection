import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { SwipeSection, 
  ButtonRepeat,
  ButtonClose,
  ButtonStar,
  ButtonFavorite,
  ButtonFlash } from "./SwipeButtons";


const SwipeButtons = () => {
  return (
    <SwipeSection>
      <IconButton>
        <ButtonRepeat
          onClick={() => window.location.reload()}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <ButtonClose
          onClick={() => alert("💔 DISLIKE THE GIRL! REALLY? 💔")}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <ButtonStar
          onClick={() => alert("🌟 OUTSTANDING STAR 🌟")}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <ButtonFavorite
          onClick={() => alert("💗 SEXY GIRL! 💗")}
          fontSize="large"
        />
      </IconButton>
      <IconButton>
        <ButtonFlash
          onClick={() => alert("⚡ FLASHBACK! ⚡")}
          fontSize="large"
        />
      </IconButton>
    </SwipeSection>
  );
};

export default SwipeButtons;
