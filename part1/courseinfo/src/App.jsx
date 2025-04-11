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
      <Header courseName={course} />
      <Content
        parts={[
          { name: part1, exercises: exercises1 },
          { name: part2, exercises: exercises2 },
          { name: part3, exercises: exercises3 },
        ]}
      />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

function Header({ courseName }) {
  return (
    <h1>{courseName}</h1>
  );
}

function Content({ parts }) {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exerciseCount={part.exercises} />
      ))}
    </div>
  )
}

function Total({ exercises }) {
  return (
    <p>Number of exercises: {exercises}</p>
  )
}

function Part({ name, exerciseCount }) {
  return (
    <p>
      {name} {exerciseCount}
    </p>
  )
}


export default App