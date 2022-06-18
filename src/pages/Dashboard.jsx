import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Cards from '../components/Cards'
import Table from '../components/Table'

const Dashboard = ({ isDark }) => {
	return (
		<SDashboard>
			<Cards isDark={isDark} />

			<Table isDark={isDark} />
		</SDashboard>
	)
}

export default Dashboard

const SDashboard = styled.main`
	margin-left: 170px;
	margin-top: 80px;
	padding: 1rem;
	padding-top: 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: calc(100% - 170px - 270px);

	@media (max-width: 992px) {
		max-width: calc(100% - 70px);
		margin-left: 70px;
	}

	@media (max-width: 768px) {
		max-width: 100%;
		margin-left: 0;
		margin-top: 100px;
	}
`

Dashboard.propTypes = {
	isDark: PropTypes.boolean,
}
