
import { Tabs } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useIntl } from 'react-intl';
import AppealsinProgress from '../AppealsinProgress/AppealsinProgress';
import FinalizedAppeal from '../FinalizedAppeals/FinalizedAppeal';
import VoidAppeal from '../VoidAppeal/VoidAppeal';
import { TabComponentProps } from '../../types/productTypes';

const TabComponent = ({ campaignList, isFetching }: TabComponentProps) => {
  const router = useRouter();
  const { tab } = router.query;
  const { formatMessage } = useIntl();

  const onChange = (key:string) => {
    router.push({
      query: { tab: `${key}` },
    });
  };

  const tabItems = [
    {
      key: 'appeal-in-progress',
      label: formatMessage({
        id: 'property-tax-plus-appeal-appeal-in-progress',
        defaultMessage: 'Appeals in Progress',
      }),
      children: <AppealsinProgress campaignList={campaignList} isFetching={isFetching} />,
    },
    {
      key: 'finalized-appeal',
      label: formatMessage({
        id: 'property-tax-plus-appeal-finalized-appeals',
        defaultMessage: 'Finalized Appeal',
      }),
      children: <FinalizedAppeal campaignList={campaignList} isFetching={isFetching} />,
    },
    {
      key: 'void-appeal',
      label: formatMessage({
        id: 'property-tax-plus-appeal-void-appeals',
        defaultMessage: `Void Appeals ${campaignList?.result?.appeal?.length}`,
      }),
      children: <VoidAppeal campaignList={campaignList} isFetching={isFetching} />,
    },
  ];

  return (
    <Tabs defaultActiveKey={tab ? `${tab}` : 'appeal-in-progress'} items={tabItems} onChange={onChange} />
  );
};

export default TabComponent;
