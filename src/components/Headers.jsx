import React from 'react';
import CoSelect from './Input/CoSelect';
import CoAvatar from './Input/CoAvatar';
import CoDropdownMenu from './Dropdown';
import LogoEngaugeDDI from '../assets/img/logo-engauge-ddi.png';

export default function Headers() {
  return (
    <header className="bg-[#EDF1F6] h-[64px] py-2.5 px-40">
      <a href="#main-content" className="text-center bg-black text-white underline text-lg sr-only focus:not-sr-only">Skip to main content</a>
      <ul className="flex flex-row justify-between items-center">
        <li className="w-4/6" aria-label="back to home">
          <a href="/" rel="noopener noreferrer">
            <img src={LogoEngaugeDDI} alt="Engauge DDI" aria-label="Back to Dashboard Page" />
          </a>
        </li>

        <li className="flex gap-2 items-center" aria-label="user menu">
          <CoSelect />
          <CoAvatar />
          <CoDropdownMenu />
        </li>
      </ul>
    </header>
  );
}
