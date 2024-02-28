import React, { ReactNode, useState } from 'react';
import { IUser } from './../../models/IUser';
import './tooltip.css'

interface TooltipProps {
  user: IUser,
  children: ReactNode,
}

export default function Tooltip({ user, children }: TooltipProps) {
  const [ isVisible, setIsVisible ] = useState<boolean>(false)
  return (
    <div
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
    className='tooltip-wrapper'    
    >
      { children }
      { isVisible && <div className='tooltip-image'><img className='avatar-medium' src={user.picture.medium} alt="avatar" /></div> }      
    </div>
  );
}