const Persons = ({contacts}) => contacts.map(p => <div key={p.name}>{p.name} {p.number}</div>)

export default Persons