import { Button } from 'react-bootstrap';
export default function button({name,bg,color,value,border,width,height,radius,margin,padding,click})
{
	return(
		<Button className={name}
		style={{
			background:bg ? bg : "black",
			color:color ? color : "white",
			border:border ? border : "none",
			width:width,
			height:height,
			margin : margin ,
			borderRadius:radius ? radius : "10px",
			padding : padding ? padding : "10px 20px"
			}}
		onClick={click}
		>
		{value}
		</Button>
		);

}