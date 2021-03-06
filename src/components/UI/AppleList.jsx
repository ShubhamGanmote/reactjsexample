import React from 'react';
import './AppleList.scss';

const AppleList = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xlink='http://www.w3.org/1999/xlink'
			width='32'
			height='39'
			viewBox='0 0 32 39'
		>
			<defs>
				<filter
					id='filter'
					x='117'
					y='684'
					width='32'
					height='39'
					filterUnits='userSpaceOnUse'
				>
					<feFlood result='flood' floodColor='#adb6bc' />
					<feComposite result='composite' operator='in' in2='SourceGraphic' />
					<feBlend result='blend' in2='SourceGraphic' />
				</filter>
			</defs>
			<path
				id='apple_copy'
				data-name='apple copy'
				className='cls-1 apple_copy'
				d='M143.727,704.722a8.815,8.815,0,0,1,4.242-7.425,9.2,9.2,0,0,0-7.186-3.865c-3.06-.307-5.971,1.788-7.525,1.788s-3.945-1.742-6.483-1.7a9.624,9.624,0,0,0-8.129,4.89c-3.466,5.967-.888,14.808,2.49,19.649,1.651,2.369,3.619,5.03,6.2,4.935,2.488-.1,3.43-1.6,6.438-1.6s3.854,1.6,6.488,1.549c2.677-.05,4.374-2.415,6.013-4.791A21.423,21.423,0,0,0,149,712.611a8.623,8.623,0,0,1-5.273-7.889h0Zm-4.949-14.494A8.548,8.548,0,0,0,140.823,684a8.836,8.836,0,0,0-5.788,2.954,8.137,8.137,0,0,0-2.086,6.034,7.312,7.312,0,0,0,5.829-2.76h0Zm0,0'
				transform='translate(-117 -684)'
			/>
		</svg>
	);
};

export default AppleList;
