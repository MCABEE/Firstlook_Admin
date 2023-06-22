import axios from "axios";
// eslint-disable-next-line no-unused-vars
const production = "https://api.controlpanel.firstlook.pro"
const development = "http://localhost:8000"

export default axios.create({
    baseURL: development
})