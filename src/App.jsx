const App = () => {
/*   const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 */
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    return <h1>{props.course}</h1>
  }

  const Part = (props) => {
    return <p>{props.part} {props.exercise}</p>
  }
  
  const Content = (props) => {
    return <Part part={props.part} exercise={props.exercise}/>
  }

  const Total = (props) => {
    return <p>Number of exercises {props.exercises.reduce((a, b) => a+b, 0)}</p>
  }



  return (
    <div>
      <Header course={course}/>
     <Content part={part1.name} exercise={part1.exercises}/>
     <Content part={part2.name} exercise={part2.exercises}/>
     <Content part={part3.name} exercise={part3.exercises}/>
     <Total exercises={[part1.exercises, part2.exercises, part3.exercises]}/>
    </div>
  )
}

export default App