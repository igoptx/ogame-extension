import { ExpeditionDepletionLevel } from "@/shared/models/expeditions/ExpeditionDepletionLevel";
import { ExpeditionEventSize } from "../../../../models/expeditions/ExpeditionEventSize";
import { ExpeditionEventType } from "../../../../models/expeditions/ExpeditionEventType";
import { ExpeditionMessages } from "./types";

export const pl: ExpeditionMessages = {
    [ExpeditionEventType.darkMatter]: {
        [ExpeditionEventSize.small]: [
            'Ekspedycja znalazła trochę Antymaterii',
            'Znaleźliśmy wrak obcego statku'/* , a w nim mały pojemnik z Antymaterią.'*/,
            /*'W małym */'statku znaleźliśmy osobliwego obcego'/* , który dał nam skrzynię z antymaterią w zamian za proste obliczenia matematyczne'*/,
            /*'Nasza */'ekspedycja przechwyciła statek-widmo'/* , który transportował małą ilość Antymaterii. Nie znaleźliśmy żadnych wskazówek odnośnie losu załogi statku, ale nasi technicy zdołali odzyskać Antymaterię.'*/,
            /*'Ekspedycja podążyła za */'dziwnym sygnałem pochodzącym z asteroidy'/* . W jej jądrze znaleziono małą ilość antymaterii. Asteroida została odholowana, a odkrywcy próbują wydobyć antymaterię.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*'Nasza */'ekspedycja przeprowadziła niezwykły eksperyment'/* . Naukowcom udało się wydobyć Antymaterię z umierającej gwiazdy.'*/,
            /*LOCA: pl 'Unsere Expedition hat eine */'uralte Raumstation gefunden'/*, die wohl schon seit langer Zeit unkontrolliert durch das All schwebt. Die Station selbst war komplett unbrauchbar, jedoch lagerte in einem ihrer Reaktoren noch ein wenig Dunkler Materie. Unsere Techniker versuchen, so viel wie möglich davon zu bergen.'*/,
            /*LOCA: pl 'Unsere Expedition meldet ein seltsames spektrales Phänomen. Dies führte unter anderem dazu, dass sich in den */'Energiespeichern der Schiffsschilde Dunkle Materie'/* bildete. Unsere Techniker versuchen nun, solange das Phänomen noch anhält, möglichst viel dieser Dunklen Materie zu konservieren.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*LOCA: pl 'Eine */'spontane Hyperraumverzerrung'/* hat es deiner Expedition ermöglicht, eine große Menge dunkler Materie sicherzustellen!'*/,
            /*LOCA: pl 'Unsere Expedition meldet einen ersten Kontakt der besonderen Art. Anscheinend hat */'eine Energiekreatur, die sich Legorianer nannte'/*, die Schiffe der Expedition durchflogen und dann beschlossen, der unterentwickelten Spezies ein wenig auszuhelfen - es materialisierte sich ein Behälter mit dunkler Materie an Bord der Brücke!'*/,
        ],
        regex: (darkMatter: string) => new RegExp(`Zrabowano: (?<amount>[^\\s]+) (?<name>${darkMatter})`, 'i'),
    },

    [ExpeditionEventType.resources]: {
        [ExpeditionEventSize.small]: [
            /*'Twoja */'ekspedycja natrafiła na małą asteroidę'/* , z której można pozyskać trochę surowców.'*/,
            /*'Znaleźliśmy łatwo dostępne pola */'surowców na odległej planetoidzie'/* i wydobyliśmy pewną ich ilość.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*'Twoja ekspedycja przez przypadek natrafiła na w */'pełni załadowany, ale opuszczony konwój fregat'/* . Udało się odzyskać część surowców.'*/,
            /*LOCA: pl 'Auf einem kleinen Mond mit eigener Atmosphäre fand deine Expedition */'große Rohstoffvorkommen'/*. Die Bodencrews sind dabei, diese natürlichen Schätze zu heben.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*'Pierścienie */'minerałów wokół nieznanej planety zawierają niezliczone'/* ilości surowców. Statki wracają z pełnymi ładowniami.'*/,
            /*LOCA: pl 'Deine Expeditionsflotte meldet den */'Fund eines riesigen Alien-Schiffswracks'/*. Mit der Technologie konnten sie zwar nichts anfangen, aber das Schiff ließ sich in seine Einzelteile zerlegen, wodurch man wertvolle Rohstoffe gewinnen konnte.'*/,
        ],
        regex: (resources: string[]) => new RegExp(`Zrabowano: (?<amount>.+) (?<name>${resources.join('|')})`, 'i'),
    },

    [ExpeditionEventType.fleet]: {
        [ExpeditionEventSize.small]: [
            /*'Natknęliśmy się na */'pozostałości po poprzedniej ekspedycji'/* . Nasi technicy postarają się uruchomić część statków.'*/,
            /*'Twoja ekspedycja natknęła się na */'twierdzę starożytnego imperatora opuszczoną wiele'/* lat temu. W jej hangarach znaleziono statki, które technicy usiłują ponownie uruchomić.'*/,
            /*'Ekspedycja natknęła się na */'planetę niemalże całkowicie zniszczoną przez wojny'/* . Różne statki krążą na orbicie. Technicy starają się naprawić niektóre z nich. Może uda się również uzyskać informacje, co się tu wydarzyło.'*/,
            /*'Znaleźliśmy */'opuszczoną stację piratów'/* , a w jej hangarach stare statki. Technicy dokonują oględzin i sprawdzają, czy niektóre z nich mogą zostać wykorzystane.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*'Nasza ekspedycja */'natrafiła na starą automatyczną stocznię'/* . Kilka statków było nadal w fazie produkcyjnej i nasi technicy starają się aktualnie uruchomić generatory energii, aby dokończyć ich produkcję.'*/,
            /*LOCA: pl 'Wir haben die */'Reste einer Armada'/* gefunden. Die Techniker der Expeditionsflotte haben sich sofort auf die halbwegs intakten Schiffe begeben und versuchen, diese wieder instand zu setzen.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*LOCA: pl 'Wir haben einen */'riesigen Raumschiffsfriedhof'/* gefunden. Einigen Technikern der Expeditionsflotte ist es gelungen, das ein oder andere Schiff wieder in Betrieb zu nehmen.'*/,
            /*LOCA: pl 'Wir haben einen Planeten mit */'Resten einer Zivilisation'/* entdeckt.'*/,
        ],
        regex: (ships: string[]) => new RegExp(`Następujące statki dołączyły do floty:\\s*(?<ships>((${ships.join('|')}):\\s*\\d+\\s*)+)?`, 'i'),
    },

    [ExpeditionEventType.nothing]: [
        /*'Mimo pierwszych o*/'biecujących skanów tego sektora'/* , ekspedycja powróciła z pustymi rękami.'*/,
        /*'Poza osobliwymi małymi */'zwierzętami pochodzącymi z nieznanej bagiennej planety'/* ekspedycja nie przywiozła z wyprawy niczego groźnego.'*/,
        /*'Ekspedycja napotkała na */'rozległą pustkę w przestrzeni'/* , w której nie było nawet małej asteroidy, promieniowania lub czegokolwiek, co mogłoby zagrozić ekspedycji.'*/,
        /*'Żywa istota */'zbudowana z czystej energii spowodowała'/* , że wszyscy członkowie ekspedycji zaczęli wpatrywać się w hipnotyzujące wzory na ekranach. Gdy załoga się ocknęła, okazało się, że ekspedycja musi zostać przerwana z powodu małej ilości deuteru.'*/,
        /*'Awaria */'reaktora głównego statku ekspedycji niemalże zniszczyła'/* całą flotę. Na szczęście technicy byli bardzo kompetentni i udało się uniknąć najgorszego. Naprawa zabrała sporo czasu i ekspedycja musiała wrócić nie wykonawszy zadania.'*/,
        /*'Podczas */'wyprawy zrobiono wspaniałe zdjęcia supernowej'/* . Niestety nic innego nie udało się przywieźć, lecz przynajmniej są spore szanse na wygranie tegorocznego konkursu "Fotografia Roku Wszechświata".'*/,
        /*'Ekspedycja */'śledziła dziwny sygnał od jakiegoś czasu'/* . W końcu okazało się, że sygnał nadawany był ze starej sondy wysłanej pokolenia temu celem przywitania się z innymi gatunkami. Sondę uratowano, a wiele muzeów na Twojej rodzinnej planecie wyraziło zainteresowanie nią.'*/,
        /*'Teraz wiemy, że czerwone */'anomalie klasy 5 nie tylko destabilizują'/* systemy nawigacyjne statków, ale także powodują halucynacje u wielu członków załogi. Ekspedycja nie przywiozła niczego z wyprawy.'*/,
        /*'Ekspedycja niemalże została złapana przez */'pole grawitacyjne gwiazdy neutronowej i potrzebowała'/* trochę czasu na całkowite uwolnienie się. Jako, że na ten cel wykorzystano dużo deuteru, ekspedycja okazała się bezowocna.'*/,
        /*'Dziwny */'wirus komputerowy zaatakował system nawigacji'/* krótko po tym, jak ekspedycja opuściła rodzimy układ słoneczny. Spowodowało to, że ekspedycja zaczęła zataczać okręgi. Rzecz jasna, ekspedycja nie należała do udanych.'*/,
        /*'Chyba nie */'powinniśmy byli urządzać przyjęcia urodzinowego dla kapitana'/* na tej samotnej planecie. Straszna, nieznana gorączka spowodowała, że większość załogi musiała pozostać w izolatkach przez resztę ekspedycji. Z powodu braków w załodze ekspedycja nie powiodła się.'*/,
        /*'Ktoś zainstalował w */'komputerach statku starą grę strategiczną'/* . Misja ekspedycji trwała długo, lecz nie była zbyt owocna.'*/,
    ],

    [ExpeditionEventType.lostFleet]: [
        /*'Ostatnią zdobyczą ekspedycji było naprawdę dobre */'zdjęcie otwierającej się czarnej dziury.',
        /*LOCA: pl 'Von der Expedition ist */'nur noch folgender Funkspruch übrig'/* geblieben: Zzzrrt Oh Gott! Krrrzzzzt dass zrrrtrzt sieht krgzzzz ja aus wie Krzzzzzzzztzzzz ...'*/,
        /*'Roztopienie rdzenia głównego statku powoduje reakcje łańcuchową, */'która powoduje wybuch niszczący całą flotę ekspedycji',
        'Ekspedycja nie wykonała skoku powrotnego'/*. Nasi pracownicy naukowi w dalszym ciągu próbują wyjaśnić co się stało, lecz wydaje się, że flota jest bezpowrotnie stracona.'*/,
    ],

    [ExpeditionEventType.trader]: [
        /*LOCA: pl 'Deine Expeditionsflotte hatte kurzen */'Kontakt zu einer scheuen Alien-Rasse'/*.'*/,
        /*LOCA: pl 'Deine Expeditionsflotte hatte ein Notsignal aufgefangen. Es handelte sich um einen Megafrachter, der im starken Gravitationsfeld eines Planetoiden gefangen war. Nachdem der Frachter erfolgreich befreit worden war, verkündete der Frachterkapitän feierlich, seine Befreier als bevorzugte Exklusivkunden */'in sein schwarzes Buch'/* aufzunehmen.'*/,
    ],

    [ExpeditionEventType.early]: [
        /*'Niespodziewane sprzężenie */'zwrotne w zwojach energetycznych silników spowodowało'/* , że ekspedycja wróci szybciej, niż się spodziewano. Pierwsze raporty nie zawierają żadnych niepokojących informacji.'*/,
        /*'Twoja ekspedycja nie wykryła żadnych anomalii w badanym rejonie. Jednak flota */'wpadła w wiatr słoneczny podczas powrotu'/* . Z tego powodu podróż uległa znacznemu skróceniu. Twoja ekspedycja wróci do domu nieco wcześniej.'*/,
        /*'Młody odważny dowódca pomyślnie */'przedostał się przez niestabilną dziurę w czasoprzestrzeni'/* , by skrócić lot powrotny. Ekspedycja nie przywiozła jednak niczego nowego.'*/,
    ],

    [ExpeditionEventType.delay]: [
        /*'Główny nawigator miał zły dzień, */'co spowodowało obranie błędnego kursu'/* . Flota wylądowała w zupełnie innym miejscu, przez co wydłuży się czas jej powrotu.'*/,
        /*'"Twoja */'ekspedycja osiągnęła sektor pełen burz cząsteczkowych'/* , które spowodowały przeciążenie systemów przechowywania energii i uszkodzenie głównych systemów statków. Mechanicy zdołali zlikwidować najpoważniejsze usterki, ale powrót ekspedycji nastąpi z dużym opóźnieniem.'*/,
        /*'Z nieznanych */'powodów ekspedycja nieomal zderzyła się z gwiazdą'/* . Na szczęście pilotom udało się uniknąć kolizji i wylądować w znanym systemie. Wypadek ten spowoduje opóźnienie w powrocie floty.'*/,
        /*'Gwiezdny wiatr */'wiejący ze strony czerwonego giganta uniemożliwił skok'/* ekspedycji w nadprzestrzeń, przez co wydłuży się obliczenie skoku powrotnego. W tym sektorze nie było niczego poza pustką między gwiazdami. Flota wróci później, niż oczekiwano.'*/,
        /*'Nowy */'system nawigacyjny nadal nie jest wolny od błędów'/* . Skok floty ekspedycyjnej nie tylko przeniósł ją w całkiem inne miejsce, ale także wszelkie zapasy deuteru zostały wykorzystane. Na szczęście skok przeniósł flotę w pobliże księżyca planety startowej. Lekko zawiedziona ekspedycja wraca pozbawiona swego napędu. Podróż powrotna zajmie ciut więcej czasu.'*/,
        /*'Główny */'statek ekspedycyjny zderzył się z nieznanym statkiem'/* , który nagle wpadł w lecącą flotę. Ów statek wybuchł poważnie uszkadzając statek ekspedycyjny. Jak tylko zostaną przeprowadzone potrzebne naprawy, flota zawróci na planetę startową, ponieważ dalszy lot w takich warunkach nie jest możliwy.'*/,
    ],

    [ExpeditionEventType.item]: {
        regex: /Do ekwipunku dodano (?<name>.+)/i,
    },

    [ExpeditionEventType.pirates]: {
        [ExpeditionEventSize.small]: [
            /*'Jacyś bardzo */'zdesperowani piraci próbowali przejąć flotę'/* ekspedycji.'*/,
            /*'Jacyś */'prymitywni barbarzyńcy atakują nas z użyciem pojazdów'/* , których nie można nazwać statkami kosmicznymi. Jeżeli ostrzał z ich strony będzie się nasilać, będziemy zmuszeni odpowiedzieć ogniem.'*/,
            /*'Odebraliśmy */'sygnał radiowy od jakichś pijanych piratów'/* . Wydaje się, że wkrótce nas zaatakują.'*/,
            'Musieliśmy walczyć z piratami'/*. Na szczęście było ich tylko kilku.'*/,
            /*LOCA: pl 'Unsere Expeditionsflotte meldet, dass ein gewisser */'Moa Tikarr und seine wilde Meute'/* die bedingungslose Kapitulation unserer Flotte verlangen. Sollten sie Ernst machen, werden sie feststellen müssen, dass sich unsere Schiffe durchaus zu wehren wissen.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*LOCA: pl 'Deine Expeditionsflotte hatte ein */'unschönes Zusammentreffen mit einigen Weltraumpiraten'/*.'*/,
            /*LOCA: pl 'Wir sind in den */'Hinterhalt einiger Sternen-Freibeuter'/* geraten!'*/,
            /*LOCA: pl 'Der Hilferuf, dem die Expedition folgte, stellte sich als */'böse Falle einiger arglistiger Sternen-Freibeuter'/* heraus. Ein Gefecht war unvermeidlich.'*/,
        ],
        [ExpeditionEventSize.large]: [
            /*LOCA: pl 'Die aufgefangenen Signale stammten nicht von Fremdwesen, sondern */'von einer geheimen Piratenbasis'/* ! Die Piraten waren von unserer Anwesenheit in ihrem Sektor nicht besonders begeistert.'*/,
            /*LOCA: pl 'Die Expeditionsflotte meldet */'schwere Kämpfe mit nicht-identifizierten Piratenschiffen'/*.'*/,
        ],
    },

    [ExpeditionEventType.aliens]: {
        [ExpeditionEventSize.small]: [
            /*'Kilka */'egzotycznie wyglądających statków zaatakowało twoją ekspedycję'/* bez żadnego ostrzeżenia'*/,
            /*'Twoja ekspedycja */'napotkała niezbyt przyjazną rasę obcych'/* ...'*/,
            /*'Nasza ekspedycja została */'zaatakowana przez niewielką grupę niezidentyfikowanych'/* statków.'*/,
            /*LOCA: pl 'Die Expeditionsflotte meldet */'Kontakt mit unbekannten Schiffen'/*. Die Funksprüche sind nicht entschlüsselbar, jedoch scheinen die fremden Schiffe ihre Waffen zu aktivieren.'*/,
        ],
        [ExpeditionEventSize.medium]: [
            /*LOCA: pl 'Eine */'unbekannte Spezies greift unsere Expedition'/* an!'*/,
            /*'Wygląda na to, że */'Twoja ekspedycja naruszyła terytorium nieznanej'/* rasy wojowników.'*/,
            /*'Kontakt z naszą ekspedycją został przerwany na krótki czas. Możemy jednak odszyfrować jej ostatnią wiadomość. Są pod ciężkim obstrzałem, */'agresorzy nie zostali rozpoznani',
        ],
        [ExpeditionEventSize.large]: [
            /*LOCA: pl 'Deine Expedition ist in eine Alien-Invasions-Flotte geraten und */'meldet schwere Gefechte'/*.'*/,
            /*LOCA: pl 'Wir hatten Mühe den korrekten */'Dialekt einer Alienrasse'/* auszusprechen. Unser Diplomat rief daher "Feuer!" statt "Friede!".'*/,
            /*LOCA: pl 'Ein großer */'Verband kristalliner Schiffe unbekannter Herkunft'/* hält direkten Kollisionskurs mit unserer Expeditionsflotte. Wir müssen nun wohl vom Schlimmsten ausgehen.'*/,
        ],
    },

    logbookRegex: /Wpis z dziennika pokładowego oficerów komunikacyjnych|Wpis z dziennika pokładowego oficera komunikacyjnego:(?<text>.+)/i,
    depletionMessages: {
        [ExpeditionDepletionLevel.none]: [
            /*'Zdaje się, że ta */'część wszechświata jeszcze nie była badana',
            /*'to cudowne uczucie być pierwszymi, */'którzy podróżują przez ten niezbadany sektor',
        ],
        [ExpeditionDepletionLevel.low]: [
            /*'Zdaje się, że żaden */'człowiek jeszcze nie był w tej części galaktyki',
            /*'znaleźliśmy */'szczątki starożytnego statku kosmicznego'/* . Nie jesteśmy zatem pierwsi w tym miejscu'*/,
            /*'niemalże */'doszło do kolizji z flotą innej ekspedycji'/* . Nie sądziłem, że inne ekspedycje mogą znajdować się w pobliżu.'*/,
        ],
        [ExpeditionDepletionLevel.medium]: [
            /*LOCA: pl 'Wir haben den Abschluss der Expedition mit den Crewmitgliedern einer zweiten Expeditionsflotte, die im selben Sektor unterwegs war, gefeiert. */'Die haben auch nichts Spannendes zu berichten',
            /*LOCA: pl 'Es wurden */'Anzeichen für die Präsenz anderer Expeditionsflotten'/* gefunden.'*/,
            /*LOCA: pl 'Es wurde */'friedlicher Funkkontakt zu einigen anderen Expeditionen'/* in diesem Sektor hergestellt.'*/,
        ],
        [ExpeditionDepletionLevel.high]: [
            /*LOCA: pl 'Wenn wir uns zu unsicher fühlen, können wir uns ja */'mit all den anderen Expeditionen'/*, die hier herum fliegen, zusammen tun.'*/,
        ],
    },
};