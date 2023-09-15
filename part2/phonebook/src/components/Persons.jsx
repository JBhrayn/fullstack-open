const Persons = ({contacts, removeContact}) => {
    return contacts.map(
        p => 
            <div 
                key={p.name}>{p.name} {p.number}
                <button onClick={() => removeContact(p.id)}>delete</button>
            </div>
    )
}

export default Persons