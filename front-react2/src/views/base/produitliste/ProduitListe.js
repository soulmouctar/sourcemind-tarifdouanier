import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPenAlt, cilTrash } from '@coreui/icons'

const ProduitListe = () => {
  return (
    <CRow>
      <CCol xs={12}>
        {/*<DocsComponents href="components/table/" />*/}
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Liste des Produits</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">N°</CTableHeaderCell>
                  <CTableHeaderCell scope="col">NOM</CTableHeaderCell>
                  <CTableHeaderCell scope="col">DESCRIPTION</CTableHeaderCell>
                  <CTableHeaderCell scope="col">CODE</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>TOYOTA HILUX</CTableDataCell>
                  <CTableDataCell>Neuf, 4 roues, Essence</CTableDataCell>
                  <CTableDataCell>A0F001</CTableDataCell>
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
            {/*</DocsExample>*/}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProduitListe
