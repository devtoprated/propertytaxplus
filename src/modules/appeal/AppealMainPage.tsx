import { Col, Row } from 'antd'
import React from 'react'
import TabComponent from './components/TabComponent/TabComponent';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { fetchVoidAppealListData } from './services/fetchAppealData';
import { ModalLoadingIndicator } from '../common/components/ModalLoadingIndicator';
const AppealMainPage = () => {
    const router = useRouter();
    const { page = 1, limit = 10 } = router.query;
    const currentPageNumber: number = +page;
    const currentPageSizeNumber: number = +limit;
    const {
        data: campaignList,
        isLoading: isFetching,
    } = useQuery(
        ["campaign-logs", currentPageNumber, currentPageSizeNumber],
        () =>
            fetchVoidAppealListData({
                offset:
                    currentPageNumber * currentPageSizeNumber - currentPageSizeNumber,
                limit: currentPageSizeNumber || 30,
            }),
        {
            refetchInterval: false,
            keepPreviousData: false,
        }
    );
    return (
        <>
            {
                campaignList && !isFetching ? (
                    <Row gutter={16}>
                        <Col className="gutter-row" span={24}>
                            <TabComponent campaignList={campaignList} isFetching={isFetching} />
                        </Col>
                    </Row>
                ) : (
                    <>
                        <ModalLoadingIndicator open={true} />
                    </>
                )
            }
        </>
    )
}

export default AppealMainPage