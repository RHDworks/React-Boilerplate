local ui = require 'modules.ui'

RegisterCommand('testui', function ()
    ui.sendMessage('setVisible', {
        visible = true
    }, true, true)
end, false)

RegisterNUICallback('exit', function (data, cb)
    ui.onClosed()
    cb('ok')
end)