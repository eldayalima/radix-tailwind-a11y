import React from 'react';
import CardToolComponent from '../components/CardToolComponent';
import CoSidebarNav from '../components/SideNavigations/CoSidebarNav';

export default function Home() {
  return (
    <React.Fragment>
      <div className='flex justify-around'>
        <CoSidebarNav/>
        <main id="main-content" className='mx-20'>
            <CardToolComponent />
        </main>
      </div>
    </React.Fragment>
  );
}
