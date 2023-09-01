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

const Header = ({ name }) => <h2>{name}</h2>

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

export default Course