import React from 'react';


const Editor = ({ input, onInputChange}) => {
	return (
		<div className='pa4 center'>
			<textarea 
			className='f4 pa2 w-70 h5 center'  
			value={input} 
			onChange={onInputChange}>
			</textarea>
		</div>
	)
}

export default Editor;