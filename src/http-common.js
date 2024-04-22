import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:8585/api",
    headers: {
        'Content-Type': 'application/json'
    }
})