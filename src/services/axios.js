import axios from "axios";
// eslint-disable-next-line no-unused-vars
const production = "https://firstlookadminserver.cyclic.app/"
const development = "http://localhost:8000"

export default axios.create({
    baseURL: development
})