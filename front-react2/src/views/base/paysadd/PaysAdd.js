import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CFormInput,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSave } from '@coreui/icons'

const PaysAdd = () => {
  const [visible, setVisible] = useState(false)
  const [visibleHorizontal, setVisibleHorizontal] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Nouveau Pays </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={8}>
                <CFormInput placeholder="Ex: Guinea" aria-label="Nom du Pays" />
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

export default PaysAdd
