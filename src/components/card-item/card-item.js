import React from "react";
import './styles.css';

function CardItem(props) {
    return (
        <div id={props.id} class="quadro-quadros">
            {
                props.image === true ?
                    <img id={props.id} src={props.src} alt={props.alt} />
                    :
                    <>
                        <i className={props.icon}></i>
                        <p id={props.pid}>{props.label}</p>
                    </>
            }
        </div>
    )
}

export default CardItem;