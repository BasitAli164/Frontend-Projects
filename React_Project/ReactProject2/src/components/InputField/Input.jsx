import React from 'react'
import './Input.css'

const Input = ({ labelText,inputType,inputName,inputId,inputPlaceholder,inputMin,inputMax,inputValue,inputFunction,inputMinLenght,inputMaxLength,inputTitle,inputSize,inputHeight }) => {
    return (
        <>
            <div className="input">
                <label htmlFor={labelText}>{labelText}</label>
                <input
                    type={inputType}
                    name={inputName}
                    id={inputId}
                    placeholder={inputPlaceholder}
                    minLength={inputMinLenght}
                    maxLength={inputMaxLength}
                    min={inputMin}
                    max={inputMax}
                    title={inputTitle}
                    value={inputValue}
                    onChange={inputFunction}
                    width={inputSize}
                    height={inputHeight}
                    

                />
            </div>

        </>
    )
}

export default Input
