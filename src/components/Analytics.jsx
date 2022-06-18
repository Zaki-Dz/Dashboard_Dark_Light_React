import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import Analytic from './Analytic'

const Analytics = ({ isDark }) => {
	const data = [
		['', 'Online Orders', 26, 3849],
		['#ff7782', 'Offline Orders', -17, 1100],
		['#41f0be', 'New Customers', 18, 823],
	]

	return (
		<SAnalytics isDark={isDark}>
			<h2>Sales Analytics</h2>

			<div className="container">
				{data.map((row, i) => {
					return (
						<Analytic
							key={i}
							color={row[0]}
							title={row[1]}
							percentage={row[2]}
							ammount={row[3]}
							isDark={isDark}
						/>
					)
				})}
			</div>

			<button>
				<AddOutlinedIcon />
				Add Product
			</button>
		</SAnalytics>
	)
}

export default Analytics

const SAnalytics = styled.div`
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 1rem;
		border: 2px dashed
			${(props) => (props.isDark === true ? 'white' : '#777cdc')};
		color: ${(props) => (props.isDark === true ? 'white' : '#777cdc')};
		background-color: ${(props) => (props.isDark === true ? '#445' : 'white')};
		transition: 0.5s background, color;

		&:hover {
			background-color: #777cdc;
			color: white;
		}
	}
`

Analytics.propTypes = {
	isDark: PropTypes.boolean,
}
