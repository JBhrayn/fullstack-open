import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const dataFrom = (request) => request.then(response => response.data)

const getAll = () => {
    return dataFrom(axios.get(baseUrl))
}

const create = newObject => {
    return dataFrom(axios.post(baseUrl, newObject))
}

const update = (id, newObject) => {
    return dataFrom(axios.put(`${baseUrl}/${id}`, newObject))
}

export default {getAll, create, update}
