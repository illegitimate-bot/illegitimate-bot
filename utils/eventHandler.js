const { loadButtonEvents } = require('./eventHandlers/button.js')
const { loadSlashCommands } = require('./eventHandlers/command.js')
const { loadContextMenu } = require('./eventHandlers/contextmenu.js')
const { loadMessageEvents } = require('./eventHandlers/message.js')
const { loadModalEvents } = require('./eventHandlers/modal.js')
const { loadReadyEvents } = require('./eventHandlers/ready.js')
const { loadInteractionEvents } = require('./eventHandlers/interaction.js')
const { loadOtherEvents } = require('./eventHandlers/other.js')

module.exports = {
    loadSlashCommands,
    loadButtonEvents,
    loadContextMenu,
    loadMessageEvents,
    loadModalEvents,
    loadReadyEvents,
    loadInteractionEvents,
    loadOtherEvents
}
