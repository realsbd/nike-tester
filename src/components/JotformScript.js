// Define handleIFrameMessage function to handle messages sent from the iframe
function handleIFrameMessage(e) {
    try {
      // Ensure data is not an object
      if (typeof e.data === 'object') { 
        return; 
      }
      
      // Split the message data
      var args = e.data.split(":");
      var iframe = null;
  
      // Find the correct iframe based on message data
      if (args.length > 2) { 
        iframe = document.getElementById("JotFormIFrame-240826909263260" + args[(args.length - 1)]); 
      } else { 
        iframe = document.getElementById("JotFormIFrame-240826909263260"); 
      }
  
      // If iframe not found, return
      if (!iframe) { 
        return; 
      }
  
      // Handle different message types
      switch (args[0]) {
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "setHeight":
          iframe.style.height = args[1] + "px";
          if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
            iframe.style.minHeight = args[1] + "px";
          }
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = window.innerHeight + "px";
          }
          break;
        case "reloadPage":
          window.location.reload();
          break;
        case "loadScript":
          if (!isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) { 
            break; 
          }
          var src = args[1];
          if (args.length > 3) {
            src = args[1] + ':' + args[2];
          }
          var script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          document.body.appendChild(script);
          break;
        case "exitFullscreen":
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
          break;
      }
  
      // If origin is JotForm, post message back to iframe
      var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
      if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
        var urls = {"docurl": encodeURIComponent(document.URL), "referrer": encodeURIComponent(document.referrer)};
        iframe.contentWindow.postMessage(JSON.stringify({"type": "urls", "value": urls}), "*");
      }
    } catch (error) {
      console.error("Error handling iframe message:", error);
    }
  }
  
  // Define isPermitted function to check if the origin URL is permitted
  function isPermitted(originUrl, whitelisted_domains) {
    try {
      var url = document.createElement('a');
      url.href = originUrl;
      var hostname = url.hostname;
      var result = false;
      if (typeof hostname !== 'undefined') {
        whitelisted_domains.forEach(function (element) {
          if (hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element) {
            result = true;
          }
        });
        return result;
      }
    } catch (error) {
      console.error("Error checking if permitted:", error);
      return false;
    }
  }
  
  // Attach event listener for message events
  if (window.addEventListener) {
    window.addEventListener("message", handleIFrameMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent("onmessage", handleIFrameMessage);
  }
  