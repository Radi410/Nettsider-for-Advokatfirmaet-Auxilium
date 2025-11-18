import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServiceDetailPageProps {
  serviceId: string;
  onOpenContact: () => void;
  onBack: () => void;
}

export function ServiceDetailPage({
  serviceId,
  onOpenContact,
  onBack,
}: ServiceDetailPageProps) {
  const servicesData: Record<string, any> = {
    utlendingsrett: {
      title: "Utlendingsrett",
      subtitle: "Komplett bistand i UDI og UNE-saker",
      description:
        "Vi er spesialister på utlendingsrett og hjelper deg trygt gjennom komplekse prosesser hos UDI og UNE.",
      image:
        "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYzMjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Asyl og beskyttelse",
        "Familiegjenforening",
        "Statsborgerskap",
        "Oppholdstillatelse",
        "Arbeidstillatelse",
        "Klager til UNE",
      ],
      process: [
        {
          step: 1,
          title: "Førstekonsultasjon",
          description: "Gratis vurdering av din sak",
        },
        {
          step: 2,
          title: "Dokumentasjon",
          description:
            "Vi hjelper med å samle nødvendig dokumentasjon",
        },
        {
          step: 3,
          title: "Søknad",
          description: "Vi utarbeider og sender inn søknaden",
        },
        {
          step: 4,
          title: "Oppfølging",
          description: "Vi følger opp saken aktivt",
        },
      ],
      commonChallenges: [
        {
          challenge: "Komplekse regler",
          solution:
            "Vi har dyp kunnskap om gjeldende regelverk",
        },
        {
          challenge: "Språkbarrierer",
          solution: "Vi snakker flere språk og arrangerer tolk",
        },
        {
          challenge: "Lang behandlingstid",
          solution:
            "Vi holder deg oppdatert og følger opp aktivt",
        },
      ],
    },
    arbeidsrett: {
      title: "Arbeidsrett",
      subtitle: "Din partner i arbeidsrettslige spørsmål",
      description:
        "Vi bistår både arbeidstakere og arbeidsgivere i alle typer arbeidsrettslige saker.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Oppsigelse og avskjed",
        "Diskrimineringssaker",
        "Lønnskrav og feriepenger",
        "Arbeidsavtaler",
        "Trakassering på arbeidsplassen",
        "HMS-spørsmål",
      ],
      process: [
        {
          step: 1,
          title: "Situasjonsanalyse",
          description: "Vi vurderer din rettsstilling",
        },
        {
          step: 2,
          title: "Strategi",
          description: "Vi lager en handlingsplan",
        },
        {
          step: 3,
          title: "Forhandling",
          description: "Vi forhandler med motparten",
        },
        {
          step: 4,
          title: "Søksmål (om nødvendig)",
          description: "Vi representerer deg i retten",
        },
      ],
      commonChallenges: [
        {
          challenge: "Urettmessig oppsigelse",
          solution:
            "Vi vurderer gyldigheten og krever erstatning",
        },
        {
          challenge: "Utestående lønn",
          solution:
            "Vi fremmer krav og sikrer dine rettigheter",
        },
      ],
    },
    erstatningsrett: {
      title: "Erstatningsrett",
      subtitle: "Få den erstatningen du har krav på",
      description:
        "Vi hjelper deg med å få erstatning for personskade, økonomisk tap og andre skader.",
      image:
        "https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBhZ3JlZW1lbnR8ZW58MXx8fHwxNzYzMzMxNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Personskadeerstatning",
        "Trafikkulykker",
        "Yrkesskader",
        "Medisinsk feilbehandling",
        "Forsikringskrav",
        "Voldsoffererstatning",
      ],
      process: [
        {
          step: 1,
          title: "Skadevurdering",
          description: "Vi kartlegger skadeomfanget",
        },
        {
          step: 2,
          title: "Bevisinnhenting",
          description: "Vi samler nødvendig dokumentasjon",
        },
        {
          step: 3,
          title: "Kravsfremming",
          description: "Vi fremmer erstatningskrav",
        },
        {
          step: 4,
          title: "Forhandling/søksmål",
          description: "Vi sikrer deg full erstatning",
        },
      ],
      commonChallenges: [
        {
          challenge: "Forsikringsselskap avviser krav",
          solution:
            "Vi dokumenterer skaden grundig og forhandler hardt",
        },
        {
          challenge: "Usikkerhet om erstatningsbeløp",
          solution:
            "Vi beregner korrekt erstatning basert på praksis",
        },
      ],
    },
    "kjop-avtalerett": {
      title: "Kjøp- og avtalerett",
      subtitle: "Trygg bistand ved kjøp, salg og avtaler",
      description:
        "Vi sikrer at dine interesser blir ivaretatt ved alle typer kjøp, salg og avtaleinngåelser.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Eiendomskjøp og salg",
        "Forretningskjøp",
        "Kontraktsutforming",
        "Avtalebrudds tvister",
        "Forbrukertvister",
        "Entreprisekontrakter",
      ],
      process: [
        {
          step: 1,
          title: "Behovsavklaring",
          description: "Vi forstår hva du trenger",
        },
        {
          step: 2,
          title: "Due diligence",
          description: "Vi gjennomgår alle dokumenter",
        },
        {
          step: 3,
          title: "Forhandling",
          description: "Vi forhandler beste vilkår",
        },
        {
          step: 4,
          title: "Avtaleinngåelse",
          description: "Vi sikrer en trygg avtale",
        },
      ],
      commonChallenges: [
        {
          challenge: "Uklare avtalevilkår",
          solution: "Vi utformer klare og rettssikre avtaler",
        },
        {
          challenge: "Avtalebrudd",
          solution: "Vi håndhever dine rettigheter effektivt",
        },
      ],
    },
    forvaltningsrett: {
      title: "Forvaltningsrett",
      subtitle: "Hjelp i saker mot det offentlige",
      description:
        "Vi bistår deg i klager på offentlige vedtak og andre forvaltningsrettslige spørsmål.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Klager på forvaltningsvedtak",
        "Innsyn i offentlige dokumenter",
        "Byggesaker og reguleringsplaner",
        "Konsesjonssaker",
        "Tillatelser og godkjenninger",
        "Erstatning fra det offentlige",
      ],
      process: [
        {
          step: 1,
          title: "Vedtaksvurdering",
          description: "Vi vurderer lovligheten av vedtaket",
        },
        {
          step: 2,
          title: "Klageutforming",
          description: "Vi utarbeider en grundig klage",
        },
        {
          step: 3,
          title: "Innsending",
          description: "Vi sender klagen til rett myndighet",
        },
        {
          step: 4,
          title: "Oppfølging",
          description: "Vi følger opp til endelig avgjørelse",
        },
      ],
      commonChallenges: [
        {
          challenge: "Korte klagefrister",
          solution: "Vi handler raskt og sikrer rettidig klage",
        },
        {
          challenge: "Komplekse saksbehandlingsregler",
          solution: "Vi kjenner forvaltningsloven og praksis",
        },
      ],
    },
    mekling: {
      title: "Mekling",
      subtitle: "Profesjonell mekling for minnelige løsninger",
      description:
        "Vi tilbyr mekling som en alternativ løsning på konflikter, både i familie- og forretningssaker.",
      image:
        "https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBhZ3JlZW1lbnR8ZW58MXx8fHwxNzYzMzMxNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Familiekonkflikter",
        "Arvetvister",
        "Nabolagskonflikter",
        "Forretningsmessige tvister",
        "Samarbeidsavtaler",
        "Skilsmissemekling",
      ],
      process: [
        {
          step: 1,
          title: "Innledende møte",
          description: "Vi kartlegger konflikten",
        },
        {
          step: 2,
          title: "Meklingsmøter",
          description: "Partene møtes med nøytral mekler",
        },
        {
          step: 3,
          title: "Løsningsutvikling",
          description: "Vi fasiliterer konstruktiv dialog",
        },
        {
          step: 4,
          title: "Avtale",
          description: "Vi utarbeider bindende avtale",
        },
      ],
      commonChallenges: [
        {
          challenge: "Fastlåste konflikter",
          solution: "Vi skaper rom for dialog og kompromiss",
        },
        {
          challenge: "Emosjonelle spenninger",
          solution:
            "Vi holder prosessen profesjonell og konstruktiv",
        },
      ],
    },
    "familie-arv-skifte": {
      title: "Familie-, arv- og skifterett",
      subtitle:
        "Trygg veiledning i familiens viktigste spørsmål",
      description:
        "Vi bistår i alle aspekter av familieretten, fra skilsmisse til arveoppgjør.",
      image:
        "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYzMjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Skilsmisse og separasjon",
        "Foreldreansvar og samvær",
        "Barnebidrag",
        "Arveoppgjør",
        "Testament",
        "Uskiftebo og skifte",
      ],
      process: [
        {
          step: 1,
          title: "Rådgivning",
          description: "Vi forklarer dine rettigheter",
        },
        {
          step: 2,
          title: "Dokumentasjon",
          description: "Vi samler nødvendige dokumenter",
        },
        {
          step: 3,
          title: "Forhandling",
          description: "Vi søker minnelige løsninger",
        },
        {
          step: 4,
          title: "Rettslig behandling",
          description:
            "Ved behov representerer vi deg i retten",
        },
      ],
      commonChallenges: [
        {
          challenge: "Uenighet om barn",
          solution:
            "Vi prioriterer barnets beste og søker gode løsninger",
        },
        {
          challenge: "Komplekse arveforhold",
          solution:
            "Vi sikrer rettferdig fordeling etter loven",
        },
      ],
    },
    barnevern: {
      title: "Barnevern",
      subtitle: "Juridisk bistand i barnevernssaker",
      description:
        "Vi representerer foreldre, fosterforeldre og andre i saker mot barnevernet.",
      image:
        "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYzMjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Omsorgsovertakelse",
        "Samværssaker",
        "Tilbakeføring av barn",
        "Hjelpetiltak",
        "Fosterhjemsaker",
        "Klager på fylkesnemndas vedtak",
      ],
      process: [
        {
          step: 1,
          title: "Akuttbistand",
          description: "Rask hjelp når du trenger det",
        },
        {
          step: 2,
          title: "Saksforberedelse",
          description: "Grundig gjennomgang av saken",
        },
        {
          step: 3,
          title: "Fylkesnemnda",
          description: "Vi representerer deg i fylkesnemnda",
        },
        {
          step: 4,
          title: "Oppfølging",
          description: "Kontinuerlig støtte gjennom prosessen",
        },
      ],
      commonChallenges: [
        {
          challenge: "Komplekst regelverk",
          solution:
            "Vi har spesialkompetanse på barnevernsloven",
        },
        {
          challenge: "Emosjonelt krevende",
          solution:
            "Vi gir både juridisk og menneskelig støtte",
        },
      ],
    },
    bistandsadvokat: {
      title: "Bistandsadvokat",
      subtitle: "Støtte til ofre for straffbare handlinger",
      description:
        "Vi bistår deg som fornærmet i straffesaker og sikrer at dine rettigheter blir ivaretatt.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Voldssaker",
        "Seksuallovbrudd",
        "Trusler og trakassering",
        "Ran og ran",
        "Erstatningskrav",
        "Støtte gjennom rettsprosessen",
      ],
      process: [
        {
          step: 1,
          title: "Første samtale",
          description: "Trygg og konfidensiell samtale",
        },
        {
          step: 2,
          title: "Politianmeldelse",
          description: "Vi hjelper med anmeldelsen",
        },
        {
          step: 3,
          title: "Rettssaken",
          description: "Vi er med deg i retten",
        },
        {
          step: 4,
          title: "Erstatning",
          description: "Vi sikrer erstatning for deg",
        },
      ],
      commonChallenges: [
        {
          challenge: "Traumatisk opplevelse",
          solution: "Vi gir trygg og sensitiv støtte",
        },
        {
          challenge: "Frykt for gjerningspersonen",
          solution: "Vi sikrer dine rettigheter og trygghet",
        },
      ],
    },
    trygderett: {
      title: "Trygderett",
      subtitle: "Hjelp med NAV og trygdesaker",
      description:
        "Vi bistår deg ved klager på NAV-vedtak og sikrer at du får de ytelsene du har krav på.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Uføretrygd",
        "Arbeidsavklaringspenger (AAP)",
        "Sykepenger",
        "Dagpenger",
        "Klager på NAV-vedtak",
        "Tilbakekreving av ytelser",
      ],
      process: [
        {
          step: 1,
          title: "Vedtaksvurdering",
          description: "Vi vurderer NAV sitt vedtak",
        },
        {
          step: 2,
          title: "Medisinsk dokumentasjon",
          description: "Vi hjelper med nødvendig dokumentasjon",
        },
        {
          step: 3,
          title: "Klage",
          description: "Vi utarbeider og sender klage",
        },
        {
          step: 4,
          title: "Trygderetten",
          description:
            "Ved behov representerer vi deg i retten",
        },
      ],
      commonChallenges: [
        {
          challenge: "Avslag på uføretrygd",
          solution:
            "Vi dokumenterer funksjonsnedsettelsen grundig",
        },
        {
          challenge: "Tilbakekreving",
          solution: "Vi vurderer om kravet er rettmessig",
        },
      ],
    },
    husleierett: {
      title: "Husleierett",
      subtitle:
        "Bistand i konflikter mellom utleier og leietaker",
      description:
        "Vi hjelper både utleiere og leietakere med alle typer husleietvister.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Oppsigelse av leieforhold",
        "Depositumstvister",
        "Husleieøkning",
        "Vedlikehold og mangler",
        "Leiekontrakterutforming",
        "Utkastelse",
      ],
      process: [
        {
          step: 1,
          title: "Juridisk vurdering",
          description: "Vi vurderer dine rettigheter",
        },
        {
          step: 2,
          title: "Forhandling",
          description: "Vi forsøker å løse saken i minnelighet",
        },
        {
          step: 3,
          title: "Husleietvistutvalget",
          description: "Vi fremmer saken for utvalget",
        },
        {
          step: 4,
          title: "Domstol",
          description: "Ved behov går vi til sak",
        },
      ],
      commonChallenges: [
        {
          challenge: "Uenighet om depositum",
          solution: "Vi dokumenterer boligens tilstand",
        },
        {
          challenge: "Ulovlig oppsigelse",
          solution: "Vi sikrer dine rettigheter som leietaker",
        },
      ],
    },
    strafferett: {
      title: "Strafferett",
      subtitle: "Erfarne forsvarere i alle typer straffesaker",
      description:
        "Vi gir deg et sterkt forsvar og sikrer en rettferdig behandling i straffesaker.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Vinningskriminalitet",
        "Voldssaker",
        "Narkotikasaker",
        "Økonomisk kriminalitet",
        "Trafikkforseelser",
        "Seksuallovbrudd",
      ],
      process: [
        {
          step: 1,
          title: "Politiavhør",
          description: "Vi er med deg fra første avhør",
        },
        {
          step: 2,
          title: "Etterforskning",
          description:
            "Vi følger saken gjennom etterforskningen",
        },
        {
          step: 3,
          title: "Tiltale",
          description: "Vi forbereder forsvaret grundig",
        },
        {
          step: 4,
          title: "Rettssak",
          description: "Vi gir deg et sterkt forsvar i retten",
        },
      ],
      commonChallenges: [
        {
          challenge: "Alvorlige anklager",
          solution: "Vi bygger et solid forsvar",
        },
        {
          challenge: "Komplekse bevis",
          solution:
            "Vi gjennomgår og utfordrer påtalemyndighetens bevis",
        },
      ],
    },
    "psykisk-helsevern": {
      title: "Psykisk helsevern",
      subtitle: "Juridisk bistand i psykisk helsevern-saker",
      description:
        "Vi sikrer at dine rettigheter blir ivaretatt i saker om tvungent psykisk helsevern.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Tvangsinnleggelse",
        "Tvangsmedisinering",
        "Skjerming",
        "Tvungen observasjon",
        "Klager på vedtak",
        "Kontrollkommisjon",
      ],
      process: [
        {
          step: 1,
          title: "Akutt bistand",
          description: "Rask hjelp ved tvang",
        },
        {
          step: 2,
          title: "Vedtaksvurdering",
          description: "Vi vurderer lovligheten",
        },
        {
          step: 3,
          title: "Klage",
          description: "Vi klager til kontrollkommisjonen",
        },
        {
          step: 4,
          title: "Domstolsbehandling",
          description: "Vi representerer deg i retten",
        },
      ],
      commonChallenges: [
        {
          challenge: "Komplekst lovverk",
          solution:
            "Vi har spesialkunnskap om psykisk helsevernloven",
        },
        {
          challenge: "Sårbar situasjon",
          solution: "Vi gir trygg og sensitiv bistand",
        },
      ],
    },
    "fusk-skikkethet": {
      title: "Fusk og skikkethetssaker",
      subtitle: "Forsvar i fusk- og skikkethetssaker",
      description:
        "Vi bistår studenter og yrkesutøvere i saker om eksamensfusk, plagiering og skikkethet.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      whatWeHelp: [
        "Eksamensfusk",
        "Plagiering",
        "Skikkethetsvurdering i studier",
        "Autorisasjonssaker",
        "Klager på utestenging",
        "Profesjonsetiske saker",
      ],
      process: [
        {
          step: 1,
          title: "Saksvurdering",
          description: "Vi vurderer anklagene mot deg",
        },
        {
          step: 2,
          title: "Dokumentasjon",
          description: "Vi samler bevis til ditt forsvar",
        },
        {
          step: 3,
          title: "Tilsvar",
          description: "Vi utarbeider et grundig tilsvar",
        },
        {
          step: 4,
          title: "Klage",
          description: "Ved behov klager vi på vedtaket",
        },
      ],
      commonChallenges: [
        {
          challenge: "Alvorlige konsekvenser",
          solution: "Vi jobber for å begrense konsekvensene",
        },
        {
          challenge: "Ukjent prosess",
          solution: "Vi guider deg trygt gjennom systemet",
        },
      ],
    },
  };

  const service =
    servicesData[serviceId] || servicesData["utlendingsrett"];

  return (
    <div>
      {/* Back Button & Header */}
      <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-sky-700 hover:text-sky-800 mb-6 transition-colors group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Tilbake til fagområder</span>
          </button>
          <h1 className="text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Hero with Image */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-gray-900 mb-6">
                Om tjenesten
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={onOpenContact}
                className="px-8 py-4 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors inline-flex items-center space-x-2"
              >
                <span>Book konsultasjon</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* What We Help With */}
          <div className="mb-16">
            <h2 className="text-gray-900 mb-8">
              Hva vi kan hjelpe deg med
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.whatWeHelp.map(
                (item: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 bg-sky-50 p-4 rounded-lg border border-sky-100"
                  >
                    <CheckCircle
                      className="text-sky-700 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-gray-900 mb-8">
              Slik jobber vi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step: any, idx: number) => (
                <div key={idx} className="relative">
                  <div className="bg-white p-6 rounded-xl border-2 border-sky-100 hover:border-sky-300 transition-colors h-full">
                    <div className="w-12 h-12 bg-sky-700 text-white rounded-full flex items-center justify-center mb-4">
                      <span>{step.step}</span>
                    </div>
                    <h3 className="text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {idx < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-sky-200">
                      <ArrowRight
                        className="text-sky-400 absolute -top-2 right-0"
                        size={20}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Common Challenges */}
          <div className="mb-16">
            <h2 className="text-gray-900 mb-8">
              Vanlige utfordringer og løsninger
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.commonChallenges.map(
                (item: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <AlertCircle
                        className="text-amber-500 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <h3 className="text-gray-900">
                        {item.challenge}
                      </h3>
                    </div>
                    <div className="flex items-start space-x-3 pl-8">
                      <CheckCircle
                        className="text-sky-700 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <p className="text-gray-600">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Trenger du hjelp med {service.title.toLowerCase()}?
          </h2>
          <p className="text-xl text-sky-50 mb-8">
            Kontakt oss i dag for en gratis og uforpliktende
            konsultasjon. Vi er her for å hjelpe deg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 bg-white text-sky-700 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Book konsultasjon</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="tel:+4712345678"
              className="px-8 py-4 bg-sky-800 text-white border-2 border-white rounded-lg hover:bg-sky-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Ring oss nå</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}