import React from 'react'

const Checkbox = ({ name, checkboxId }) => {

    return (
        <div className={'form-check'}>
            <input className="form-check-input" type="checkbox" id={checkboxId} />
            <label className="form-check-label" htmlFor={checkboxId}>
                {name && name[0].toUpperCase() + name.slice(1)}
            </label>
        </div>
    )
}

export default Checkbox
