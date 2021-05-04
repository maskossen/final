export interface RequestMessage {
    uid?: string;
    description: string;
    title: string;
    email: string;
}

export interface Note {
    uid?: string;
    username: string;
    title: string;
    content: string;
}

export interface User {
    uid: string,
    email: string,
    // password: string;
    username: string,
    photoURL: string
}