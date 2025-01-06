import React from 'react'
import { Checkbox, Header, Options, Subtask, SubtasksBox, SectionTitle, SubtaskTitle, Subtitle, Title, StatusSelect, StatusOption, StatusBox } from './viewtaskmodal.styles'
import OptionsIcon from '../../../assets/icon-vertical-ellipsis.svg'
import SelectIcon from '../../../assets/icon-chevron-down.svg'

const ViewTaskModal = () => {
    return (
        <>
            <div>
                <Header>
                    <Title>
                        Research pricing points of various competitors and trial different business models
                    </Title>

                    <Options src={OptionsIcon} alt="" />
                </Header>
            </div>

            <div>
                <Subtitle>
                    We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
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