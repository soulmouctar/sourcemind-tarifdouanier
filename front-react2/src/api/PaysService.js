//Service Category

import axios from 'axios'
import { API_URL } from 'src/api/ApiUrl'

export async function saveCountry(contact) {
  return await axios.post(API_URL, contact)
}

export async function getAllCountries() {
  return await axios.get(`${API_URL}/category`)
}

export async function getOneCountry(id) {
  return await axios.get(`${API_URL}/${id}`)
}

export async function udpateCountry(item) {
  return await axios.post(API_URL, item)
}

export async function deleteCategory(id) {
  return await axios.delete(`${API_URL}/${id}`)
}
