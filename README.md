# Sub-prosjekt ressursdummy1
Første iterasjon av ressursprosjektet.

Første delmål er å lage en helt enkel tekstboks app.

Andre delmål er å hente inn ressurser fra backend.

Tredje delmål er å kunne endre en ressurs og sende til backend.

Dummy app er bygget fra Vite templat, med React og TypeScript.

https://vitejs.dev/guide/

App er bygget med yarn 1.22.19

App preppes og startes med
> yarn

> yarn dev

App blir da tilgjengelig på http://localhost:5173/dummyroot

03.03.23: Modellerer version 0.1.0 på altinn-studio /frontend/dashboard/

Har satt opp RouterBrowser og to Pages. 
Førsteside er : http://localhost:5173/dummyroot
Andreside er: http://localhost:5173/dummyroot/andreside
Har satt inn navigering nederst: Side [1] [2] [3]

Tredjesiden er her nå "MiniDashboard" der komponenter er hentet fra Studio /frontend/.<br>
Dette inkluderer <Footer> komponent som gir lenker til eksterne ressurser.<br>
Har også satt til i18next og react-i18next og importert /language/ fra Studio /frontend/<br>
Dette gjør at Footer får språk-strengene den trenger.

Merk! Studio /frontend/ synes å være noe utdatert. Måtte fikse noen dobble imports, <br> 
React import trengtes ikke, etc.<br>

09.03.23: På tide å sette opp Redux State for dummy1 app.<br>
Jeg vil modellere dette på datastruktur brukt i app-localtest repo, 
som igjen synes å stamme fra altinn-resource-registry datastruktur, mer spesifikt:
/src/Altinn.ResourceRegistry.Core/Models/ServiceResource.cs
Se annotering i branch annotations_TH for denne filen, og sammenlign med
/app-localtest/testdata/authorization/resources/Appid_400.json

Så første delmål er å bruke Appid_400.json fil som mal for initial state
av Redux State.


