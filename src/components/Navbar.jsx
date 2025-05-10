import React, { useEffect, useState } from 'react';
import '../App.css'
import { CiSun } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";

function Navbar({ toggleTheme,isDark}) {

    return (
        <div>
            <header className={`py-6  header flex justify-between px-10 ${isDark===true && 'dar'}`}>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={`w-8 h-8 text-blue-600 fill-current`}>
                        <path d="M24 4a20 20 0 1020 20A20.023 20.023 0 0024 4zm0 36a16 16 0 1116-16 16.018 16.018 0 01-16 16zm-2-22h4v12h-4zm0-6h4v4h-4z" />
                    </svg>
                    <span className={`text-2xl font-bold  ${isDark==true?'text-white':'text-gray-800'}`}>SoftSell</span>
                </div>
                <button className='flex gap-2 cursor-pointer text-lg align-items-center font-bold ' onClick={toggleTheme}>

                    {
                        isDark===true ?<div className='flex align-items-center gap-2'><IoSunnySharp className='text-lg h-7'  /><span>Light</span></div>: <div className='flex gap-2'><IoIosMoon className='text-lg h-7' />Dark</div>

                    }
                    Mode
                </button>
            </header>
        </div>
    );
}

export default Navbar;