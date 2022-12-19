const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}

const Header = (param) => {
  return (
    <h1>{param.course}</h1>
  )
}

const Part = (param) => {
  return (
    <p>
        {param.part} {param.exercises}
    </p>
  )
}

const Content = (param) => {
  return (
    <div>
      <Part part={param.part1} exercises={param.exercises1}/>
      <Part part={param.part2} exercises={param.exercises2}/>
      <Part part={param.part3} exercises={param.exercises3}/>
    </div>
  )
}

const Total = (param) => {
  return (
    <p>Number of exercises {param.one + param.two + param.three}</p>
  )
}

export default App