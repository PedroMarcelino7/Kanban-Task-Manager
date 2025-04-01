import React, { useState } from 'react';

import MessageIcon from '../../../assets/chat-left-dots.svg';
import { Box, Container, Icon } from './defaultfloatingbutton.styles';
import Modal from '../../../components/modals/main'
import SendMessageModal from '../../../components/modals/sendmessage/main';

const DefaultFloatingButton = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Container>
                <Box onClick={() => setShowModal(true)}>
                    <Icon src={MessageIcon} alt="Chat Icon" />
                </Box>
            </Container>

            {showModal &&
                <Modal closeModal={setShowModal}>
                    <SendMessageModal />
                </Modal>
            }
        </>
    );
};

export default DefaultFloatingButton;
