import React from 'react'
import { Checkbox, Header, Options, Subtask, SubtasksBox, SectionTitle, SubtaskTitle, Subtitle, Title, StatusSelect, StatusOption, StatusBox } from './viewtaskmodal.styles'
import OptionsIcon from '../../../assets/icon-vertical-ellipsis.svg'
import SelectIcon from '../../../assets/icon-chevron-down.svg'

const ViewTaskModal = ({ task }) => {
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
                    Substasks (2 of 3)
                </SectionTitle>

                <SubtasksBox>
                    <Subtask>
                        <Checkbox type="checkbox" />

                        <SubtaskTitle>
                            Research competitor pricing and business models
                        </SubtaskTitle>
                    </Subtask>
                    <Subtask>
                        <Checkbox type="checkbox" />

                        <SubtaskTitle>
                            Outline a business model that works for our solution
                        </SubtaskTitle>
                    </Subtask>
                    <Subtask>
                        <Checkbox type="checkbox" />

                        <SubtaskTitle>
                            Talk to potential customers about our proposed solution and ask for fair price expectancy
                        </SubtaskTitle>
                    </Subtask>
                </SubtasksBox>
            </div>

            <div>
                <SectionTitle>
                    Current Status
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
        </>
    )
}

export default ViewTaskModal