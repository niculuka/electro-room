export class Token {
    id!: number;

    confirmedAt!: Date;
    createdAt!: Date;
    expiresAt!: Date;
    
    token!: string;
    userId!: number;
}

export interface IToken {
    id: number;

    confirmedAt: Date;
    createdAt: Date;
    expiresAt: Date;
    
    token: string;
    userId: number;
}