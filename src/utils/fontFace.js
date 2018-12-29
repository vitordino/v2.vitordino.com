const fontFace = ({name, src, fontWeight = 400, fontStyle = 'normal'}) => (
	`@font-face{
			font-family: "${name}";
			font-style: ${fontStyle};
			font-weight: ${fontWeight};
			src: url("/assets/fonts/${name}/${src}.eot");
			src: url("/assets/fonts/${name}/${src}.eot?#iefix") format("embedded-opentype"),
			     url("/assets/fonts/${name}/${src}.woff") format("woff"),
			     url("/assets/fonts/${name}/${src}.woff2") format("woff2"),
			     url("/assets/fonts/${name}/${src}.ttf") format("truetype");
		}`
)

export default fontFace
