import axios from 'axios'
const Axios =axios.create({
   baseURL:'http://106.14.173.159:8080',
   timeout:1000,
   headers: {'Content-Type':'application/x-www-form-urlencoded'}
})
export default Axios