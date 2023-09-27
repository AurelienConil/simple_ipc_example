const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('terminalconsole', {
    //toggle: () => ipcRenderer.invoke('consolemsg', 'Message depuis le processus principal')
    printonconsole: (m) => ipcRenderer.send('consolemsg', m)

})