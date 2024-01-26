import React from 'react';
import bukitAsamLogo from '../assets/img/bukit-asam-logo.png';
import odeysseyLogo from '../assets/img/odeyssey-logo.png';
import CoProgressBar from './CoProgressBar';

export default function CardToolComponent() {
  const data = [
    {
      title: 'PT. Bank Pembangunan Daerah Jawa Timur Tbk. Officer Development Program Test',
      startDate: '10 Apr 2024',
      endDate: '20 Apr 2024',
      status: 'Sedang Dikerjakan',
      logo: bukitAsamLogo,
      progressNumber: 30,
    },
    {
      title: 'KLOB Learning Styles',
      startDate: '10 Mar 2024',
      endDate: '20 Mar 2024',
      status: 'Sedang Dikerjakan',
      logo: odeysseyLogo,
      progressNumber: null,
    },
    {
      title: 'PT. Bank Pembangunan Daerah Sumatera Utara Tbk. AO Program Test',
      startDate: '03 Feb 2024',
      endDate: '20 Feb 2024',
      status: 'Sedang Dikerjakan',
      logo: odeysseyLogo,
      progressNumber: 80,
    },
  ];
  function CardData({ value }) {
    return (
      <div className="flex-col border border-[#A3AEB9] rounded-xl">
        <img className="w-full rounded-t-xl" src={value.logo} alt="company" />
        <div className="p-10 w-full">
          <a href="tool-components" className="text-xl font-bold" aria-label={`Press enter to start activity ${value.title}`}>{value.title}</a>
          <p className="text-[#414A53] mt-5 mb-4">
            Welcome to Senior Manager Development Program of PT XYZ. In this journey,
            you will learn about how to lead your team and lead your business.
          </p>
          <div className="flex gap-4 mb-5">
            <div className="flex gap-3">
              <p>Start Date</p>
              <p className="font-medium">{value.startDate}</p>
            </div>
            <div className="flex gap-3">
              <p>Due Date</p>
              <p className="font-medium">{value.endDate}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {
              value.progressNumber ? (
                <React.Fragment>
                  <caption className='font-semibold text-[#CB5542]'>In Progress</caption>
                  <CoProgressBar progressNumber={value.progressNumber}/>
                  <h4>{`${value.progressNumber}%`}</h4>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <caption className='font-semibold'>Not Started</caption>
                  <CoProgressBar progressNumber={0}/>
                  <h4>{`${0}%`}</h4>
                </React.Fragment>
              )
            }
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      {
        data.map((val) => (
          <CardData value={val} />
        ))
      }
    </div>
  );
}
