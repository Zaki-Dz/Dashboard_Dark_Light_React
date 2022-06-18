import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Notification from './Notification'
import avatarOne from '../assets/profile-2.jpg'
import avatarTwo from '../assets/profile-3.jpg'

const Updates = ({ isDark }) => {
	return (
		<SUpdates isDark={isDark}>
			<h2>Recent Updates</h2>

			<div className="container">
				<Notification
					image={avatarOne}
					name="Mike Tyson"
					text="Received his order of: Thinkpad T410"
					isDark={isDark}
				/>

				<Notification
					image={avatarTwo}
					name="Kach Bnadem"
					text="Canceled his order of: Dell Inspire"
					isDark={isDark}
				/>
			</div>
		</SUpdates>
	)
}

export default Updates

const SUpdates = styled.div`
	.container {
		transition: 0.5s background, color;
		background-color: ${(props) => (props.isDark === true ? '#445' : 'white')};
		padding: 1rem;
		border-radius: 1rem;
		box-shadow: 1rem 1rem 1rem
			${(props) => (props.isDark === true ? '#0005' : '#ddf')};
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`

Updates.propTypes = {
	isDark: PropTypes.boolean,
}
