import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from './Card'

const Cards = ({ isDark }) => {
  return (
    <Container isDark={isDark}>
      <input type="date" />

      <SCards>
        <Card
          title="Sales"
          ammount="25,024"
          progress={81}
          color="#777cdc"
          isDark={isDark}
        />

        <Card
          title="Expenses"
          ammount="14,160"
          progress={62}
          color="#ff7782"
          isDark={isDark}
        />

        <Card
          title="Income"
          ammount="10,864"
          progress={44}
          color="#41f0be"
          isDark={isDark}
        />
      </SCards>
    </Container>
  )
}

export default Cards

const Container = styled.div`
  input {
    background-color: ${(props) =>
      props.isDark === true ? '#445' : '#e2e2f1'};
    border: none;
    color: ${(props) => (props.isDark === true ? 'white' : '')};
    border-radius: 0.5rem;
    padding: 0.5rem;
    transition: 0.5s background, color;
  }
`

const SCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`

Cards.propTypes = {
  isDark: PropTypes.boolean,
}
