import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Notification = ({ image, name, text, isDark }) => {
	return (
		<SNotification isDark={isDark}>
			<img src={image} />

			<div className="content">
				<p>
					<span>{name}</span> {text}
				</p>
			</div>
		</SNotification>
	)
}

export default Notification

const SNotification = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	p {
		color: ${(props) => (props.isDark === true ? 'white' : '#888')};
		font-size: 12px;
		transition: 0.5s background, color;

		span {
			color: ${(props) => (props.isDark === true ? 'white' : '#393746')};
			font-weight: bold;
			transition: 0.5s background, color;
		}
	}

	img {
		max-width: 50px;
		border-radius: 50%;
	}
`

Notification.propTypes = {
	image: PropTypes.node,
	name: PropTypes.string,
	text: PropTypes.string,
	isDark: PropTypes.boolean,
}
