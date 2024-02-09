import React from 'react'
import { TabComponentProps, TaxAssessment } from '../../types/productTypes'
import { Table } from 'antd';
import { useColumnsForVoidAppealTable } from '../../hooks/useColumnsForVoidAppealTable';

const FinalizedAppeal = ({ campaignList, isFetching }: TabComponentProps) => {
  const data: TaxAssessment[] = campaignList?.result?.appeal || [];
  const allColumns = useColumnsForVoidAppealTable();
  return (
    <>
      {
        campaignList && (
          <Table
            loading={isFetching}
            bordered
            columns={allColumns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            rowKey="id"
            scroll={{ x: 'calc(2500px + 90%)' }}
            className="custom-header-table"
          />
        )
      }
    </>
  )
}

export default FinalizedAppeal