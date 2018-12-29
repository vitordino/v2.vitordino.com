import React from 'react'
import { Link as BaseLink } from 'gatsby'

const Link = ({to, children, className, style}) => {
	const href = (to || {}).pathname || (typeof to === 'string' ? to : '/')
	const props = {className, style, children}
	return /^[./]/.test(href) ? (
		<BaseLink {...props} to={to}/>
	) : (
		<a {...props} href={href} target="_blank" rel="noopener noreferrer"/>
	)
}

export default Link
