import React from 'react';
import './Edit.scss';

const Edit = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='19px' height='19px'>
			<defs>
				<filter id='Filter_0'>
					<feFlood
						floodColor='rgb(255, 255, 255)'
						floodOpacity='1'
						result='floodOut'
					/>
					<feComposite
						operator='atop'
						in='floodOut'
						in2='SourceGraphic'
						result='compOut'
					/>
					<feBlend mode='normal' in='compOut' in2='SourceGraphic' />
				</filter>
			</defs>
			<g filter='url(#Filter_0)'>
				<path
					fillRule='evenodd'
					fill='rgb(255, 255, 255)'
					d='M18.528,3.516 L15.737,0.620 C15.174,0.037 14.396,0.064 13.754,0.705 L2.069,12.366 L0.215,18.005 C0.007,18.785 0.375,19.168 1.145,18.970 L6.722,17.193 L18.406,5.532 C19.049,4.891 19.091,4.101 18.528,3.516 ZM1.742,17.428 L3.112,13.221 L5.903,16.116 L1.742,17.428 ZM6.955,15.066 C6.000,14.074 4.434,12.451 4.164,12.169 L11.002,5.345 L13.794,8.241 L6.955,15.066 ZM14.846,7.191 L12.054,4.295 L14.158,2.195 C14.664,1.661 14.711,1.663 15.150,2.153 L17.011,4.085 C17.463,4.560 17.495,4.551 16.950,5.091 L14.846,7.191 Z'
				/>
			</g>
		</svg>
	);
};

export default Edit;
