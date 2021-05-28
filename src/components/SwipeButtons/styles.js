import styled from "styled-components";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/AttachMoney";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HearingIcon from '@material-ui/icons/Hearing';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

export const Swipe = styled.div`
  position: fixed;
  bottom: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  

  .MuiIconButton-root {
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 10px 53px 0px ${({ theme }) => theme.text} !important;
  }

  @media screen and (max-width: 760px) {
    bottom: 0;
    width: 100%;
  }
`;

export const ButtonRepeat = styled(ReplayIcon)`
  padding: 1vw !important;
  color: ${({ theme }) => theme.text};
`;

export const ButtonClose = styled(CloseIcon)`
  padding: 1vw !important;
  color: ${({ theme }) => theme.text};
`;

export const ButtonCar = styled(DriveEtaIcon)`
  padding: 1vw !important;
  color: ${({ theme }) => theme.text};
`;

export const ButtonDrive = styled(HearingIcon)`
  padding: 1vw !important;
  color: ${({ theme }) => theme.text};
`;

export const ButtonSettings = styled(SettingsRemoteIcon)`
  padding: 1vw !important;
  color: ${({ theme }) => theme.text};
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
