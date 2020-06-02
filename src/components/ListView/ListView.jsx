import React, { useState } from 'react';
import './ListView.scss';
import ListHeader from './ListHeader';
import ListItems from './ListItems';
import { data } from '../../models/data';
import { groupBy } from '../../utils/groupBy';

const ListView = (props) => {
	const [selectedMenu, setSelectedMenu] = useState('all');

	const onSelectedMenu = (value) => {
		setSelectedMenu(value);
	};

	let updatedData = [];

	if (selectedMenu === 'all') {
		updatedData = data;
	} else if (selectedMenu === 'popular' || selectedMenu === 'most') {
		const tempData = groupBy(data, 'modelName');
		updatedData = [];
		Object.keys(tempData).map((_, i) =>
			updatedData.push(Object.values(tempData)[i].length)
		);
		var max = Math.max.apply(null, updatedData);
		Object.keys(tempData).map((_, i) => {
			const val = Object.values(tempData)[i];
			if (val.length === max) {
				return (updatedData = val);
			} else {
				return false;
			}
		});
	} else {
		updatedData = data.filter((d) => d.type === selectedMenu);
	}

	return (
		<>
			<div className='list-view-container'>
				<ListHeader onClick={onSelectedMenu} selectedMenu={selectedMenu} />
				<div className='lists'>
					<ul>
						<li>
							<ListItems data={updatedData} />
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ListView;
