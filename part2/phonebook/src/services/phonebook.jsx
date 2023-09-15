import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const concat = (url, id) => `${url}/${id}`
const dataFrom = (request) => request.then(response => response.data)

const getAll = () => {
    return dataFrom(axios.get(baseUrl))
}

const create = newObject => {
    return dataFrom(axios.post(baseUrl, newObject))
}

const update = (id, newObject) => {
    return dataFrom(axios.put(concat(baseUrl, id), newObject))
}

const remove = (id) => {
    return dataFrom(axios.delete(concat(baseUrl, id)))
}

export default {getAll, create, update, remove}
