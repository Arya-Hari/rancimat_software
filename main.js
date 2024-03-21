// main.js
const fs = require('fs')
const path = require('path')
const { BrowserWindow, app, ipcMain } = require('electron')

// Create a basic Electron `BrowserWindow` with a preload script.
const createWindow = () => {
  const win = new BrowserWindow()

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  // Create a listener for the "read-file" event.
  // When received, try to read file content from "file-to-read.txt" and send
  // the result back to the renderer process (`event.sender.send("read-file-success")`).
})