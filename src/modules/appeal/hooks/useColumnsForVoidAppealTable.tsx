import { ArrowDownOutlined, ArrowUpOutlined, EyeOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Typography,
  Button,
  Space,
  Menu,
  Dropdown,
  theme,
  TableColumnsType,
} from "antd";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import { TaxAssessment } from "../types/productTypes";

const { Text } = Typography;

export function useColumnsForVoidAppealTable() {
  const { formatMessage } = useIntl();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const letterStatus = (value: string) => {
    if (value === "SENT") {
      return <Text>{value}</Text>;
    }
    return <Text type="danger">{value}</Text>;
  };

  const differencPercentage=(value: string)=>{
    const intVal=parseInt(value)
    if(intVal>6){
      return <Text >{intVal} % <ArrowUpOutlined  style={{color:'green'}}/></Text>;
    }
    else{
      return (
        <>
        <Text >{intVal} % <ArrowDownOutlined  style={{color:'red'}}/>
      
      </Text>
        </>
      );
    }
    
  }
  const columns: TableColumnsType<TaxAssessment> = useMemo(
    () => [
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-tax_year",
          defaultMessage: "Tax Year",
        }),
        dataIndex: "tax_year",
        key: "tax_year",
        sorter: (a, b)  => a['tax_year'].localeCompare(b['tax_year'])
       
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-company",
          defaultMessage: "Company",
        }),
        dataIndex: "company",
        key: "company",
        sorter: (a, b)  => a['company'].localeCompare(b['company'])
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-state",
          defaultMessage: "State",
        }),
        dataIndex: "state",
        key: "state",
        sorter: (a, b)  => a['state'].localeCompare(b['state'])
        
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-assessor",
          defaultMessage: "Assessor",
        }),
        dataIndex: "assessor",
        key: "assessor",
        sorter: (a, b)  => a['assessor'].localeCompare(b['assessor'])
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-account",
          defaultMessage: "Appeal Account",
        }),
        dataIndex: "account",
        key: "account",
        
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-reason",
          defaultMessage: "Reason",
        }),
        dataIndex: "reason",
        key: "reason",
      
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-notice_date",
          defaultMessage: "Notice Date",
        }),
        dataIndex: "notice_date",
        key: "notice_date",
      
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-appeal_deadline",
          defaultMessage: "Appeal Deadline",
        }),
        dataIndex: "appeal_deadline",
        key: "appeal_deadline",
     
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-letter_status",
          defaultMessage: "Letter Status",
        }),
        dataIndex: "letter_status",
        key: "letter_status",
        
        render: letterStatus,
      },

      {
        title: formatMessage({
          id: "property-tax-plus-appeal-expected_value",
          defaultMessage: "Expected Value",
        }),
        dataIndex: "expected_value",
        key: "expected_value",
      
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-notice_value",
          defaultMessage: "Notice Value",
        }),
        dataIndex: "notice_value",
        key: "notice_value",
        
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-difference_percentage",
          defaultMessage: "Difference Percentage",
        }),
        dataIndex: "difference_percentage",
        key: "difference_percentage",
       render:differencPercentage
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-assessment_value",
          defaultMessage: "Assesment Value",
        }),
        dataIndex: "assessment_value",
        key: "assessment_value",
        
      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-target_value",
          defaultMessage: "Target Value",
        }),
        dataIndex: "target_value",
        key: "target_value",
     
      },

      {
        title: formatMessage({
          id: "property-tax-plus-appeal-hearing",
          defaultMessage: "Hearing",
        }),
        dataIndex: "hearing",
        key: "hearing",

      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-final_value",
          defaultMessage: "Final Value",
        }),
        dataIndex: "final_value",
        key: "final_value",

      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-appeal_status",
          defaultMessage: "Appeal Status",
        }),
        dataIndex: "appeal_status",
        key: "appeal_status",

      },
      {
        title: formatMessage({
          id: "property-tax-plus-appeal-records.actions",
          defaultMessage: "Actions",
        }),
        width: 400,
        fixed: true,
        key: "view",
        render: (appealData: TaxAssessment) => {
          const menu = (
            <Menu>
              <Menu.Item
                style={{ margin: " 0px 5px", padding: "10px" }}
                key="1"
              >
                <EyeOutlined name="view-details" /> View Details
              </Menu.Item>
              <Menu.Item style={{ margin: "5px", padding: "10px" }} key="1">
                <PlusOutlined name="add-reason" /> Add Reason
              </Menu.Item>
            </Menu>
          );

          return (
            <Space wrap>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button shape="circle" style={{  background: '#E5E8EE', }}>
                  <MoreOutlined rotate={90} />
                </Button>
              </Dropdown>
            </Space>
          );
        },
      },
    ],
    []
  );

  return columns;
}
