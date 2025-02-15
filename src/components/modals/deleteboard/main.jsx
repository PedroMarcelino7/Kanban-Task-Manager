// React
import React, { useEffect } from 'react'

// Styles
import { Header, Title, AddSubtaskButton, CreateTaskButton, Subtitle, ButtonsBox } from './deleteboardmodal.styles'

//
//
//
const DeleteBoardModal = ({ board_id, closeModal }) => {
    // Handle Submit
    const deleteBoard = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/boards/delete', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    board_id: board_id
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Board [Delete Board Modal]:', data);
        } catch (error) {
            console.error('Erro ao deletar o board:', error);
        }
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
                    <AddSubtaskButton onClick={deleteBoard}>
                        Delete
                    </AddSubtaskButton>

                    <CreateTaskButton onClick={() => closeModal(false)}>
                        Cancel
                    </CreateTaskButton>
                </ButtonsBox>
            </div>
        </>
    )
}

export default DeleteBoardModal