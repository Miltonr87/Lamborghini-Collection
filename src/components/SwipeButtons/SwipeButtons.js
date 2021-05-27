import styled from "styled-components";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/AttachMoney";
import StarRateIcon from "@material-ui/icons/LocalCarWash";
import FavoriteIcon from "@material-ui/icons/DoneAll";
import FlashOnIcon from "@material-ui/icons/EvStation";

export const Swipe = styled.div`
  position: fixed;
  bottom: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  

  .MuiIconButton-root {
    background-color: yellow;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.7) !important;
  }

  @media screen and (max-width: 760px) {
    bottom: 0;
    width: 100%;
  }
`;

export const ButtonRepeat = styled(ReplayIcon)`
  padding: 1vw !important;
  color: black!important;
`;

export const ButtonClose = styled(CloseIcon)`
  padding: 1vw !important;
  color: black !important;
`;

export const ButtonStar = styled(StarRateIcon)`
  padding: 1vw !important;
  color: black !important;
`;

export const ButtonFavorite = styled(FavoriteIcon)`
  padding: 1vw !important;
  color: black !important;
`;

export const ButtonFlash = styled(FlashOnIcon)`
  padding: 1vw !important;
  color: black !important;
`;

export const ModalButton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;
