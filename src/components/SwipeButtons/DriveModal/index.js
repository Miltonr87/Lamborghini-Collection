import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  ModalBackground,
  ModalWrapper,
  ModalVid,
  ModalContent,
  ModalButton,
} from "./styles";
import Driving from "../../../assets/Modal/driving.mp4";
import FullVolumeIcon from "./FullVolumeIcon";
import HalfVolumeIcon from "./HalfVolumeIcon";

const FavoriteModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
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
      {showModal ? (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalVid
                id="carAudio"
                autoPlay
                loop
                src={Driving}
                alt="Driving"
                type="video/mp4"
              />
              <ModalContent>
                <h1> Are you ready?</h1>
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

export default FavoriteModal;
