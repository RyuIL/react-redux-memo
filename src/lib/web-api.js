import axios from 'axios';

export const createMemo = ({title, body}) => axios.post('/memo', {title, body});
export const getInitialMemo = () => axios.get('/memo/?_sort=id&_order=DESC&_limit=5');
export const getRecentMemo = (cursor) => axios.get(`/memo/?id_gte=${cursor+1}&_sort=id&_order=DESC&_limit=5`);
export const updateMemo = ({id, memo : {title, body}}) => axios.put(`/memo/${id}`, {title, body});
export const deleteMemo = (id) => axios.delete(`/memo/${id}`);
export const getPreviousMemo = (endCursor) => axios.get(`/memo/?_sort=id&_order=DESC&_limit=5&id_lte=${endCursor-1}`);