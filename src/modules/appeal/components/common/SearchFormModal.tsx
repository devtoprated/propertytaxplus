import React from "react";
import { Button, Form, Input, Drawer } from "antd";
import { SearchOutlined, UndoOutlined } from "@ant-design/icons";
import { ColumnsType, ColumnType, ColumnGroupType } from "antd/es/table";
import { TaxAssessment } from "../../types/productTypes";

const { Item } = Form;

export interface TableColumnTypes {
  title: string;
  dataIndex: string;
  key: string;
  width?: number
}

interface SearchFormModalProps {
  visible: boolean;
  columns: ColumnsType<ColumnType<TableColumnTypes> | ColumnGroupType<ColumnType<TableColumnTypes>>> | ColumnsType<TaxAssessment>;
  onCancel: () => void;
  onSearch: (filteredData: TaxAssessment[]) => void;
  data: TaxAssessment[];
}

const SearchFormModal: React.FC<SearchFormModalProps> = ({
  visible,
  columns,
  onCancel,
  onSearch,
  data
}) => {
  const [form] = Form.useForm();


  const handleSearch = () => {
    form
      .validateFields()
      .then((values) => {
        const filteredData = filterData(values);
        onSearch(filteredData);
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  const handleReset = () => {
    form.resetFields();
    onSearch(data);
  };

  const isColumnType = (
    column: ColumnType<TableColumnTypes> | ColumnGroupType<ColumnType<TableColumnTypes>>
  ): column is ColumnType<TableColumnTypes> => {
    return (column as ColumnType<TableColumnTypes>).dataIndex !== undefined;
  };

  const filterData = (values: Record<string, string>) => {
    const lowerCaseValues: Record<string, string> = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, (value || '').toLowerCase()])
    );

    return data?.filter((record: any) =>
      columns.every((column: any) => {
        if (isColumnType(column) && lowerCaseValues[column.dataIndex as string]?.length) {
          const cellValue = record[column.dataIndex as string]?.toString().toLowerCase();
          return cellValue.includes(lowerCaseValues[column.dataIndex as string]);
        }
        return true;
      })
    );
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <Drawer
        width={378}
        title="Advance Search"
        visible={visible}
        onClose={onCancel}
        footer={[
          <Button key="reset" onClick={handleReset} icon={<UndoOutlined />}>
            Reset
          </Button>,
          <Button key="search" type="primary" onClick={handleSearch} icon={<SearchOutlined />}>
            Search
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          {columns.map((column: any) => (
            <React.Fragment key={column.key}>
              {isColumnType(column) && (
                <Item
                  label={column.title as string}
                  name={column.dataIndex as string}
                  style={{ marginBottom: 16 }}
                >
                  <Input placeholder={`Search ${column.title}`} />
                </Item>
              )}
            </React.Fragment>
          ))}
        </Form>
      </Drawer>
    </div>
  );
};

export default SearchFormModal;
