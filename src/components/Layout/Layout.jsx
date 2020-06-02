import React from 'react';
import './Layout.scss';
import Header from '../Header/Header';
import SubHeaderTabs from '../SubHeaderTabs/SubHeaderTabs';
import Graph from '../Graph/Graph';
import ListView from '../ListView/ListView';

const Layout = (props) => {
	return (
		<>
			<div className='header'>
				<Header />
				<div className='subtabs'>
					<SubHeaderTabs />
				</div>
			</div>
			<Graph />
			<ListView />
		</>
	);
};

export default Layout;
