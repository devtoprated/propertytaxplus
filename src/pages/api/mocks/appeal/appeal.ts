

import type { NextApiRequest, NextApiResponse } from "next";
import appealData from "public/mocks/voidAppealData/voidAppealData.json";
import appealDataFailed from "public/mocks/voidAppealData/voidAppealDataFail.json";

interface TaxAssessment {
  id: number;
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

interface AppealData {
  success: boolean;
  result: {
    totalRecords: number;
    appeal: TaxAssessment[];
    total: number;
    skip: number;
    limit: number;
  };
}

interface ErrorResponse {
  success: boolean;
  failure: {
    errorId: number;
    errorCode: string;
    description: string;
  };
}

type ApiResponse = AppealData | ErrorResponse;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  setTimeout(() => {
    if (req.method?.toLowerCase() === "get") {
      const data: AppealData = {
        success: true,
        result: appealData.result
      };
      return res.status(200).json(data);
    }

    const error: ErrorResponse = appealDataFailed;
    res.status(400).json(error);
  }, 4000);
}
