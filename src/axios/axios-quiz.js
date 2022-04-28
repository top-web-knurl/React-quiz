import axios from "axios";

export default axios.create({
    baseURL: 'https://quizes-test-default-rtdb.europe-west1.firebasedatabase.app'
})