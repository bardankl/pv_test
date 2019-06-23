import React from 'react';
import './ButtonArea.css';


const ButtonArea = ()=> {
    return (

            <div className="buttonArea">
                <img className="buttonAreaImg" src={require("../img/hotdog.png")} alt="there was supposed to be a hot dog"/>
                    <p className="buttonAreaText">Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</p>
                    <button className="buttonAreaBtn">More Dogs ‘n Make Em Hot</button>
            </div>

    )
};

export default ButtonArea;