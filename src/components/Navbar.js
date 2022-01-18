import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GitHubIcon from '@mui/icons-material/GitHub';
// import BlockIcon from '@mui/icons-material/Block';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RedditIcon from '@mui/icons-material/Reddit';
import  logo from '../assets/images/Logo.png'
// import {GitHubIcon,HowToRegIcon,TwitterIcon} from '@material-ui/core'
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          {/* <a  href="#">Navbar</a> */}
          <img class="navbar-brand" src={logo} alt='...'/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">خانه</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">گالری</a>
              </li>
              <li class="nav-item"><a href='#' className='nav-link'>توضیحات بیشتر</a> </li>
              <li class="nav-item"><a href='#' className='nav-link'>درباره من</a> </li>
              
            </ul>
            <div class="d-flex flex-row gap-1">
              
                <div/>
             <TwitterIcon/>
             <div/>
             <HowToRegIcon/>
             <div/>
             <GitHubIcon/>
             <div/>
             <RemoveCircleIcon/>
             <div/>
             <RedditIcon/>
             <div/>
             </div>
            </div>
          </div>
        
      </nav>
    )
}
