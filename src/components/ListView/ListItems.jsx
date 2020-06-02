import React from 'react';
import Calendar from '../UI/Calendar';
import Clock from '../UI/Clock';
import AndroidList from '../UI/AndroidList';
import AppleList from '../UI/AppleList';
import WindowsList from '../UI/WindowsList';

const ListItems = (props) => {
	return props.data.map((detail, index) => {
		return (
			<div className='list-item-contents' key={index}>
				<div className='dot'>
					{detail.type === 'android' && <div className='android' />}
					{detail.type === 'ipad' && <div className='ipad' />}
					{detail.type === 'windows' && <div className='windows' />}
				</div>
				<div className='image'>
					{detail.type === 'android' && <AndroidList />}
					{detail.type === 'ipad' && <AppleList />}
					{detail.type === 'windows' && <WindowsList />}
				</div>
				<div>
					<div className='list-item-name'>{detail.modelName}</div>
					<div className='list-item-serial-no'>{detail.serialNumber}</div>
				</div>
				<div className='list-date-time-container'>
					<div className='list-item-calendar-container'>
						<span className='list-item-calendar-image'>
							<Calendar />
						</span>
						<span className='list-item-calendar'>{detail.date}</span>
					</div>
					<div className='list-item-calendar-container'>
						<span className='list-item-calendar-image'>
							<Clock />
						</span>
						<span className='list-item-calendar'>{detail.time}</span>
					</div>
				</div>
				<div>
					<span className='list-item-price'>${detail.price.toFixed(2)}</span>
				</div>
			</div>
		);
	});
};

export default ListItems;
