import axios from "axios";
const production = "https://firstlook-admin-server.cyclic.app/"
// eslint-disable-next-line no-unused-vars
const development = "http://localhost:8000"

export default axios.create({
    baseURL: production
})