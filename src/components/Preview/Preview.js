import React from 'react';


const Preview = ({htmlText}) => {
	return (
		<div className='ma4 mt0 '>
			<p className='f3'>HTML Preview </p>
			<div className='center'>
				<textarea
					id='preview' 
					className='f6 pa2 w-70 h5 center br4 ba b--white-025 shadow-5' 
					readOnly value={htmlText}>
				</textarea>
			</div>				
		</div>		
	)
}

export default Preview;
