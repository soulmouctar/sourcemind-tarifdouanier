import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'
import CIcon from '@coreui/icons-react'
import { cilSave } from '@coreui/icons'

const TarificationAdd = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Nouvelle Tarification </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={3}>
                <CFormSelect size="sm" className="mb-3" aria-label="Categorie">
                  <option>Selectionnez la Categorie</option>
                  <option value="1">Automobile</option>
                  <option value="2">Alimentation</option>
                </CFormSelect>
              </CCol>
              <CCol xs={3}>
                <CFormSelect size="sm" className="mb-3" aria-label="Categorie">
                  <option>Selectionnez le Produit</option>
                  <option value="1">Voiture</option>
                  <option value="2">Alimentation</option>
                </CFormSelect>
              </CCol>
              <CCol xs={3}>
                <CFormInput placeholder="Ex: Voiture" aria-label="Nom du produit" />
              </CCol>
              <CCol xs={3}>
                <CFormInput placeholder="Ex: V03EF" aria-label="Code" />
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  label="Description"
                  rows={3}
                  text=""
                ></CFormTextarea>
                <br />
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

export default TarificationAdd
