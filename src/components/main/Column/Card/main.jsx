import React, { useState } from 'react'
import { CardBox, Subtitle, Title } from './card.styles'
import Modal from '../../../modals/main'
import ViewTaskModal from '../../../modals/viewtask/main'

const Card = () => {
    const [showTaskModal, setShowTaskModal] = useState(false)

    return (
        <>
            <CardBox onClick={() => setShowTaskModal(true)}>
                <Title>Build UI for onboarding flow</Title>
                <Subtitle>0 of 3 subtasks</Subtitle>
            </CardBox>

            {showTaskModal &&
                <Modal>
                    <ViewTaskModal />
                </Modal>
            }
        </>
    )
}

export default Card