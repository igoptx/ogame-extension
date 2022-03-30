export enum MessageType {
    StayAlive = 'internal/stay-alive',

    // notifications
    CreateNotification = 'notification/create',
    ShowNotification = 'notification/show',
    HideNotification = 'notification/hide',
    
    // expeditions
    TrackExpedition = 'expedition/track-expedition',
    Expedition = 'expedition/expedition-data/single',
    AllExpeditions = 'expedition/expedition-data/all',
    NewExpedition = 'expedition/new',
    RequestExpeditionEvents = 'expedition/request-expeditions',

    // debris field reports
    DebrisFieldReport = 'debris-fields/single',
    NewDebrisFieldReport = 'debris-fields/new',
    AllDebrisFieldReports = 'debris-fields/all',
    TrackDebrisFieldReport = 'debris-fields/track',
    TrackManualDebrisFieldReport = 'debris-fields/track-manually',
    RequestDebrisFieldReports = 'debris-fields/request-reports',

    // combat reports
    CombatReport = 'combat-reports/single',
    NewCombatReport = 'combat-reports/new',
    AllCombatReports = 'combat-reports/all',
    TrackCombatReport = 'combat-reports/track',
    RequestCombatReports = 'combat-reports/request-reports',
    RequestSingleCombatReport = 'combat-reports/request-single-report',
    CombatReportUnknown = 'combat-reports/is-unknown',

    // message tracking
    WillNotBeTracked = 'message-tracking/no-tracking', // message will not be tracked because it is no expedition, combat, or df report

    // empire tracking
    UpdatePlanetData = 'empire/update-planet-data',
    UpdatePlanetActiveItems = 'empire/update-active-items',
    UpdatePlanetBuildingLevels = 'empire/update-buildings-levels',
    UpdateResearchLevels = 'empire/update-research-levels',
    UpdatePlanetShipCounts = 'empire/update-planet-ships',
    UpdatePlanetDefenseCounts = 'empire/update-planet-defenses',
    UpdateActiveOfficers = 'empire/update-active-officers',
    UpdatePlayerClass = 'empire/update-player-class',
    UpdateAllianceClass = 'empire/update-alliance-class',
    UpdatePlanetProductionSettings = 'empire/update-planet-production-settings',
    UpdatePlayerName = 'empire/update-player-name',
    UpdateUniverseName = 'empire/update-universe-name',
    RequestEmpireData = 'empire/request-data',
    EmpireData = 'empire/data',
    NotifyEmpireDataUpdate = 'empire/notify-update',

    // settings
    UpdateSettings = 'settings/update',
    RequestSettings = 'settings/request-data',
    Settings = 'settings/data',

    // universe history
    UniverseHistoryData = 'universe-history/data',
    NotifyUniverseHistoryUpdate = 'universe-history/notify-update',
    RequestUniverseHistoryData = 'universe-history/request-data',

    // server settings
    ServerSettingsData = 'server-settings/data',
    NotifyServerSettingsUpdate = 'server-settings/notify-update',
    RequestServerSettingsData = 'server-settings/request-data',
}