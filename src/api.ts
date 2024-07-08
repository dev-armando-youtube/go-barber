import axios from "axios";

export const api = {
  "reservations": [
    {
      "id": 1,
      "name": "Barber",
      "date": "09/04/2024",
      "time": "10:30",
      "image": "/1.png",
      "service": "Corte de cabelo",
      "payment": "Dinheiro",
    },
  ],

  "barbers": [
    {
      "id": 1,
      "name": "Barber",
      "date": "Segunda à Sexta",
      "time": "8h às 18h",
      "image": "/1.png"
    },
    {
      "id": 2,
      "name": "Barber Shop",
      "date": "Segunda à Sexta",
      "time": "8h às 18h",
      "image": "/2.png"
    },
  ]
}

export const Api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { "Content-Type": "application/json" }
});