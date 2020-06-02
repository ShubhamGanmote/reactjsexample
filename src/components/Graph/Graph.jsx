import React from 'react';
import './Graph.scss';
import GraphHeader from './GraphHeader';
import { Bar } from 'react-chartjs-2';
import { data } from '../../models/data';
import { groupBy } from '../../utils/groupBy';

const Graph = (props) => {
	const groupedByMonth = groupBy(data, 'month');
	const labels = [];
	Object.keys(groupedByMonth).map((_, i) =>
		labels.push(Object.keys(groupedByMonth)[i])
	);

	const dataValues = data.map((d) => parseFloat(d.price.toFixed(2)));

	const maxValue = Math.max.apply(null, dataValues);

	const groupedByType = groupBy(data, 'type');

	let groupedByAndroid = [];
	let groupedByWindows = [];
	let groupedByIpad = [];

	Object.keys(groupedByType).map((_, i) => {
		if (Object.keys(groupedByType)[i] === 'android') {
			return groupedByAndroid.push(Object.values(groupedByType)[i]);
		} else if (Object.keys(groupedByType)[i] === 'windows') {
			return groupedByWindows.push(Object.values(groupedByType)[i]);
		} else if (Object.keys(groupedByType)[i] === 'ipad') {
			return groupedByIpad.push(Object.values(groupedByType)[i]);
		} else {
			return false;
		}
	});

	groupedByAndroid = groupedByAndroid
		.flat()
		.map((d) => parseFloat(d.price.toFixed(2)));
	groupedByWindows = groupedByWindows
		.flat()
		.map((d) => parseFloat(d.price.toFixed(2)));
	groupedByIpad = groupedByIpad
		.flat()
		.map((d) => parseFloat(d.price.toFixed(2)));

	// groupedByAndroid = groupedByAndroid.reduce((a, b) => a + b, 0);
	// groupedByWindows = groupedByWindows.reduce((a, b) => a + b, 0);
	// groupedByIpad = groupedByIpad.reduce((a, b) => a + b, 0);

	const dataSource = {
		labels: labels,
		datasets: [
			{
				backgroundColor: 'rgb(42, 187, 156)',
				borderColor: 'rgb(42, 187, 156)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgb(42, 187, 156)',
				hoverBorderColor: 'rgb(42, 187, 156)',
				data: groupedByAndroid,
			},
			{
				backgroundColor: 'rgb(58, 153, 217)',
				borderColor: 'rgb(58, 153, 217)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgb(58, 153, 217)',
				hoverBorderColor: 'rgb(58, 153, 217)',
				data: groupedByWindows,
			},
			{
				backgroundColor: 'rgb(42, 187, 156)',
				borderColor: 'rgb(42, 187, 156)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgb(42, 187, 156)',
				hoverBorderColor: 'rgb(42, 187, 156)',
				data: groupedByIpad,
			},
		],
	};

	const opts = {
		legend: { display: false },
		maintainAspectRatio: false,
		scales: {
			xAxes: [
				{
					gridLines: {
						display: true,
						color: 'rgb(88, 97, 104)',
					},
					categoryPercentage: 0.1,
					barPercentage: 0.6,
					// barThickness: 8,
				},
			],
			yAxes: [
				{
					ticks: {
						min: 0,
						max: maxValue,
					},
					gridLines: {
						display: true,
						color: 'rgb(88, 97, 104)',
					},
				},
			],
		},
	};

	return (
		<>
			<div className='graph-container'>
				<GraphHeader />
				<div className='graph-main-container'>
					<Bar data={dataSource} options={opts} />
				</div>
			</div>
		</>
	);
};

export default Graph;
