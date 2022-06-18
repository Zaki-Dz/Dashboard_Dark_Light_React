import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import ReceiptLongIcon from '@material-ui/icons/Receipt'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'

const Sidebar = ({ isDark, toggleTheme, isOpen }) => {
	return (
		<SSidebar isDark={isDark} isOpen={isOpen}>
			<div className="top">
				<div className="logo">
					<img src={logo} />

					<p>
						Ega<span>tor</span>
					</p>
				</div>
			</div>

			<nav>
				<ul>
					<li className="active">
						<a href="#">
							<DashboardIcon />
							<span>Dashboard</span>
						</a>
					</li>

					<li>
						<a href="#">
							<PersonOutlineIcon />
							<span>Customers</span>
						</a>
					</li>

					<li>
						<a href="#">
							<ReceiptLongIcon />
							<span>Orders</span>
						</a>
					</li>

					<li>
						<a href="#">
							<MailOutlineIcon />
							<span>
								Messages <span className="number">32</span>
							</span>
						</a>
					</li>

					<li>
						<a href="#">
							<SettingsOutlinedIcon />
							<span>Settings</span>
						</a>
					</li>

					<li>
						<a href="#">
							<AddOutlinedIcon />
							<span>Add Product</span>
						</a>
					</li>
				</ul>
			</nav>

			<div className="logout">
				<a href="#">
					<ExitToAppIcon />

					<span>Logout</span>
				</a>

				<div className="btns">
					<button className={isDark ? '' : 'active'} onClick={toggleTheme}>
						<WbSunnyIcon />
					</button>
					<button className={isDark ? 'active' : ''} onClick={toggleTheme}>
						<Brightness2Icon />
					</button>
				</div>
			</div>
		</SSidebar>
	)
}

export default Sidebar

const SSidebar = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-block: 1rem;
	height: 100vh;
	max-width: 170px;
	width: 100%;
	background-color: ${(props) => (props.isDark ? '#393746' : '#f7f5f9')};

	@media (max-width: 768px) {
		transform: ${(props) =>
			props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
		max-width: 170px !important;
		box-shadow: 0 0 ${(props) => (props.isOpen ? '0.25rem' : '0')};
		transition: 0.3s;
		z-index: 20;
	}

	@media (max-width: 992px) {
		max-width: 70px;
	}

	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem;

		.logo {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			img {
				max-width: 40px;
			}

			p {
				font-size: 1.5rem;
				font-weight: bold;
				text-transform: uppercase;

				@media (max-width: 768px) {
					display: unset !important;
				}

				@media (max-width: 992px) {
					display: none;
				}

				span {
					color: #ff7782;
				}
			}
		}

		button {
			background-color: transparent;
			border: none;
		}
	}

	nav {
		flex: 1;

		ul {
			display: flex;
			flex-direction: column;

			li {
				&.active {
					position: relative;
					background-color: #e2e2f1;
					color: #777cdc;
					font-weight: bold;

					&::before {
						content: '';
						position: absolute;
						height: 100%;
						width: 5px;
						background-color: #777cdc;
					}
				}

				a {
					display: flex;
					align-items: center;
					gap: 1rem;
					padding: 1rem;
					padding-right: 0;
					transition: 0.2s;

					@media (max-width: 768px) {
						span {
							display: unset !important;
						}
					}

					@media (max-width: 992px) {
						span {
							display: none;
						}
					}

					.number {
						background-color: #ff7782;
						color: white;
						padding: 0.25rem 0.5rem;
						font-weight: bold;
						border-radius: 0.5rem;
					}

					&:hover {
						background-color: #e2e2f1;
						padding-left: 1.5rem;
						color: #777cdc;
					}
				}
			}
		}
	}

	.logout {
		display: flex;
		align-items: center;
		justify-content: space-between;

		a {
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 1rem;
			transition: 0.2s;

			@media (max-width: 992px) {
				span {
					display: none;
				}
			}

			&:hover {
				background-color: #e2e2f1;
				padding-left: 1.5rem;
				color: #777cdc;
			}
		}

		.btns {
			background-color: #e4e2ef;
			border-radius: 0.5rem;
			overflow: hidden;
			margin-right: 1rem;
			display: flex;
			color: #393746;

			@media (min-width: 769px) {
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
	}
`

Sidebar.propTypes = {
	isDark: PropTypes.boolean,
	isOpen: PropTypes.boolean,
	toggleTheme: PropTypes.func,
}
