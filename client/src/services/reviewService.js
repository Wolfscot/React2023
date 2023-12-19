import * as request from '../library/request';

const baseUrl = 'http://localhost:5000/reviews';

export const getAll = async (jobId) => {
    const query = new URLSearchParams({
        where: `jobId="${jobId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (jobId, text) => {
    const review = await request.post(baseUrl, {
        jobId,
        text,
    });

    return review;
};