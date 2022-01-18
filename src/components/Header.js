import React from 'react'
import Navbar from './Navbar'
import book from '../assets/images/header.png'
import button from '../assets/images/Button.png'
export default function Header() {
    return (
        <div >
            <Navbar/>
            <div className='header'>
               <div className='header-p'>

                    <h2>Create your first</h2>
                    <h2>decentralized wallet</h2>
                    <span>The easiest way to manage</span>
                    <span>multiple cryptocurrency assets</span>
                    <a href='#'><img src={button} alt='...'/></a>
               </div>
                    <div >
                       <img src={book} alt='...'/>
                    </div>
                </div>
            </div>
       
    )
}
