import React from 'react'
import FacebookLogo from '../icons/facebook.svg'
import InstaLogo from '../icons/instagram.svg'
import LinkedInLogo from '../icons/linkedin.svg'
import GithubLogo from '../icons/github.svg'


function Socials() {

    return (
        <div className='socials'> 
            <ul>
                <li>
                    <a href='https://sayingimages.com/wp-content/uploads/what-do-you-mean-facebook-memes.jpg' target="_blank" rel="noopener noreferrer">
                        <img id='facebook-icon'src={FacebookLogo}  alt='facebook-icon' />
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com/shubham_singh.05?igshid=NDU3Y2E5ZmY=' target="_blank" rel="noopener noreferrer">
                        <img id='insta-icon' src={InstaLogo}  alt='insta-icon' />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/shubham-singh-164549226/' target="_blank" rel="noopener noreferrer">
                        <img id='linkedin-icon' src={LinkedInLogo}  alt='linkedin-icon' />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/Shubham05122002' target="_blank" rel="noopener noreferrer">
                        <img id='github-icon' src={GithubLogo}  alt='github-icon' />
                    </a>
                </li> 
            </ul>
        </div>
    )
}

export default Socials