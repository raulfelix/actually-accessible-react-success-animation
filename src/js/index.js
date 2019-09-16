import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import SuccessAnimation from './SuccessAnimation';

function Demo() {
  const [ok, setOk] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setOk(true)}>Done</button>
      {
        ok && (
          <SuccessAnimation
            text="Your trip is booked"
            color="#FD74F8"
            liveRegion="live"
          />
        )
      }
    </>
  )
}

ReactDOM.render(
  <>
    <div id="live" aria-live="polite" style={{opacity: 0, position: 'fixed'}} />
    <Demo />
  </>,
  window.document.getElementById('demo')
);