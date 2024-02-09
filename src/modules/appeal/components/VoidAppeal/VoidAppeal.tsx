import React from 'react'
import VoidAppealTable from '../common/VoidAppealTable';
import { Col, Row } from 'antd';
import { TabComponentProps } from '../../types/productTypes';


const VoidAppeal = ({campaignList, isFetching}:TabComponentProps) => {

  return (
   <>
   {
    campaignList && (
      <Row>
      <Col span={24}>
      <VoidAppealTable tableData={campaignList} loading={isFetching} />
      </Col>
    </Row>
    )
   }
   </>
  )
}

export default VoidAppeal;