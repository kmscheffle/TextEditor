const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default prompt
    event.preventDefault();
    
    // Store the event for later use
    // You can use this event to trigger the installation prompt at a later time
    // For example, you can show a custom install button and trigger the prompt when the user clicks it
    deferredPrompt = event;
    
    // Show your custom install button or UI element
    showInstallButton();
  });

  installButton.addEventListener('click', () => {
    // Check if the deferredPrompt is available
    if (deferredPrompt) {
      // Show the installation prompt
      deferredPrompt.prompt();
      
      // Wait for the user's response
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        
        // Reset the deferredPrompt variable
        deferredPrompt = null;
      });
    }
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    // Perform actions when the element is clicked
    // For example, you can trigger the installation prompt here
    if (deferredPrompt) {
      // Show the installation prompt
      deferredPrompt.prompt();
      
      // Wait for the user's response
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        
        // Reset the deferredPrompt variable
        deferredPrompt = null;
      });
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Perform actions when the app is successfully installed
    console.log('App installed successfully!');
  });
