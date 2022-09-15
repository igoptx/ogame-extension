import { LifeformDiscoveryEventType } from "@/shared/models/lifeform-discoveries/LifeformDiscoveryEventType";

export interface EmpireTranslations {
    header: string;
    planet: string;
    production: {
        header: string;
        subHeaders: {
            resourceProduction: string;
            mineOverview: string;
        };
        averagePerHour: string;
        totalPerHour: string;
        totalPerDay: string;
        totalPerWeek: string;
        activeProductionSettings: string;
        messageProduction100: string;

        mines: {
            crawlersAvailable: string;
        };
        items: string;
        breakdown: {
            basicIncome: string;
            mineProduction: string;
            consumption: string;
            lifeformBuildings: string;
            crawlers: string;
            plasmaTechnology: string;
            items: string;
            geologist: string;
            commandStaff: string;
            playerClass: string;
            allianceClass: string;
            lifeformTechnologies: string;
        };
    };
    amortization: {
        header: string;

        table: {
            cost: string;
            productionPlus: string;
            amortizationTime: string;

            levelsOnPlanets: (levels: number, planets: number) => string;
        };

        settings: {
            header: string;
            applyAndClose: string;

            playerSettings: {
                header: string;
                officers: string;
                playerClass: string;
                allianceClass: string;
                currentLevelPlasmatech: string;
                currentLevelAstrophysics: string;

                unusedRaidColonySlots: string;
            };
            astrophysicsSettings: {
                header: string;
                showAstrophysics: string;
                newColony: string;
            };
            plasmatechSettings: {
                header: string;
                includePlasmatech: string;
            };
            planetSettings: {
                header: string;

                includeInResult: string;
                position: string;
                maxTemperature: string;
                activeItems: string;
                crawlers: {
                    title: string;
                    overload: string;
                    fixCount: string;
                    maxCount: string;
                };
                mines: string;

                lifeform: string;
                lifeformSettings: string;
                relevantLifeformBuildings: string;
                lifeformTechnologies: string;
                ignoreEmptySlots: string;
            };
        };

        info: {
            generatingItems: string;

            slowCalculation: string;
            ctrlClick: string;
        };

        saveLoad: {
            saveButton: string;
            loadButton: (date: string) => string;
            loadedSave: (date: string) => string;
            abandonedPlanet: string;
        };

        generateItems: (value: string) => string;
    };
    lifeforms: {
        header: string;
        subHeaders: {
            overview: string;
            progress: string;
            discoveryMissions: string;

            discoveryResults: string;
            experience: string;
        };

        planet: string;
        lifeform: string;
        buildings: string;
        technologies: string;
        tier: string;
        level: string;
        discoveredOn: string;
        discoveryDateUnknown: string;
        notDiscoveredYet: string;
        totalLifeformExperience: string;
        numberOfLifeformDiscoveries: string;
        alwaysAvailable: string;

        discoveryMissions: string;
        experiencePoints: string;
        lifeformFound: string;
        eventTypes: Record<LifeformDiscoveryEventType, string>;
    };
}