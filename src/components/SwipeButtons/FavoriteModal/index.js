import React, { useState } from 'react';
import { 
    ModalBackground, 
    ModalWrapper, 
    ModalImg, 
    ModalContent, 
    ModalText, 
    ModalButton, 
    CloseModalButton } from './styles';
import Garage from '../../../assets/Modal/garage.jpeg'; 

const FavoriteModal = ({ showModal, setShowModal }) => {
    return (
        <>
        {showModal ? (
            <ModalBackground>
                <ModalWrapper showModal={showModal}>
                    <ModalImg 
                        src={Garage} 
                        alt='garage' />
                    <ModalContent>
                        <h1> Are you ready?</h1>
                        <ModalText> Test p tag</ModalText>
                        <ModalButton> Button </ModalButton>
                    </ModalContent>
                    <CloseModalButton 
                        aria-label="Close modal" 
                        onClick={() => setShowModal(prev => !prev)} />
                </ModalWrapper>
            </ModalBackground>
        ) : null }
        </>
    )
};

export default FavoriteModal;