export class User {
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

export interface LooseObject {
    [key: string]: any
}