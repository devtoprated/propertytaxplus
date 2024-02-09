export interface TaxAssessment {
    id:number;
    tax_year: string;
    company: string;
    state: string;
    assessor: string;
    account: string;
    reason: string;
    notice_date: string;
    appeal_deadline: string;
    letter_status: string;
    expected_value: string;
    notice_value: string;
    difference_percentage: string;
    assessment_value: string;
    target_value: string;
    hearing: string;
    final_value: string;
    appeal_status: string;
}

export interface TableColumnTypes {
    title: string;
    dataIndex: string;
    key: string;
}

export interface AppealProductResultTypes {
    success: boolean;
    result: {
        totalRecords: number;
        appeal: TaxAssessment[];
        total:number;
        skip:number;
        limit:number

    }
}

export interface TabComponentProps {
    campaignList?: {
        result?: {
            appeal?: TaxAssessment[] | undefined;
        } | undefined;
    } | undefined;
    isFetching: boolean;
}

