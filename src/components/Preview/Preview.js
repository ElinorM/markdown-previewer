import React from 'react';
import './Preview.css';

const Preview = ({htmlText}) => {
	return (
		<div className='ma4 mt0 '>
			<p className='f3'>HTML Preview </p>
			<div className='center'>
				<div id='preview' className='f6 pa2 w-70 center br4 ba b--white-025 shadow-5' dangerouslySetInnerHTML={{ __html: htmlText }} />
			</div>				
		</div>		
	)
}

export default Preview;
