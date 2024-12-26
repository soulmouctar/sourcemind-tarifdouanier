import React from 'react'
import {
  CButton,
  CCol,
  CFormInput,
  CFormLabel, CForm, CCard, CCardHeader, CCardBody, CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSave } from '@coreui/icons'

const UserAdd = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Nouveau Pays </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CRow>
                <CCol xs={6}>
                  <CFormInput placeholder="Nom et Prenom" aria-label="Nom et Prenom" />
                </CCol>
                <CCol xs={6}>
                  <CFormInput placeholder="Ex: soulmouctar" aria-label="Nom d'utilisateur" />
                </CCol> <br/> <br/> <br/>
                <CCol xs={6}>
                  <CFormLabel htmlFor="inputPassword3" className="visually-hidden">
                    Password
                  </CFormLabel>
                  <CFormInput type="password" id="inputPassword3" placeholder="Password" />
                </CCol>
                <CCol xs={6}>
                  <CButton color="primary" size="sm">
                    <CIcon icon={cilSave} /> Enregistrer
                  </CButton>
                </CCol>
              </CRow>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserAdd
