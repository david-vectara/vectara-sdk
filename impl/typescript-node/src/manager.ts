import {CorporaApi} from "./api/corporaApi";
import {FilterAttributeType} from "./enums";
import {FilterAttribute} from "./model/filterAttribute";
import LevelEnum = FilterAttribute.LevelEnum;
import TypeEnum = FilterAttribute.TypeEnum;
import {CreateCorpusRequest} from "./model/createCorpusRequest";
import {CorpusCustomDimension} from "./model/corpusCustomDimension";

export class CorpusBuilder {

    name: string;
    _key: string;
    _description: string;
    _addTimestamp: boolean = false;
    filterAttributes: FilterAttribute[] = [];
    customDimensions: CorpusCustomDimension[] = [];

    constructor(name: string) {
        this.name = name;
    }

    key(_key: string) {
        this._key = _key;
        return this;
    }

    description(_description: string) {
        this._description = _description;
        return this;
    }

    /**
     * Whether we will add a relatively unique timestamp to the end of the corpus key.
     *
     * This is necessary at the moment due to race conditions when quickly deleting and creating a new corpus.
     */
    addTimestamp() {
        this._addTimestamp = true;
        return this;
    }

    /**
     * Adds a filter attribute with sensible defaults:
     * <ul>
     *     <li>level = document</li>
     *     <li>indexed = true</li>
     *     <li>type = text</li>
     * </ul>
     *
     * @param attribute
     */
    addAttribute(attribute: FilterAttribute) {
        if (!'level' in attribute) {
            attribute.level = LevelEnum.Document;
        }
        if (!'indexed' in attribute) {
            attribute.indexed = true;
        }
        if (!'type' in attribute) {
            attribute.type = TypeEnum.Text;
        }

        this.filterAttributes.push(attribute);
        return this;
    }

    addDimension(dimension: CorpusCustomDimension) {
        this.customDimensions.push(dimension);
    }

    _key_from_name() {
        const re = / /gi;
        const temp = this.name.replace(re, "_");
        return temp.toLowerCase();
    }

    build() {
        // If key is defined, use that, otherwise use the name converted to lowercase/underscores.
        let requestKey = ('key' in this) ? this._key : this._key_from_name();

        // We will now append the timestamp in seconds if we need to ensure a unique corpus name.
        if (this._addTimestamp) {
            const timestamp = new Date().getTime() / 1000;
            requestKey = requestKey + "_" + timestamp;
        }

        const request : CreateCorpusRequest = {
            key: requestKey,
            name: this.name,
            filterAttributes: this.filterAttributes,
            customDimensions: this.customDimensions
        }

        if ('description' in this) {
            request.description = this._description;
        }

        return request;
    }
}

class CorpusManager {

    corporaApi: CorporaApi;



}