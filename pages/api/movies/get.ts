import { MoviesType } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<MoviesType>>) {
    try {
        const { data } = await http.get(API_ENDPOINTS.BACK_END.LAST_MOVIE);
        res.status(200).json(data);
    } catch {
        res.status(500);
    }
}