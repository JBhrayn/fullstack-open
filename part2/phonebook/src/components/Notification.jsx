const Notification = ({ message }) => {
    if (message === 'hidden') {
      return null
    }
    let color = 'green'
    if (message.includes('removed')){
      color = 'red'
    }

    const notificationStyle = {
        color: color,
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
  
    return (
      <div style={notificationStyle}>
        {message}
      </div>
    )
  }

export default Notification