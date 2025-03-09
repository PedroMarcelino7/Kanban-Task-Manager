// React
import React, { useEffect, useState } from 'react'
import { getBoardId } from '../../../contexts/BoardIDContext'

// Styles
import { Checkbox, Header, Options, Subtask, SubtasksBox, SectionTitle, SubtaskTitle, Subtitle, Title, StatusSelect, StatusOption, StatusBox, Form, CreateTaskButton, OptionSection, OptionsPopUp, Option } from './viewtaskmodal.styles'

// Components
import Modal from '../main'
import EditTaskModal from '../edittask/main'
import DeleteTaskModal from '../deletetask/main'

// UI Components
import DefaultButton from '../../../ui/buttons/defaultButton/main'

// Images | Icons
import OptionsIcon from '../../../assets/icon-vertical-ellipsis.svg'
import SelectIcon from '../../../assets/icon-chevron-down.svg'
import DefaultSelect from '../../../ui/selects/defaultselect/main'
import MultipleCheckbox from '../../../ui/checkbox/multiplecheckbox/main'
import { useSubtasks } from '../../../contexts/SubtaskContext'

//
//
//
const ViewTaskModal = ({ task, column, data }) => {
    //
    const { subtasks, refreshSubtasks } = useSubtasks()
    //

    //
    //
    // Variables
    const { boardId } = getBoardId()
    const board = data.find(board => board.board_id === boardId) || data[0]
    const [subtasksOLD, setSubtasks] = useState(subtasks.filter(subtask => subtask.task_id === task.task_id))
    const [columnId, setColumnId] = useState(column.column_id)
    const [showOptionsPopUp, setShowOptionsPopUp] = useState(false)
    const [showEditTaskModal, setShowEditTaskModal] = useState(false)
    const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false)

    // Handle Submit
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
                    subtasks: subtasksOLD,
                })
            })

            const data = await response.json();
            console.log('>>> Resposta Subtasks [View Task Modal]:', data);
        } catch (error) {
            console.error('Erro ao editar a subtask:', error);
        }
    }

    // Use Effect Logs
    useEffect(() => {
        console.log('>>> Task [View task modal]:', task)
        console.log('>>> Column [View task modal]:', column)
        console.log('>>> Column ID [View task modal]:', columnId)
        console.log('>>> Data [View task modal]:', data)
        console.log('>>> Board Id [View task modal]:', boardId)
        console.log('>>> Subtasks [View task modal]:', subtasksOLD)
        console.log('>>> Board [View Task Modal]:', board)
    }, [])

    //
    //
    // Other Functions
    const getCheckedSubtasks = () => {
        return subtasksOLD.reduce((count, subtask) => {
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

    //
    //
    //
    return (
        <>
            <div>
                <Header>
                    <Title>
                        {task.task_name}
                    </Title>

                    <OptionSection>
                        <Options onClick={() => setShowOptionsPopUp(!showOptionsPopUp)} src={OptionsIcon} alt="" />

                        <OptionsPopUp className={showOptionsPopUp ? "show" : ""}>
                            <Option onClick={() => setShowEditTaskModal(true)}>Edit Task</Option>
                            <Option onClick={() => setShowDeleteTaskModal(true)} className='delete'>Delete Task</Option>
                        </OptionsPopUp>
                    </OptionSection>
                </Header>
            </div>

            <div>
                <Subtitle>
                    {task.task_description}
                </Subtitle>
            </div>

            <Form onSubmit={handleSubmit}>
                <MultipleCheckbox
                    label='Subtasks'
                    checkCount={getCheckedSubtasks()}
                    total={subtasksOLD.length}
                    data={subtasksOLD}
                    validate='subtask_ischecked'
                    onCheckChange={handleCheckSubtask}
                    checkReference='subtask_id'
                    checkItemName='subtask_name'
                />

                <DefaultSelect
                    label='Current Status'
                    onValueChange={setColumnId}
                    data={board.columns}
                    dataValue='column_id'
                    dataOption='column_name'
                />

                <DefaultButton
                    label='Save Changes'
                    type='submit'
                />
            </Form>

            {showEditTaskModal &&
                <Modal closeModal={setShowEditTaskModal}>
                    <EditTaskModal task={task} />
                </Modal>}

            {showDeleteTaskModal &&
                <Modal closeModal={setShowDeleteTaskModal}>
                    <DeleteTaskModal task_id={task.task_id} closeModal={setShowDeleteTaskModal} />
                </Modal>}
        </>
    )
}

export default ViewTaskModal