import { createSlice } from '@reduxjs/toolkit';

// setter initialState til Appid_400.json fra repo
// /app-localtest/testdata/authorization/resources/
// legger til en testProperty av type integer: default = 1
// slik at reducer function kan andre denne lett
const initialState = {
	"title": {
		"en": "Humbug Registry",
		"nb": "Tulleregisteret",
		"nn": "Tulleregisteret"
	},
    "testProperty": 1,
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

const resourceSlice = createSlice({
    name: 'resource',
    initialState,
    reducers: {

        // state transition: endrer testProperty opp
        increase: (state) => {
            state.testProperty++
        },

        // anoter state transition: testProperty ned
        decrease: (state) => {
            state.testProperty--
        },
		// yet anoter state transition: endrer engelsk beskrivelse
		// skal ta inn String engelskBeskrivelse...
        change_description_en: (state, action) => {
            state.description.en = action.payload
        },
		// yet anoter state transition: endrer nynorsk beskrivelse
		// skal ta inn String nynorskBeskrivelse...
        change_description_nn: (state, action) => {
            state.description.nn = action.payload
        },
    },
})

// eksporterer reducer slice for bruk i store
export default resourceSlice.reducer;

// eksporterer actions som named exports
export const { increase, decrease, change_description_en, change_description_nn } = resourceSlice.actions;