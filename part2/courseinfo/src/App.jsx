const Header = ({ name }) => <h1>{name}</h1>

const Course = ({name, parts}) => {
  return (
    <>
      <Header name={name}/>
      <Content parts={parts}/>
    </>
  )
}

const Content = ({ parts }) => 
  <>
    {parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises}/>)}
  </>

const Part = ({ name, exercises}) => 
  <p>
    {name} {exercises}
  </p>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course key={course.id} name={course.name} parts={course.parts}/>
    </div>
  )
}

export default App