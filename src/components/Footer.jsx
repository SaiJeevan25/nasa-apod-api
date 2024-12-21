import React from 'react'

export default function Footer(props) {
    const {handleToggleBar, data} = props
    return (
        <footer>
            <div className='bgGradient'></div>
                <div>
                    <h2>Astronomial Pictue Of The Day</h2>   
                    <h1>{data?.title}</h1>
                </div>
                <button onClick={handleToggleBar}>    
                    <i className="fa-solid fa-circle-info"></i>
                </button>
        </footer>
    )
}
