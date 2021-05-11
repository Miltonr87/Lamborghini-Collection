import styled from "styled-components";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

export const Swipe = styled.div`
  position: fixed;
  bottom: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  .MuiIconButton-root {
    background-color: white;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
  }

  @media screen and (max-width: 760px) {
    bottom: 0;
    width: 100%;
  }
`;

export const ButtonRepeat = styled(ReplayIcon)`
  padding: 1vw !important;
  color: #f5b748 !important;
`;

export const ButtonClose = styled(CloseIcon)`
  padding: 1vw !important;
  color: #ec5e6f !important;
`;

export const ButtonStar = styled(StarRateIcon)`
  padding: 1vw !important;
  color: #62b4f9 !important;
`;

export const ButtonFavorite = styled(FavoriteIcon)`
  padding: 1vw !important;
  color: #76e2b3 !important;
`;

export const ButtonFlash = styled(FlashOnIcon)`
  padding: 1vw !important;
  color: #915dd1 !important;
`;
