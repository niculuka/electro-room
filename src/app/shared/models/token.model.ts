export class Token {
    id!: number;

    confirmedAt!: Date;
    createdAt!: Date;
    expiresAt!: Date;
    
    token!: string;
    userIdFk!: number;
}

export interface IToken {
    id: number;

    confirmedAt: Date;
    createdAt: Date;
    expiresAt: Date;
    
    token: string;
    userIdFk: number;
}