export interface Token {
    value: any;
    tokenType: string;
    type: string;
    path?: string;
    name?: string;
    parent?: string;
    description?: string;
}