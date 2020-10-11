import axios from 'axios'

export default axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL0dpdEh1YlwvY2FwZ2VtaW5pLWFwaVwvcHVibGljXC9hcGlcL2FjY291bnRcL2xvZ2luIiwiaWF0IjoxNjAyNDM1NzI4LCJleHAiOjE2MDI0MzkzMjgsIm5iZiI6MTYwMjQzNTcyOCwianRpIjoieHJ6cTM1dllHRzFrTHBSaCIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.wryWT-pBqg3pe4zKJ6rAb2pvJ_dO8PTeYo7ZeleQCZU'
  }
})