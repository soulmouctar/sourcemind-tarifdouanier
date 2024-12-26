import React from 'react'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs, CFormInput, CButton, CFormSelect, CFormTextarea
} from "@coreui/react";
import { DocsComponents, DocsExample } from 'src/components'
import CIcon from "@coreui/icons-react";
import { cilSave } from "@coreui/icons";

const Navs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Nouveau Produit </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={4}>
                <CFormInput placeholder="Ex: Voiture" aria-label="Nom du produit" />
              </CCol>
              <CCol xs={4}>
                <CFormInput placeholder="Ex: V03EF" aria-label="Code" />
              </CCol>
              <CCol xs={4}>
                <CFormSelect size="sm" className="mb-3" aria-label="Categorie">
                  <option>Selectionnez la Categorie</option>
                  <option value="1">Automobile</option>
                  <option value="2">Alimentation</option>
                </CFormSelect>
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  id="description"
                  label="Description"
                  rows={3}
                  text=""
                ></CFormTextarea><br/>
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

export default Navs
