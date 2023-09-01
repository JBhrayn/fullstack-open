const Header = ({ name }) => <h2>{name}</h2>

const Course = ({name, parts}) => {
  const sum = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises 
  }, 0)

  return (
    <>
      <Header name={name}/>
      <Content parts={parts}/>
      <Total sum={sum}/>
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

const Total = ({ sum }) => 
  <p><strong>total of {sum} exercises</strong></p>

  const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course key={course.id} name={course.name} parts={course.parts}/>
      )}
    </div>
  )
}

export default App