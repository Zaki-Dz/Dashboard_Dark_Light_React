import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfilePicture from '../assets/profile-1.jpg'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const Heading = ({ isDark, toggleTheme, isOpen, toggleMenu }) => {
	return (
		<SHeading isDark={isDark}>
			<button onClick={toggleMenu}>
				{isOpen === true ? <CloseIcon /> : <MenuIcon />}
			</button>

			<h1>Dashboard</h1>

			<div className="menu">
				<div className="btns">
					<button className={isDark ? '' : 'active'} onClick={toggleTheme}>
						<WbSunnyIcon />
					</button>
					<button className={isDark ? 'active' : ''} onClick={toggleTheme}>
						<Brightness2Icon />
					</button>
				</div>

				<div className="profile">
					<div className="text">
						<div>
							Hey, <span className="name">Daniel</span>
						</div>

						<div>Admin</div>
					</div>

					<div className="avatar">
						<img src={ProfilePicture} />
					</div>
				</div>
			</div>
		</SHeading>
	)
}

export default Heading

const SHeading = styled.div`
	position: fixed;
	top: 0;
	background-color: ${(props) => (props.isDark ? '#393746' : '#f7f5f9')};
	width: calc(100% - 170px);
	margin-left: 170px;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 10;
	transition: 0.5s background, color;

	@media (max-width: 768px) {
		width: 100% !important;
		margin-left: 0 !important;

		h1 {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 992px) {
		width: calc(100% - 70px);
		margin-left: 70px;
	}

	> button{
		background-color: transparent;
		border: none;

		@media (min-width: 769px) {
			display: none;
		}
	}

	.menu {
		display: flex;
		align-items: center;
		gap: 1rem;

		@media (max-width: 768px) {
			gap: 0.5rem;
		}

		.btns {
			background-color: #e4e2ef;
			border-radius: 0.5rem;
			overflow: hidden;
			margin-right: 1rem;
			display: flex;
			color: #393746;

			@media (max-width: 768px) {
				display: none;
			}

			button {
				background-color: transparent;
				border-radius: 0.5rem;
				border: none;
				display: flex;
				padding: 0.25rem 0.5rem;
				transition: 0.2s;

				@media (max-width: 768px) {
					margin-right: 0;
					padding: 0.25rem;
				}

				&.active {
					background-color: #777ee2;
					color: white;
				}
			}
		}

		.profile {
			display: flex;
			align-items: center;
			gap: 1rem;

			@media (max-width: 768px) {
				gap: 0.5rem;
			}

			.text {
				display: flex;
				flex-direction: column;
				align-items: end;
				gap: 0.5rem;
				color: {isDark ? white : #888};

				span {
					color: {isDark ? white : #393746};
					font-weight: bold;
				}
			}

			.avatar {
				img {
					max-width: 50px;
					border-radius: 50%;
					overflow: hidden;
				}
			}
		}
	}
`

Heading.propTypes = {
	isDark: PropTypes.boolean,
	toggleTheme: PropTypes.func,
	isOpen: PropTypes.boolean,
	toggleMenu: PropTypes.func,
}
