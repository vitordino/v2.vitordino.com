import React from 'react'
import { Link as BaseLink } from 'gatsby'

const Link = ({to, anchor, children, className, style}) => {
	const href = (to || {}).pathname || (typeof to === 'string' ? to : '/')
	const props = {className, style, children}
	if(!to || !href) return <span {...props}/>
	return (anchor || !/^[./]/.test(href)) ? (
		<a {...props} href={href} target="_blank" rel="noopener noreferrer"/>
	) : (
		<BaseLink {...props} to={to}/>
	)
}

export default Link
