import React from 'react';

const ListHeader = (props) => {
	return (
		<div className='list-view-header-bar-container'>
			<ul>
				<li>
					<span
						className={
							props.selectedMenu.match('sort')
								? 'list-view-header-sorting-items active'
								: 'list-view-header-sorting-items'
						}
						// onClick={() => props.onClick('sort')}
					>
						sort by
					</span>
				</li>
				<li>
					<span
						className={
							props.selectedMenu.match('all')
								? 'list-view-header-sorting-items active'
								: 'list-view-header-sorting-items'
						}
						onClick={() => props.onClick('all')}
					>
						all
					</span>
				</li>
				<li>
					<span
						className={
							props.selectedMenu.match('popular')
								? 'list-view-header-sorting-items active'
								: 'list-view-header-sorting-items'
						}
						onClick={() => props.onClick('popular')}
					>
						popular
					</span>
				</li>
				<li>
					<span
						className={
							props.selectedMenu.match('most')
								? 'list-view-header-sorting-items active'
								: 'list-view-header-sorting-items'
						}
						onClick={() => props.onClick('most')}
					>
						most sold
					</span>
				</li>
				<li>
					<span
						className={
							props.selectedMenu.match('ipad')
								? 'list-view-header-sorting-items active'
								: 'list-view-header-sorting-items'
						}
						onClick={() => props.onClick('ipad')}
					>
						ipad
					</span>
				</li>
				<li>
					<span
						className={
							props.selectedMenu.match('android')
								? 'list-view-header-sorting-items active'
								: 'list-view-header-sorting-items'
						}
						onClick={() => props.onClick('android')}
					>
						android
					</span>
				</li>
				<li>
					<span
						className={
							props.selectedMenu.match('windows')
								? 'list-view-header-sorting-items active'
								: 'list-view-header-sorting-items'
						}
						onClick={() => props.onClick('windows')}
					>
						windows
					</span>
				</li>
			</ul>
		</div>
	);
};

export default ListHeader;
