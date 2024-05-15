const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; // Store the deferred prompt event
    butInstall.classList.toggle('hidden', false); // Make the install button visible
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {const promptEvent = window.deferredPrompt; // Retrieve the deferred prompt
if (!promptEvent) { 
    return; // If no prompt event is available, exit the function
}
promptEvent.prompt(); // Prompt the user to install the PWA
window.deferredPrompt = null; // Clear the deferred prompt after prompting
butInstall.classList.toggle('hidden', true); // Hide the install button after prompting
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
    window.deferredPrompt = null; // Clear the deferred prompt when the app is installed
});
