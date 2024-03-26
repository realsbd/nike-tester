import React, { useEffect } from 'react'
import './JotformScript'
const Jotform = () => {


  return (
    <>
    <div>Jotform</div>
    <iframe
      id="JotFormIFrame-240826909263260"
      title="Nike Product Order Form"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allowtransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/240826909263260"
      frameBorder="0"
      style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      scrolling="no"
    />
    </>
  )
}

export default Jotform