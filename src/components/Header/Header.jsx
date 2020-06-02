import React, { useState, useEffect } from 'react';
import './Header.scss';
import InfoMenu from '../UI/InfoMenu';
import Apple from '../UI/Apple';
import Windows from '../UI/Windows';
import Android from '../UI/Android';
import Refresh from '../UI/Refresh';
import Edit from '../UI/Edit';
import { groupBy } from '../../utils/groupBy';
import { data } from '../../models/data';

const Header = (props) => {
	const [androidCount, setAndroidCount] = useState(0);
	const [windowsCount, setWindowsCount] = useState(0);
	const [ipadCount, setIpadCount] = useState(0);

	useEffect(() => {
		const tempData = groupBy(data, 'type');
		Object.keys(tempData).map((_, i) => {
			if (Object.keys(tempData)[i] === 'android') {
				return setAndroidCount(Object.values(tempData)[i].length);
			} else if (Object.keys(tempData)[i] === 'ipad') {
				return setIpadCount(Object.values(tempData)[i].length);
			} else if (Object.keys(tempData)[i] === 'windows') {
				return setWindowsCount(Object.values(tempData)[i].length);
			} else {
				return false;
			}
		});
	});

	return (
		<>
			<div className='header-container'>
				<div className='header-left-side'>
					<div className='hamburger'>
						<InfoMenu />
					</div>
					<div className='header-title-container'>
						<span className='header-title-month'>Summer 2015</span>
						<span className='header-title'>Tablet Sales</span>
					</div>
				</div>
				<div className='header-right-side'>
					<div className='ipad-container'>
						<Apple />
						<span className='type'>ipad</span>
						<span className='count'>{ipadCount}</span>
					</div>
					<div className='ipad-container'>
						<Android />
						<span className='type'>android</span>
						<span className='count'>{androidCount}</span>
					</div>
					<div className='ipad-container'>
						<Windows />
						<span className='type'>windows</span>
						<span className='count'>{windowsCount}</span>
					</div>
					<div className='header-edit-container'>
						<div>
							<Refresh />
						</div>
						<div>
							<Edit />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
