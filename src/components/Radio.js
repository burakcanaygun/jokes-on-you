import React from 'react'

const Radio = ({ selectedClass, handleRadios, name }) => {
    console.log(selectedClass);
    return (
        <div className={`${name} ${name === 'any' && "col-3"} mx-auto text-start`}>
            <input type="radio" className={"form-check-input"} name={name} id={name} checked={selectedClass === 'any' ? true : false} onChange={() => handleRadios} />
            <label className={"form-check-label ms-2"} htmlFor={name}>{name && name[0].toUpperCase() + name.slice(1)}</label>
        </div>
    )
}

export default Radio
