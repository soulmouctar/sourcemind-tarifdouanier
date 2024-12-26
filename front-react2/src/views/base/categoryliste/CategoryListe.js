import React, { useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPenAlt, cilTrash } from '@coreui/icons'
import { getAllCategories } from 'src/api/CategoryService'

// useEffect(() => {
//
// }, []);
const getAllContacts = async () => {
  try {
    const { data } = await getAllCategories()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getAllContacts().then((r) => {
  console.log(r)
})

const CategoryListe = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Liste des Categories </strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">N°</CTableHeaderCell>
                  <CTableHeaderCell scope="col">NOM CATEGORIE</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ACTION</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Automobile</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="secondary" size="sm">
                      <CIcon icon={cilPenAlt} />
                    </CButton>
                    &nbsp;
                    <CButton color="danger" size="sm">
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CategoryListe
