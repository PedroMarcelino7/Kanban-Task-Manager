import React from 'react'
import { Header, SectionTitle, Title, StatusSelect, StatusOption, StatusBox, InputBox, InputLabel, Input, TextArea } from './addtaskmodal.styles'
import OptionsIcon from '../../../assets/icon-vertical-ellipsis.svg'
import SelectIcon from '../../../assets/icon-chevron-down.svg'

const AddTaskModal = () => {
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Add New Task
                    </Title>
                </Header>
            </div>

            <div>
                <InputBox>
                    <InputLabel>Title</InputLabel>
                    <Input type='text' placeholder='e.g. Take coffee break' />
                </InputBox>

                <InputBox>
                    <InputLabel>Description</InputLabel>
                    <TextArea placeholder={`e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little.`} />
                </InputBox>
            </div>

            <div>
                <SectionTitle>
                    Status
                </SectionTitle>

                <StatusBox>
                    <img src={SelectIcon} alt="" />

                    <StatusSelect>
                        <StatusOption>Todo</StatusOption>
                        <StatusOption>Doing</StatusOption>
                        <StatusOption>Done</StatusOption>
                    </StatusSelect>
                </StatusBox>
            </div>

            <div>
                {/* BOTAO */}
            </div>
        </>
    )
}

export default AddTaskModal