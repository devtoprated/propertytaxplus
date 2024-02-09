import React, { useState, useEffect, ChangeEvent } from "react";
import { Table, Button, Input, Row, Col, Form } from "antd";
import {  FilterFilled, MoreOutlined, SearchOutlined } from "@ant-design/icons";
import { useColumnsForVoidAppealTable } from "../../hooks/useColumnsForVoidAppealTable";
import SearchFormModal from "./SearchFormModal";
import { TaxAssessment } from "../../types/productTypes";

interface VoidAppealTableProps {
  tableData?: {
    result?: {
      appeal?: TaxAssessment[];
    };
  };
  loading: boolean;
  
}

const VoidAppealTable: React.FC<VoidAppealTableProps> = ({
  tableData,
  loading,
  
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data: TaxAssessment[] = tableData?.result?.appeal || [];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [filteredData, setFilteredData] = useState<TaxAssessment[]>(data);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [idSearch, setIdSearch] = useState<string | undefined>(undefined);
  const [isColumnPopupVisible, setColumnPopupVisible] =
    useState<boolean>(false);
  const [form] = Form.useForm();
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (filteredData: TaxAssessment[]) => {
    setFilteredData(filteredData);
    setColumnPopupVisible(false);
  };


  const renderColumnSelectionButton = () => {
    const handleAdvanceSearch = () => {
      setColumnPopupVisible(true)
      setIdSearch("")
      setFilteredData(data);
    }
    return (
      <Button
        size="large"
        type="default"
        icon={<FilterFilled />}
        onClick={handleAdvanceSearch}
      >
      </Button>
    );
  };
  const handleIdSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trimStart(); 

    setIdSearch(searchValue);

    let result = data;

    if (searchValue) {
      result = result.filter(item =>
        item.company.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (selectedColumns.length > 0) {
      result = result.map((item: any) => {
        const filteredItem: Partial<TaxAssessment> = {};
        selectedColumns.forEach(column => {
          filteredItem[column as keyof TaxAssessment] = item[column as keyof TaxAssessment];
        });
        return filteredItem as TaxAssessment;
      });
    }

    setFilteredData(result);
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {

    setSelectedRowKeys(newSelectedRowKeys);
  };

  const allColumns = useColumnsForVoidAppealTable();

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDrawer = () => {
    setColumnPopupVisible(false)
    form.resetFields()
  }

  return (
    <>
      <Row gutter={[32, 32]} justify="end">

        <Col xs={24} sm={24} md={12} lg={12} xl={12} >
          <Input
            placeholder="Search By Company Name"
            prefix={<SearchOutlined />}
            size="large"
            value={idSearch}
            onChange={handleIdSearchChange}
           
            onPressEnter={() => { }} 
          />
        </Col>
        <Col>
          <Row gutter={[16, 16]}>
            <Col>
              {renderColumnSelectionButton()}
            </Col>
            <Col>
              <Button
              style={{
                background: '#E5E8EE',
              }}
              shape="circle"
                size="large"
                type="default"
                icon={<MoreOutlined rotate={0} name="more-outlined" />}
              >
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24}>
          {
            tableData?.result?.appeal && (
              <Table
              size="small"
              loading={loading}
              columns={allColumns}
              dataSource={filteredData}
              pagination={{
                total: tableData?.result?.appeal.length,
                showSizeChanger: true,
              }}
              rowKey="id"
              scroll={{ x: 'calc(2500px + 90%)' }}
              rowSelection={rowSelection}
            />
            )
          }

          <SearchFormModal
            visible={isColumnPopupVisible}
            columns={allColumns}
            onCancel={handleDrawer}
            onSearch={handleSearch}
            data={data}
          />
        </Col>
      </Row>
    </>
  );
};

export default VoidAppealTable;
