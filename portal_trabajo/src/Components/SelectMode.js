import React from 'react';
import './css/SelectMode.css';
import developer from '../assets/img/developer.png';
import recruiter from '../assets/img/recruiter.png';

const SelectMode = () => {
    return (
      <div className=''>
          <div>
          <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="flex items-stretch ...">
                <div className="w-10 rounded-full">
                  <img src={developer} alt="FindJob"/>
                </div>
                <span className='mb-auto mt-auto ml-2'>Estoy buscando trabajo.</span>
            </div>
              </div>
          <div className="divider divider-horizontal">O</div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="flex items-stretch ...">
                <div className="w-10 rounded-full">
                  <img src={recruiter} alt="FindDev"/>
                </div>
                <span className='mb-auto mt-auto ml-2'>Estoy buscando personal.</span>
              </div>
              </div>
          </div>
          </div>
      </div>

      
    )
  }
  

export default SelectMode