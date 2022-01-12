export enum MessageType {
    // common
    Subscribe = 'subscribe',
    Unsubscribe = 'unsubscribe',

    // debug
    Debug_UnhandledError = 'debug/unhandled-error',

    // notifications
    CreateNotification = 'notification/create',
    ShowNotification = 'notification/show',
    HideNotification = 'notification/hide',
    
    // expeditions
    TrackExpedition = 'expedition/track-expedition',
    ExpeditionEvent = 'expedition/expedition-data',
}