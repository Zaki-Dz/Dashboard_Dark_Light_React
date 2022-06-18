import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AssessmentIcon from '@material-ui/icons/Assessment'

const Analytic = ({ color, title, percentage, ammount, isDark }) => {
	return (
		<SAnalytic color={color} isDark={isDark}>
			<div className="icon">
				<AssessmentIcon />
			</div>

			<div className="content">
				<div className="left">
					<p>{title}</p>

					<span>Last 24 Hours</span>
				</div>

				<div
					className="middle"
					style={{ color: percentage > 0 ? '#41f0be' : '#ff7782' }}
				>
					{percentage > 0 ? '+' + percentage : percentage}%
				</div>

				<div className="right">{ammount}</div>
			</div>
		</SAnalytic>
	)
}

export default Analytic

const SAnalytic = styled.div`
	background-color: ${(props) => (props.isDark === true ? '#445' : 'white')};
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 1rem 1rem 1rem
		${(props) => (props.isDark === true ? '#0005' : '#ddf')};
	display: flex;
	gap: 0.5rem;
	transition: 0.5s background, color;

	.icon {
		color: white;
		background-color: ${(props) => (props.color ? props.color : '#777cdc')};
		width: 30px;
		height: 30px;
		padding: 1rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		display: flex;
		flex: 1;
		justify-content: space-between;
		gap: 0.5rem;

		.left {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			p {
				font-weight: bold;
			}

			span {
				font-size: 12px;
				color: ${(props) => (props.isDark === true ? 'white' : '#888')};
				font-weight: bold;
			}
		}

		.middle,
		.right {
			font-size: 12px;
			font-weight: bold;
		}
	}
`

Analytic.propTypes = {
	color: PropTypes.string,
	title: PropTypes.string,
	percentage: PropTypes.number,
	ammount: PropTypes.number,
	isDark: PropTypes.boolean,
}
