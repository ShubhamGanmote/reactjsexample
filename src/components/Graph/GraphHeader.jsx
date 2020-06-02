import React from 'react';
import ArrowDown from '../UI/ArrowDown';
import GraphMenu from '../UI/GraphMenu';
import GraphView from '../UI/GraphView';

const GraphHeader = (props) => {
	return (
		<div className='graph-header'>
			<div className='graph-header-left'>
				<span className='metric'>metric</span>
				<div className='selector'>
					<select className='custom-selection'>
						<option value='tablet-sales'>Tablet Sales</option>
					</select>
					<span className='down-arrow'>
						<ArrowDown />
					</span>
				</div>
			</div>
			<div className='graph-header-right'>
				<div>
					<GraphMenu />
				</div>
				<div>
					<GraphView />
				</div>
			</div>
		</div>
	);
};

export default GraphHeader;
