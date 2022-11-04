# Prosjekt 3
Velkommen til SIPS!🍸
Dette er vår nettside for drink-entusiaster. Her kan en finne en rekke ulike cocktails, se hvordan de ble laget og hvilke ingredienser mant trenger. Det er en fin mulighet for å kunne lære seg å lage favoritt drinken sin helt selv, eller for å prøve seg på noen helt nye drinker!

## 🏃🏼Kjøring av programmet
- Klon repoet fra GitLab: https://gitlab.stud.idi.ntnu.no/it2810-h22/Team-26/project-3
- Pass på at du er koblet til NTNU sitt nettverk
### Start serveren
- Naviger deg inn i server mappen. 
- Kjør`npm install`
- Deretter starter du backenden med `npm start`

### Start klienten
- Naviger deg inn i client mappen. 
- Kjør`npm install`
- Deretter starter du frontenden med `npm start`
- Naviger deg til localhost:3000/project3 for å se nettsiden.   
 

![](https://i.imgur.com/DcOs3oQ.jpg)

![](https://i.imgur.com/0UcSlG3.jpg)



## 🛠Funksjonalitet

### 📜Listebasert presentasjon av søk hvor det er lagt opp til håndtering av store resultatsett
Siden henter inn data om ulike cocktails. Det legges til rette for større datasett med flere cocktails, dersom det skulle implementeres. Datasettet presenteres som en liste av cocktail-kort.

### 🔍Søk, filtrering og sortering
På siden kan du søke etter en spesifikk cocktail, eller filtrere på alkoholer (eksempelvis en du har stående i barskapet!). Du kan også velge om du vil sortere alfabetisk fra A-Z, eller beholde initiell rekkefølge. Dersom det er drinker med et spesifikt alkohol du er på leting etter, kan du filtrere etter dette.

### 🍸Detaljer for objekt

Er du usikker på hva du vil lage, kan du be om å bli tildelt en tilfeldig drink ved å trykke på "Mix me a drink!". Enten du velger dette eller klikker deg inn på en drink du selv har valgt deg ut, vil du få opp detaljer om denne drinken.

Hver drink kommer med navn, bilde og en oppskrift som inkluderer instruksjoner og ingredienser som trengs. 

### 🧑🏼‍💻Brukergenerert data

Av persistent lagring av brukergenerert data valgte vi å la brukere av applikasjonen registrere egen konto, som blir lagret i databasen med et hashet passord, som man senere kan bruke til å logge inn med. Planen var å bruke dette til å kunne lagre favoritter, men dette ble ikke prioritert da vi allerede har brukergenerert data. Når man trykker på profilikonet oppe til høyre vil dette endre seg ut i fra om man er logget inn eller ikke.

Om du ikke er logget inn vil du ha muligheten til å gjøre det, og det vil stå at du er en "Guest".

Om du er logget inn vil det stå mailen på brukeren din, samt du vil ha muligheten til å logge ut.

Logg inn-funksjonen kan testes enten ved å registrere egen bruker, eller ved å bruke testkontoen vår: test@test.com : 123

### 👥Universell utforming
Ved bruk av både bildet og navn av drink gjør vi nettsiden mer universell utformet. VI har også valgt å ikke bruke rød og grønn farger ved siden av hverandre ettersom det er den mest normale fargeblindheten. Vi har også hatt fokus på intuivitet - bruken av ikoner, tekst og piler gjør det enkelt å navigere seg rundt på siden.

### 🌍Bærekraftig utvikling
For å ha en bærekraftig utvikling har vi hatt et fokus på gjenbruk av kode. Dette er smart for å spare tid og ressurser, og gjør koden mer forståelig. Et eksempel er ved filtreringen i FilterButtons.tsx. Her blir koden for å filtrere på vodka, gin, rum og tequila gjort ved samme funksjon. 

### 💻Responsivitet
For å ta hensyn til flere skjermstørrelser har vi sørget for at komponentene skalerer etter hvilken skjermstørrelsen man er på. Dette har blitt gjort ulikt for de ulike komponentene. 


## 🖍Valg av løsninger

Løsningen er en protoype for en søkbar katalog, med en frontend hvor brukeren har muligheten for å søke, samt en backend med varierende drinker og muligheten til å lage sin egen bruker.

Applikasjonen består av en forside med filtrering og søk, en tilfeldig drink side, en spesifik drink side, login og en registrerings side. 

Vår frontend er laget ved hjelp av React med TypeScript.
CRUD-operasjoner til vår backend-server gjøres ved hjelp av GraphQL og Apollo Client.

### GraphQL med Apollo backend

Apollo Client blir tatt i bruk for å kommunisere med backend, og dette gjorde vi via GraphQL. Implementeringen vår bruker "code first-tilnærmingen" der vi bygger våre klasser og legger til dekoratører som automatisk genererer et graphQL-skjema. Dette eliminerer prosessen med å manuelt skrive skjemaer, og fremskynder utviklingsprosessen. Apollo Client gjør det også enkelt å håndtere både lokal og remote data samtidig.


### Login og registrering
Vi valgte å gjøre innlogging frivillig, ettersom det ville være suboptimalt å måtte logge seg inn for å søke opp en drink. 

Registreringen vår skjer i all hovedsak i resolvers/users.ts. Her har vi en mutation, registerUser som sjekker om en bruker med den emailen allerede eksisterer, kaster en error om den gjør det, visst ikke krypterer den så passordet, bygger mongoose modellen, lager en JWT/token og legger den på User modellen, før den så lagrer brukeren i MongoDB.

JWT (JSON Web Token) blir brukt til å holde en bruker logget inn på siden. Visst du har en gyldig token er du logget inn, og om du logger ut blir denne tokenen fjernet. 

Token blir lagret i localStorage, dette er ikke optimalt med tanke på XSS angrep, men siden dette bare er et skoleprosjekt valgte vi å gjøre det slik i stedet for å bruke for eksempel HttpOnly cookies.

Logg inn skjer enkelt via loginUser i resolvers/users.ts. Den sjekker om en bruker med mailen eksisterer, sjekker om passordet som er skrevet inn er det samme som det krypterte passordet i databasen tar så og lager ny token og legger denne på brukeren. Om brukeren ikke eksisterer blir det kastet en error som også vises på siden.


### MongoDB - lagring av data
I mongoDB lagres brukere som "users" og drinker som "drinks". Vi bruker så ulike mongoose modeller for å hente ut den informasjonen vi trenger.


### Frontend design

For å lage design av frontend har det blitt brukt Figma. Deretter har vi brukt komponenter fra Chakra UI for å lage en oversiktlig og estetisk nettside i henhold til designet. 

### State management med reactive variables
Apollo client leverer sin egen form for Local State Management med reaktive variabler/"Reactive Variables". De lar deg lese og skrive lokale data i applikasjonen, uten å måtte bruke en GraphQL-query. De er også ideelle som parameterverdier i queries, siden en query blir automatisk hentet på nytt med oppdaterte parametere når en Reactive Variable endres. Dette blir brukt for å ha dynamisk scrolling, da vi oppdaterer en offset.


### Komponenter og Biblioteker
Til gjennomføring av dette prosjektet er blant annet følgende komponenter og biblioteker benyttet:
- React
- Chakra UI
- GraphQL
- Apollo Client
- Apollo Server
- MongoDB



## 🧪Testing
Testing har for det meste blitt gjort på frontend, siden dette var det som ble krevd fra problembeskrivelsen. Testmappen i frontend er ment å speile den vanlige mappestrukturen for å gjøre det enkelt å navigere og finne.

Testene består av:

Enhetstester, med Jest
Tester fra ende til ende, med Cypress

For å kjøre unit-testene må du navigere til frontend-mappen. Så kan du skriver du:

```
npm test
```


For å kjøre end-to-end-testene må du navigere deg til frontend-mappen. Både backend og frontend må kjøre. Start testene med:
```
npx cypress run
```

### End2end
Cypress gir mulighet for E2E-testing der vi programmerer hvordan brukerinndata skal oppføre seg og hva vi forventer at resultatet av flere brukerinteraksjoner skal resultere i.

For å teste med Cypress må programmet først startes opp. Uten dette vil testene feile.

### Enhetstest
Enhetstester er skrevet i Jest. Vi har tre snapshot-tester for å teste at komponenter ikke endrer seg uforutsett. I tillegg har vi skrevet en test for funksjonalitet innad i en komponent.

Dersom testene ikke kjører ved 'npm test', er dette fordi de regnes som allerede kjørt. Skriv da inn 'a' i terminalen for å kjøre alle tester.

### Manuell testing

For å teste brukergrensesnittet og responsivitet for alle komponenter i ulike skjermoppløsninger, har alle gruppens medlemmer testet applikasjonen manuelt. Dette innebærer å bytte mellom de ulike sidene, interagere med komponenter og skalere vinduet. På denne måten har vi oppdaget og ordnet opp i bugs og forbedringer underveis, og skaffet en viss sikkerhet om at applikasjonen fungerer som forventet.

