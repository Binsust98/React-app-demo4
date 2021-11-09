import React from 'react';
// import avatar from '../components/images/avatar.jpg';
// import './styles.css'

const ContactCard = (props) =>
{       const {sid,sname,address,coursename} = props.contact;
    
    return(
        <div className="item">
            <div className="content">
            {/* <img className="ui avatar image" src={avatar} alt={avatar}/> */}
            <div className="header">{sid}</div>
            <div>{sname}</div>
            <div className="header">{address}</div>
            <div>{coursename}</div>
            </div>
            <div className="del">
            <i className="trash alternate icon" style={{color:"red",marginTop:"7px"}} ></i>
            </div>
            </div>
    );
};
export default ContactCard;