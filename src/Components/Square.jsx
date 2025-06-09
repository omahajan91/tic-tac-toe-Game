import React from 'react'

export default function Square(props) {
    return (
        <div className='square'
        onClick = { props.onClick }
            style={{
                border: '1px solid',
                height: '150px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
            <h1>{props.value}</h1>
        </div>
    )
}
