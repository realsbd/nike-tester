import React, { useEffect } from 'react';

const Embedded = () => {
  useEffect(() => {
    // Script embedding logic goes here
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/240826909263260';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="jotform-embed"></div>;
};

export default Embedded;