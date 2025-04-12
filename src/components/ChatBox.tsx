"use client";

// src/components/ChatBox.tsx
import { useState } from 'react';
import Button from './ui/button';

export default function ChatBox() {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      // Handle send message logic here
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm p-2 mx-auto max-w-3xl">
      <div className="w-full">
        <div className="flex items-center space-x-2 flex-1 mr-2 pl-2 pb-2 text-gray-700">
          <input
            type="text"
            className="flex-1 border-0 focus:ring-0 focus:outline-none text-sm"
            placeholder="Typing "
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            aria-label="Type a message"
          />
        </div>
        <div className="flex justify-between space-x-2 flex-1 mr-2 pl-2 pt-2 text-gray-700">
          <div className="flex items-center">
            <Button />
            <div className="h-5 ml-1 text-gray-300 opacity-50 transition-opacity duration-300 hover:opacity-100 fade-vertical"><svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line id="Line 4" x1="0.5" y1="2.18557e-08" x2="0.499999" y2="20" stroke="#000B36" strokeOpacity="0.0941" />
            </svg>
            </div>

            <div className="relative">

              <button className="flex items-center rounded-md py-1 px-2 mr-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="sparkles-two, ai 2 stars, sparkles, &#226;&#156;&#168;" clipPath="url(#clip0_138_134)">
                    <g id="Vector">
                      <path d="M16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8C14 10.3085 13.4892 11.7424 12.6158 12.6158C11.7424 13.4892 10.3085 14 8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16C10.3085 16 11.7424 16.5108 12.6158 17.3842C13.4892 18.2576 14 19.6915 14 22C14 22.5523 14.4477 23 15 23C15.5523 23 16 22.5523 16 22C16 19.6915 16.5108 18.2576 17.3842 17.3842C18.2576 16.5108 19.6915 16 22 16C22.5523 16 23 15.5523 23 15C23 14.4477 22.5523 14 22 14C19.6915 14 18.2576 13.4892 17.3842 12.6158C16.5108 11.7424 16 10.3085 16 8Z" fill="#000107" fill-opacity="0.8824" />
                      <path d="M7.5 2C7.5 1.44772 7.05228 1 6.5 1C5.94772 1 5.5 1.44772 5.5 2C5.5 3.44043 5.18016 4.24938 4.71477 4.71477C4.24938 5.18016 3.44043 5.5 2 5.5C1.44772 5.5 1 5.94772 1 6.5C1 7.05228 1.44772 7.5 2 7.5C3.44043 7.5 4.24938 7.81984 4.71477 8.28523C5.18016 8.75062 5.5 9.55957 5.5 11C5.5 11.5523 5.94772 12 6.5 12C7.05228 12 7.5 11.5523 7.5 11C7.5 9.55957 7.81984 8.75062 8.28523 8.28523C8.75062 7.81984 9.55957 7.5 11 7.5C11.5523 7.5 12 7.05228 12 6.5C12 5.94772 11.5523 5.5 11 5.5C9.55957 5.5 8.75062 5.18016 8.28523 4.71477C7.81984 4.24938 7.5 3.44043 7.5 2Z" fill="#000107" fill-opacity="0.8824" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_138_134">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span style={{
                  fontFamily: 'Inter Variable',
                  fontWeight: '540',
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '0px',
                  color: 'rgba(0, 1, 7, 0.8824)'
                }}
                  className='ml-1'>
                  Quick reply with AI
                </span>
              </button>
            </div>
          </div>

          <div className='flex items-center mr-4 sm:mr-8 md:mr-12 lg:mr-16'>
            <button className="p-1 text-gray-700 hover:bg-gray-100 rounded">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Button">
                  <path d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z" fill="#001040" fill-opacity="0.0627" />
                  <g id="paper-plane-top-right, send">
                    <path id="Vector" d="M8.28236 11.9233C7.17315 11.0384 7.79887 9.25073 9.21781 9.25073H22.7699C23.9218 9.25073 24.6438 10.4952 24.0721 11.4952L17.4397 23.0971C16.7465 24.3098 14.9178 24 14.6627 22.6266L13.58 16.7976L17.8708 14.3583C18.2309 14.1535 18.3568 13.6957 18.1521 13.3356C17.9474 12.9755 17.4895 12.8496 17.1294 13.0543L12.7914 15.5205L8.28236 11.9233Z" fill="#1E1F24" />
                  </g>
                </g>
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}