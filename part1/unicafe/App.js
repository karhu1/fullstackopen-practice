import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => {
  if (props.num === 0) {
    return(
      <tr>
        <td>No feedback given</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.num}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
return (
  <div>
    <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticLine text="good" num={good}/>
      <StatisticLine text="neutral" num={neutral}/>
      <StatisticLine text="bad" num={bad}/>
      <StatisticLine text="all" num={bad + good + neutral}/>
      <StatisticLine text="average" num={(bad + good + neutral)/3}/>
      <StatisticLine text="positive" num={(good/(bad + good + neutral)*100) + "%"}/>
      </tbody>
    </table>
  </div>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App