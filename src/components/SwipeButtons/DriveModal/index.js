import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  ModalBackground,
  ModalWrapper,
  ModalMedia,
  ModalContent,
  ModalButton,
} from "./styles";
import Driving from "../../../assets/Media/driving.mp4";
import FullVolumeIcon from "./FullVolumeIcon";
import HalfVolumeIcon from "./HalfVolumeIcon";

const DriveModal = ({ driveModal, setDriveModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: driveModal ? 1 : 0,
    transform: driveModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setDriveModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && driveModal) {
        setDriveModal(false);
      }
    },
    [setDriveModal, driveModal]
  );

  const setHalfVolume = () => {
    let vid = document.getElementById("carAudio");
    vid.volume = 0.4;
  };

  const setFullVolume = () => {
    let vid = document.getElementById("carAudio");
    vid.volume = 1.0;
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {driveModal ? (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={driveModal}>
              <ModalMedia
                id="carAudio"
                autoPlay
                loop="true"
                src={Driving}
                alt="Driving"
                type="video/mp4"
              />
              <ModalContent>
                <h2> Engine's Roar </h2>
                <ModalButton onClick={setFullVolume} type="button">
                  <FullVolumeIcon />
                </ModalButton>
                <ModalButton onClick={setHalfVolume} type="button">
                  <HalfVolumeIcon />
                </ModalButton>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default DriveModal;
