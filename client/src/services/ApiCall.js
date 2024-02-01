import axios from 'axios';

export const commonRequest = async (method, url, body, header) => {
    try {
        const config = {
            method,
            url,
            headers: header ? header : { "Content-Type": "application/json" },
            data: body
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        return error;
    }
};

