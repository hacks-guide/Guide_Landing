import { en_US as localeData } from './strings'

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.pages["donations"], link: `/donations` }
	],
	footer: {
		copyright: 'Copyright © 2024 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` }
		]
	}
};

export default {
	lang: "en",
	label: localeData.language,
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
