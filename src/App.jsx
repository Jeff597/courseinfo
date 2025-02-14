const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return <h1>{props.course}</h1>
  }

  const Part = (props) => {

    return <>
    <p>{props.parts[0].name} {props.parts[0].exercises}</p> 
    <p>{props.parts[1].name} {props.parts[1].exercises}</p> 
    <p>{props.parts[2].name} {props.parts[2].exercises}</p> 
  
    </>

  }
  
  const Content = (props) => {
    return <Part parts={props.parts}/>
  }

  const Total = (props) => {

    const exercises = [props.parts[0].exercises, props.parts[1].exercises, props.parts[2].exercises]
    return <p>Number of exercises {exercises.reduce((a, b) => a+b, 0)}</p>
  }



  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App