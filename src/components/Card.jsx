import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AssessmentIcon from '@material-ui/icons/Assessment'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Card = ({ title, ammount, progress, color, isDark }) => {
	return (
		<SCard color={color} isDark={isDark}>
			<div className="left">
				<div className="icon">
					<AssessmentIcon />
				</div>

				<p>Total {title}</p>

				<span className="ammount">${ammount}</span>

				<span className="time">Last 24 Hours</span>
			</div>

			<div className="right">
				<CircularProgressbar
					value={progress}
					text={progress + '%'}
					strokeWidth={15}
					styles={buildStyles({
						pathColor: color ? color : '#777cdc',
						textColor: color,
						trailColor: 'transparent',
						strokeWidth: 10,
					})}
				/>
			</div>
		</SCard>
	)
}

export default Card

const SCard = styled.div`
	background-color: ${(props) => (props.isDark === true ? '#445' : 'white')};
	padding: 1rem;
	border-radius: 1rem;
	box-shadow: 1rem 1rem 1rem
		${(props) => (props.isDark === true ? '#0005' : '#ddf')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	transition: 0.5s background, color;

	.left {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-weight: bold;

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

		.ammount {
			font-size: 1.5rem;
		}

		.time {
			font-size: 0.7rem;
			color: ${(props) => (props.isDark === true ? 'white' : '#888')};
		}
	}

	.right {
		padding: 1rem;

		svg {
			width: 100px;
		}
	}
`

Card.propTypes = {
	title: PropTypes.string,
	ammount: PropTypes.string,
	progress: PropTypes.number,
	color: PropTypes.string,
	isDark: PropTypes.boolean,
}
