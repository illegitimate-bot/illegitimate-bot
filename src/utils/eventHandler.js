const { loadButtonEvents } = require("./eventHandlers/button.js")
const { loadSlashCommandsEvents } = require("./eventHandlers/command.js")
const { loadContextMenuEvents } = require("./eventHandlers/contextmenu.js")
const { loadModalEvents } = require("./eventHandlers/modal.js")
const { loadEvents } = require("./eventHandlers/events.js")
const { loadAutocompleteEvents } = require("./eventHandlers/autocomplete.js")

module.exports = {
    loadSlashCommandsEvents,
    loadButtonEvents,
    loadContextMenuEvents,
    loadModalEvents,
    loadEvents,
    loadAutocompleteEvents
}
