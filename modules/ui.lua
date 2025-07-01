if IsDuplicityVersion() then return end

---@class UIModule
local ui = {}

ui.IsOpen = false

---@param focus? boolean
---@param keepInput? boolean
function ui.setFocus(focus, keepInput)
    ---@cast focus boolean
    ---@cast keepInput boolean
    SetNuiFocus(focus, focus)
    SetNuiFocusKeepInput(keepInput)
end

---@param action string
---@param data table
---@param focus? boolean
---@param keepInput? boolean
function ui.sendMessage(action, data, focus, keepInput)

    if ui.IsOpen then
        return
    end
    
    SendNUIMessage({
        action = action,
        data = data
    })

    ui.IsOpen = true
    ui.setFocus(focus, keepInput)

    if keepInput then
        CreateThread(function()
            while ui.IsOpen do
                DisableControlAction(0, 24, true) --- disable attack
                DisableControlAction(0, 25, true) --- disable aim
                DisableControlAction(0, 1, true) --- disable cam view
                DisableControlAction(0, 2, true) --- disable cam view
                Wait(1)
            end
        end)
    end
end

function ui.onClosed()
    ui.IsOpen = false
    SetNuiFocus(ui.IsOpen, ui.IsOpen)
    SetNuiFocusKeepInput(ui.IsOpen)
end

return ui