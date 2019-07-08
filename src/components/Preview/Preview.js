import React from 'react';


const Preview = ({htmlText}) => {
	return (
		<div className='pa4 center'>
			<textarea className='f4 pa2 w-70 h5 center' readOnly value={htmlText}></textarea>				
		</div>		
	)
}

export default Preview;