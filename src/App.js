import React from 'react'


const App = (props) => {
    console.log('props app2 >> ', props)
    return (
        <>
            <h1>
                {props.label}
            </h1>
        </>
    )
}

export default App;