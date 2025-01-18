import React, { useEffect } from 'react'
import { Checkbox, Header, Options, Subtask, SubtasksBox, SectionTitle, SubtaskTitle, Subtitle, Title, StatusSelect, StatusOption, StatusBox } from './viewtaskmodal.styles'
import OptionsIcon from '../../../assets/icon-vertical-ellipsis.svg'
import SelectIcon from '../../../assets/icon-chevron-down.svg'

const ViewTaskModal = ({ task, subtasks, column }) => {
    useEffect(() => {
        console.log('>>> Subtasks Modal:', subtasks)
    }, [])

    return (
        <>
            <div>
                <Header>
                    <Title>
                        {task.task_name}
                    </Title>

                    <Options src={OptionsIcon} alt="" />
                </Header>
            </div>

            <div>
                <Subtitle>
                    {task.task_description}
                </Subtitle>
            </div>

            <div>
                <SectionTitle>
                    Substasks (0 of {subtasks.length})
                </SectionTitle>

                <SubtasksBox>
                    {subtasks.map((subtask, index) => (
                        <Subtask key={index}>
                            <Checkbox type="checkbox" />

                            <SubtaskTitle>
                                {subtask.subtask_name}
                            </SubtaskTitle>
                        </Subtask>
                    ))}
                </SubtasksBox>
            </div>

            <div>
                <SectionTitle>
                    Current Status
                </SectionTitle>

                <StatusBox>
                    <img src={SelectIcon} alt="" />

                    <StatusSelect>
                        <StatusOption>{column}</StatusOption>
                        <StatusOption>Todo</StatusOption>
                        <StatusOption>Doing</StatusOption>
                        <StatusOption>Done</StatusOption>
                    </StatusSelect>
                </StatusBox>
            </div>
        </>
    )
}

export default ViewTaskModal