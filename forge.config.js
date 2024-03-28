module.exports = {
	packagerConfig: {
		icon: 'public/favicon',
	},
	makers: [
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin', 'win32', 'linux'],
		},
	],
}
