import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/priya-kumari-4057211a7/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/priyaWDEV15" target="_blank"><AiFillGithub/></a>
        <a href="https://www.instagram.com/priya_kumari_1221/" target="_blank"><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocial