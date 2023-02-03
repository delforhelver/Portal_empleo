import React, { useState } from 'react';
import './SelectMode.css';
import { CSSTransition } from 'react-transition-group';
import developer from '../assets/img/developer.png';
import recruiter from '../assets/img/recruiter.png';

const SelectMode = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClick = () => {
      setIsVisible(false);
    };
  
    return (
      <div>
        <CSSTransition
          in={isVisible}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="flex flex-col w-full border-opacity-50 my-5">
            <div className="grid w-5/6  h-20 card  bg-accent rounded-box place-items-center text-white mx-auto" onClick={handleClick}>
              <div className="flex items-stretch ...">
                <div className="w-10 rounded-full">
                  <img src={developer}/>
                </div>
                <span className='mb-auto mt-auto ml-2'>Estoy buscando trabajo.</span>
              </div>
            </div>
            <div className="divider w-5/6 mx-auto">O</div>
            <div className="grid w-5/6 h-20 card bg-success rounded-box place-items-center text-white mx-auto" onClick={handleClick}>
              <div className="flex items-stretch ...">
                <div className="w-10 rounded-full">
                  <img src={recruiter}/>
                </div>
                <span className='mb-auto mt-auto ml-2'>Estoy buscando personal.</span>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    )
  }
  

export default SelectMode