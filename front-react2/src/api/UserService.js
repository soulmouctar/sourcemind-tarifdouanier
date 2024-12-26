// Service Category

import axios from 'axios'
import { API_URL } from 'src/api/ApiUrl'

export async function saveContact(contact) {
  return await axios.post(API_URL, contact)
}

export async function getAllUsers() {
  // return await axios.get(`${API_URL}?page=${page}&size=${size}`)
  return await axios.get(`${API_URL}/category`)
}

export async function getOneUser(id) {
  return await axios.get(`${API_URL}/${id}`)
}

export async function udpateUser(user) {
  return await axios.post(API_URL, user)
}
//
// export async function udpatePhoto(formData) {
//   return await axios.put(`${API_URL}/photo`, formData)
// }

export async function deleteUser(id) {
  return await axios.delete(`${API_URL}/${id}`)
}
