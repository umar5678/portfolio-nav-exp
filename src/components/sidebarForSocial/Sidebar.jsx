import React from 'react'
import  socialMedia  from "./../../configSocial"
import { Icon } from "./../icons/icon"
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
    {
        socialMedia && 
        socialMedia.map(({name, url} , i ) => (
            <li key={i}>
                <a href = { url } aria-label = { name } target="_blank" rel='noreferrer'>
                    <Icon  name = {name} />
                </a>
            </li>
        ))
    }
    </div>
  )
}

export default Sidebar