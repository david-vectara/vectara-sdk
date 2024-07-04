export * from './aPIKeysApi';
import { APIKeysApi } from './aPIKeysApi';
export * from './applicationClientsApi';
import { ApplicationClientsApi } from './applicationClientsApi';
export * from './chatsApi';
import { ChatsApi } from './chatsApi';
export * from './corporaApi';
import { CorporaApi } from './corporaApi';
export * from './documentsApi';
import { DocumentsApi } from './documentsApi';
export * from './encodersApi';
import { EncodersApi } from './encodersApi';
export * from './indexApi';
import { IndexApi } from './indexApi';
export * from './jobsApi';
import { JobsApi } from './jobsApi';
export * from './largeLanguageModelsApi';
import { LargeLanguageModelsApi } from './largeLanguageModelsApi';
export * from './queriesApi';
import { QueriesApi } from './queriesApi';
export * from './rerankersApi';
import { RerankersApi } from './rerankersApi';
export * from './uploadApi';
import { UploadApi } from './uploadApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [APIKeysApi, ApplicationClientsApi, ChatsApi, CorporaApi, DocumentsApi, EncodersApi, IndexApi, JobsApi, LargeLanguageModelsApi, QueriesApi, RerankersApi, UploadApi, UsersApi];
