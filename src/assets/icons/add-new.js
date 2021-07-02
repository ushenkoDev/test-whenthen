import React from 'react';

const AddNew = (props) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0)">
      <rect width="32" height="32" rx="6" fill="#4A00CD"/>
      <rect x="15" y="8" width="2" height="16" rx="0.5" fill="white"/>
      <rect x="24" y="15" width="2" height="16" rx="0.5" transform="rotate(90 24 15)" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

export default AddNew;
