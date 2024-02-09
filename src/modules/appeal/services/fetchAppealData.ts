import { fetchWrapper } from "../modules/common/utils/fetchWrapper";
import { APPEALAPI } from "../config/config";
import { makeUrlWithQueryString } from "../modules/common/utils/makeUrlWithQueryString";
import { AppealProductResultTypes } from "../types/productTypes";

interface fetchCampaignListParams {
  offset: number;
  limit: number;
}

export async function fetchVoidAppealListData({
  offset,
  limit,
}: fetchCampaignListParams): Promise<AppealProductResultTypes | undefined > {
  const endpoint = makeUrlWithQueryString(
    APPEALAPI.FETCH_VOID_APPEAL_DATA,
    { offset, limit }
  );
  return fetchWrapper(endpoint, {
    credentials: "include",
    method: "GET",
  });
}
