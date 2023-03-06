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

Tredjesiden er her MiniDashboard der komponenter er hentet fra Studio /frontend/.<br>
Har også satt til i18next og react-i18next og importert /language/ fra Studio /frontend/<br>

Studio /frontend/ synes å være noe utdatert. Måtte fikse noen dobble imports, <br> 
React import trengtes ikke, etc.<br>

