import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
} from '@coreui/react'
import { DocsComponents, DocsExample } from 'src/components'
import CIcon from "@coreui/icons-react";
import { cilPenAlt, cilTrash } from "@coreui/icons";

const TarificationListe = () => {
  return (
    <CRow>
      <CCol xs={12}>
        {/*<DocsComponents href="components/table/" />*/}
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Liste des Tarifications</strong>
          </CCardHeader>
          <CCardBody>
            {/*<p className="text-body-secondary small">*/}
            {/*  Using the most basic table CoreUI, here&#39;s how <code>&lt;CTable&gt;</code>-based*/}
            {/*  userliste look in CoreUI.*/}
            {/*</p>*/}
            {/*<DocsExample href="components/table">*/}
            <CTable>
              <CTableHead>
                <CTableRow >
                  <CTableHeaderCell scope="col">N°</CTableHeaderCell>
                  <CTableHeaderCell scope="col">PRODUIT</CTableHeaderCell>
                  <CTableHeaderCell scope="col">DESCRIPTION</CTableHeaderCell>
                  <CTableHeaderCell scope="col">PRIX %</CTableHeaderCell>
                  <CTableHeaderCell scope="col">PAYS</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>TOYOTA HILUX</CTableDataCell>
                  <CTableDataCell>Neuf, 4 roues, Essence</CTableDataCell>
                  <CTableDataCell>2%</CTableDataCell>
                  <CTableDataCell>France</CTableDataCell>
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

export default TarificationListe
