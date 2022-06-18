import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Table = ({ isDark }) => {
	const tableData = [
		['Thinkpad T410', 19992, 'Paid', 'Delivered'],
		['Macbook Air M1', 24961, 'Due', 'Pending'],
		['Thinkpad X1', 10872, 'Refunded', 'Declined'],
		['Dell Inspire', 10409, 'Paid', 'Delivered'],
		['Macbook Pro M2', 98753, 'Due', 'Pending'],
	]

	return (
		<STable isDark={isDark}>
			<h2>Recent Orders</h2>

			<div className="container">
				<table>
					<thead>
						<tr>
							<th>Product Name</th>
							<th>Product Number</th>
							<th>Payment</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{tableData.map((row, i) => {
							return (
								<tr key={i}>
									<td>{row[0]}</td>
									<td>{row[1]}</td>
									<td>{row[2]}</td>
									<td
										style={{
											color:
												row[3] === 'Pending'
													? 'orange'
													: row[3] === 'Declined'
													? '#ff7782'
													: '#41f0be',
										}}
									>
										{row[3]}
									</td>
									<td>Details</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			<p>Show All</p>
		</STable>
	)
}

export default Table

const STable = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	.container {
		background-color: ${(props) => (props.isDark === true ? '#445' : 'white')};
		border-radius: 1rem;
		box-shadow: 1rem 1rem 1rem
			${(props) => (props.isDark === true ? '#0005' : '#ddf')};
		padding: 1rem;
		transition: 0.5s background, color;

		@media (max-width: 768px) {
			padding: 0.5rem;
		}

		table {
			border-collapse: collapse;
			width: 100%;

			th,
			td {
				padding: 0.5rem 1rem;
				text-align: center;

				@media (max-width: 768px) {
					padding-inline: 0.5rem;
				}
			}

			td {
				color: ${(props) => (props.isDark === true ? 'white' : '#888')};
				font-size: 14px;

				@media (max-width: 768px) {
					font-size: 12px;
				}
			}

			tbody tr:not(:last-child) {
				border-bottom: 1px solid #e4e2ef;
			}
		}
	}

	p {
		margin-top: 0.5rem;
		text-align: center;
	}
`

Table.propTypes = {
	isDark: PropTypes.boolean,
}
