import React from 'react';
import './SubHeaderTabs.scss';

const SubHeaderTabs = (props) => {
	return (
		<>
			<div className='subheader-container'>
				<div className='tab-menu'>
					<ul>
						<li>
							<span className='tab-menu-item active'>
								sales
							</span>
						</li>
						<li>
							<span className='tab-menu-item'>alerts</span>
						</li>
						<li>
							<span className='tab-menu-item'>messages</span>
						</li>
						<li>
							<span className='tab-menu-item'>products</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default SubHeaderTabs;
