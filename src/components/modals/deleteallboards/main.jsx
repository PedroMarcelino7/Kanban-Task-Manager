// React
import React from 'react'
import { useModal } from '../main'
import { useBoards } from '../../../contexts/BoardContext'
import { useToast } from '../../../contexts/ToastContext'

// Styles
import { Header, Title, Subtitle, ButtonsBox } from './deleteallboardsmodal.styles'

// Components

// UI Components
import DefaultButton from '../../../ui/buttons/defaultButton/main'

// Images | Icons

//
//
//
const DeleteAllBoardsModal = () => {
    // Variables
    const { closeModal } = useModal()

    const { showToast } = useToast()

    const { refreshBoards } = useBoards()

    // Handle Submit
    const deleteAllBoards = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/boards/delete/all', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            const data = await response.json();
            console.log('>>> Resposta Board [Delete Board Modal]:', data);

            refreshBoards()
        } catch (error) {
            console.error('Erro ao deletar o board:', error);
        }

        showToast({ type: "timed", message: "All Boards successfully deleted!", status: "success" })
        closeModal()
    }

    //
    //
    //
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Delete all boards?
                    </Title>
                </Header>
            </div>

            <div>
                <Subtitle>
                    Are you sure you want to delete ALL your boards? This action will remove all boards, columns and tasks and cannot be reversed.
                </Subtitle>
            </div>

            <div>
                <ButtonsBox>
                    <DefaultButton
                        label='Delete'
                        onClick={deleteAllBoards}
                        background='var(--red)'
                        fontWeight='bold'
                    />

                    <DefaultButton
                        label='Cancel'
                        onClick={() => closeModal()}
                        color='var(--main-purple)'
                        background='#e4ebfa'
                        fontWeight='bold'
                    />
                </ButtonsBox>
            </div>
        </>
    )
}

export default DeleteAllBoardsModal