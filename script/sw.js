self.addEventListener("fetch", e => {});

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
event.preventDefault();
installPrompt = event;
installButton.style.visibility = 'visible';
});
installButton.addEventListener("click", async () => {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    installPrompt = null;
    installButton.setAttribute("hidden", "");
    });
