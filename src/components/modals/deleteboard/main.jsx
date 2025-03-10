// React
import React, { useEffect } from 'react'
import { useModal } from '../main'
import { useBoards } from '../../../contexts/BoardContext'

// Styles
import { Header, Title, Subtitle, ButtonsBox } from './deleteboardmodal.styles'

// Components

// UI Components
import DefaultButton from '../../../ui/buttons/defaultButton/main'

// Images | Icons

//
//
//
const DeleteBoardModal = ({ board }) => {
    // Variables
    const { closeModal } = useModal()

    const { refreshBoards } = useBoards()

    // Handle Submit
    const deleteBoard = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/boards/delete', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    board_id: board.board_id
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Board [Delete Board Modal]:', data);

            refreshBoards()
        } catch (error) {
            console.error('Erro ao deletar o board:', error);
        }

        closeModal(false)
    }

    const handleCloseModal = () => {
        closeModal(false)
    }

    //
    //
    //
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Delete this board?
                    </Title>
                </Header>
            </div>

            <div>
                <Subtitle>
                    Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.
                </Subtitle>
            </div>

            <div>
                <ButtonsBox>
                    <DefaultButton
                        label='Delete'
                        onClick={deleteBoard}
                        background='var(--red)'
                        fontWeight='bold'
                    />

                    <DefaultButton
                        label='Cancel'
                        onClick={handleCloseModal}
                        color='var(--main-purple)'
                        background='#e4ebfa'
                        fontWeight='bold'
                    />
                </ButtonsBox>
            </div>
        </>
    )
}

export default DeleteBoardModal