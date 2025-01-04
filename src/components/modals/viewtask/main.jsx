import React from 'react'
import { Checkbox, Header, Options, Subtask, SubtasksBox, SubtasksCount, SubtaskTitle, Subtitle, Title } from './viewtaskmodal.styles'
import OptionsIcon from '../../../assets/icon-vertical-ellipsis.svg'

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
                <SubtasksCount>
                    Substasks (2 of 3)
                </SubtasksCount>

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
        </>
    )
}

export default ViewTaskModal