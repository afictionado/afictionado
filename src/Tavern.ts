import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const Tavern: CustomThemeConfig = {
	name: 'Tavern',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Signika Negative, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Signika Negative, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '16px',
		'--theme-rounded-container': '12px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #E6D2B7
		'--color-primary-50': '251 248 244', // #fbf8f4
		'--color-primary-100': '250 246 241', // #faf6f1
		'--color-primary-200': '249 244 237', // #f9f4ed
		'--color-primary-300': '245 237 226', // #f5ede2
		'--color-primary-400': '238 224 205', // #eee0cd
		'--color-primary-500': '230 210 183', // #E6D2B7
		'--color-primary-600': '207 189 165', // #cfbda5
		'--color-primary-700': '173 158 137', // #ad9e89
		'--color-primary-800': '138 126 110', // #8a7e6e
		'--color-primary-900': '113 103 90', // #71675a
		// secondary | #43AA8B
		'--color-secondary-50': '227 242 238', // #e3f2ee
		'--color-secondary-100': '217 238 232', // #d9eee8
		'--color-secondary-200': '208 234 226', // #d0eae2
		'--color-secondary-300': '180 221 209', // #b4ddd1
		'--color-secondary-400': '123 196 174', // #7bc4ae
		'--color-secondary-500': '67 170 139', // #43AA8B
		'--color-secondary-600': '60 153 125', // #3c997d
		'--color-secondary-700': '50 128 104', // #328068
		'--color-secondary-800': '40 102 83', // #286653
		'--color-secondary-900': '33 83 68', // #215344
		// tertiary | #254441
		'--color-tertiary-50': '222 227 227', // #dee3e3
		'--color-tertiary-100': '211 218 217', // #d3dad9
		'--color-tertiary-200': '201 208 208', // #c9d0d0
		'--color-tertiary-300': '168 180 179', // #a8b4b3
		'--color-tertiary-400': '102 124 122', // #667c7a
		'--color-tertiary-500': '37 68 65', // #254441
		'--color-tertiary-600': '33 61 59', // #213d3b
		'--color-tertiary-700': '28 51 49', // #1c3331
		'--color-tertiary-800': '22 41 39', // #162927
		'--color-tertiary-900': '18 33 32', // #122120
		// success | #43AA8B
		'--color-success-50': '227 242 238', // #e3f2ee
		'--color-success-100': '217 238 232', // #d9eee8
		'--color-success-200': '208 234 226', // #d0eae2
		'--color-success-300': '180 221 209', // #b4ddd1
		'--color-success-400': '123 196 174', // #7bc4ae
		'--color-success-500': '67 170 139', // #43AA8B
		'--color-success-600': '60 153 125', // #3c997d
		'--color-success-700': '50 128 104', // #328068
		'--color-success-800': '40 102 83', // #286653
		'--color-success-900': '33 83 68', // #215344
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #DB504A
		'--color-error-50': '250 229 228', // #fae5e4
		'--color-error-100': '248 220 219', // #f8dcdb
		'--color-error-200': '246 211 210', // #f6d3d2
		'--color-error-300': '241 185 183', // #f1b9b7
		'--color-error-400': '230 133 128', // #e68580
		'--color-error-500': '219 80 74', // #DB504A
		'--color-error-600': '197 72 67', // #c54843
		'--color-error-700': '164 60 56', // #a43c38
		'--color-error-800': '131 48 44', // #83302c
		'--color-error-900': '107 39 36', // #6b2724
		// surface | #F3E9DC
		'--color-surface-50': '253 252 250', // #fdfcfa
		'--color-surface-100': '253 251 248', // #fdfbf8
		'--color-surface-200': '252 250 246', // #fcfaf6
		'--color-surface-300': '250 246 241', // #faf6f1
		'--color-surface-400': '247 240 231', // #f7f0e7
		'--color-surface-500': '243 233 220', // #F3E9DC
		'--color-surface-600': '219 210 198', // #dbd2c6
		'--color-surface-700': '182 175 165', // #b6afa5
		'--color-surface-800': '146 140 132', // #928c84
		'--color-surface-900': '119 114 108' // #77726c
	}
};
