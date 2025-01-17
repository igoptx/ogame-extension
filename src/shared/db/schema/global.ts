import { DBSchema } from "idb";
import { Settings } from "../../models/settings/Settings";

export interface DbLinkedAccount {
    serverId: number;
    serverLanguage: string;
    id: number;
}

export interface DbAccount {
    serverId: number;
    serverLanguage: string;
    id: number;
    name: string;

    linkedAccounts?: DbLinkedAccount[];
};
export interface DbServer {
    id: number;
    name: string;
    language: string;
};


export interface OgameTrackerGlobalDbSchema extends DBSchema {
    settings: {
        key: 0;
        value: Settings;
    };

    accounts: {
        key: [number, string, number];
        value: DbAccount;
        indexes: {
            server: [number, string];
        };
    };

    servers: {
        key: [number, string],
        value: DbServer;
    };
}