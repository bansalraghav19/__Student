import React from 'react'

function FunctionalComponent(props) {
    // props.name = "naman"
    return (
        <div>
           Hello {props.name} {props.age}
        </div>
    )
}

export default FunctionalComponent
