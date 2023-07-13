import axios from "axios";
const production = "https://api.controlpanel.firstlook.pro"
// eslint-disable-next-line no-unused-vars
const development = "http://localhost:8000"

export default axios.create({
    baseURL: production
})