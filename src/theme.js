import {mix} from 'polished'

const fontStack = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

const base = '#000'
const white = '#FFF'

const theme = {
	colors: {
		white: white,
		base: base,
		base88: mix(0.88, base, white),
		base66: mix(0.66, base, white),
		base44: mix(0.44, base, white),
		base22: mix(0.22, base, white),
		base11: mix(0.11, base, white),
		base06: mix(0.06, base, white),
		base03: mix(0.03, base, white),
	},
	fonts: {
		default: `FaktPro, ${fontStack}`
	},
	breakpoints: {
		xs: { width:  '0rem'},
		sm: { width: '32rem'},
		md: { width: '48rem'},
		lg: { width: '58rem'},
		xg: { width: '84rem'},
	},
}

export default theme
