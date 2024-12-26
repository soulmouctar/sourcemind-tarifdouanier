//Service Category

import axios from 'axios'
import { API_URL } from 'src/api/ApiUrl'

export async function saveCategory(contact) {
  return await axios.post(API_URL, contact)
}

export async function getAllCategories() {
  return await axios.get(`${API_URL}/category`)
}

export async function getOneCategory(id) {
  return await axios.get(`${API_URL}/${id}`)
}

export async function udpateCategory(item) {
  return await axios.post(API_URL, item)
}

export async function deleteCategory(id) {
  return await axios.delete(`${API_URL}/${id}`)
}
