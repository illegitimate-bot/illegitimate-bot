const { loadSlashCommandsEvents, loadContextMenuEvents, loadModalEvents, loadButtonEvents, loadEvents, loadAutocompleteEvents } = require("./eventHandler.js")

function loadAllEvents(client) {
    loadSlashCommandsEvents(client)
    loadAutocompleteEvents(client)
    loadContextMenuEvents(client)
    loadButtonEvents(client)
    loadModalEvents(client)
    loadEvents(client)
}

module.exports = { loadAllEvents }
