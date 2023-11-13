import React from "react";
import { useNavigate } from "react-router-dom";

function NavItem(props) {

    const navigate = useNavigate();

    return (
        <li><a style={{cursor:'pointer'}} onClick={e=> navigate(props.href)} href>{props.label}</a></li>
    )
}

export default NavItem;