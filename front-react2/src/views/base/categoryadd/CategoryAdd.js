import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CPopover,
  CRow,
  CCol,
  CFormInput,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilPenAlt, cilSave } from '@coreui/icons'

const CategoryAdd = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Nouvelle Categorie </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={8}>
                <CFormInput placeholder="Ex: Automobile" aria-label="Nom de la catégorie" />
              </CCol>
              <CCol xs={4}>
                <CButton color="primary" size="sm">
                  <CIcon icon={cilSave} /> Enregistrer
                </CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CategoryAdd
