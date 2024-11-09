// main.js

const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: true,
		},
	});

	// Load your HTML file
	win.loadFile("notes.html");
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
