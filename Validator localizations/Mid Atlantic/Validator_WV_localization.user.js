// ==UserScript==
// @name                WME Validator Localization for West Virginia
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.37
// @author              xanderb
// @description         This script localizes WME Validator for West Virginia, USA. You also need main package (WME Validator) installed.
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
  ".updated": "2016-07-20",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Not West Virginia",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in WV and change it",
    "template": "${state}",
    "regexp": "!/^West Virginia/"
  },
  "128.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect State or US Highway name",
    "problemEN": "West Virginia uses WV-xx for state and US-xx for national highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/.*(Wv Hwy |State Hwy |State Rte |SR-|SH-|State Rd |WV=|^Rte |State Rte-|U\.?[Ss]\.? (Rte|[Hh](WY|wy|ighway)))/"
  },
  "129.solutionLink": "W:West_Virginia",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Short Parking Lot",
    "problemEN": "Dead End Parking Lot is less that 30 meters",
    "solutionEN": "Does it really need to be there?",
    "template": "${deadEnd}:${typeRank}:${length}",
    "regexp": "/1:7:([0-2]?[0-9])$/"
  },
  "130.solutionLink": "W:Best_map_editing_practice#Parking_Lots",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr, St, Dr, or Rev where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/((^| )(St|Dr)(?! ((Ext|[NEWS][EW]?)\\b|\/|\\())|(Jr|Rev)) /"
  },
  "131.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "City or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/^West Virginia:.*(Cs-|CS-|Co Hwy |County Rd |Cr-|Co Rd |CH-|Ch-|Co Rte )/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong road type (minor)",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |State Rte |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WV-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Minor_Highway",
  "134.enabled": true,
  "134.severity": "warning",
  "134.params": {
    "titleEN": "Alley not PLR",
    "problemEN": "Alleys should be set to the PLR Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^7]/"
  },
  "134.solutionLink": "W:Road_types/USA#Parking_Lot_Road",
  "135.enabled": true,
  "135.params": {
    "titleEN": "Unapproved Non-drivable type",
    "problemEN": "Not all road types should be mapped",
    "solutionEN": "Have a Rank 5+ editor approve and lock it",
    "template": "${type}:${lock}",
    "regexp": "/(5|1[0569]):[1-4]/"
  },
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Major_Highway",
  "137.enabled": true,
  "137.params": {
    "titleEN": "Invalid Interstate Name",
    "problemEN": "There seems to be an extra space there",
    "SolutionEN": "Remove the extra space in the name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/I- /"
  },
  "137.solutionLink": "W:Road_names/USA#United_States_Interstate_Highway_System",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Invalid city name",
    "problemEN": "The city name is not a valid city in West Virginia",
    "solutionEN": "Correct the city name or remove it",
    "template": "${city}",
    "regexp": "!/.*(^$|Accoville|Addison \\(Webster Springs\\)|Albright|Alderson|Alum Creek|Amherstdale|Anawalt|Anmoore|Ansted|Apple Grove|Athens|Auburn|Aurora|Bancroft|Barboursville|Barrackville|Bartley|Bartow|Berkeley Springs|Bayard|Beards Fork|Beaver|Beckley|Beech Bottom|Belington|Belle|Belmont|Belva|Benwood|Bergoo|Berwind|Bethany|Bethlehem|Beverly|Big Chimney|Big Creek|Big Sandy|Birch River|Blacksville|Blennerhassett|Bluefield|Bluewell|Boaz|Bolivar|Bolt|Boomer|Bowden|Bradley|Bradshaw|Bramwell|Brandonville|Brandywine|Brenton|Bridgeport|Brookhaven|Bruceton Mills|Bruno|Brush Fork|Buckhannon|Bud|Buffalo|Burlington|Burnsville|Cairo|Camden-on-Gauley|Cameron|Capon Bridge|Carolina|Carpendale|Cass|Cassville|Cedar Grove|Century|Ceredo|Chapmanville|Charleston|Charles Town|Charlton Heights|Chattaroy|Chauncey|Cheat Lake|Chelyan|Chesapeake|Chester|Clarksburg|Clay|Clearview|Clendenin|Coal City|Coal Fork|Comfort|Corinne|Covel|Cowen|Crab Orchard|Craigsville|Cross Lanes|Crum|Crumpler|Cucumber|Culloden|Dailey|Daniels|Danville|Davis|Davy|Deep Water|Delbarton|Despard|Dixie|Dunbar|Durbin|East Bank|East Dailey|Eccles|Eleanor|Elizabeth|Elk Garden|Elkins|Elkview|Ellenboro|Enterprise|Fairlea|Fairmont|Fairview|Falling Spring|Falling Waters|Falls View|Farmington|Fayetteville|Fenwick|Flatwoods|Flemington|Follansbee|Fort Ashby|Fort Gay|Frank|Franklin|Friendly|Gallipolis Ferry|Galloway|Gary|Gassaway|Gauley Bridge|Ghent|Gilbert|Gilbert Creek|Glasgow|Glen Dale|Glen Ferris|Glen Fork|Glen Jean|Glenville|Glen White|Grafton|Grantsville|Grant Town|Granville|Great Cacapon|Green Bank|Green Spring|Greenview|Gypsy|Hambleton|Hamlin|Handley|Harman|Harpers Ferry|Harrisville|Hartford City|Harts|Hedgesville|Helen|Helvetia|Henderson|Hendricks|Henlawson|Hepzibah|Hico|Hillsboro|Hilltop|Hinton|Holden|Hometown|Hooverson Heights|Hundred|Huntersville|Huntington|Hurricane|Huttonsville|Idamay|Iaeger|Inwood|Itmann|Jacksonburg|Jane Lew|Jefferson|Junior|Justice|Kenova|Kermit|Keyser|Keystone|Kimball|Kimberly|Kincaid|Kingwood|Kistler|Kopperston|Lashmeet|Lavalette|Leon|Lesage|Lester|Lewisburg|Littleton|Logan|Lost Creek|Lubeck|Lumberport|Mabscott|MacArthur|McConnell|McMechen|Madison|Mallory|Man|Mannington|Marlinton|Marmet|Martinsburg|Mason|Masontown|Matewan|Matheny|Matoaka|Maybeury|Meadow Bridge|Middlebourne|Middleway|Mill Creek|Milton|Minden|Mineral Wells|Mitchell Heights|Monaville|Monongah|Montcalm|Montgomery|Montrose|Moorefield|Morgantown|Moundsville|Mount Carbon|Mount Gay-Shamrock|Mount Hope|Mullens|Neibert|Nettie|Newburg|New Cumberland|Newell|New Haven|New Martinsville|New Richmond|Nitro|Northfork|North Hills|Nutter Fort|Oak Hill|Oakvale|Oceana|Omar|Paden City|Page|Pageton|Parkersburg|Parsons|Paw Paw|Pax|Pea Ridge|Pennsboro|Pentress|Petersburg|Peterstown|Philippi|Pickens|Piedmont|Pinch|Pine Grove|Pineville|Piney View|Pleasant Valley|Poca|Point Pleasant|Powellton|Pratt|Prichard|Prince|Princeton|Prosperity|Pullman|Quinwood|Rachel|Racine|Rainelle|Rand|Ranson|Ravenswood|Raysal|Reader|Red Jacket|Reedsville|Reedy|Rhodell|Richwood|Ridgeley|Ripley|Rivesville|Robinette|Roderfield|Romney|Ronceverte|Rossmore|Rowlesburg|Rupert|St. Albans|St. Marys|Salem|Salt Rock|Sand Fork|Sarah Ann|Scarbro|Shady Spring|Shannondale|Shenandoah Junction|Shepherdstown|Shinnston|Shrewsbury|Sissonville|Sistersville|Smithers|Smithfield|Sophia|South Charleston|Spelter|Spencer|Springfield|Stanaford|Star City|Stollings|Stonewood|Summersville|Sutton|Switzer|Sylvester|Teays Valley|Terra Alta|Thomas|Thurmond|Tioga|Tornado|Triadelphia|Tunnelton|Twilight|Union|Upper Falls|Valley Bend|Valley Grove|Valley Head|Van|Verdunville|Vienna|Vivian|War|Wardensville|Washington|Waverly|Wayne|Weirton|Welch|Wellsburg|West Hamlin|West Liberty|West Logan|West Milford|Weston|Westover|West Union|Wheeling|White Hall|White Sulphur Springs|Whitesville|Whitmer|Wiley Ford|Williamson|Williamstown|Windsor Heights|Winfield|Wolf Summit|Womelsdorf \\(Coalton\\)|Worthington)/"
  },
  "138.solutionLink": "http://factfinder.census.gov/bkmk/table/1.0/en/DEC/10_SF1/GCTPH1.ST10?slice=GEO~0400000US54",
  "139.enabled": true,
  "139.params": {
    "titleEN": "Name on Railroad",
    "problemEN": "Names on Railroads are not needed for routing and clutter the app UI",
    "solutionEN": "Remove the Names and Cities from Railroad segments",
    "template": "${type}:${street}",
    "regexp": "/^18:.+$/"
  },
  "139.solutionLink": "W:Road_types/USA#Railroad",
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
  "n": 4,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 4,
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
    "regexp": "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": !0,
};
