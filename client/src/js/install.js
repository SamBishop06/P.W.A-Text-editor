const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

// Logic for handling the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("event" + event);
    console.log("hit");
    // Prevent the default behavior of the event
    event.preventDefault();
    // Store the deferred prompt event for later use
    window.deferredPrompt = event;
    // Make the install button visible
    butInstall.classList.toggle('hidden', false);
});

// Logic for handling the click event on the install button
butInstall.addEventListener('click', async () => {
    // Retrieve the deferred prompt event
    const promptEvent = window.deferredPrompt;
    // If no prompt event is available, exit the function
    if (!promptEvent) {
        return;
    }
    // Prompt the user to install the PWA
    promptEvent.prompt();
    // Clear the deferred prompt after prompting
    window.deferredPrompt = null;
    // Hide the install button after prompting
    butInstall.classList.toggle('hidden', true);
});

// Logic for handling the appinstalled event
window.addEventListener('appinstalled', (event) => {
    console.log("instal hit");
    // Clear the deferred prompt when the app is installed
    window.deferredPrompt = null;
});
