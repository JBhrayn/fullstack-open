const Header = ({course}) => {
  return (
    <>
      <h1>
        {course.name}
      </h1>
    </>
  )
}

const Part = ({part, exercise}) => {
  return (
    <>
      <p>
        {part} {exercise}
      </p>
    </>
  )
}

const Content = ({course}) => {
  const { parts } = course;
  return (
    <>
      {parts.map(({ name, exercises }) => (
        <Part key={name} part={name} exercise={exercises} />
      ))}
    </>
  );
};


const Total = ({course}) => {
  const { parts } = course;
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

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

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

export default App
