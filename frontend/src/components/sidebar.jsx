import React, { useState } from "react";
import dash from '../assets/sidebar/dash.svg'
import forcast from '../assets/sidebar/forcast.svg'
import invent from '../assets/sidebar/invent.svg'
import notif from '../assets/sidebar/notification.svg'
import report from '../assets/sidebar/report.svg'
import setting from '../assets/sidebar/setting-2.svg'
import logo from '../assets/logo.svg'
import logo2 from '../assets/logo2.svg'
import pro from '../assets/sidebar/pro.svg'
import ex from '../assets/sidebar/1.svg'
import em from '../assets/sidebar/2.svg'



const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`sidebar ${isCollapsed ? "w-16" : "w-64"
                } ${isCollapsed ? "px-1" : "px-4"
                }  bg-bg text-text_side transition-width  h-full min-h-screen  duration-300`}
        >
            <div className="sidebar-header  flex items-center justify-between p-3">
                { isCollapsed?( <img src={logo2}/> ):(<img src={logo} className=" w-[80%]"/>)}
                
                  
                
                    {isCollapsed ? <img src={em} className="toggle-button cursor-pointer text-xl focus:outline-none"
                    onClick={toggleSidebar} /> : <img src={ex}  className="toggle-button cursor-pointer text-xl focus:outline-none"
                    onClick={toggleSidebar}/>}
            </div>
            <div className="sidebar-content text-text_side">
                <ul className="menu">
                    <li className="menu-item flex items-center p-3 hover:z-10  cursor-pointer rounded-2xl">
                        <img src={dash} className="menu-icon mr-4" />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""}`}>
                            Dashboard
                        </span>
                    </li>
                    <li className="menu-item flex items-center p-3 hover:z-10 cursor-pointer rounded-2xl">
                        <img src={pro} className="menu-icon mr-4" />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""}`}>
                           Products
                        </span>
                    </li>
                    <li className="menu-item flex items-center p-3 hover:z-10 cursor-pointer rounded-2xl">
                        <img src={invent} className="menu-icon mr-4" />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""}`}>
                        Inventory tracking
                        </span>
                    </li>
                    <li className="menu-item flex items-center p-3 hover:z-10 cursor-pointer rounded-2xl rounded-b-none pb-4 border-b-[1px] border-b-slate-300">
                        <img src={forcast} className="menu-icon mr-4" />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""}`}>
                        Forcasts
                        </span>
                    </li>
                    
                
                    <li className="menu-item flex items-center p-3 hover:z-10 cursor-pointer rounded-2xl">
                        <img src={setting} className="menu-icon mr-4" />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""}`}>
                            Settings
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
