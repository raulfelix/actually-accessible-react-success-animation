# An accessible react success animation

This CSS animated, success react component is more interesting than just your average green
banner and it bakes in accessibility. Use this to indicate a process has completed successfully.

### Installation
```npm i actually-accessible-react-success --save```

### Usage

Simply render it at the time you want to show something has completed.

```
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import SuccessAnimation from 'actually-accessible-react-success-animation';

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
```

### Props

**color** `optional` Choose a color to apply to the message. Defaults to black `#000000`

**text** `optional` Customise the message displayed as part of the indicator. Default to `Success`

**liveRegion** `optional` Pass the id of a live region element that exits on your page which will be populated when the success message displays.

### Accessibility

Screen readers should announce the presence of this message when it appears. In order for this to work
you will need to add a live region to the page as shown above.