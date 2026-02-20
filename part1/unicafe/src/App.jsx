import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
    // <tr>
    //   <td>{props.text}</td>
    //   <td>{props.value}</td>
    // </tr>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <thead>
          <tr><th colSpan="2"><h1>Statistics</h1></th></tr>
        </thead>
        <tbody>
          <tr><td>Good:</td><td>{props.good}</td></tr>
          <tr><td>Neutral:</td><td>{props.neutral}</td></tr>
          <tr><td>Bad:</td><td>{props.bad}</td></tr>
          <tr><td>Average:</td><td>{props.average}</td></tr>
          <tr><td>Positive:</td><td>{props.positive}%</td></tr>
        </tbody>
      </table>
    </div >
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const average = (good - bad) / (good + neutral + bad)
  const positive = (good / (good + neutral + bad)) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive} />
    </div>
  )
}

export default App