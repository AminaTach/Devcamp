import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Category, FolderOpen, Box, HomeTrendUp, Setting } from "iconsax-reactjs";

import logo from '../assets/logo.svg'
import logo2 from '../assets/logo2.svg'
import ex from '../assets/sidebar/1.svg'
import em from '../assets/sidebar/2.svg'

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/inventory') {
            setActiveMenuItem('inventory');
        } else if (path === '/products') {
            setActiveMenuItem('products');
        } else if (path === '/forecasts') {
            setActiveMenuItem('forecasts');
        } else if (path === '/settings') {
            setActiveMenuItem('settings');
        } else {
            setActiveMenuItem('dashboard');
        }
    }, [location]);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
        switch (menuItem) {
            case 'dashboard':
                navigate('/');
                break;
            case 'products':
                navigate('/products');
                break;
            case 'inventory':
                navigate('/inventory');
                break;
            case 'forecasts':
                navigate('/forecasts');
                break;
            case 'settings':
                navigate('/settings');
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={`sidebar ${isCollapsed ? "w-16" : " w-60"
                } ${isCollapsed ? "px-1" : "px-3"
                }  bg-bg text-text_side transition-width  h-full min-h-screen  duration-300`}
        >
            <div className="sidebar-header  flex items-center justify-between p-3">
                {isCollapsed ? (<img src={logo2} />) : (<img src={logo} className=" w-[80%]" />)}

                {isCollapsed ? <img src={em} className="toggle-button cursor-pointer text-xl focus:outline-none"
                    onClick={toggleSidebar} /> : <img src={ex} className="toggle-button cursor-pointer text-xl focus:outline-none"
                        onClick={toggleSidebar} />}
            </div>
            <div className="sidebar-content text-text_side">
                <ul className="menu">
                    <li
                        className={`menu-item flex items-center gap-3  ${isCollapsed ? 'w-10 m-3 h-10 p-2 rounded-full' : 'p-3 rounded-2xl'}  hover:z-10 cursor-pointer 
                       ${activeMenuItem === 'dashboard' ? 'bg-blue' : ''}`}
                        onClick={() => handleMenuItemClick('dashboard')}
                    >
                        <Category
                            size="24"
                            className={` ${activeMenuItem === 'dashboard' ? 'text-white  ' : 'text-text_side'}`}
                        />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""} ${activeMenuItem === 'dashboard' ? 'text-white' : ''}`}>
                            Dashboard
                        </span>
                    </li>
                    <li
                        className={`menu-item flex items-center p-3 gap-3 hover:z-10 cursor-pointer rounded-2xl  ${isCollapsed ? 'w-10 m-3 h-10 p-2 rounded-full' : 'p-3 rounded-2xl'}  ${activeMenuItem === 'products' ? 'bg-blue' : ''}`}
                        onClick={() => handleMenuItemClick('products')}
                    >
                        <FolderOpen
                            size="24"
                            className={` ${activeMenuItem === 'products' ? 'text-white  ' : 'text-text_side'}`}
                        />                        <span className={`menu-text ${isCollapsed ? "hidden" : ""} ${activeMenuItem === 'products' ? 'text-white' : ''}`}>
                            Products
                        </span>
                    </li>
                    <li
                        className={`menu-item flex items-center gap-3 p-3 hover:z-10 cursor-pointer rounded-2xl  ${isCollapsed ? 'w-10 m-3 h-10 p-2 rounded-full' : 'p-3 rounded-2xl'} ${activeMenuItem === 'inventory' ? 'bg-blue' : ''}`}
                        onClick={() => handleMenuItemClick('inventory')}
                    >
                        <Box
                            size="24"
                            className={` ${activeMenuItem === 'inventory' ? 'text-white  ' : 'text-text_side'}`}
                        />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""} ${activeMenuItem === 'inventory' ? 'text-white' : ''}`}>
                            Inventory tracking
                        </span>
                    </li>
                    <li
                        className={`menu-item flex items-center p-3 gap-3 hover:z-10 cursor-pointer rounded-2xl    ${isCollapsed ? 'w-10 m-3 h-10 p-2 rounded-full' : 'p-3 rounded-2xl'} ${activeMenuItem === 'forecasts' ? 'bg-blue' : ''}`}
                        onClick={() => handleMenuItemClick('forecasts')}
                    >
                        <HomeTrendUp
                            size="24"
                            className={` ${activeMenuItem === 'forecasts' ? 'text-white  ' : 'text-text_side'}`}
                        />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""} ${activeMenuItem === 'forecasts' ? 'text-white' : ''}`}>
                            Forecasts
                        </span>
                    </li>
                    <li
                        className={`menu-item flex items-center p-3  ${isCollapsed ? 'w-10 m-3 h-10 p-2 rounded-full' : 'p-3 rounded-2xl'}  gap-3 hover:z-10 cursor-pointer rounded-2xl ${activeMenuItem === 'settings' ? 'bg-blue' : ''}`}
                        onClick={() => handleMenuItemClick('settings')}
                    >
                        <Setting
                            size="24"
                            className={` ${activeMenuItem === 'settings' ? 'text-white  ' : 'text-text_side'}`}
                        />
                        <span className={`menu-text ${isCollapsed ? "hidden" : ""} ${activeMenuItem === 'settings' ? 'text-white' : ''}`}>
                            Settings
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
