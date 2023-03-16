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
Har satt inn navigering : Side [1] [2] [3] [4]

Tredjesiden er her nå "MiniDashboard" der komponenter er hentet fra Studio /frontend/.<br>
Dette inkluderer Footer komponent som gir lenker til eksterne ressurser.<br>
Har også satt til i18next og react-i18next og importert /language/ fra Studio /frontend/<br>
Dette gjør at Footer får språk-strengene den trenger.

Merk! Studio /frontend/ synes å være noe utdatert. Måtte fikse noen dobble imports, <br> 
React import trengtes ikke (tror det kom med React17 til 18?!), etc.<br>

10.03.23: Redux State er etablert for dummy1 app.<br>
Datastruktur brukt er fra app-localtest repo, 
som igjen synes å stamme fra altinn-resource-registry datastruktur, mer spesifikt:
/src/Altinn.ResourceRegistry.Core/Models/ServiceResource.cs
Se annotering i branch annotations_TH for denne filen, og sammenlign med
/app-localtest/testdata/authorization/resources/Appid_400.json

Så Appid_400.json ligger nå nederst som state i dummy1 app. State kan nås og vises,
og kan endres ved to knapper.

16.03.23: Har laget en fjerde side som tester ut React Query kall
til JsonPlaceholder website. Kan nå skifte URL som skal gi en 404-feil,
for å demonstrere asynkron isLoading og feil-håndtering, men det 
virker som om React Query likevel trenger reload av siden. Mulig
caching (isLoading blir ikke oppdatert, og data-objektet forblir tilgjengelig,
så her trengs mer arbeid.)


*******************************
Appendix Appid_400.json:


  > Appid_400.json : 
  
  `
	
	{
	"title": {
		"en": "Humbug Registry",
		"nb": "Tulleregisteret",
		"nn": "Tulleregisteret"
	},
	"sector": null,
	"status": null,
	"validTo": "9999-12-31T23:59:59.997",
	"homepage": null,
	"isPartOf": null,
	"keywords": null,
	"validFrom": "2020-03-04T18:04:27.27",
	"identifier": "appid-400",
	"isComplete": false,
	"description": {
		"en": "Humbug Registry",
		"nb": "Tulleregisteret",
		"nn": "Tulleregisteret"
	},
	"resourceType": "MaskinportenSchema",
	"thematicArea": null,
	"isPublicService": true,
	"rightDescription": {
		"en": "Gives access to silly things.",
		"nb": "Gir tilgang til tullete ting.",
		"nn": "Gir tilgang til tullete ting."
	},
	"resourceReferences": [
		{
			"reference": "8f08210a-d792-48f5-9e27-0f029e41111e",
			"referenceType": "DelegationSchemeId",
			"referenceSource": "Altinn2"
		},
		{
			"reference": "nav:paa/v1/luring",
			"referenceType": "MaskinportenScope",
			"referenceSource": "Altinn2"
		},
		{
			"reference": "AppId:400",
			"referenceType": "ServiceCode",
			"referenceSource": "Altinn2"
		},
		{
			"reference": "1",
			"referenceType": "ServiceEditionCode",
			"referenceSource": "Altinn2"
		}
	],
	"hasCompetentAuthority": {
		"orgcode": "PAA",
		"organization": "985399077",
		"name": {
		"en": "DEPARTMENT OF HUMBUG",
		"nb": "PÅFUNNSETATEN",
		"nn": "PÅFUNNSETATEN"
		}
	}
}

`

> Fixme: Wiki formatteringen av Appid_400.json svikter i siste linje.<br>
> Det er også endel key:value par som er satt som null, e.g. homepage <br>
> der det finnes mer informasjon i andre .json objekter. Men dette er godt nok for nå.



