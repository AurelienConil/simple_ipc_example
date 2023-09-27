document.getElementById('buttonmsg').addEventListener('click', async () => {
    const answer = await window.terminalconsole.printonconsole("toto")

})

// the same with the object inputmsg which is a text input. send on "enter" key
document.getElementById('inputmsg').addEventListener('keyup', async (e) => {
    if (e.key === 'Enter') {
        const answer = await window.terminalconsole.printonconsole(e.target.value)
    }
})