import React from 'react';


const Editor = ({ input, onInputChange}) => {
	return (
	<div className='ma4 mt0 '>
		<p className='f3'>Markdown input</p>
		<div className='center'>
			<textarea 
				id='editor'
				className='f6 pa2 w-70 h5 center br4 ba b--white-025 shadow-5'  
				value={input} 
				onChange={onInputChange}>
			</textarea>	
		</div>
	</div>
	)
}

export default Editor;

