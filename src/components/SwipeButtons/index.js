import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import {
  Swipe,
  ButtonRepeat,
  ButtonClose,
  ButtonCar,
  ButtonDrive,
  ButtonSettings,
} from './styles';
import DriveModal from './DriveModal';
import HistoryModal from './HistoryModal';

const SwipeButtons = ({ toggleTheme }) => {
  const [driveModal, setDriveModal] = useState(false);
  const [historyModal, setHistoryModal] = useState(false);
  const openDriveModal = () => {
    setDriveModal((prev) => !prev);
  };
  const openHistoryModal = () => {
    setHistoryModal((prev) => !prev);
  };

  const lamborghiniPage = (e) => {
    e.preventDefault();
    window.location.href = 'https://www.lamborghini.com/en-en/3d';
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
        <ButtonClose onClick={lamborghiniPage} fontSize="large" />
      </IconButton>
      <IconButton>
        <HistoryModal
          historyModal={historyModal}
          setHistoryModal={setHistoryModal}
        />
        <ButtonCar onClick={openHistoryModal} fontSize="large" alt="History" />
      </IconButton>
      <IconButton>
        <DriveModal driveModal={driveModal} setDriveModal={setDriveModal} />
        <ButtonDrive onClick={openDriveModal} fontSize="large" alt="Drive" />
      </IconButton>
      <IconButton>
        <ButtonSettings onClick={toggleTheme} fontSize="large" />
      </IconButton>
    </Swipe>
  );
};

export default SwipeButtons;
