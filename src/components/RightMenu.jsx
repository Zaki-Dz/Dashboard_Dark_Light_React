import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Updates from './Updates'
import Analytics from './Analytics'

const RightMenu = ({ isDark }) => {
	return (
		<SRightMenu>
			<Updates isDark={isDark} />

			<Analytics isDark={isDark} />
		</SRightMenu>
	)
}

export default RightMenu

const SRightMenu = styled.div`
	position: absolute;
	top: 100px;
	right: 0;
	width: 270px;
	padding-right: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (max-width: 992px) {
		display: none;
	}

	h2 {
		margin-bottom: 0.5rem;
	}
`

RightMenu.propTypes = {
	isDark: PropTypes.boolean,
}
