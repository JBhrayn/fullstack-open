import { useState } from 'react'

const Section = ({headerText, anecdote}) => {
  const {text, votes} = anecdote

  if(headerText.includes('vote') && votes === 0) return (<><h1>No votes yet</h1></>)

  return (
    <>
      <h1>{headerText}</h1>
      <div>{text}</div>
      <div>has {votes} {(votes > 1 ? 'votes' : ' vote')}</div>
    </>
  )
}

const indexWithMostVotes = (votes) => {
  let maxIndex = 0;
  for (let i = 1; i < votes.length; i++)
    if (votes[i] > votes[maxIndex])
      maxIndex = i;
  return maxIndex
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [top, setTop] = useState(0)

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    const index = indexWithMostVotes(newVotes)

    setVotes(newVotes)
    setTop(index)
  }

  const nextAnecdote = () => {
    const randomInt = Math.floor(Math.random() * (anecdotes.length));
    setSelected(randomInt)
  }

  const getAnecdote = (index) => {
    return {
      text : anecdotes[index],
      votes : votes[index]
    }
  }

  return (
    <div>
      <Section headerText={'Anecdote of the day'} anecdote={getAnecdote(selected)}/>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <Section headerText={'Anecdote with most vote'} anecdote={getAnecdote(top)}/>
    </div>
  )
}


export default App