import React from 'react'
import { Checkbox, SectionTitle, Subtask, SubtasksBox, SubtaskTitle } from './multiplecheckbox.styles'

const MultipleCheckbox = ({ label, checkCount, total, data, validate, onCheckChange, checkReference, checkItemName }) => {
    return (
        <div>
            <SectionTitle>
                {label} ({checkCount} of {total})
            </SectionTitle>

            <SubtasksBox>
                {data.map((item, index) => (
                    <Subtask key={index}>
                        <Checkbox
                            type="checkbox"
                            checked={item[validate] === 1}
                            onChange={() => onCheckChange(item[checkReference])}
                        />
                        <SubtaskTitle>
                            {item[checkItemName]}
                        </SubtaskTitle>
                    </Subtask>
                ))}
            </SubtasksBox>
        </div>
    )
}

export default MultipleCheckbox