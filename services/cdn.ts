import axios, { AxiosInstance } from 'axios';

interface CdnConfig {
    cdnEndpoint: string;
    cdnToken: string;
}

const config: CdnConfig = {
    cdnEndpoint: process.env.CDN_ENDPOINT || 'http://localhost:8080/v1/cdn',
    cdnToken: process.env.CDN_TOKEN || ''
};

class CdnService {
    private axiosInstance: AxiosInstance;

    private static instance: CdnService;
  
    public static getInstance(): CdnService {
        if (!CdnService.instance) {
        CdnService.instance = new CdnService();
        }
        return CdnService.instance;
    }

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: config.cdnEndpoint,
            headers: {
                'Authorization': `Bearer ${config.cdnToken}`
            }
        });
    }

    async upload(pathName: string, file: File, bucketName: string = "pesinsattaksitleal") {
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

    async delete(objectName: string, bucketName: string = "pesinsattaksitleal") {
        try {
            const response = await this.axiosInstance.delete(`${bucketName}/${objectName}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export const cdnService = CdnService.getInstance(); 