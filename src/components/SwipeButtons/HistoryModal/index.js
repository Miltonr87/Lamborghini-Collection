import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  ModalBackground,
  ModalWrapper,
  ModalImg,
  ModalContent,
  ModalText,
} from "./styles";
import Garage from "../../../assets/Images/garage.jpg";

const HistoryModal = ({ historyModal, setHistoryModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: historyModal ? 1 : 0,
    transform: historyModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setHistoryModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && historyModal) {
        setHistoryModal(false);
      }
    },
    [setHistoryModal, historyModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {historyModal ? (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={historyModal}>
              <ModalImg src={Garage} alt="Garage" />
              <ModalContent>
                <h1> Brand History </h1>
                <ModalText>
                  Automobili Lamborghini was officially established in 1963 in
                  Sant’Agata Bolognese, Italy. The company’s logo featured a
                  bull, a reference to Ferruccio Lamborghini’s zodiac sign,
                  ♉Taurus the bull. Various Lamborghini models had names related
                  to bulls or bullfighting.
                </ModalText>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
    </>
  );
};

export default HistoryModal;
