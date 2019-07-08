import React from 'react';


const Editor = ({ onInputChange}) => {
	return (
		<div className='pa4 center'>
			<input className='f4 pa2 w-70 h5 center' type='text' onChange={onInputChange} />
		</div>
	)
}

export default Editor;