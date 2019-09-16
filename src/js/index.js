import ReactDOM from 'react-dom';
import React from 'react';
import SuccessAnimation from './SuccessAnimation';

ReactDOM.render(
  <SuccessAnimation
    text="Your trip is booked"
    color="#FD74F8"
  />,
  window.document.getElementById('demo')
);