import React from "react"

const FormStatus = props => {
    return (
        <div
            className={
                props.status ? "Form-status" : "Form-status Form-status--hidden"
            }
        >
            Status: {props.status}
        </div>
    )
}

export default FormStatus
