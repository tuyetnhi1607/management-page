import React from 'react'
import 'boxicons'
import './card.scss'

function Card(props) {
    const {icon, value, title} = props

    return (
        <div className="card">
            <i className={`bx ${icon}`} />
            <div className="card-content">
                <span className="card-content-value">{value}</span><br />
                <span className="card-content-title">{title}</span>
            </div>
        </div>
    )
}

export default Card
