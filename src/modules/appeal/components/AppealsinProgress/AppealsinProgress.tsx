import React from 'react'
import { TabComponentProps, TaxAssessment } from '../../types/productTypes';
import { useColumnsForVoidAppealTable } from '../../hooks/useColumnsForVoidAppealTable';
import { Table } from 'antd';

const AppealsinProgress = ({ campaignList, isFetching }: TabComponentProps) => {
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

export default AppealsinProgress