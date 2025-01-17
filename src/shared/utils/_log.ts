import { format } from "date-fns";

export function _log(...data: any[]) {
    console.log('[OGame Tracker]', ...data);
}

export function _logError(...data: any[]) {
    console.error('[OGame Tracker]', ...data);
}

export function _logWarning(...data: any[]) {
    console.warn('[OGame Tracker]', ...data);
}

export function _logDebug(...data: any[]) {
    console.debug('[OGame Tracker]', format(Date.now(), 'yyyy-MM-dd HH-mm-ss.SSS'), ...data);
}