import React from "react";

export const Header  = (props) => {
        return(
           <div className="navbar navbar-default">
               <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">{props.Home}</a></li>
                        </ul>
                    </div>

               </div>
           </div>
       );
};