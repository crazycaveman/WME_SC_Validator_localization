// ==UserScript==
// @name                WME Validator Localization for Ohio
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.12
// @author              xanderb
// @description         This script localizes WME Validator for Ohio, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
/*
  See Settings->About->Available checks for complete list of checks and their params.
  Examples:
  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},
  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
*/

window.WME_Validator_United_States = {
  ".country": "United States",
  ".codeISO": "US",
  ".author": "xanderb",
  ".updated": "2016-03-20",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr, St, Dr, or Rev where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/((^| )(St|Dr)(?! ((Ext|[NEWS][EW]?)\\b|\/|\\())|(Jr|Rev)) /"
  },
  "128.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect State or US Highway",
    "problemEN": "Ohio uses SR for state and US for national highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Ohio:.*(Oh Hwy |State Hwy |Oh-|SH-|State Rd |SR=|State Rte |OH-|Sr-|U\.?[Ss]\.? [Hh](WY|wy|ighway))/"
  },
  "129.solutionLink": "W:Ohio",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Deadend One Way",
    "problemEN": "You can check out anytime you like but you can never leave",
    "solutionEN": "Connect another road or make Two Way",
    "template": "A${deadEndA}:${direction}:B${deadEndB}:${direction}",
    "regexp": "/A1:[1|2]|B1:[1|2]/"
  },
  "131.enabled": true,
  "131.params": {
    "titleEN": "Not Ohio",
    "problemEN": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in OH and change it",
    "template": "${state}",
    "regexp": "!/Ohio/"
  },
  "131.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Ohio:.*(C[sSrHh]?(-|R? [0-9])|Co(unty)? (Hwy|Rd) |Twp Hwy |TH?-)/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Alley not PLR",
    "problemEN": "Alleys should be set to the PLR Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^7]/"
  },
  "133.solutionLink": "W:Road_types/USA#Parking_Lot_Road",
  "134.enabled": true,
  "134.params": {
    "titleEN": "One Way Lock Standard",
    "problemEN": "One Way Street and Primary Street should be one lock higher",
    "solutionEN": "Set One Way Street to L2 and Primary Street to L3",
    "template": "${type}:${lock}:${direction}",
    "regexp": "/(2:(1|2):(1|2))|(1:1:(1|2))/"
  },
  "134.solutionLink": "W:Great_Lakes#Minimum_Road_Lock_Standard",
  "135.enabled": true,
  "135.params": {
    "titleEN": "County Route Type",
    "problemEN": "County Routes should be set to Primary Street minumum",
    "solutionEN": "Set the road type to PS or higher",
    "template": "${typeRank}:#${street}#${altStreet[#]}",
    "regexp": "/[1-9][0,6-9]:.*(CH-|CR-)/"
  },
  "135.solutionLink": "W:Road_types/USA#Quick_reference_chart",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type (major)",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Major_Highway",
  "137.enabled": true,
  "137.params": {
    "titleEN": "Wrong road type (minor)",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "137.solutionLink": "W:Road_types/USA#Minor_Highway",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Wrong road type (primary)",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^1-5]:.*#(State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?@/i"
  },
  "138.solutionLink": "W:Road_types/USA#Primary_Street",
  "139.enabled": true,
  "139.params": {
    "titleEN": "Wrong banner abbreviation",
    "problemEN": "Banner abbreviation may be incorrect. Abbreviations ALT, BUS, BYP, CONN, LOOP, and SPUR should be in ALL CAPS",
    "solutionEN": "Change banner abbreviation to ALT, BUS, BYP, CONN, LOOP, SPUR, or TRUCK",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/[0-9]+[A-Z]? ([Aa]lt(ernate)?|[Bb](us(iness)?|yp(ass)?)|[Cc]onn(ector)?|[Ll]oop|[Ss]pur|[Tt]ruck)/"
  },
  "139.solutionLink": "W:Road_names/USA#United_States_Numbered_Highways",
  //Freeway lock
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  //Major Highway lock
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 2,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Default US checks
  "24.enabled": !0,
  "25.enabled": !0,
  "27.enabled": !0,
  "34.enabled": !0,
  "35.enabled": !0,
  "38.enabled": !0,
  "39.enabled": !0,
  "43.enabled": !0,
  "48.enabled": !0,
  "78.enabled": !0,
  "87.enabled": !0,
  "90.enabled": !0,
  "106.enabled": !0,
  "107.enabled": !0,
  "108.enabled": !0,
  "109.enabled": !0,
  "112.enabled": !1,
  "118.enabled": !0,
  "116.enabled": !0,
  "119.enabled": !0,
  "120.enabled": !0,
  "121.enabled": !0,
  "172.enabled": !0,
  "173.enabled": !0,
  "190.enabled": !0,
  "192.enabled": !0,
  "170.enabled": !0,
  "170.params": {
      regexp: "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": true,
  "171.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "171.params": {
    "regexp": "/((?!(\\bPhila|\\bPenna|.(\\bWash|\\bCmdr|\\bProf|\\bPres)|..(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|...(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|...(#| )[NEWSR])).{5}\\.|((?!(hila|enna|(\\bWash|\\bCmdr|\\bProf|\\bPres)|.(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|..(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|..(#| )[NEWSR])).{4}|(\\bhila|\\benna))\\.|((?!(ila|nna|(ash|mdr|rof|res)|(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|.(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|.(#| )[NEWSR])).{3}|\\b(ila|nna|ash|mdr|rof|res))\\.|((?!(la|na|(sh|dr|of|es)|(dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl)|(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|(#| )[NEWSR])).{2}|\\b(la|na|sh|dr|of|es|dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl))\\.|(#|^)[^NEWSR]?\\.)|(((?!\\b(D|O|L)).|#|^)\'(?![sl]\\b)|(#|^)\'s|(?!\\b(In|Na)t).{3}\'l|(#|^).{0,2}\'l)|(Dr|St)\\.(#|$)|,|;|\\\\|((?!\\.( |#|$|R))\\..|(?!\\.( .|#.|$|R\\.))\\..{2}|\\.R(#|$|\\.R))|[Ee]x(p|w)y\\b|Tunl\\b|Long Is\\b|Brg\\b/",
    "problemEN": "The street name has incorrect abbreviation, or character",
    "solutionEN": "Check upper/lower case, a space before/after the abbreviation and the accordance with the abbreviation table. Remove any comma (,), backslash (\\), or semicolon (;)"
  },
};
