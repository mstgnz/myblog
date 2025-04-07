import axios, { AxiosInstance } from 'axios';

interface CdnConfig {
    cdnEndpoint: string;
    cdnToken: string;
}

// Environment variables should be prefixed with NEXT_PUBLIC_ to be accessible in the browser
const config: CdnConfig = {
    cdnEndpoint: process.env.NEXT_PUBLIC_CDN_ENDPOINT || 'https://your-cdn-endpoint.com/',
    cdnToken: process.env.NEXT_PUBLIC_CDN_TOKEN || ''
};

class CdnService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: config.cdnEndpoint,
            headers: {
                'Authorization': `Bearer ${config.cdnToken}`
            }
        });
    }

    async upload(pathName: string, file: File, bucketName: string = "turassist") {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('bucket', bucketName);
        formData.append('path', pathName);

        try {
            const response = await this.axiosInstance.post('upload', formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async delete(objectName: string, bucketName: string = "turassist") {
        try {
            const response = await this.axiosInstance.delete(`${bucketName}/${objectName}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

// Export a singleton instance
export const cdnService = new CdnService(); 