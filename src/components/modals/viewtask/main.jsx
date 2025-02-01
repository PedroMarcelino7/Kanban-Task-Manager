import React, { useEffect, useState } from 'react'
import { Checkbox, Header, Options, Subtask, SubtasksBox, SectionTitle, SubtaskTitle, Subtitle, Title, StatusSelect, StatusOption, StatusBox, Form, CreateTaskButton } from './viewtaskmodal.styles'
import OptionsIcon from '../../../assets/icon-vertical-ellipsis.svg'
import SelectIcon from '../../../assets/icon-chevron-down.svg'
import { useParams } from 'react-router-dom'

const ViewTaskModal = ({ task, column, data }) => {
    const { board_id } = useParams()
    const [subtasks, setSubtasks] = useState([...task.subtasks])
    const [columnId, setColumnId] = useState(1)

    const getCheckedSubtasks = () => {
        return subtasks.reduce((count, subtask) => {
            return subtask.subtask_ischecked === 1 ? count + 1 : count;
        }, 0);
    };

    const handleCheckSubtask = (id) => {
        setSubtasks((prevSubtasks) =>
            prevSubtasks.map((subtask) =>
                subtask.subtask_id === id
                    ? { ...subtask, subtask_ischecked: subtask.subtask_ischecked === 1 ? 0 : 1 }
                    : subtask
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3001/api/tasks/status/update', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    column_id: columnId,
                    task_id: task.task_id
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Tasks [View Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao editar a task:', error);
        }

        try {
            const response = await fetch('http://localhost:3001/api/subtasks/ischecked/update', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subtasks: subtasks,
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Subtasks [View Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao editar a subtask:', error);
        }
    }

    useEffect(() => {
        console.log('>>> Tasks [View task modal]:', task)
        console.log('>>> Column [View task modal]:', column)
        console.log('>>> Data [View task modal]:', data)
        console.log('>>> Board Id [View task modal]:', board_id)
        console.log('>>> Subtasks [View task modal]:', subtasks)
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

            <Form onSubmit={handleSubmit}>
                <div>
                    <SectionTitle>
                        Substasks ({getCheckedSubtasks()} of {task.subtasks.length})
                    </SectionTitle>

                    <SubtasksBox>
                        {subtasks.map((subtask, index) => (
                            <Subtask key={index}>
                                <Checkbox
                                    type="checkbox"
                                    checked={subtask.subtask_ischecked === 1}
                                    onChange={() => handleCheckSubtask(subtask.subtask_id)}
                                />
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

                        <StatusSelect onChange={(e) => setColumnId(e.target.value)}>
                            <StatusOption value={column.column_id}>{column.column_name}</StatusOption>
                            {data[board_id - 1].columns.map((column) => (
                                <StatusOption value={column.column_id}>{column.column_name}</StatusOption>
                            ))}
                        </StatusSelect>
                    </StatusBox>
                </div>

                <CreateTaskButton>
                    Save changes
                </CreateTaskButton>
            </Form>
        </>
    )
}

export default ViewTaskModal