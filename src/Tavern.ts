import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const Tavern: CustomThemeConfig = {
	name: 'Tavern',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #D84549
		'--color-primary-50': '249 227 228', // #f9e3e4
		'--color-primary-100': '247 218 219', // #f7dadb
		'--color-primary-200': '245 209 210', // #f5d1d2
		'--color-primary-300': '239 181 182', // #efb5b6
		'--color-primary-400': '228 125 128', // #e47d80
		'--color-primary-500': '216 69 73', // #D84549
		'--color-primary-600': '194 62 66', // #c23e42
		'--color-primary-700': '162 52 55', // #a23437
		'--color-primary-800': '130 41 44', // #82292c
		'--color-primary-900': '106 34 36', // #6a2224
		// secondary | #DF6467
		'--color-secondary-50': '250 232 232', // #fae8e8
		'--color-secondary-100': '249 224 225', // #f9e0e1
		'--color-secondary-200': '247 216 217', // #f7d8d9
		'--color-secondary-300': '242 193 194', // #f2c1c2
		'--color-secondary-400': '233 147 149', // #e99395
		'--color-secondary-500': '223 100 103', // #DF6467
		'--color-secondary-600': '201 90 93', // #c95a5d
		'--color-secondary-700': '167 75 77', // #a74b4d
		'--color-secondary-800': '134 60 62', // #863c3e
		'--color-secondary-900': '109 49 50', // #6d3132
		// tertiary | #E58386
		'--color-tertiary-50': '251 236 237', // #fbeced
		'--color-tertiary-100': '250 230 231', // #fae6e7
		'--color-tertiary-200': '249 224 225', // #f9e0e1
		'--color-tertiary-300': '245 205 207', // #f5cdcf
		'--color-tertiary-400': '237 168 170', // #eda8aa
		'--color-tertiary-500': '229 131 134', // #E58386
		'--color-tertiary-600': '206 118 121', // #ce7679
		'--color-tertiary-700': '172 98 101', // #ac6265
		'--color-tertiary-800': '137 79 80', // #894f50
		'--color-tertiary-900': '112 64 66', // #704042
		// success | #2fac76
		'--color-success-50': '224 243 234', // #e0f3ea
		'--color-success-100': '213 238 228', // #d5eee4
		'--color-success-200': '203 234 221', // #cbeadd
		'--color-success-300': '172 222 200', // #acdec8
		'--color-success-400': '109 197 159', // #6dc59f
		'--color-success-500': '47 172 118', // #2fac76
		'--color-success-600': '42 155 106', // #2a9b6a
		'--color-success-700': '35 129 89', // #238159
		'--color-success-800': '28 103 71', // #1c6747
		'--color-success-900': '23 84 58', // #17543a
		// warning | #F9DC5C
		'--color-warning-50': '254 250 231', // #fefae7
		'--color-warning-100': '254 248 222', // #fef8de
		'--color-warning-200': '254 246 214', // #fef6d6
		'--color-warning-300': '253 241 190', // #fdf1be
		'--color-warning-400': '251 231 141', // #fbe78d
		'--color-warning-500': '249 220 92', // #F9DC5C
		'--color-warning-600': '224 198 83', // #e0c653
		'--color-warning-700': '187 165 69', // #bba545
		'--color-warning-800': '149 132 55', // #958437
		'--color-warning-900': '122 108 45', // #7a6c2d
		// error | #ff52a8
		'--color-error-50': '255 229 242', // #ffe5f2
		'--color-error-100': '255 220 238', // #ffdcee
		'--color-error-200': '255 212 233', // #ffd4e9
		'--color-error-300': '255 186 220', // #ffbadc
		'--color-error-400': '255 134 194', // #ff86c2
		'--color-error-500': '255 82 168', // #ff52a8
		'--color-error-600': '230 74 151', // #e64a97
		'--color-error-700': '191 62 126', // #bf3e7e
		'--color-error-800': '153 49 101', // #993165
		'--color-error-900': '125 40 82', // #7d2852
		// surface | #3F4C55
		'--color-surface-50': '226 228 230', // #e2e4e6
		'--color-surface-100': '217 219 221', // #d9dbdd
		'--color-surface-200': '207 210 213', // #cfd2d5
		'--color-surface-300': '178 183 187', // #b2b7bb
		'--color-surface-400': '121 130 136', // #798288
		'--color-surface-500': '63 76 85', // #3F4C55
		'--color-surface-600': '57 68 77', // #39444d
		'--color-surface-700': '47 57 64', // #2f3940
		'--color-surface-800': '38 46 51', // #262e33
		'--color-surface-900': '31 37 42' // #1f252a
	}
};
