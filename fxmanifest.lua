fx_version 'cerulean'
game 'gta5'

description "(Vite + React + Mantine + Tailwindcss) Boilerplate"
author "RHD Team"
version "1.0.0"

lua54 'yes'
use_experimental_fxv2_oal 'yes'

ui_page 'web/build/index.html'

shared_scripts {
	'@ox_lib/init.lua',
	'shared/*.lua'
}

client_scripts {
	'client/*.lua'
}

server_scripts {
	'server/*.lua'
}

files {
	'web/build/index.html',
	'web/build/assets/*.*',

	'modules/*.lua'
}
