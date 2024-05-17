/* tslint:disable */
/* eslint-disable */
/**
 * Vet_Clinic-rest
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration.ts';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common.ts';
import type { RequestArgs } from './base.ts';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base.ts';
import axios from "axios";


/**
 * 
 * @export
 * @interface Client
 */
export interface Client {
    /**
     * 
     * @type {number}
     * @memberof Client
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'phoneNumber'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Client
     */
    'vetId'?: number;
    /**
     * 
     * @type {Vet}
     * @memberof Client
     */
    'vet'?: Vet;
}

export const updateClientVet = async (clientId: number, vetId: number) => {
    try {
        const response = await axios.post('https://localhost:7205/api/Client/UpdateClient?clientId=${clientId}&vetId=${vetId}');
        return response.data;
    } catch (error) {
        console.error('Error updating client vet:', error);
        throw error;
    }
};
/**
 * 
 * @export
 * @interface Vet
 */
export interface Vet {
    /**
     * 
     * @type {number}
     * @memberof Vet
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Vet
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Vet
     */
    'dateOfBirth'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Vet
     */
    'phoneNumber'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Vet
     */
    'education'?: string | null;
}

/**
 * ClientApi - axios parameter creator
 * @export
 */
export const ClientApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Client`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientIdDelete: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiClientIdDelete', 'id', id)
            const localVarPath = `/api/Client/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientIdGet: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiClientIdGet', 'id', id)
            const localVarPath = `/api/Client/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {Client} [client] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientPost: async (client?: Client, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Client`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(client, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [clientId] 
         * @param {number} [vetId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientUpdateClientPost: async (clientId?: number, vetId?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Client/UpdateClient`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (clientId !== undefined) {
                localVarQueryParameter['clientId'] = clientId;
            }

            if (vetId !== undefined) {
                localVarQueryParameter['vetId'] = vetId;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClientApi - functional programming interface
 * @export
 */
export const ClientApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiClientGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiClientGet(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ClientApi.apiClientGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiClientIdDelete(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiClientIdDelete(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ClientApi.apiClientIdDelete']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiClientIdGet(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiClientIdGet(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ClientApi.apiClientIdGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {Client} [client] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiClientPost(client?: Client, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiClientPost(client, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ClientApi.apiClientPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} [clientId] 
         * @param {number} [vetId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiClientUpdateClientPost(clientId?: number, vetId?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiClientUpdateClientPost(clientId, vetId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ClientApi.apiClientUpdateClientPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ClientApi - factory interface
 * @export
 */
export const ClientApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientGet(options?: any): AxiosPromise<void> {
            return localVarFp.apiClientGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientIdDelete(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiClientIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientIdGet(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiClientIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Client} [client] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientPost(client?: Client, options?: any): AxiosPromise<void> {
            return localVarFp.apiClientPost(client, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [clientId] 
         * @param {number} [vetId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiClientUpdateClientPost(clientId?: number, vetId?: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiClientUpdateClientPost(clientId, vetId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientApi - object-oriented interface
 * @export
 * @class ClientApi
 * @extends {BaseAPI}
 */
export class ClientApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public apiClientGet(options?: RawAxiosRequestConfig) {
        return ClientApiFp(this.configuration).apiClientGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public apiClientIdDelete(id: number, options?: RawAxiosRequestConfig) {
        return ClientApiFp(this.configuration).apiClientIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public apiClientIdGet(id: number, options?: RawAxiosRequestConfig) {
        return ClientApiFp(this.configuration).apiClientIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {Client} [client] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public apiClientPost(client?: Client, options?: RawAxiosRequestConfig) {
        return ClientApiFp(this.configuration).apiClientPost(client, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [clientId] 
     * @param {number} [vetId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientApi
     */
    public apiClientUpdateClientPost(clientId?: number, vetId?: number, options?: RawAxiosRequestConfig) {
        return ClientApiFp(this.configuration).apiClientUpdateClientPost(clientId, vetId, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * VeterinariansApi - axios parameter creator
 * @export
 */
export const VeterinariansApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Veterinarians`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansIdDelete: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiVeterinariansIdDelete', 'id', id)
            const localVarPath = `/api/Veterinarians/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {Vet} [vet] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansIdPut: async (id: number, vet?: Vet, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('apiVeterinariansIdPut', 'id', id)
            const localVarPath = `/api/Veterinarians/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(vet, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {Vet} [vet] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansPost: async (vet?: Vet, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Veterinarians`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(vet, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VeterinariansApi - functional programming interface
 * @export
 */
export const VeterinariansApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VeterinariansApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiVeterinariansGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Vet>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiVeterinariansGet(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['VeterinariansApi.apiVeterinariansGet']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiVeterinariansIdDelete(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiVeterinariansIdDelete(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['VeterinariansApi.apiVeterinariansIdDelete']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {Vet} [vet] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiVeterinariansIdPut(id: number, vet?: Vet, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiVeterinariansIdPut(id, vet, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['VeterinariansApi.apiVeterinariansIdPut']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {Vet} [vet] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiVeterinariansPost(vet?: Vet, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiVeterinariansPost(vet, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['VeterinariansApi.apiVeterinariansPost']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * VeterinariansApi - factory interface
 * @export
 */
export const VeterinariansApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VeterinariansApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansGet(options?: any): AxiosPromise<Array<Vet>> {
            return localVarFp.apiVeterinariansGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansIdDelete(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.apiVeterinariansIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {Vet} [vet] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansIdPut(id: number, vet?: Vet, options?: any): AxiosPromise<void> {
            return localVarFp.apiVeterinariansIdPut(id, vet, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Vet} [vet] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiVeterinariansPost(vet?: Vet, options?: any): AxiosPromise<void> {
            return localVarFp.apiVeterinariansPost(vet, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * VeterinariansApi - object-oriented interface
 * @export
 * @class VeterinariansApi
 * @extends {BaseAPI}
 */
export class VeterinariansApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VeterinariansApi
     */
    public apiVeterinariansGet(options?: RawAxiosRequestConfig) {
        return VeterinariansApiFp(this.configuration).apiVeterinariansGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VeterinariansApi
     */
    public apiVeterinariansIdDelete(id: number, options?: RawAxiosRequestConfig) {
        return VeterinariansApiFp(this.configuration).apiVeterinariansIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {Vet} [vet] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VeterinariansApi
     */
    public apiVeterinariansIdPut(id: number, vet?: Vet, options?: RawAxiosRequestConfig) {
        return VeterinariansApiFp(this.configuration).apiVeterinariansIdPut(id, vet, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {Vet} [vet] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VeterinariansApi
     */
    public apiVeterinariansPost(vet?: Vet, options?: RawAxiosRequestConfig) {
        return VeterinariansApiFp(this.configuration).apiVeterinariansPost(vet, options).then((request) => request(this.axios, this.basePath));
    }
}



