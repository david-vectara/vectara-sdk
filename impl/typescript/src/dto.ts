export interface CorpusDto {
    id: number;
    name: string;
    description: string;
    dtProvision: string;
    enabled: boolean;
    swapQenc: boolean;
    swapIenc: boolean;
    textless: boolean;
    encrypted: boolean;
    encoderId: string;
    metadataMaxBytes: number;
    faissIndexType: string;
}

export interface ListCorporaResponseDto {
    corpus: Array<CorpusDto>;
    pageKey: string;
    status: any; // TODO Define Status

}

