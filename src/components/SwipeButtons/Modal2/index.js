import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  ModalBackground,
  ModalWrapper,
  ModalImg,
  ModalContent,
  ModalText,
  ModalButton,
  CloseModalButton,
} from "./styles";
import Garage from "../../../assets/Modal/driving.mp4";

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
              <ModalImg
                id="carAudio"
                autoPlay
                loop
                src={Garage}
                alt="garage"
                type="video/mp4"
              />
              <ModalContent>
                <h1> Are you ready?</h1>
                <ModalText> Test p tag</ModalText>
                <ModalButton onClick={setHalfVolume} type="button">
                  {" "}
                  -{" "}
                </ModalButton>
                <br />
                <ModalButton onClick={setFullVolume} type="button">
                  {" "}
                  +{" "}
                </ModalButton>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default FavoriteModal;
