import { a as wixFetch, o as wixModule, r as imgSrc } from "./media_CxrwP6gK.mjs";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { submissions } from "@wix/forms";
// src/wix/forms/address-templates.generated.ts
var ADDRESS_TEMPLATES = {
	"defaultTemplate": "COMMON",
	"byCountry": {
		"US": "US",
		"UY": "COMMON_STATE",
		"TH": "COMMON_STATE",
		"TR": "COMMON_STATE",
		"SZ": "COMMON_STATE",
		"ZA": "COMMON_STATE",
		"SE": "COMMON_STATE",
		"SI": "COMMON_STATE",
		"SK": "COMMON_STATE",
		"RS": "COMMON_STATE",
		"SB": "COMMON_STATE",
		"SG": "COMMON_STATE",
		"SN": "COMMON_STATE",
		"SD": "COMMON_STATE",
		"RU": "COMMON_STATE",
		"RO": "COMMON_STATE",
		"PY": "COMMON_STATE",
		"PT": "COMMON_STATE",
		"PL": "COMMON_STATE",
		"PH": "COMMON_STATE",
		"PE": "COMMON_STATE",
		"PA": "COMMON_STATE",
		"PK": "COMMON_STATE",
		"NZ": "COMMON_STATE",
		"NO": "COMMON_STATE",
		"NG": "COMMON_STATE",
		"NL": "COMMON_STATE",
		"MY": "COMMON_STATE",
		"MH": "COMMON_STATE",
		"MX": "COMMON_STATE",
		"KR": "COMMON_STATE",
		"JP": "JP",
		"IT": "COMMON_STATE",
		"IS": "COMMON_STATE",
		"IE": "COMMON_STATE",
		"IN": "COMMON_STATE",
		"IL": "IL",
		"ID": "COMMON_STATE",
		"HU": "COMMON_STATE",
		"HR": "COMMON_STATE",
		"GR": "COMMON_STATE",
		"GB": "GB",
		"FR": "FR",
		"ES": "ES",
		"EG": "COMMON_STATE",
		"DO": "COMMON_STATE",
		"DK": "COMMON_STATE",
		"DE": "DE",
		"CZ": "COMMON_STATE",
		"CY": "COMMON_STATE",
		"CR": "COMMON_STATE",
		"CO": "COMMON_STATE",
		"CI": "COMMON_STATE",
		"CN": "COMMON_STATE",
		"CL": "COMMON_STATE",
		"CH": "COMMON_STATE",
		"CA": "CA",
		"CF": "COMMON_STATE",
		"BR": "BR",
		"BS": "COMMON_STATE",
		"BE": "COMMON_STATE",
		"BG": "COMMON_STATE",
		"AT": "COMMON_STATE",
		"AU": "AU",
		"AR": "COMMON_STATE",
		"AE": "COMMON_STATE"
	},
	"templates": {
		"COMMON": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		],
		"US": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		],
		"COMMON_STATE": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		],
		"JP": [
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			}
		],
		"IL": [
			{
				"sub": "streetName",
				"required": true,
				"hidden": false
			},
			{
				"sub": "streetNumber",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": false
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": false,
				"hidden": false
			}
		],
		"GB": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		],
		"FR": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			}
		],
		"ES": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		],
		"DE": [
			{
				"sub": "streetName",
				"required": true,
				"hidden": false
			},
			{
				"sub": "streetNumber",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			}
		],
		"CA": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		],
		"BR": [
			{
				"sub": "streetName",
				"required": true,
				"hidden": false
			},
			{
				"sub": "streetNumber",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		],
		"AU": [
			{
				"sub": "addressLine",
				"required": true,
				"hidden": false
			},
			{
				"sub": "addressLine2",
				"required": false,
				"hidden": true
			},
			{
				"sub": "city",
				"required": true,
				"hidden": false
			},
			{
				"sub": "subdivision",
				"required": true,
				"hidden": false
			},
			{
				"sub": "postalCode",
				"required": true,
				"hidden": false
			}
		]
	},
	"countryNames": {
		"AW": "Aruba",
		"AO": "Angola",
		"AF": "Afghanistan",
		"AI": "Anguilla",
		"AX": "Aland Islands",
		"AL": "Albania",
		"AD": "Andorra",
		"AE": "United Arab Emirates",
		"AR": "Argentina",
		"AM": "Armenia",
		"AS": "American Samoa",
		"AQ": "Antarctica",
		"TF": "French Southern Territories",
		"AG": "Antigua and Barbuda",
		"AU": "Australia",
		"AT": "Austria",
		"AZ": "Azerbaijan",
		"BI": "Burundi",
		"BE": "Belgium",
		"BJ": "Benin",
		"BQ": "Bonaire",
		"BF": "Burkina Faso",
		"BD": "Bangladesh",
		"BG": "Bulgaria",
		"BH": "Bahrain",
		"BS": "Bahamas",
		"BA": "Bosnia and Herzegovina",
		"BL": "Saint Barthélemy",
		"BY": "Belarus",
		"BZ": "Belize",
		"BM": "Bermuda",
		"BO": "Bolivia",
		"BR": "Brazil",
		"BB": "Barbados",
		"BN": "Brunei",
		"BT": "Bhutan",
		"BV": "Bouvet Island",
		"BW": "Botswana",
		"CF": "Central African Republic",
		"CA": "Canada",
		"CC": "Cocos (Keeling) Islands",
		"CH": "Switzerland",
		"CL": "Chile",
		"CN": "China",
		"CI": "Republic of Côte d’Ivoire",
		"CM": "Cameroon",
		"CD": "Congo (Kinshasa)",
		"CG": "Congo (Brazzaville)",
		"CK": "Cook Islands",
		"CO": "Colombia",
		"KM": "Comoros",
		"CV": "Cape Verde",
		"CR": "Costa Rica",
		"CU": "Cuba",
		"CW": "Curaçao",
		"CX": "Christmas Island",
		"KY": "Cayman Islands",
		"CY": "Cyprus",
		"CZ": "Czech Republic",
		"DE": "Germany",
		"DJ": "Djibouti",
		"DM": "Dominica",
		"DK": "Denmark",
		"DO": "Dominican Republic",
		"DZ": "Algeria",
		"EC": "Ecuador",
		"EG": "Egypt",
		"ER": "Eritrea",
		"EH": "Western Sahara",
		"ES": "Spain",
		"EE": "Estonia",
		"ET": "Ethiopia",
		"FI": "Finland",
		"FJ": "Fiji",
		"FK": "Falkland Islands",
		"FR": "France",
		"FO": "Faroe Islands",
		"FM": "Micronesia",
		"GA": "Gabon",
		"GB": "United Kingdom",
		"GE": "Georgia",
		"GG": "Guernsey",
		"GH": "Ghana",
		"GI": "Gibraltar",
		"GN": "Guinea",
		"GP": "Guadeloupe",
		"GM": "Gambia",
		"GW": "Guinea-Bissau",
		"GQ": "Equatorial Guinea",
		"GR": "Greece",
		"GD": "Grenada",
		"GL": "Greenland",
		"GT": "Guatemala",
		"GF": "French Guiana",
		"GU": "Guam",
		"GY": "Guyana",
		"HK": "Hong Kong",
		"HM": "Heard Island and McDonald Islands",
		"HN": "Honduras",
		"HR": "Croatia",
		"HT": "Haiti",
		"HU": "Hungary",
		"ID": "Indonesia",
		"IM": "Isle of Man",
		"IN": "India",
		"IO": "British Indian Ocean Territory",
		"IE": "Ireland",
		"IR": "Iran",
		"IS": "Iceland",
		"IL": "Israel",
		"IT": "Italy",
		"IQ": "Iraq",
		"JM": "Jamaica",
		"JE": "Jersey",
		"JO": "Jordan",
		"JP": "Japan",
		"KZ": "Kazakhstan",
		"KE": "Kenya",
		"KG": "Kyrgyzstan",
		"KH": "Cambodia",
		"KI": "Kiribati",
		"KN": "Saint Kitts and Nevis",
		"KR": "South Korea",
		"XK": "Kosovo",
		"KW": "Kuwait",
		"LA": "Laos",
		"LB": "Lebanon",
		"LR": "Liberia",
		"LY": "Libya",
		"LC": "Saint Lucia",
		"LI": "Liechtenstein",
		"LK": "Sri Lanka",
		"LS": "Lesotho",
		"LT": "Lithuania",
		"LU": "Luxembourg",
		"LV": "Latvia",
		"MO": "Macau",
		"MF": "Saint Martin",
		"MA": "Morocco",
		"MC": "Monaco",
		"MD": "Moldova",
		"MG": "Madagascar",
		"MV": "Maldives",
		"MX": "Mexico",
		"MH": "Marshall Islands",
		"MK": "Macedonia",
		"ML": "Mali",
		"MT": "Malta",
		"MM": "Myanmar",
		"ME": "Montenegro",
		"MN": "Mongolia",
		"MP": "Northern Mariana Islands",
		"MZ": "Mozambique",
		"MR": "Mauritania",
		"MS": "Montserrat",
		"MQ": "Martinique",
		"MU": "Mauritius",
		"MW": "Malawi",
		"MY": "Malaysia",
		"YT": "Mayotte",
		"NA": "Namibia",
		"NC": "New Caledonia",
		"NE": "Niger",
		"NF": "Norfolk Island",
		"NG": "Nigeria",
		"NI": "Nicaragua",
		"NU": "Niue",
		"NL": "Netherlands",
		"NO": "Norway",
		"NP": "Nepal",
		"NR": "Nauru",
		"NZ": "New Zealand",
		"OM": "Oman",
		"PK": "Pakistan",
		"PA": "Panama",
		"PN": "Pitcairn",
		"PE": "Peru",
		"PH": "Philippines",
		"PW": "Palau",
		"PG": "Papua New Guinea",
		"PL": "Poland",
		"PR": "Puerto Rico",
		"KP": "North Korea",
		"PT": "Portugal",
		"PY": "Paraguay",
		"PS": "Palestinian Territories",
		"PF": "French Polynesia",
		"QA": "Qatar",
		"RE": "Reunion",
		"RO": "Romania",
		"RU": "Russia",
		"RW": "Rwanda",
		"SA": "Saudi Arabia",
		"SD": "Sudan",
		"SN": "Senegal",
		"SG": "Singapore",
		"GS": "South Georgia and the South Sandwich Islands",
		"SH": "Saint Helena",
		"SJ": "Svalbard and Jan Mayen",
		"SB": "Solomon Islands",
		"SL": "Sierra Leone",
		"SV": "El Salvador",
		"SM": "San Marino",
		"SO": "Somalia",
		"PM": "Saint Pierre and Miquelon",
		"RS": "Serbia",
		"SS": "South Sudan",
		"ST": "Sao Tome and Principe",
		"SR": "Suriname",
		"SK": "Slovakia",
		"SI": "Slovenia",
		"SE": "Sweden",
		"SZ": "Swaziland",
		"SX": "Sint Maarten",
		"SC": "Seychelles",
		"SY": "Syria",
		"TC": "Turks and Caicos Islands",
		"TD": "Chad",
		"TG": "Togo",
		"TH": "Thailand",
		"TJ": "Tajikistan",
		"TK": "Tokelau",
		"TM": "Turkmenistan",
		"TL": "East Timor",
		"TO": "Tonga",
		"TT": "Trinidad and Tobago",
		"TN": "Tunisia",
		"TR": "Turkey",
		"TV": "Tuvalu",
		"TW": "Taiwan",
		"TZ": "Tanzania",
		"UG": "Uganda",
		"UA": "Ukraine",
		"UM": "United States Minor Outlying Islands",
		"UY": "Uruguay",
		"US": "United States",
		"UZ": "Uzbekistan",
		"VA": "Vatican",
		"VC": "Saint Vincent and the Grenadines",
		"VE": "Venezuela",
		"VG": "British Virgin Islands",
		"VI": "U.S. Virgin Islands",
		"VN": "Vietnam",
		"VU": "Vanuatu",
		"WF": "Wallis and Futuna",
		"WS": "Samoa",
		"YE": "Yemen",
		"ZA": "South Africa",
		"ZM": "Zambia",
		"ZW": "Zimbabwe"
	},
	"subdivisions": {
		"AE": {
			"label": "State",
			"list": [
				["DU", "Dubai"],
				["SH", "Sharjah"],
				["UQ", "Umm Al Quawain"],
				["AJ", "Ajman"],
				["FU", "Fujairah"],
				["AD", "Abu Dhabi"],
				["RK", "Ras al Khaimah"]
			]
		},
		"AR": {
			"label": "Region",
			"list": [
				["A", "Salta"],
				["B", "Buenos Aires"],
				["D", "San Luis"],
				["E", "Entre Ríos"],
				["F", "La Rioja"],
				["G", "Santiago del Estero"],
				["H", "Chaco"],
				["J", "San Juan"],
				["K", "Catamarca"],
				["L", "La Pampa"],
				["M", "Mendoza"],
				["N", "Misiones"],
				["P", "Formosa"],
				["Q", "Neuquén"],
				["R", "Río Negro"],
				["S", "Santa Fe"],
				["T", "Tucumán"],
				["U", "Chubut"],
				["V", "Tierra del Fuego"],
				["W", "Corrientes"],
				["X", "Córdoba"],
				["Y", "Jujuy"],
				["Z", "Santa Cruz"]
			]
		},
		"AU": {
			"label": "Region",
			"list": [
				["ACT", "Australian Capital Territory"],
				["NSW", "New South Wales"],
				["NT", "Northern Territory"],
				["QLD", "Queensland"],
				["SA", "South Australia"],
				["TAS", "Tasmania"],
				["VIC", "Victoria"],
				["WA", "Western Australia"]
			]
		},
		"AT": {
			"label": "Region",
			"list": [
				["1", "Burgenland"],
				["2", "Kärnten"],
				["3", "Niederösterreich"],
				["4", "Oberösterreich"],
				["5", "Salzburg"],
				["6", "Steiermark"],
				["7", "Tirol"],
				["8", "Vorarlberg"],
				["9", "Wien"]
			]
		},
		"BE": {
			"label": "Province",
			"list": [
				["BRU", "Brussels Hoofdstedelijk Gewest"],
				["VAN", "Antwerpen"],
				["VBR", "Vlaams-Brabant"],
				["VLG", "Vlaams Gewest"],
				["VLI", "Limburg"],
				["VOV", "Oost-Vlaanderen"],
				["VWV", "West-Vlaanderen"],
				["WAL", "wallonne"],
				["WBR", "Brabant wallon"],
				["WHT", "Hainaut"],
				["WLX", "Luxembourg"],
				["WLG", "Liège"],
				["WNA", "Namur"]
			]
		},
		"BG": {
			"label": "Province",
			"list": [
				["01", "Blagoevgrad"],
				["02", "Burgas"],
				["08", "Dobrich"],
				["07", "Gabrovo"],
				["26", "Haskovo"],
				["09", "Kardzhali"],
				["10", "Kyustendil"],
				["11", "Lovech"],
				["12", "Montana"],
				["13", "Pazardzhik"],
				["14", "Pernik"],
				["15", "Pleven"],
				["16", "Plovdiv"],
				["17", "Razgrad"],
				["18", "Ruse"],
				["27", "Shumen"],
				["19", "Silistra"],
				["20", "Sliven"],
				["21", "Smolyan"],
				["23", "Sofia City"],
				["22", "Sofia (province)"],
				["24", "Stara Zagora"],
				["25", "Targovishte"],
				["03", "Varna"],
				["04", "Veliko Tarnovo"],
				["05", "Vidin"],
				["06", "Vratsa"],
				["28", "Yambol"]
			]
		},
		"BS": {
			"label": "Region",
			"list": [
				["FC", "Fresh Creek"],
				["FP", "Freeport"],
				["HI", "Harbour Island"],
				["HR", "High Rock"],
				["LI", "Long Island"],
				["MH", "Marsh Harbour"],
				["NP", "New Providence"],
				["RS", "Rock Sound"]
			]
		},
		"BR": {
			"label": "State",
			"list": [
				["AC", "Acre"],
				["AL", "Alagoas"],
				["AM", "Amazonas"],
				["AP", "Amapa"],
				["BA", "Bahia"],
				["CE", "Ceara"],
				["DF", "Distrito Federal"],
				["ES", "Espirito Santo"],
				["GO", "Goias"],
				["MA", "Maranhao"],
				["MG", "Minas Gerais"],
				["MS", "Mato Grosso do Sul"],
				["MT", "Mato Grosso"],
				["PA", "Para"],
				["PB", "Paraiba"],
				["PE", "Pernambuco"],
				["PI", "Piaui"],
				["PR", "Parana"],
				["RJ", "Rio de Janeiro"],
				["RN", "Rio Grande do Norte"],
				["RO", "Rondonia"],
				["RR", "Roraima"],
				["RS", "Rio Grande do Sul"],
				["SC", "Santa Catarina"],
				["SE", "Sergipe"],
				["SP", "Sao Paulo"],
				["TO", "Tocantins"]
			]
		},
		"CF": {
			"label": "Region",
			"list": [
				["AC", "Ouham"],
				["BB", "Bamingui-Bangoran"],
				["BGF", "Bangui"],
				["BK", "Basse-Kotto"],
				["HK", "Haute-Kotto"],
				["HM", "Haut-Mbomou"],
				["HS", "Mambere-Kadei"],
				["KG", "Kemo"],
				["LB", "Lobaye"],
				["MB", "Mbomou"],
				["MP", "Ombella-Mpoko"],
				["NM", "Nana-Mambere"],
				["OP", "Ouham-Pende"],
				["SE", "Sangha-Mbaere"],
				["UK", "Ouaka"]
			]
		},
		"CA": {
			"label": "Province",
			"list": [
				["AB", "Alberta"],
				["BC", "British Columbia"],
				["MB", "Manitoba"],
				["NB", "New Brunswick"],
				["NL", "Newfoundland and Labrador"],
				["NS", "Nova Scotia"],
				["NT", "Northwest Territories"],
				["NU", "Nunavut"],
				["ON", "Ontario"],
				["PE", "Prince Edward Island"],
				["QC", "Quebec"],
				["SK", "Saskatchewan"],
				["YT", "Yukon Territory"]
			]
		},
		"CH": {
			"label": "Region",
			"list": [
				["AG", "Aargau"],
				["AI", "Appenzell Innerrhoden"],
				["AR", "Appenzell Ausserrhoden"],
				["BE", "Bern"],
				["BL", "Basel-Landschaft"],
				["BS", "Basel-Stadt"],
				["FR", "Freiburg"],
				["GE", "Genève"],
				["GL", "Glarus"],
				["GR", "Grigioni"],
				["JU", "Jura"],
				["LU", "Luzern"],
				["NE", "Neuchâtel"],
				["NW", "Nidwalden"],
				["OW", "Obwalden"],
				["SG", "Sankt Gallen"],
				["SH", "Schaffhausen"],
				["SO", "Solothurn"],
				["SZ", "Schwyz"],
				["TG", "Thurgau"],
				["TI", "Ticino"],
				["UR", "Uri"],
				["VD", "Vaud"],
				["VS", "Valais"],
				["ZG", "Zug"],
				["ZH", "Zürich"]
			]
		},
		"CL": {
			"label": "Region",
			"list": [
				["AI", "Aisén del General Carlos Ibáñez del Campo"],
				["AN", "Antofagasta"],
				["AP", "Arica y Parinacota"],
				["AR", "Araucanía"],
				["AT", "Atacama"],
				["BI", "Bío-Bío"],
				["CO", "Coquimbo"],
				["LI", "Libertador General Bernardo O'Higgins"],
				["LL", "Los Lagos"],
				["LR", "Los Ríos"],
				["MA", "Magallanes"],
				["ML", "Maule"],
				["NB", "Nuble"],
				["RM", "Región Metropolitana de Santiago"],
				["TA", "Tarapacá"],
				["VS", "Valparaíso"]
			]
		},
		"CN": {
			"label": "Region",
			"list": [
				["11", "Beijing"],
				["12", "Tianjin"],
				["13", "Hebei"],
				["14", "Shanxi"],
				["15", "Nei Mongol"],
				["21", "Liaoning"],
				["22", "Jilin"],
				["23", "Heilongjiang"],
				["31", "Shanghai"],
				["32", "Jiangsu"],
				["33", "Zhejiang"],
				["34", "Anhui"],
				["35", "Fujian"],
				["36", "Jiangxi"],
				["37", "Shandong"],
				["41", "Henan"],
				["42", "Hubei"],
				["43", "Hunan"],
				["44", "Guangdong"],
				["45", "Guangxi"],
				["46", "Hainan"],
				["50", "Chongqing"],
				["51", "Sichuan"],
				["52", "Guizhou"],
				["53", "Yunnan"],
				["54", "Xizang"],
				["61", "Shaanxi"],
				["62", "Gansu"],
				["63", "Qinghai"],
				["64", "Ningxia"],
				["65", "Xinjiang"]
			]
		},
		"CI": {
			"label": "Region",
			"list": [
				["01", "Lagunes"],
				["02", "Haut-Sassandra"],
				["03", "Savanes"],
				["04", "Vallee Du Bandama"],
				["05", "Moyen-Comoe"],
				["07", "Lacs"],
				["08", "Zanzan"],
				["09", "Bas-Sassandra"],
				["10", "Denguele"],
				["11", "N'zi-Comoe"],
				["12", "Marahoue"],
				["13", "Sud-Comoe"],
				["14", "Worodougou"],
				["15", "Sud-Bandama"],
				["16", "Agneby"],
				["17", "Bafing"],
				["18", "Fromager"],
				["19", "Moyen-Cavally"]
			]
		},
		"CO": {
			"label": "Region",
			"list": [
				["AMA", "Amazonas"],
				["ANT", "Antioquia"],
				["ARA", "Arauca"],
				["ATL", "Atlántico"],
				["BOL", "Bolívar"],
				["BOY", "Boyacá"],
				["CAL", "Caldas"],
				["CAQ", "Caquetá"],
				["CAS", "Casanare"],
				["CAU", "Cauca"],
				["CES", "Cesar"],
				["CHO", "Chocó"],
				["COR", "Córdoba"],
				["CUN", "Cundinamarca"],
				["DC", "Distrito Capital de Bogotá"],
				["GUA", "Guainía"],
				["GUV", "Guaviare"],
				["HUI", "Huila"],
				["LAG", "La Guajira"],
				["MAG", "Magdalena"],
				["MET", "Meta"],
				["NAR", "Nariño"],
				["NSA", "Norte de Santander"],
				["PUT", "Putumayo"],
				["QUI", "Quindío"],
				["RIS", "Risaralda"],
				["SAN", "Santander"],
				["SAP", "San Andrés, Providencia y Santa Catalina"],
				["SUC", "Sucre"],
				["TOL", "Tolima"],
				["VAC", "Valle del Cauca"],
				["VAU", "Vaupés"],
				["VID", "Vichada"]
			]
		},
		"CR": {
			"label": "Region",
			"list": [
				["A", "Alajuela"],
				["C", "Cartago"],
				["G", "Guanacaste"],
				["H", "Heredia"],
				["L", "Limón"],
				["P", "Puntarenas"],
				["SJ", "San José"]
			]
		},
		"CY": {
			"label": "Region",
			"list": [
				["04", "Famagusta"],
				["06", "Kyrenia"],
				["03", "Larnaca"],
				["01", "Nicosia"],
				["02", "Limassol"],
				["05", "Paphos"]
			]
		},
		"CZ": {
			"label": "Region",
			"list": [
				["JC", "Jihočeský kraj"],
				["JM", "Jihomoravský kraj"],
				["KA", "Karlovarský kraj"],
				["KR", "Královéhradecký kraj"],
				["LI", "Liberecký kraj"],
				["MO", "Moravskoslezský kraj"],
				["OL", "Olomoucký kraj"],
				["PA", "Pardubický kraj"],
				["PL", "Plzeňský kraj"],
				["PR", "Praha, hlavní město"],
				["ST", "Středočeský kraj"],
				["US", "Ústecký kraj"],
				["VY", "Vysočina"],
				["ZL", "Zlínský kraj"]
			]
		},
		"DE": {
			"label": "State",
			"list": [
				["BB", "Brandenburg"],
				["BE", "Berlin"],
				["BW", "Baden-Württemberg"],
				["BY", "Bayern"],
				["HB", "Bremen"],
				["HE", "Hessen"],
				["HH", "Hamburg"],
				["MV", "Mecklenburg-Vorpommern"],
				["NI", "Niedersachsen"],
				["NW", "Nordrhein-Westfalen"],
				["RP", "Rheinland-Pfalz"],
				["SH", "Schleswig-Holstein"],
				["SL", "Saarland"],
				["SN", "Sachsen"],
				["ST", "Sachsen-Anhalt"],
				["TH", "Thüringen"]
			]
		},
		"DK": {
			"label": "Region",
			"list": [
				["81", "Nordjylland"],
				["82", "Midtjylland"],
				["83", "Syddanmark"],
				["84", "Hovedstaden"],
				["85", "Sjælland"]
			]
		},
		"DO": {
			"label": "Region",
			"list": [
				["01", "Distrito Nacional"],
				["02", "Azua"],
				["03", "Baoruco"],
				["04", "Barahona"],
				["05", "Dajabon"],
				["06", "Duarte"],
				["07", "Elias Pina"],
				["08", "El Seibo"],
				["09", "Espaillat"],
				["10", "Independencia"],
				["11", "La Altagracia"],
				["12", "La Romana"],
				["13", "La Vega"],
				["14", "Maria Trinidad Sanchez"],
				["15", "Monte Cristi"],
				["16", "Pedernales"],
				["17", "Peravia"],
				["18", "Puerto Plata"],
				["19", "Salcedo"],
				["20", "Samana"],
				["21", "San Cristobal"],
				["22", "San Juan"],
				["23", "San Pedro De Macoris"],
				["24", "Sanchez Ramirez"],
				["25", "Santiago"],
				["26", "Santiago Rodriguez"],
				["27", "Valverde"],
				["28", "Monsenor Nouel"],
				["29", "Monte Plata"],
				["30", "Hato Mayor"]
			]
		},
		"EG": {
			"label": "Region",
			"list": [
				["DK", "Dakahlia"],
				["BA", "Red Sea"],
				["BH", "Beheira"],
				["FYM", "Faiyum"],
				["GH", "Gharbia"],
				["ALX", "Alexandria"],
				["IS", "Ismailia"],
				["GZ", "Giza"],
				["MNF", "Monufia"],
				["MN", "Minya"],
				["C", "Cairo"],
				["KB", "Qalyubia"],
				["LX", "Luxor"],
				["WAD", "New Valley"],
				["SUZ", "Suez"],
				["SHR", "Sharqia"],
				["ASN", "Aswan"],
				["AST", "Asyut"],
				["BNS", "Beni Suef"],
				["PTS", "Port Said"],
				["DT", "Damietta"],
				["JS", "South Sinai"],
				["KFS", "Kafr El Sheikh"],
				["MT", "Matruh"],
				["KN", "Qena"],
				["SIN", "North Sinai"],
				["SHG", "Sohag"]
			]
		},
		"ES": {
			"label": "Region",
			"list": [
				["AN", "Andalucía"],
				["AR", "Aragón"],
				["AS", "Asturias, Principado de"],
				["CB", "Cantabria"],
				["CE", "Ceuta"],
				["CL", "Castilla y León"],
				["CM", "Castilla-La Mancha"],
				["CN", "Canarias"],
				["CT", "Cataluña"],
				["EX", "Extremadura"],
				["GA", "Galicia"],
				["IB", "Islas Baleares"],
				["MC", "Murcia, Región de"],
				["MD", "Madrid, Comunidad de"],
				["ML", "Melilla"],
				["NC", "Navarra"],
				["PV", "Pais Vasco"],
				["RI", "La Rioja"],
				["VC", "Comunidad Valenciana"]
			]
		},
		"FR": {
			"label": "Region",
			"list": [
				["ARA", "Auvergne-Rhône-Alpes"],
				["BFC", "Bourgogne-Franche-Comté"],
				["BRE", "Bretagne"],
				["CVL", "Centre-Val de Loire"],
				["20R", "Corse"],
				["GES", "Grand-Est"],
				["HDF", "Hauts-de-France"],
				["IDF", "Île-de-France"],
				["NOR", "Normandie"],
				["NAQ", "Nouvelle-Aquitaine"],
				["OCC", "Occitanie"],
				["PDL", "Pays-de-la-Loire"],
				["PAC", "Provence-Alpes-Côte-d’Azur"],
				["A", "Alsace"],
				["B", "Aquitaine"],
				["BL", "Saint-Barthélemy"],
				["C", "Auvergne"],
				["D", "Bourgogne"],
				["E", "Bretagne"],
				["F", "Centre"],
				["G", "Champagne-Ardenne"],
				["H", "Corse"],
				["I", "Franche-Comté"],
				["J", "Ile-de-France"],
				["K", "Languedoc-Roussillon"],
				["L", "Limousin"],
				["M", "Lorraine"],
				["N", "Midi-Pyrénées"],
				["O", "Nord-Pas-de-Calais"],
				["P", "Basse-Normandie"],
				["Q", "Haute-Normandie"],
				["R", "Pays-de-la-Loire"],
				["RE", "La Réunion"],
				["S", "Picardie"],
				["T", "Poitou-Charentes"],
				["TF", "Terres australes françaises"],
				["U", "Provence-Alpes-Côte-d'Azur"],
				["V", "Rhône-Alpes"]
			]
		},
		"GB": {
			"label": "Region",
			"list": [
				["ENG", "England"],
				["NIR", "Northern Ireland"],
				["SCT", "Scotland"],
				["WLS", "Wales"]
			]
		},
		"GR": {
			"label": "Region",
			"list": [
				["01", "Aitolia Kai Akarnania"],
				["03", "Voiotia"],
				["04", "Evvoia"],
				["05", "Evritania"],
				["06", "Fthiotis"],
				["07", "Fokis"],
				["11", "Argolis"],
				["12", "Arkadhia"],
				["13", "Akhaia"],
				["14", "Ilia"],
				["15", "Korinthia"],
				["16", "Lakonia"],
				["17", "Messinia"],
				["21", "Zakinthos"],
				["22", "Kerkira"],
				["23", "Kefallinia"],
				["31", "Arta"],
				["32", "Thesprotia"],
				["33", "Ioannina"],
				["34", "Preveza"],
				["41", "Kardhitsa"],
				["42", "Larisa"],
				["43", "Magnisia"],
				["44", "Trikala"],
				["51", "Grevena"],
				["52", "Drama"],
				["53", "Imathia"],
				["54", "Thessaloniki"],
				["55", "Kavala"],
				["56", "Kastoria"],
				["57", "Kilkis"],
				["58", "Kozani"],
				["59", "Pella"],
				["61", "Pieria"],
				["62", "Serrai"],
				["63", "Florina"],
				["71", "Evros"],
				["72", "Xanthi"],
				["73", "Rodhopi"],
				["81", "Dhodhekanisos"],
				["82", "Kikladhes"],
				["83", "Lesvos"],
				["84", "Samos"],
				["91", "Iraklion"],
				["92", "Lasithi"],
				["93", "Rethimni"],
				["94", "Chios"],
				["95", "Chania"],
				["96", "Icaria"],
				["97", "Psara"],
				["98", "Lemnos"],
				["A1", "Attiki"]
			]
		},
		"HR": {
			"label": "Region",
			"list": [
				["01", "Zagrebacka"],
				["02", "Krapinsko-Zagorska"],
				["03", "Sisacko-Moslavacka"],
				["04", "Karlovacka"],
				["05", "Varazdinska"],
				["06", "Koprivnicko-Krizevacka"],
				["07", "Bjelovarsko-Bilogorska"],
				["08", "Primorsko-Goranska"],
				["09", "Licko-Senjska"],
				["10", "Viroviticko-Podravska"],
				["11", "Pozesko-Slavonska"],
				["12", "Brodsko-Posavska"],
				["13", "Zadarska"],
				["14", "Osjecko-Baranjska"],
				["15", "Sibensko-Kninska"],
				["16", "Vukovarsko-Srijemska"],
				["17", "Splitsko-Dalmatinska"],
				["18", "Istarska"],
				["19", "Dubrovacko-Neretvanska"],
				["20", "Medimurska"],
				["21", "Grad Zagreb"]
			]
		},
		"HU": {
			"label": "Region",
			"list": [
				["BA", "Baranya"],
				["BE", "Bekes"],
				["BK", "Bacs-Kiskun"],
				["BU", "Budapest"],
				["BZ", "Borsod-Abauj-Zemplen"],
				["CS", "Csongrad"],
				["FE", "Fejer"],
				["GS", "Gyor-Moson-Sopron"],
				["HB", "Hajdu-Bihar"],
				["HE", "Heves"],
				["JN", "Jasz-Nagykun-Szolnok"],
				["KE", "Komarom-Esztergom"],
				["NO", "Nograd"],
				["PE", "Pest"],
				["SO", "Somogy"],
				["SZ", "Szabolcs-Szatmar-Bereg"],
				["TO", "Tolna"],
				["VA", "Vas"],
				["VE", "Veszprem"],
				["ZA", "Zala"]
			]
		},
		"ID": {
			"label": "Province",
			"list": [
				["AC", "Aceh"],
				["BA", "Bali"],
				["BB", "Bangka Belitung Islands"],
				["BT", "Banten"],
				["BE", "Bengkulu"],
				["GO", "Gorontalo"],
				["JA", "Jambi"],
				["JB", "West Java"],
				["JT", "Central Java"],
				["JI", "East Java"],
				["KB", "West Kalimantan"],
				["KS", "South Kalimantan"],
				["KT", "Central Kalimantan"],
				["KI", "East Kalimantan"],
				["KU", "North Kalimantan"],
				["KR", "Riau Islands"],
				["LA", "Lampung"],
				["MA", "Maluku"],
				["MU", "North Maluku"],
				["NB", "West Nusa Tenggara"],
				["NT", "East Nusa Tenggara"],
				["PA", "Papua"],
				["PB", "West Papua"],
				["RI", "Riau"],
				["SR", "West Sulawesi"],
				["SN", "South Sulawesi"],
				["ST", "Central Sulawesi"],
				["SG", "South East Sulawesi"],
				["SA", "North Sulawesi"],
				["SB", "West Sumatra"],
				["SS", "South Sumatra"],
				["SU", "North Sumatra"],
				["JK", "Jakarta Special Capital Region"],
				["YO", "Special Region of Yogyakarta"]
			]
		},
		"IN": {
			"label": "Region",
			"list": [
				["AN", "Andaman and Nicobar Islands"],
				["AP", "Andhra Pradesh"],
				["AR", "Arunachal Pradesh"],
				["AS", "Assam"],
				["BR", "Bihar"],
				["CT", "Chhattisgarh"],
				["CH", "Chandigarh"],
				["DD", "Daman and Diu"],
				["DL", "Delhi"],
				["DN", "Dadra and Nagar Haveli"],
				["GA", "Goa"],
				["GJ", "Gujarat"],
				["HP", "Himachal Pradesh"],
				["HR", "Haryana"],
				["JH", "Jharkhand"],
				["JK", "Jammu and Kashmir"],
				["KA", "Karnataka"],
				["KL", "Kerala"],
				["LA", "Ladakh"],
				["LD", "Lakshadweep"],
				["MH", "Maharashtra"],
				["ML", "Meghalaya"],
				["MN", "Manipur"],
				["MP", "Madhya Pradesh"],
				["MZ", "Mizoram"],
				["NL", "Nagaland"],
				["OR", "Odisha"],
				["PB", "Punjab"],
				["PY", "Puducherry"],
				["RJ", "Rajasthan"],
				["SK", "Sikkim"],
				["TG", "Telangana"],
				["TN", "Tamil Nadu"],
				["TR", "Tripura"],
				["UP", "Uttar Pradesh"],
				["UT", "Uttarakhand"],
				["WB", "West Bengal"]
			]
		},
		"IE": {
			"label": "Region",
			"list": [
				["CE", "Clare"],
				["CN", "Cavan"],
				["CO", "Cork"],
				["CW", "Carlow"],
				["D", "Dublin"],
				["DL", "Donegal"],
				["G", "Galway"],
				["KE", "Kildare"],
				["KK", "Kilkenny"],
				["KY", "Kerry"],
				["LD", "Longford"],
				["LH", "Louth"],
				["LK", "Limerick"],
				["LM", "Leitrim"],
				["LS", "Laois"],
				["MH", "Meath"],
				["MN", "Monaghan"],
				["MO", "Mayo"],
				["OY", "Offaly"],
				["RN", "Roscommon"],
				["SO", "Sligo"],
				["TA", "Tipperary"],
				["WD", "Waterford"],
				["WH", "Westmeath"],
				["WW", "Wicklow"],
				["WX", "Wexford"]
			]
		},
		"IS": {
			"label": "Region",
			"list": [
				["1", "Höfuðborgarsvæðið"],
				["2", "Suðurnes"],
				["3", "Vesturland"],
				["4", "Vestfirðir"],
				["5", "Norðurland vestra"],
				["6", "Norðurland eystra"],
				["7", "Austurland"],
				["8", "Suðurland"]
			]
		},
		"IT": {
			"label": "Region",
			"list": [
				["21", "Piemonte"],
				["23", "Valle d'Aosta"],
				["25", "Lombardia"],
				["32", "Trentino-Südtirol"],
				["34", "Veneto"],
				["36", "Friuli-Venezia Giulia"],
				["42", "Liguria"],
				["45", "Emilia-Romagna"],
				["52", "Toscana"],
				["55", "Umbria"],
				["57", "Marche"],
				["62", "Lazio"],
				["65", "Abruzzo"],
				["67", "Molise"],
				["72", "Campania"],
				["75", "Puglia"],
				["77", "Basilicata"],
				["78", "Calabria"],
				["82", "Sicilia"],
				["88", "Sardegna"]
			]
		},
		"JP": {
			"label": "Region",
			"list": [
				["01", "Hokkaido"],
				["02", "Aomori"],
				["03", "Iwate"],
				["04", "Miyagi"],
				["05", "Akita"],
				["06", "Yamagata"],
				["07", "Fukushima"],
				["08", "Ibaraki"],
				["09", "Tochigi"],
				["10", "Gumma"],
				["11", "Saitama"],
				["12", "Chiba"],
				["13", "Tokyo"],
				["14", "Kanagawa"],
				["15", "Niigata"],
				["16", "Toyama"],
				["17", "Ishikawa"],
				["18", "Fukui"],
				["19", "Yamanashi"],
				["20", "Nagano"],
				["21", "Gifu"],
				["22", "Shizuoka"],
				["23", "Aichi"],
				["24", "Mie"],
				["25", "Shiga"],
				["26", "Kyoto"],
				["27", "Osaka"],
				["28", "Hyogo"],
				["29", "Nara"],
				["30", "Wakayama"],
				["31", "Tottori"],
				["32", "Shimane"],
				["33", "Okayama"],
				["34", "Hiroshima"],
				["35", "Yamaguchi"],
				["36", "Tokushima"],
				["37", "Kagawa"],
				["38", "Ehime"],
				["39", "Kouchi"],
				["40", "Fukuoka"],
				["41", "Saga"],
				["42", "Nagasaki"],
				["43", "Kumamoto"],
				["44", "Oita"],
				["45", "Miyazaki"],
				["46", "Kagoshima"],
				["47", "Okinawa"]
			]
		},
		"KR": {
			"label": "Region",
			"list": [
				["11", "Seoul"],
				["26", "Busan"],
				["27", "Daegu"],
				["28", "Incheon"],
				["29", "Gwangju"],
				["30", "Daejeon"],
				["31", "Ulsan"],
				["41", "Gyeonggi-do"],
				["42", "Gangwon-do"],
				["43", "Chungcheongbuk-do"],
				["44", "Chungcheongnam-do"],
				["45", "Jeollabuk-do"],
				["46", "Jeollanam-do"],
				["47", "Gyeongsangbuk-do"],
				["48", "Gyeongsangnam-do"],
				["49", "Jeju-do"]
			]
		},
		"MX": {
			"label": "Region",
			"list": [
				["AGU", "Aguascalientes"],
				["BCN", "Baja California"],
				["BCS", "Baja California Sur"],
				["CAM", "Campeche"],
				["CHH", "Chihuahua"],
				["CHP", "Chiapas"],
				["COA", "Coahuila"],
				["COL", "Colima"],
				["DIF", "Ciudad de Mexico"],
				["DUR", "Durango"],
				["GRO", "Guerrero"],
				["GUA", "Guanajuato"],
				["HID", "Hidalgo"],
				["JAL", "Jalisco"],
				["MEX", "Mexico"],
				["MIC", "Michoacan"],
				["MOR", "Morelos"],
				["NAY", "Nayarit"],
				["NLE", "Nuevo Leon"],
				["OAX", "Oaxaca"],
				["PUE", "Puebla"],
				["QUE", "Queretaro"],
				["ROO", "Quintana Roo"],
				["SIN", "Sinaloa"],
				["SLP", "San Luis Potosi"],
				["SON", "Sonora"],
				["TAB", "Tabasco"],
				["TAM", "Tamaulipas"],
				["TLA", "Tlaxcala"],
				["VER", "Veracruz"],
				["YUC", "Yucatan"],
				["ZAC", "Zacatecas"]
			]
		},
		"MH": {
			"label": "Region",
			"list": [
				["ALK", "Ailuk Atoll"],
				["ALL", "Ailinglaplap Atoll"],
				["ARN", "Arno Atoll"],
				["AUR", "Aur Atoll"],
				["EBO", "Ebon Atoll"],
				["ENI", "Enewetak Atoll"],
				["JAB", "Jabat Island"],
				["JAL", "Jaluit Atoll"],
				["KIL", "Kili Island"],
				["KWA", "Kwajalein Atoll"],
				["LAE", "Lae Atoll"],
				["LIB", "Lib Island"],
				["LIK", "Likiep Atoll"],
				["MAJ", "Majuro Atoll"],
				["MAL", "Maloelap Atoll"],
				["MEJ", "Mejit Island"],
				["MIL", "Mili Atoll"],
				["NMK", "Namdrik Atoll"],
				["NMU", "Namu Atoll"],
				["RON", "Rongelap Atoll"],
				["UJA", "Ujae Atoll"],
				["UTI", "Utrik Atoll"],
				["WTH", "Wotho Atoll"],
				["WTJ", "Wotje Atoll"]
			]
		},
		"MY": {
			"label": "Region",
			"list": [
				["1", "Johor"],
				["10", "Selangor"],
				["11", "Terengganu"],
				["12", "Sabah"],
				["13", "Sarawak"],
				["14", "Wilayah Persekutuan Kuala Lumpur"],
				["15", "Wilayah Persekutuan Labuan"],
				["16", "Wilayah Persekutuan Putrajaya"],
				["2", "Kedah"],
				["3", "Kelantan"],
				["4", "Melaka"],
				["5", "Negeri Sembilan"],
				["6", "Pahang"],
				["7", "Pulau Pinang"],
				["8", "Perak"],
				["9", "Perlis"]
			]
		},
		"NG": {
			"label": "State",
			"list": [
				["FC", "Abuja Federal Capital Territory"],
				["AB", "Abia"],
				["AD", "Adamawa"],
				["AK", "Akwa Ibom"],
				["AN", "Anambra"],
				["BA", "Bauchi"],
				["BY", "Bayelsa"],
				["BE", "Benue"],
				["BO", "Borno"],
				["CR", "Cross River"],
				["DE", "Delta"],
				["EB", "Ebonyi"],
				["ED", "Edo"],
				["EK", "Ekiti"],
				["EN", "Enugu"],
				["GO", "Gombe"],
				["IM", "Imo"],
				["JI", "Jigawa"],
				["KD", "Kaduna"],
				["KN", "Kano"],
				["KT", "Katsina"],
				["KE", "Kebbi"],
				["KO", "Kogi"],
				["KW", "Kwara"],
				["LA", "Lagos"],
				["NA", "Nasarawa"],
				["NI", "Niger"],
				["OG", "Ogun"],
				["ON", "Ondo"],
				["OS", "Osun"],
				["OY", "Oyo"],
				["PL", "Plateau"],
				["RI", "Rivers"],
				["SO", "Sokoto"],
				["TA", "Taraba"],
				["YO", "Yobe"],
				["ZA", "Zamfara"]
			]
		},
		"NL": {
			"label": "Region",
			"list": [
				["CW", "Curaçao"],
				["DR", "Drenthe"],
				["FL", "Flevoland"],
				["FR", "Fryslân"],
				["GE", "Gelderland"],
				["GR", "Groningen"],
				["LI", "Limburg"],
				["NB", "Noord-Brabant"],
				["NH", "Noord-Holland"],
				["OV", "Overijssel"],
				["SX", "Sint Maarten"],
				["UT", "Utrecht"],
				["ZE", "Zeeland"],
				["ZH", "Zuid-Holland"]
			]
		},
		"NO": {
			"label": "Region",
			"list": [
				["01", "Østfold"],
				["02", "Akershus"],
				["03", "Oslo"],
				["04", "Hedmark"],
				["05", "Oppland"],
				["06", "Buskerud"],
				["07", "Vestfold"],
				["08", "Telemark"],
				["09", "Aust-Agder"],
				["10", "Vest-Agder"],
				["11", "Rogaland"],
				["12", "Hordaland"],
				["14", "Sogn og Fjordane"],
				["15", "Møre og Romsdal"],
				["16", "Sør-Trøndelag"],
				["17", "Nord-Trøndelag"],
				["18", "Nordland"],
				["19", "Troms"],
				["20", "Finnmark"]
			]
		},
		"NZ": {
			"label": "Region",
			"list": [
				["AUK", "Auckland"],
				["BOP", "Bay Of Plenty"],
				["CAN", "Canterbury"],
				["CIT", "Chatham Islands Territory"],
				["GIS", "Gisborne"],
				["HKB", "Hawke's Bay"],
				["MBH", "Marlborough"],
				["MWT", "Manawatu-Wanganui"],
				["NSN", "Nelson"],
				["NTL", "Northland"],
				["OTA", "Otago"],
				["STL", "Southland"],
				["TAS", "Tasman"],
				["TKI", "Taranaki"],
				["WGN", "Wellington"],
				["WKO", "Waikato"],
				["WTC", "West Coast"]
			]
		},
		"PK": {
			"label": "Region",
			"list": [
				["BA", "Balochistan"],
				["IS", "Islamabad"],
				["JK", "Azad Kashmir"],
				["PB", "Punjab"],
				["SD", "Sindh"],
				["KP", "Khyber Pakhtunkhwa"],
				["GB", "Gilgit Baltistan"]
			]
		},
		"PA": {
			"label": "Province",
			"list": [
				["1", "Bocas del Toro"],
				["4", "Chiriquí"],
				["2", "Coclé"],
				["3", "Colón"],
				["5", "Darién"],
				["EM", "Emberá"],
				["KY", "Guna Yala"],
				["6", "Herrera"],
				["7", "Los Santos"],
				["NB", "Ngäbe-Buglé"],
				["8", "Panamá"],
				["10", "Panamá Oeste"],
				["9", "Veraguas"]
			]
		},
		"PE": {
			"label": "Region",
			"list": [
				["AMA", "Amazonas"],
				["ANC", "Ancash"],
				["APU", "Apurimac"],
				["ARE", "Arequipa"],
				["AYA", "Ayacucho"],
				["CAJ", "Cajamarca"],
				["CAL", "Callao"],
				["CUS", "Cusco"],
				["HUV", "Huancavelica"],
				["HUC", "Huanuco"],
				["ICA", "Ica"],
				["JUN", "Junin"],
				["LAL", "La Libertad"],
				["LAM", "Lambayeque"],
				["LIM", "Lima"],
				["LOR", "Loreto"],
				["MDD", "Madre De Dios"],
				["MOQ", "Moquegua"],
				["PAS", "Pasco"],
				["PIU", "Piura"],
				["PUN", "Puno"],
				["SAM", "San Martin"],
				["TAC", "Tacna"],
				["TUM", "Tumbes"],
				["UCA", "Ucayali"]
			]
		},
		"PH": {
			"label": "Region",
			"list": [
				["01", "Ilocos Region"],
				["02", "Cagayan Valley "],
				["03", "Central Luzon"],
				["05", "Bicol Region"],
				["06", "Western Visayas"],
				["07", "Central Visayas"],
				["08", "Eastern Visayas"],
				["09", "Zamboanga Peninsula"],
				["10", "Northern Mindanao"],
				["11", "Davao Region "],
				["12", "SOCCSKSARGEN "],
				["13", "Caraga "],
				["14", "Autonomous Region in Muslim Mindanao "],
				["40", "CALABARZON "],
				["41", "MIMAROPA "],
				["CAR", "Cordillera Administrative Region "],
				["NCR", "National Capital Region"]
			]
		},
		"PL": {
			"label": "Region",
			"list": [
				["DS", "Dolnośląskie"],
				["KP", "Kujawsko-pomorskie"],
				["LB", "Lubuskie"],
				["LD", "Łódzkie"],
				["LU", "Lubelskie"],
				["MA", "Małopolskie"],
				["MZ", "Mazowieckie"],
				["OP", "Opolskie"],
				["PD", "Podlaskie"],
				["PK", "Podkarpackie"],
				["PM", "Pomorskie"],
				["SK", "Świętokrzyskie"],
				["SL", "Śląskie"],
				["WN", "Warmińsko-mazurskie"],
				["WP", "Wielkopolskie"],
				["ZP", "Zachodniopomorskie"]
			]
		},
		"PT": {
			"label": "Region",
			"list": [
				["01", "Aveiro"],
				["02", "Beja"],
				["03", "Braga"],
				["04", "Bragança"],
				["05", "Castelo Branco"],
				["06", "Coimbra"],
				["07", "Évora"],
				["08", "Faro"],
				["09", "Guarda"],
				["10", "Leiria"],
				["11", "Lisboa"],
				["12", "Portalegre"],
				["13", "Porto"],
				["14", "Santarém"],
				["15", "Setúbal"],
				["16", "Viana do Castelo"],
				["17", "Vila Real"],
				["18", "Viseu"],
				["20", "Região Autónoma dos Açores"],
				["30", "Região Autónoma da Madeira"]
			]
		},
		"PY": {
			"label": "Region",
			"list": [
				["1", "Concepcion"],
				["10", "Alto Parana"],
				["11", "Central"],
				["12", "Neembucu"],
				["13", "Amambay"],
				["14", "Canindeyu"],
				["15", "Presidente Hayes"],
				["16", "Alto Paraguay"],
				["19", "Boqueron"],
				["2", "San Pedro"],
				["3", "Cordillera"],
				["4", "Guaira"],
				["5", "Caaguazu"],
				["6", "Caazapa"],
				["7", "Itapua"],
				["8", "Misiones"],
				["9", "Paraguari"],
				["ASU", "Asuncion"]
			]
		},
		"RO": {
			"label": "County",
			"list": [
				["AB", "Alba"],
				["AR", "Arad"],
				["AG", "Argeș"],
				["BC", "Bacău"],
				["BH", "Bihor"],
				["BN", "Bistrița-Năsăud"],
				["BT", "Botoșani"],
				["BV", "Brașov"],
				["BR", "Brăila"],
				["BZ", "Buzău"],
				["CS", "Caraș-Severin"],
				["CL", "Călărași"],
				["CJ", "Cluj"],
				["CT", "Constanța"],
				["CV", "Covasna"],
				["DB", "Dâmbovița"],
				["DJ", "Dolj"],
				["GL", "Galați"],
				["GR", "Giurgiu"],
				["GJ", "Gorj"],
				["HR", "Harghita"],
				["HD", "Hunedoara"],
				["IL", "Ialomița"],
				["IS", "Iași"],
				["IF", "Ilfov"],
				["MM", "Maramureș"],
				["MH", "Mehedinți"],
				["MS", "Mureș"],
				["NT", "Neamț"],
				["OT", "Olt"],
				["PH", "Prahova"],
				["SM", "Satu Mare"],
				["SJ", "Sălaj"],
				["SB", "Sibiu"],
				["SV", "Suceava"],
				["TR", "Teleorman"],
				["TM", "Timiș"],
				["TL", "Tulcea"],
				["VS", "Vaslui"],
				["VL", "Vâlcea"],
				["VN", "Vrancea"],
				["B", "Bucharest"]
			]
		},
		"RU": {
			"label": "Oblast",
			"list": [
				["AD", "Adygeya, Respublika"],
				["AL", "Altay"],
				["ALT", "Altayskiy Kray"],
				["AMU", "Amurskaya oblast'"],
				["ARK", "Arkhangel'skaya oblast'"],
				["AST", "Astrakhanskaya oblast'"],
				["BA", "Bashkortostan, Respublika"],
				["BEL", "Belgorodskaya oblast'"],
				["BRY", "Bryanskaya oblast'"],
				["BU", "Buryatiya, Respublika"],
				["CE", "Chechenskaya Respublika"],
				["CHE", "Cheljabinskaya oblast'"],
				["CHU", "Chukotskiy avtonomnyy okrug"],
				["CU", "Chuvashskaya Respublika"],
				["DA", "Dagestan, Respublika"],
				["DVD", "Kamchatka"],
				["IN", "Ingushetiya, Respublika"],
				["IRK", "Irkutskaya oblast'"],
				["IVA", "Ivanovskaya oblast'"],
				["KB", "Kabardino-Balkarskaya Respublika"],
				["KC", "Karachayevo-Cherkesskaya Respublika"],
				["KDA", "Krasnodarskiy kray"],
				["KEM", "Kemerovskaya oblast'"],
				["KGD", "Kaliningradskaya oblast'"],
				["KGN", "Kurganskaya oblast'"],
				["KHA", "Khabarovskiy kray"],
				["KHM", "Khanty-Mansiyskiy avtonomnyy okrug"],
				["KIR", "Kirovskaya oblast'"],
				["KK", "Hakasiya, Respublika"],
				["KL", "Kalmykiya, Respublika"],
				["KLU", "Kaluzhskaya oblast'"],
				["KO", "Komi, Respublika"],
				["KOS", "Kostromskaya oblast'"],
				["KR", "Kareliya, Respublika"],
				["KRS", "Kurskaya oblast'"],
				["KYA", "Krasnojarskiy kray"],
				["LEN", "Leningradskaya oblast'"],
				["LIP", "Lipeckaya oblast'"],
				["MAG", "Magadanskaya oblast'"],
				["ME", "Mariy El, Respublika"],
				["MO", "Mordoviya, Respublika"],
				["MOS", "Moskovskaya oblast'"],
				["MOW", "Moscow"],
				["MUR", "Murmanskaya oblast'"],
				["NEN", "Nenetskiy avtonomnyy okrug"],
				["NGR", "Novgorodskaya oblast'"],
				["NIZ", "Nizhegorodskaya oblast'"],
				["NVS", "Novosibirskaya oblast'"],
				["OMS", "Omskaya oblast'"],
				["ORE", "Orenburgskaya oblast'"],
				["ORL", "Orlovskaya oblast'"],
				["PER", "Permskiy kray"],
				["PNZ", "Penzenskaya oblast'"],
				["PRI", "Primorskiy kraj"],
				["PSK", "Pskovskaya oblast'"],
				["ROS", "Rostovskaya oblast'"],
				["RYA", "Ryazanskaya oblast'"],
				["SA", "Saha, Respublika"],
				["SAK", "Sahalinskaya oblast'"],
				["SAM", "Samarskaya oblast'"],
				["SAR", "Saratovskaya oblast'"],
				["SE", "Severnaya Osetiya, Respublika"],
				["SMO", "Smolenskaya oblast'"],
				["SPE", "Sankt-Peterburg"],
				["STA", "Stavropol'skiy kray"],
				["SVE", "Sverdlovskaya oblast'"],
				["TA", "Tatarstan, Respublika"],
				["TAM", "Tambovskaya oblast'"],
				["TOM", "Tomskaya oblast'"],
				["TUL", "Tul'skaya oblast'"],
				["TVE", "Tverskaya oblast'"],
				["TY", "Tyva, Respublika"],
				["TYU", "Tyumenskaya oblast'"],
				["UD", "Udmurtskaya Respublika"],
				["ULY", "Ul'janovskaya oblast'"],
				["VGG", "Volgogradskaya oblast'"],
				["VLA", "Vladimirskaya oblast'"],
				["VLG", "Vologodskaya oblast'"],
				["VOR", "Voronezhskaya oblast'"],
				["YAN", "Yamalo-Neneckiy avtonomnyy okrug"],
				["YAR", "Jaroslavskaya oblast'"],
				["YEV", "Yevreyskaya avtonomnaya oblast'"],
				["ZAB", "Zabaykal'skiy kray"]
			]
		},
		"SD": {
			"label": "Region",
			"list": [
				["DN", "North Darfur"],
				["DS", "South Darfur"],
				["DW", "West Darfur"],
				["GD", "Gedarif"],
				["GZ", "Gezira"],
				["KA", "Kassala"],
				["KH", "Khartoum"],
				["KN", "North Kordufan"],
				["KS", "South Kordufan"],
				["NB", "Blue Nile"],
				["NO", "Northern"],
				["NR", "River Nile"],
				["NW", "White Nile"],
				["RS", "Red Sea"],
				["SI", "Sennar"]
			]
		},
		"SN": {
			"label": "Region",
			"list": [
				["1", "Dakar"],
				["2", "Ziguinchor"],
				["3", "Diourbel"],
				["4", "Saint-Louis"],
				["5", "Tambacounda"],
				["6", "Kaolack"],
				["7", "Thiès"],
				["8", "Louga"],
				["9", "Fatick"],
				["10", "Kolda"],
				["11", "Matam"],
				["12", "Kaffrine"],
				["13", "Kédougou"],
				["14", "Sédhiou"]
			]
		},
		"SG": {
			"label": "Region",
			"list": [
				["01", "Central Singapore"],
				["02", "North East"],
				["03", "North West"],
				["04", "South East"],
				["05", "South West"]
			]
		},
		"SB": {
			"label": "Region",
			"list": [
				["CE", "Central"],
				["GU", "Guadalcanal"],
				["IS", "Isabel"],
				["MK", "Makira"],
				["ML", "Malaita"],
				["WE", "Western"]
			]
		},
		"RS": {
			"label": "Region",
			"list": [
				["00", "Belgrade"],
				["14", "Bor District"],
				["11", "Braničevo District"],
				["23", "Jablanica District"],
				["06", "South Bačka District"],
				["04", "South Banat District"],
				["09", "Kolubara District"],
				["25", "Kosovo District"],
				["28", "Kosovska Mitrovica District"],
				["29", "Kosovo-Pomoravlje District"],
				["08", "Mačva District"],
				["17", "Moravica District"],
				["20", "Nišava District"],
				["24", "Pčinja District"],
				["26", "Peć District"],
				["22", "Pirot District"],
				["10", "Podunavlje District"],
				["13", "Pomoravlje District"],
				["27", "Prizren District"],
				["19", "Rasina District"],
				["18", "Raška District"],
				["01", "North Bačka District"],
				["03", "North Banat District"],
				["02", "Central Banat District"],
				["07", "Srem District"],
				["12", "Šumadija District"],
				["21", "Toplica District"],
				["15", "Zaječar District"],
				["05", "West Bačka District"],
				["16", "Zlatibor District"]
			]
		},
		"SK": {
			"label": "Region",
			"list": [
				["BC", "Banska Bystrica"],
				["BL", "Bratislava"],
				["KI", "Kosice"],
				["NI", "Nitra"],
				["PV", "Presov"],
				["TA", "Trnava"],
				["TC", "Trencin"],
				["ZI", "Zilina"]
			]
		},
		"SI": {
			"label": "Region",
			"list": [
				["001", "Ajdovscina"],
				["003", "Bled"],
				["004", "Bohinj"],
				["005", "Borovnica"],
				["006", "Bovec"],
				["008", "Brezovica"],
				["009", "Brezice"],
				["011", "Celje"],
				["013", "Cerknica"],
				["014", "Cerkno"],
				["015", "Črenšovci"],
				["017", "Črnomelj"],
				["018", "Destrnik"],
				["019", "Divača"],
				["023", "Domžale"],
				["025", "Dravograd"],
				["029", "Gornja Radgona"],
				["032", "Grosuplje"],
				["034", "Hrastnik"],
				["036", "Idrija"],
				["037", "Ig"],
				["038", "Ilirska Bistrica"],
				["039", "Ivančna Gorica"],
				["040", "Izola-Isola"],
				["041", "Jesenice"],
				["043", "Kamnik"],
				["044", "Kanal ob Soči"],
				["045", "Kidričevo"],
				["046", "Kobarid"],
				["048", "Kočevje"],
				["050", "Koper-Capodistria"],
				["052", "Kranj"],
				["053", "Kranjska Gora"],
				["054", "Krško"],
				["057", "Laško"],
				["058", "Lenart"],
				["059", "Lendava"],
				["060", "Litija"],
				["061", "Ljubljana"],
				["063", "Ljutomer"],
				["064", "Logatec"],
				["070", "Maribor"],
				["071", "Medvode"],
				["072", "Mengeš"],
				["073", "Metlika"],
				["074", "Mežica"],
				["075", "Miren-Kostanjevica"],
				["076", "Mislinja"],
				["079", "Mozirje"],
				["080", "Murska Sobota"],
				["081", "Muta"],
				["084", "Nova Gorica"],
				["085", "Novo Mesto"],
				["086", "Odranci"],
				["087", "Ormož"],
				["090", "Piran"],
				["091", "Pivka"],
				["094", "Postojna"],
				["096", "Ptuj"],
				["098", "Rače-Fram"],
				["099", "Radeče"],
				["100", "Radenci"],
				["101", "Radlje Ob Dravi"],
				["102", "Radovljica"],
				["103", "Ravne na Koroškem"],
				["104", "Ribnica"],
				["106", "Rogaška Slatina"],
				["108", "Ruše"],
				["110", "Sevnica"],
				["111", "Sežana"],
				["112", "Slovenj Gradec"],
				["113", "Slovenska Bistrica"],
				["114", "Slovenske Konjice"],
				["117", "Šenčur"],
				["118", "Šentilj"],
				["120", "Šentjur"],
				["122", "Škofja Loka"],
				["123", "Škofljica"],
				["126", "Šoštanj"],
				["127", "Štore"],
				["128", "Tolmin"],
				["129", "Trbovlje"],
				["130", "Trebnje"],
				["131", "Tržič"],
				["132", "Turnišče"],
				["133", "Velenje"],
				["136", "Vipava"],
				["138", "Vodice"],
				["139", "Vojnik"],
				["140", "Vrhnika"],
				["141", "Vuzenica"],
				["142", "Zagorje Ob Savi"],
				["144", "Zrece"],
				["146", "Zelezniki"],
				["147", "Ziri"],
				["160", "Hoče-Slivnica"],
				["162", "Horjul"],
				["167", "Lovrenc Na Pohorju"],
				["169", " Miklavž na Dravskem Polju"],
				["171", "Oplotnica"],
				["173", "Polzela"],
				["174", "Prebold"],
				["175", "Prevalje"],
				["183", "Šempeter-Vrtojba"],
				["186", "Trzin"],
				["190", "Zalec"],
				["193", "Zuzemberk"],
				["200", "Poljčane"],
				["203", "Straža"],
				["208", "Log-Dragomer"]
			]
		},
		"SE": {
			"label": "County",
			"list": [
				["AB", "Stockholms län"],
				["AC", "Västerbottens län"],
				["BD", "Norrbottens län"],
				["C", "Uppsala län"],
				["D", "Södermanlands län"],
				["E", "Östergötlands län"],
				["F", "Jönköpings län"],
				["G", "Kronobergs län"],
				["H", "Kalmar län"],
				["I", "Gotlands län"],
				["K", "Blekinge län"],
				["M", "Skåne län"],
				["N", "Hallands län"],
				["O", "Västra Götalands län"],
				["S", "Värmlands län"],
				["T", "Örebro län"],
				["U", "Västmanlands län"],
				["W", "Dalarnas län"],
				["X", "Gävleborgs län"],
				["Y", "Västernorrlands län"],
				["Z", "Jämtlands län"]
			]
		},
		"SZ": {
			"label": "Region",
			"list": [
				["HH", "Hhohho"],
				["LU", "Lubombo"],
				["MA", "Manzini"],
				["SH", "Shiselweni"]
			]
		},
		"TH": {
			"label": "Region",
			"list": [
				["10", "Bangkok"],
				["11", "Samut Prakan"],
				["12", "Nonthaburi"],
				["13", "Pathum Thani"],
				["14", "Phra Nakhon Si Ayutthaya"],
				["15", "Ang Thong"],
				["16", "Lop Buri"],
				["17", "Sing Buri"],
				["18", "Chai Nat"],
				["19", "Saraburi"],
				["20", "Chon Buri"],
				["21", "Rayong"],
				["22", "Chanthaburi"],
				["23", "Trat"],
				["24", "Chachoengsao"],
				["25", "Prachin Buri"],
				["26", "Nakhon Nayok"],
				["27", "Sa Kaeo"],
				["30", "Nakhon Ratchasima"],
				["31", "Buri Ram"],
				["32", "Surin"],
				["33", "Si Sa Ket"],
				["34", "Ubon Ratchathani"],
				["35", "Yasothon"],
				["36", "Chaiyaphum"],
				["37", "Amnat Charoen"],
				["38", "Bueng Kan"],
				["39", "Nong Bua Lam Phu"],
				["40", "Khon Kaen"],
				["41", "Udon Thani"],
				["42", "Loei"],
				["43", "Nong Khai"],
				["44", "Maha Sarakham"],
				["45", "Roi Et"],
				["46", "Kalasin"],
				["47", "Sakon Nakhon"],
				["48", "Nakhon Phanom"],
				["49", "Mukdahan"],
				["50", "Chiang Mai"],
				["51", "Lamphun"],
				["52", "Lampang"],
				["53", "Uttaradit"],
				["54", "Phrae"],
				["55", "Nan"],
				["56", "Phayao"],
				["57", "Chiang Rai"],
				["58", "Mae Hong Son"],
				["60", "Nakhon Sawan"],
				["61", "Uthai Thani"],
				["62", "Kamphaeng Phet"],
				["63", "Tak"],
				["64", "Sukhothai"],
				["65", "Phitsanulok"],
				["66", "Phichit"],
				["67", "Phetchabun"],
				["70", "Ratchaburi"],
				["71", "Kanchanaburi"],
				["72", "Suphan Buri"],
				["73", "Nakhon Pathom"],
				["74", "Samut Sakhon"],
				["75", "Samut Songkhram"],
				["76", "Phetchaburi"],
				["77", "Prachuap Khiri Khan"],
				["80", "Nakhon Si Thammarat"],
				["81", "Krabi"],
				["82", "Phangnga"],
				["83", "Phuket"],
				["84", "Surat Thani"],
				["85", "Ranong"],
				["86", "Chumphon"],
				["90", "Songkhla"],
				["91", "Satun"],
				["92", "Trang"],
				["93", "Phatthalung"],
				["94", "Pattani"],
				["95", "Yala"],
				["96", "Narathiwat"]
			]
		},
		"TR": {
			"label": "Province",
			"list": [
				["01", "Adana"],
				["02", "Adıyaman"],
				["03", "Afyonkarahisar"],
				["04", "Ağrı"],
				["05", "Amasya"],
				["06", "Ankara"],
				["07", "Antalya"],
				["08", "Artvin"],
				["09", "Aydın"],
				["10", "Balıkesir"],
				["11", "Bilecik"],
				["12", "Bingöl"],
				["13", "Bitlis"],
				["14", "Bolu"],
				["15", "Burdur"],
				["16", "Bursa"],
				["17", "Çanakkale"],
				["18", "Çankırı"],
				["19", "Çorum"],
				["20", "Denizli"],
				["21", "Diyarbakır"],
				["22", "Edirne"],
				["23", "Elazığ"],
				["24", "Erzincan"],
				["25", "Erzurum"],
				["26", "Eskişehir"],
				["27", "Gaziantep"],
				["28", "Giresun"],
				["29", "Gümüşhane"],
				["30", "Hakkâri"],
				["31", "Hatay"],
				["32", "Isparta"],
				["33", "Mersin"],
				["34", "İstanbul"],
				["35", "İzmir"],
				["36", "Kars"],
				["37", "Kastamonu"],
				["38", "Kayseri"],
				["39", "Kırklareli"],
				["40", "Kırşehir"],
				["41", "Kocaeli"],
				["42", "Konya"],
				["43", "Kütahya"],
				["44", "Malatya"],
				["45", "Manisa"],
				["46", "Kahramanmaraş"],
				["47", "Mardin"],
				["48", "Muğla"],
				["49", "Muş"],
				["50", "Nevşehir"],
				["51", "Niğde"],
				["52", "Ordu"],
				["53", "Rize"],
				["54", "Sakarya"],
				["55", "Samsun"],
				["56", "Siirt"],
				["57", "Sinop"],
				["58", "Sivas"],
				["59", "Tekirdağ"],
				["60", "Tokat"],
				["61", "Trabzon"],
				["62", "Tunceli"],
				["63", "Şanlıurfa"],
				["64", "Uşak"],
				["65", "Van"],
				["66", "Yozgat"],
				["67", "Zonguldak"],
				["68", "Aksaray"],
				["69", "Bayburt"],
				["70", "Karaman"],
				["71", "Kırıkkale"],
				["72", "Batman"],
				["73", "Şırnak"],
				["74", "Bartın"],
				["75", "Ardahan"],
				["76", "Iğdır"],
				["77", "Yalova"],
				["78", "Karabük"],
				["79", "Kilis"],
				["80", "Osmaniye"],
				["81", "Düzce"]
			]
		},
		"UY": {
			"label": "Region",
			"list": [
				["AR", "Artigas"],
				["CA", "Canelones"],
				["CL", "Cerro Largo"],
				["CO", "Colonia"],
				["DU", "Durazno"],
				["FD", "Florida"],
				["FS", "Flores"],
				["LA", "Lavalleja"],
				["MA", "Maldonado"],
				["MO", "Montevideo"],
				["PA", "Paysandu"],
				["RN", "Rio Negro"],
				["RO", "Rocha"],
				["RV", "Rivera"],
				["SA", "Salto"],
				["SJ", "San Jose"],
				["SO", "Soriano"],
				["TA", "Tacuarembo"],
				["TT", "Treinta Y Tres"]
			]
		},
		"US": {
			"label": "State",
			"list": [
				["AA", "Armed Forces Americas"],
				["AE", "Armed Forces Europe"],
				["AK", "Alaska"],
				["AL", "Alabama"],
				["AP", "Armed Forces Pacific"],
				["AR", "Arkansas"],
				["AZ", "Arizona"],
				["CA", "California"],
				["CO", "Colorado"],
				["CT", "Connecticut"],
				["DC", "District of Columbia"],
				["DE", "Delaware"],
				["FL", "Florida"],
				["GA", "Georgia"],
				["HI", "Hawaii"],
				["IA", "Iowa"],
				["ID", "Idaho"],
				["IL", "Illinois"],
				["IN", "Indiana"],
				["KS", "Kansas"],
				["KY", "Kentucky"],
				["LA", "Louisiana"],
				["MA", "Massachusetts"],
				["MD", "Maryland"],
				["ME", "Maine"],
				["MI", "Michigan"],
				["MN", "Minnesota"],
				["MO", "Missouri"],
				["MS", "Mississippi"],
				["MT", "Montana"],
				["NC", "North Carolina"],
				["ND", "North Dakota"],
				["NE", "Nebraska"],
				["NH", "New Hampshire"],
				["NJ", "New Jersey"],
				["NM", "New Mexico"],
				["NV", "Nevada"],
				["NY", "New York"],
				["OH", "Ohio"],
				["OK", "Oklahoma"],
				["OR", "Oregon"],
				["PA", "Pennsylvania"],
				["RI", "Rhode Island"],
				["SC", "South Carolina"],
				["SD", "South Dakota"],
				["TN", "Tennessee"],
				["TX", "Texas"],
				["UT", "Utah"],
				["VA", "Virginia"],
				["VT", "Vermont"],
				["WA", "Washington"],
				["WI", "Wisconsin"],
				["WV", "West Virginia"],
				["WY", "Wyoming"]
			]
		},
		"ZA": {
			"label": "Region",
			"list": [
				["EC", "Eastern Cape"],
				["FS", "Free State"],
				["GT", "Gauteng"],
				["LP", "Limpopo"],
				["MP", "Mpumalanga"],
				["NC", "Northern Cape"],
				["NL", "Kwazulu-Natal"],
				["NW", "North-West"],
				["WC", "Western Cape"]
			]
		}
	}
};
// src/wix/forms/forms-core.ts
var id = (raw) => raw?._id ?? raw?.id ?? "";
var INPUT_BLOCK = {
	STRING: "stringOptions",
	NUMBER: "numberOptions",
	BOOLEAN: "booleanOptions",
	ARRAY: "arrayOptions",
	ADDRESS: "addressOptions",
	WIX_FILE: "wixFileOptions",
	PAYMENT: "paymentOptions",
	SCHEDULING: "schedulingOptions"
};
var COMPONENT_BLOCK = {
	TEXT_INPUT: "textInputOptions",
	PASSWORD: "passwordOptions",
	NUMBER_INPUT: "numberInputOptions",
	RATING_INPUT: "ratingInputOptions",
	PHONE_INPUT: "phoneInputOptions",
	DATE_INPUT: "dateInputOptions",
	DATE_PICKER: "datePickerOptions",
	DATE_TIME: "dateTimeOptions",
	TIME_INPUT: "timeInputOptions",
	CHECKBOX: "checkboxOptions",
	CHECKBOX_GROUP: "checkboxGroupOptions",
	RADIO_GROUP: "radioGroupOptions",
	DROPDOWN: "dropdownOptions",
	TAGS: "tagsOptions",
	MULTILINE_ADDRESS: "multilineAddressOptions",
	FILE_UPLOAD: "fileUploadOptions",
	SIGNATURE: "signatureOptions",
	FIXED_PAYMENT: "fixedPaymentOptions",
	PAYMENT_INPUT: "paymentInputOptions",
	DONATION_INPUT: "donationInputOptions",
	APPOINTMENT: "appointmentOptions",
	SERVICES_DROPDOWN: "servicesDropdownOptions",
	SERVICES_CHECKBOX_GROUP: "servicesCheckboxGroupOptions"
};
var CONTROL = {
	TEXT_INPUT: "text",
	PASSWORD: "password",
	NUMBER_INPUT: "number",
	RATING_INPUT: "rating",
	PHONE_INPUT: "phone",
	DATE_INPUT: "date",
	DATE_PICKER: "date",
	DATE_TIME: "datetime",
	TIME_INPUT: "time",
	CHECKBOX: "checkbox",
	CHECKBOX_GROUP: "checkboxGroup",
	RADIO_GROUP: "radio",
	DROPDOWN: "select",
	TAGS: "tags",
	MULTILINE_ADDRESS: "address",
	FILE_UPLOAD: "file",
	SIGNATURE: "signature",
	FIXED_PAYMENT: "payment",
	PAYMENT_INPUT: "payment",
	DONATION_INPUT: "payment",
	SERVICES_DROPDOWN: "select",
	SERVICES_CHECKBOX_GROUP: "checkboxGroup",
	APPOINTMENT: "appointment"
};
var FILE_FORMAT_ACCEPT = {
	VIDEO: "video/*",
	IMAGE: "image/*",
	AUDIO: "audio/*",
	DOCUMENT: ".ai,.cdr,.csv,.doc,.docb,.docx,.dot,.dotx,.dwg,.eps,.epub,.fla,.gpx,.ical,.icalendar,.ics,.ifb,.indd,.ipynb,.key,.kml,.kmz,.mobi,.mtf,.mtx,.numbers,.odg,.odp,.ods,.odt,.otp,.ots,.ott,.oxps,.pages,.pdf,.pdn,.pkg,.pot,.potx,.pps,.ppsx,.ppt,.pptx,.psd,.pub,.rtf,.sldx,.txt,.json,.vcf,.xcf,.xls,.xlsx,.xlt,.xltx,.xlw,.xps,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel",
	ARCHIVE: ".zip,.rar,.tar,.tar.gz,.gz,.gzip,.jar,.7z,.fgz,.webarchive"
};
/**
* Every country an address may name when the owner set no `allowedCountries` — the list Wix's
* own address field enumerates (form-multiline-address country-codes.ts). ISO 3166-1 alpha-2.
*/
var COUNTRY_CODES = [
	"AD",
	"AE",
	"AF",
	"AG",
	"AI",
	"AL",
	"AM",
	"AN",
	"AO",
	"AQ",
	"AR",
	"AS",
	"AT",
	"AU",
	"AW",
	"AX",
	"AZ",
	"BA",
	"BB",
	"BD",
	"BE",
	"BF",
	"BG",
	"BH",
	"BI",
	"BJ",
	"BL",
	"BM",
	"BN",
	"BO",
	"BQ",
	"BR",
	"BS",
	"BT",
	"BV",
	"BW",
	"BY",
	"BZ",
	"CA",
	"CC",
	"CD",
	"CF",
	"CG",
	"CH",
	"CI",
	"CK",
	"CL",
	"CM",
	"CN",
	"CO",
	"CR",
	"CV",
	"CW",
	"CX",
	"CY",
	"CZ",
	"DE",
	"DJ",
	"DK",
	"DM",
	"DO",
	"DZ",
	"EC",
	"EE",
	"EG",
	"EH",
	"ER",
	"ES",
	"ET",
	"FI",
	"FJ",
	"FK",
	"FM",
	"FO",
	"FR",
	"GA",
	"GB",
	"GD",
	"GE",
	"GF",
	"GG",
	"GH",
	"GI",
	"GL",
	"GM",
	"GN",
	"GP",
	"GQ",
	"GR",
	"GS",
	"GT",
	"GU",
	"GW",
	"GY",
	"HK",
	"HM",
	"HN",
	"HR",
	"HT",
	"HU",
	"ID",
	"IE",
	"IL",
	"IM",
	"IN",
	"IO",
	"IQ",
	"IS",
	"IT",
	"JE",
	"JM",
	"JO",
	"JP",
	"KE",
	"KG",
	"KH",
	"KI",
	"KM",
	"KN",
	"KR",
	"KW",
	"KY",
	"KZ",
	"LA",
	"LB",
	"LC",
	"LI",
	"LK",
	"LR",
	"LS",
	"LT",
	"LU",
	"LV",
	"LY",
	"MA",
	"MC",
	"MD",
	"ME",
	"MF",
	"MG",
	"MH",
	"MK",
	"ML",
	"MM",
	"MN",
	"MO",
	"MP",
	"MQ",
	"MR",
	"MS",
	"MT",
	"MU",
	"MV",
	"MW",
	"MX",
	"MY",
	"MZ",
	"NA",
	"NC",
	"NE",
	"NF",
	"NG",
	"NI",
	"NL",
	"NO",
	"NP",
	"NR",
	"NU",
	"NZ",
	"OM",
	"PA",
	"PE",
	"PF",
	"PG",
	"PH",
	"PK",
	"PL",
	"PM",
	"PN",
	"PR",
	"PS",
	"PT",
	"PW",
	"PY",
	"QA",
	"RE",
	"RO",
	"RS",
	"RU",
	"RW",
	"SA",
	"SB",
	"SC",
	"SD",
	"SE",
	"SG",
	"SH",
	"SI",
	"SJ",
	"SK",
	"SL",
	"SM",
	"SN",
	"SO",
	"SR",
	"SS",
	"ST",
	"SV",
	"SX",
	"SZ",
	"TC",
	"TD",
	"TF",
	"TG",
	"TH",
	"TJ",
	"TK",
	"TL",
	"TM",
	"TN",
	"TO",
	"TR",
	"TT",
	"TV",
	"TW",
	"TZ",
	"UA",
	"UG",
	"UM",
	"US",
	"UY",
	"UZ",
	"VA",
	"VC",
	"VE",
	"VG",
	"VI",
	"VN",
	"VU",
	"WF",
	"WS",
	"XK",
	"YE",
	"YT",
	"ZA",
	"ZM",
	"ZW"
];
var warned = /* @__PURE__ */ new Set();
function blockName(table, key, what) {
	const name = key ? table[key] : void 0;
	if (!name && key && !warned.has(what + key)) {
		warned.add(what + key);
		console.warn(`forms: no ${what} block mapped for "${key}" — that field renders without its label or options. Add it to the table in wix/forms/forms-core.ts.`);
	}
	return name;
}
/**
* Ricos rich content → plain text. Labels, descriptions, the owner's thank-you and "form closed"
* messages all arrive as rich content; block nodes (paragraphs, headings, list items) become
* lines so a multi-paragraph thank-you keeps its breaks. Links and decorations are dropped.
*/
function plainText(label) {
	if (typeof label === "string") return label;
	const nodes = label?.nodes;
	if (!Array.isArray(nodes)) return "";
	const BLOCK = /^(PARAGRAPH|HEADING|LIST_ITEM|BLOCKQUOTE|CODE_BLOCK)$/;
	const walk = (list) => list.map((n) => (n?.textData?.text ?? "") + (Array.isArray(n?.nodes) ? walk(n.nodes) : "") + (BLOCK.test(n?.type ?? "") ? "\n" : "")).join("");
	return walk(nodes).replace(/\n{3,}/g, "\n\n").trim();
}
/** `postalCode` → "Postal code". A subfield is a key; the schema carries no label for it. */
function humanizeSub(sub) {
	const words = sub.replace(/([A-Z])|(\d+)/g, " $1$2").toLowerCase().trim();
	return words.charAt(0).toUpperCase() + words.slice(1);
}
/**
* "US" → "United States". From the shipped data first — the same string on the server and in the
* browser, which Intl.DisplayNames does not guarantee (Node and Chrome spell Hong Kong, Macao,
* Palestine and the Falklands differently, and a server-rendered list the browser disagrees with
* is a hydration mismatch). Intl for a code the data lacks; the code itself otherwise.
*/
function countryName(code) {
	const known = ADDRESS_TEMPLATES.countryNames[code];
	if (known) return known;
	try {
		return (Intl.DisplayNames ? new Intl.DisplayNames(["en"], { type: "region" }) : null)?.of(code) ?? code;
	} catch {
		return code;
	}
}
var RELATIVE_DATE = /^\$now(?:([+-])(\d{1,2})([yMdmh]))?$/;
/**
* A date bound or default as the schema stores it — an ISO string, or `$now`, `$now+2d`,
* `$now-1M` (units y M d m h; string-format-options-mapper.ts) — resolved to a static value in
* the field's own format: `YYYY-MM-DD` (date), `HH:mm:ss` (time), `YYYY-MM-DDTHH:mm:ss` (datetime).
* An ISO input is returned unchanged; anything else (an unsupported expression) is dropped.
*/
function resolveDate(value, control, now = /* @__PURE__ */ new Date()) {
	if (typeof value !== "string" || !value) return void 0;
	const m = value.match(RELATIVE_DATE);
	if (!m) return /^\d{4}-\d{2}-\d{2}|^\d{2}:\d{2}/.test(value) ? value : void 0;
	const d = new Date(now.getTime());
	const sign = m[1] === "-" ? -1 : 1;
	const n = m[2] ? sign * parseInt(m[2], 10) : 0;
	switch (m[3]) {
		case "y":
			d.setUTCFullYear(d.getUTCFullYear() + n);
			break;
		case "M":
			d.setUTCMonth(d.getUTCMonth() + n);
			break;
		case "d":
			d.setUTCDate(d.getUTCDate() + n);
			break;
		case "h":
			d.setUTCHours(d.getUTCHours() + n);
			break;
		case "m": d.setUTCMinutes(d.getUTCMinutes() + n);
	}
	const iso = d.toISOString();
	if (control === "time") return iso.slice(11, 19);
	if (control === "datetime") return iso.slice(0, 19);
	return iso.slice(0, 10);
}
/** The owner's address settings, as `addressPartsForCountry` needs them. */
function addressOverrides(rules, component) {
	const fields = rules.fields ?? {};
	const settings = component.fieldSettings ?? {};
	return {
		required: Object.fromEntries(Object.keys(fields).map((k) => [k, fields[k]?.required])),
		show: Object.fromEntries(Object.keys(settings).map((k) => [k, settings[k]?.show])),
		allowedCountries: Array.isArray(rules.allowedCountries) ? rules.allowedCountries.map(String) : []
	};
}
/**
* The subfields of an address for ONE country, in Wix's order: `country` first (Wix prepends it
* to every template and requires it exactly when the address is required, get-country-field.ts),
* then the country's template — Israel: street name, street number, city, postal code; the United
* States: address line, city, state, postal code — with the owner's `validation.fields` deciding
* requiredness and `fieldSettings` visibility over the template's defaults. A `subdivision` part
* carries the country's states / provinces / regions as `choices` (ISO 3166-2 codes) when Wix has
* them on record. No country yet → Wix's common template.
*/
function addressPartsForCountry(country, o, required) {
	const code = country ? country.toUpperCase() : "";
	const templateName = ADDRESS_TEMPLATES.byCountry[code] ?? ADDRESS_TEMPLATES.defaultTemplate;
	const template = ADDRESS_TEMPLATES.templates[templateName] ?? ADDRESS_TEMPLATES.templates[ADDRESS_TEMPLATES.defaultTemplate] ?? [];
	const allowed = o.allowedCountries.length ? o.allowedCountries : [...COUNTRY_CODES];
	const parts = [{
		sub: "country",
		label: "Country",
		required: o.required.country ?? required,
		choices: allowed.map((c) => ({
			value: c,
			label: countryName(c)
		}))
	}];
	const subdivisions = ADDRESS_TEMPLATES.subdivisions[code];
	for (const t of template) {
		if (!(o.show[t.sub] ?? !t.hidden)) continue;
		const isSubdivision = t.sub === "subdivision";
		parts.push({
			sub: t.sub,
			label: isSubdivision && subdivisions ? subdivisions.label : humanizeSub(t.sub),
			required: o.required[t.sub] ?? t.required,
			...isSubdivision && subdivisions ? { choices: subdivisions.list.map(([k, name]) => ({
				value: `${code}-${k}`,
				label: name
			})) } : {}
		});
	}
	return parts;
}
function addressParts(rules, component, required) {
	const preset = component.defaultCountryConfig?.countryOptions;
	return addressPartsForCountry(typeof preset === "string" ? preset : void 0, addressOverrides(rules, component), required);
}
function toField(raw, imgSrc, stepId) {
	const input = raw.inputOptions ?? {};
	const inputType = input.inputType ?? "";
	const optionsBlock = input[blockName(INPUT_BLOCK, inputType, "inputType") ?? ""] ?? {};
	const componentType = optionsBlock.componentType ?? "";
	const component = optionsBlock[blockName(COMPONENT_BLOCK, componentType, "componentType") ?? ""] ?? {};
	const rules = optionsBlock.validation ?? {};
	const identifier = raw.identifier ?? "";
	const required = input.required ?? false;
	let control = CONTROL[componentType] ?? "unknown";
	if (inputType === "PAYMENT") control = "payment";
	if (control === "text") {
		if (identifier === "TEXT_AREA") control = "textarea";
		else if (rules.format === "EMAIL") control = "email";
		else if (rules.format === "URL") control = "url";
		else if (rules.format === "PHONE") control = "phone";
	}
	const dateRules = rules.dateOptions ?? rules.dateTimeOptions ?? rules.timeOptions ?? rules.dateOptionalTimeOptions ?? {};
	const fileFormats = Array.isArray(rules.uploadFileFormats) ? rules.uploadFileFormats : [];
	const isBirthdate = identifier === "CONTACTS_BIRTHDATE";
	const validation = {
		...rules.format ? { format: rules.format } : {},
		...rules.minLength != null ? { minLength: rules.minLength } : {},
		...rules.maxLength != null ? { maxLength: rules.maxLength } : {},
		...rules.pattern ? { pattern: rules.pattern } : {},
		...rules.validationMessages?.pattern ? { patternMessage: String(rules.validationMessages.pattern) } : {},
		...rules.minimum != null ? { minimum: rules.minimum } : {},
		...rules.maximum != null ? { maximum: rules.maximum } : {},
		...rules.multipleOf != null ? { multipleOf: rules.multipleOf } : {},
		...resolveDate(dateRules.minimum, control) || isBirthdate ? { minDate: resolveDate(dateRules.minimum, control) ?? "1900-01-01" } : {},
		...resolveDate(dateRules.maximum, control) || isBirthdate ? { maxDate: resolveDate(dateRules.maximum, control) ?? resolveDate("$now", "date") } : {},
		...rules.fileLimit != null ? { fileLimit: rules.fileLimit } : {},
		...fileFormats.length ? {
			fileFormats,
			accept: fileFormats.map((f) => FILE_FORMAT_ACCEPT[f]).filter(Boolean).join(",")
		} : control === "file" || control === "signature" ? { accept: "" } : {},
		...rules.minItems != null ? { minItems: rules.minItems } : {},
		...rules.maxItems != null ? { maxItems: rules.maxItems } : {},
		...inputType === "BOOLEAN" && Array.isArray(rules.enum) && rules.enum.length === 1 && rules.enum[0] === true ? { mustBeTrue: true } : {},
		...Array.isArray(rules.phoneOptions?.allowedCountryCodes) && rules.phoneOptions.allowedCountryCodes.length ? { allowedCountryCodes: [...rules.phoneOptions.allowedCountryCodes] } : {}
	};
	const options = Array.isArray(component.options) ? component.options : [];
	const choices = options.map((o) => ({
		value: String(o.value),
		label: String(o.label ?? o.value),
		...o.media ? { imageUrl: imgSrc(o.media, 400, 400) } : {}
	}));
	const target = input.target ?? "";
	const label = plainText(component.label) || target;
	const defaultValue = control === "address" ? {} : inputType === "ARRAY" ? options.filter((o) => o.default).map((o) => String(o.value)) : inputType === "WIX_FILE" ? [] : inputType === "BOOLEAN" ? component.checked === true : control === "select" || control === "radio" ? String(options.find((o) => o.default)?.value ?? "") : control === "rating" ? component.defaultValue ?? "" : control === "date" || control === "time" || control === "datetime" ? resolveDate(component.default, control) ?? "" : component.default ?? "";
	return {
		target,
		label,
		showLabel: component.showLabel !== false,
		control,
		required,
		readOnly: input.readOnly === true,
		hidden: raw.hidden === true,
		stepId,
		...component.placeholder ? { placeholder: String(component.placeholder) } : {},
		...component.description ? { description: plainText(component.description) } : {},
		defaultValue,
		choices,
		...component.customOption ? { otherOption: {
			label: String(component.customOption.label ?? "Other"),
			...component.customOption.placeholder ? { placeholder: String(component.customOption.placeholder) } : {}
		} } : {},
		addressParts: control === "address" ? addressParts(rules, component, required) : [],
		...control === "address" ? { addressOverrides: addressOverrides(rules, component) } : {},
		validation,
		...component.defaultCountryCode ? { phoneCountry: String(component.defaultCountryCode) } : {},
		...component.buttonText ? { buttonText: String(component.buttonText) } : {},
		...component.explanationText ? { explanationText: String(component.explanationText) } : {},
		identifier,
		inputType,
		componentType
	};
}
/**
* Display order comes from `steps[].layout`, NOT from `formFields[]` array order. Sort WITHIN
* each step and concatenate in step order: `row` restarts at 0 in every step, so one sort
* across the flattened list interleaves them. Wix reads the `large` layout (`small` only on a
* phone, when present) and does not render a field absent from it; a field the owner never
* placed sorts LAST here, on the last step — it still stores values. The submit button is
* `fieldType: "DISPLAY"`, so filtering to INPUT drops it automatically. A hidden step's fields
* are skipped.
*/
function orderedInputs(raw) {
	const steps = (raw.steps ?? []).filter((s) => !s.hidden);
	const placed = /* @__PURE__ */ new Map();
	let i = 0;
	for (const s of steps) {
		const items = (s.layout?.large?.items ?? s.layout?.small?.items ?? []).slice().sort((a, b) => a.row - b.row || a.column - b.column);
		for (const item of items) placed.set(item.fieldId, {
			order: i++,
			stepId: id(s)
		});
	}
	const lastStep = id(steps[steps.length - 1]);
	return (raw.formFields ?? []).filter((f) => f.fieldType === "INPUT").map((f) => ({
		field: f,
		order: placed.get(id(f))?.order ?? Infinity,
		stepId: placed.get(id(f))?.stepId ?? lastStep
	})).sort((a, b) => a.order - b.order).map(({ field, stepId }) => ({
		field,
		stepId
	}));
}
var LEGACY_OPERATOR = {
	equal: "EQUAL",
	notEqual: "NOT_EQUAL",
	empty: "EMPTY",
	notEmpty: "NOT_EMPTY",
	contains: "CONTAINS",
	notContains: "NOT_CONTAINS",
	greaterThan: "GREATER_THAN",
	greaterThanOrEqual: "GREATER_THAN_OR_EQUALS",
	lessThan: "LESS_THAN",
	lessThanOrEqual: "LESS_THAN_OR_EQUALS",
	after: "AFTER",
	afterOrEqual: "AFTER_OR_EQUAL",
	before: "BEFORE",
	beforeOrEqual: "BEFORE_OR_EQUAL",
	between: "BETWEEN",
	any: "ANY",
	arrayEqual: "ARRAY_EQUAL",
	arrayNotEqual: "ARRAY_NOT_EQUAL",
	checked: "CHECKED",
	notChecked: "NOT_CHECKED",
	in: "IN",
	notIn: "NOT_IN",
	isDateNewerThan: "IS_DATE_NEWER_THAN",
	isDateOlderThan: "IS_DATE_OLDER_THAN",
	isDateNewerThanOrEqual: "IS_DATE_NEWER_THAN_OR_EQUAL",
	isDateOlderThanOrEqual: "IS_DATE_OLDER_THAN_OR_EQUAL"
};
/**
* The owner's rules, normalized from both spellings the schema carries into one serializable
* shape keyed by TARGET (so the store never needs field ids):
*   - `formRules[]` (v4 `Rule`): `expression` is a ConditionNode tree (and / or / condition
*     {target, operator, value}); overrides are FIELD entries with fieldId + propertyType
*     REQUIRED / HIDDEN / ALLOWED_VALUES.
*   - `rules[]` (deprecated `FormRule`, still what the runtime evaluates): `condition` is a
*     json-rules-engine tree ({and|or: [{fact: <field id>, operator, value}]}); overrides are
*     `valueChanges` keyed by path (`hidden`, `validation.required`, `validation.string.enum`,
*     `view.options`; transform-path-to-v2.ts).
* A rule referencing a field that no longer exists is dropped, as Wix does (isFormRuleValid).
*/
function toRules(raw) {
	const targetOf = new Map((raw.formFields ?? []).filter((f) => f.inputOptions?.target).map((f) => [id(f), f.inputOptions.target]));
	const targets = new Set(targetOf.values());
	const out = [];
	const v4Node = (n) => {
		if (!n) return null;
		if (n.and?.conditions) {
			const list = n.and.conditions.map(v4Node);
			return list.every(Boolean) && list.length ? { and: list } : null;
		}
		if (n.or?.conditions) {
			const list = n.or.conditions.map(v4Node);
			return list.every(Boolean) && list.length ? { or: list } : null;
		}
		const c = n.condition;
		if (!c?.target || !c.operator || !targets.has(String(c.target).split(".")[0])) return null;
		return {
			target: String(c.target),
			operator: String(c.operator),
			value: c.value
		};
	};
	for (const rule of raw.formRules ?? []) {
		const when = v4Node(rule.expression);
		const then = (rule.overrides ?? []).flatMap((o) => {
			const f = o.fieldOptions;
			const target = f?.fieldId ? targetOf.get(f.fieldId) : void 0;
			if (!target) return [];
			if (f.propertyType === "HIDDEN") return [{
				target,
				hidden: f.hiddenOptions?.hidden === true
			}];
			if (f.propertyType === "REQUIRED") return [{
				target,
				required: f.requiredOptions?.required === true
			}];
			if (f.propertyType === "ALLOWED_VALUES") return [{
				target,
				allowedValues: (f.allowedValuesOptions?.allowedValues ?? []).map(String)
			}];
			return [];
		});
		if (when && then.length) out.push({
			id: id(rule),
			when,
			then
		});
	}
	const legacyNode = (n) => {
		if (!n) return null;
		if (Array.isArray(n.and)) {
			const list = n.and.map(legacyNode);
			return list.every(Boolean) && list.length ? { and: list } : null;
		}
		if (Array.isArray(n.or)) {
			const list = n.or.map(legacyNode);
			return list.every(Boolean) && list.length ? { or: list } : null;
		}
		const target = n.fact ? targetOf.get(String(n.fact)) : void 0;
		if (!target || !n.operator) return null;
		return {
			target,
			operator: LEGACY_OPERATOR[String(n.operator)] ?? String(n.operator),
			value: n.value
		};
	};
	for (const rule of raw.rules ?? []) {
		const when = legacyNode(rule.condition);
		const then = (rule.overrides ?? []).flatMap((o) => {
			if (o.entityType !== "FIELD" || !o.entityId) return [];
			const target = targetOf.get(String(o.entityId));
			if (!target) return [];
			const ch = o.valueChanges ?? {};
			const effect = { target };
			if (typeof ch.hidden === "boolean") effect.hidden = ch.hidden;
			if (typeof ch["validation.required"] === "boolean") effect.required = ch["validation.required"];
			if (Array.isArray(ch["validation.string.enum"])) effect.allowedValues = ch["validation.string.enum"].map(String);
			else if (Array.isArray(ch["view.options"])) effect.allowedValues = ch["view.options"].map((opt) => String(opt?.value ?? opt?.label ?? opt));
			return Object.keys(effect).length > 1 ? [effect] : [];
		});
		if (when && then.length) out.push({
			id: id(rule),
			when,
			then
		});
	}
	return out;
}
var missing = (v) => v === void 0 || v === null || v === "" || Array.isArray(v) && v.length === 0;
var isObj = (v) => typeof v === "object" && v !== null && !Array.isArray(v);
/** A value as a number for ordering: numbers as they are, strings as timestamps (time-only gets a fixed day). */
function ordinal(v) {
	if (typeof v === "number") return v;
	if (typeof v !== "string" || !v) return null;
	const t = new Date(/^\d{2}:\d{2}(:\d{2})?$/.test(v) ? `2000-01-01 ${v}` : v).getTime();
	return Number.isNaN(t) ? null : t;
}
function dayDiff(given, spec, now) {
	if (!Array.isArray(spec) || spec.length !== 2 || typeof given !== "string") return null;
	const units = Number(spec[0]);
	const unit = spec[1];
	const date = new Date(given);
	if (Number.isNaN(date.getTime()) || Number.isNaN(units) || unit !== "day" && unit !== "month") return null;
	const pivot = new Date(now.getTime());
	if (unit === "day") pivot.setDate(pivot.getDate() + units);
	else pivot.setMonth(pivot.getMonth() + units);
	const day = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
	return {
		date: day(date),
		pivot: day(pivot)
	};
}
/** Evaluate one comparison exactly as Wix's operators do (form-conditions/src/lib/operators). */
function holds(operator, given, expected, now = /* @__PURE__ */ new Date()) {
	const g = given, e = expected;
	const contains = () => {
		if (missing(g)) return false;
		if (isObj(g)) return Object.values(g).includes(e);
		if (Array.isArray(g) || typeof g === "string") return g.indexOf(e) > -1;
		return false;
	};
	const within = () => {
		if (isObj(e)) return Object.values(e).includes(g);
		if (Array.isArray(e) || typeof e === "string") return e.indexOf(g) > -1;
		return false;
	};
	const cmp = (op) => {
		if (missing(g)) return false;
		const a = ordinal(g), b = ordinal(e);
		return a !== null && b !== null && op(a, b);
	};
	const arrayEq = () => {
		if (missing(g) || !Array.isArray(g) || !Array.isArray(e) || g.length !== e.length) return false;
		return e.every((v) => g.includes(v));
	};
	switch (operator) {
		case "EQUAL": return g === e;
		case "NOT_EQUAL": return g !== e;
		case "EMPTY": return missing(g);
		case "NOT_EMPTY": return !missing(g);
		case "CONTAINS": return contains();
		case "NOT_CONTAINS": return !contains();
		case "GREATER_THAN":
		case "AFTER": return cmp((a, b) => a > b);
		case "GREATER_THAN_OR_EQUALS":
		case "AFTER_OR_EQUAL": return cmp((a, b) => a >= b);
		case "LESS_THAN":
		case "BEFORE": return cmp((a, b) => a < b);
		case "LESS_THAN_OR_EQUALS":
		case "BEFORE_OR_EQUAL": return cmp((a, b) => a <= b);
		case "BETWEEN": {
			if (missing(g) || !Array.isArray(e) || e.length !== 2) return false;
			const a = ordinal(g), lo = ordinal(e[0]), hi = ordinal(e[1]);
			return a !== null && lo !== null && hi !== null && a > Math.min(lo, hi) && a < Math.max(lo, hi);
		}
		case "ANY":
			if (missing(g) || !Array.isArray(e)) return false;
			return (Array.isArray(g) ? g : [g]).some((v) => e.includes(v));
		case "ARRAY_EQUAL": return arrayEq();
		case "ARRAY_NOT_EQUAL": return !arrayEq();
		case "CHECKED": return Boolean(g);
		case "NOT_CHECKED": return !g;
		case "IN": return within();
		case "NOT_IN": return !within();
		case "IS_DATE_NEWER_THAN":
		case "IS_DATE_NEWER_THAN_OR_EQUAL": {
			const d = dayDiff(g, e, now);
			return !!d && (operator.endsWith("OR_EQUAL") ? d.date >= d.pivot : d.date > d.pivot);
		}
		case "IS_DATE_OLDER_THAN":
		case "IS_DATE_OLDER_THAN_OR_EQUAL": {
			const d = dayDiff(g, Array.isArray(e) ? [-Number(e[0]), e[1]] : e, now);
			return !!d && (operator.endsWith("OR_EQUAL") ? d.date <= d.pivot : d.date < d.pivot);
		}
		default: return false;
	}
}
/** A dotted condition target (`address.city`) read out of the values. */
function valueAt(values, target) {
	return target.split(".").reduce((v, k) => isObj(v) ? v[k] : void 0, values);
}
function conditionHolds(when, values, now = /* @__PURE__ */ new Date()) {
	if ("and" in when) return when.and.every((c) => conditionHolds(c, values, now));
	if ("or" in when) return when.or.some((c) => conditionHolds(c, values, now));
	return holds(when.operator, valueAt(values, when.target), when.value, now);
}
/**
* The form's fields with every rule whose condition holds applied, in rule order (a later rule
* wins on the same property — apply-overrides.ts reduces the same way). Hidden / required flip;
* ALLOWED_VALUES narrows `choices` to the listed values. Pure: call it on every value change and
* render the result.
*/
function applyRules(form, values, now = /* @__PURE__ */ new Date()) {
	if (!form.rules.length) return form.fields;
	const byTarget = new Map(form.fields.map((f) => [f.target, { ...f }]));
	for (const rule of form.rules) {
		if (!conditionHolds(rule.when, values, now)) continue;
		for (const effect of rule.then) {
			const f = byTarget.get(effect.target);
			if (!f) continue;
			if (effect.hidden !== void 0) f.hidden = effect.hidden;
			if (effect.required !== void 0) f.required = effect.required;
			if (effect.allowedValues) {
				const allowed = new Set(effect.allowedValues);
				f.choices = f.choices.filter((c) => allowed.has(c.value));
			}
		}
	}
	return form.fields.map((f) => byTarget.get(f.target));
}
function toSuccess(settings) {
	const action = settings?.submitSuccessAction ?? "NO_ACTION";
	const out = { action };
	if (action === "THANK_YOU_MESSAGE") {
		const message = plainText(settings?.thankYouMessageOptions?.richContent);
		if (message) out.message = message;
		const seconds = Number(settings?.thankYouMessageOptions?.durationInSeconds ?? 0);
		if (seconds > 0) out.durationSeconds = seconds;
	}
	if (action === "REDIRECT" && settings?.redirectOptions?.redirectUrl) {
		out.redirectUrl = `https://${String(settings.redirectOptions.redirectUrl).replace(/^https?:\/\//, "")}`;
		out.newTab = settings.redirectOptions.target !== "SELF";
	}
	return out;
}
function toForm(raw, imgSrc) {
	const nav = (raw.formFields ?? []).find((f) => f.identifier === "SUBMIT_BUTTON")?.displayOptions?.pageNavigationOptions ?? {};
	const fields = orderedInputs(raw).map(({ field, stepId }) => toField(field, imgSrc, stepId));
	const steps = (raw.steps ?? []).filter((s) => !s.hidden).map((s) => ({
		id: id(s),
		name: s.name ?? "",
		targets: fields.filter((f) => f.stepId === id(s)).map((f) => f.target)
	}));
	const limitation = raw.limitationRule ?? {};
	const deadline = limitation.dateTimeDeadline ? new Date(limitation.dateTimeDeadline).toISOString() : void 0;
	const indicator = raw.requiredIndicatorProperties ?? {};
	return {
		id: id(raw),
		name: raw.name ?? "",
		fields,
		steps: steps.length ? steps : [{
			id: "",
			name: "",
			targets: fields.map((f) => f.target)
		}],
		rules: toRules(raw),
		submitText: nav.submitText ?? "",
		nextText: nav.nextPageText ?? "",
		previousText: nav.previousPageText ?? "",
		enabled: raw.enabled != null ? raw.enabled !== false : raw.properties?.disabled !== true,
		disabledMessage: plainText(raw.disabledFormMessage),
		limits: {
			...deadline ? { deadline } : {},
			...limitation.maxAllowedSubmissions != null ? { maxSubmissions: Number(limitation.maxAllowedSubmissions) } : {},
			...limitation.submissionLimitPerUser != null ? { perVisitor: Number(limitation.submissionLimitPerUser) } : {}
		},
		requiredIndicator: indicator.requiredIndicator ?? "ASTERISK",
		requiredIndicatorBefore: indicator.requiredIndicatorPlacement === "BEFORE_FIELD_TITLE",
		success: toSuccess(raw.submitSettings)
	};
}
/** A form that is not accepting submissions: switched off, or past its deadline (form-validator.ts isFormDisabled). */
function isClosed(form, now = /* @__PURE__ */ new Date()) {
	return !form.enabled || !!form.limits.deadline && new Date(form.limits.deadline).getTime() <= now.getTime();
}
// src/wix/forms/forms.ts
async function getJson(path) {
	const res = await wixFetch(path);
	if (!res.ok) throw new Error(`forms: GET ${path} failed (${res.status}).`);
	return await res.json();
}
/**
* Read one form by id. Throws when the id is wrong or the form was deleted — a form that
* cannot load is a setup problem, so fail loudly rather than rendering a hand-built fallback
* that would drop real enquiries silently. A form the owner switched OFF still loads, with
* `enabled: false` and the owner's `disabledMessage` — show that instead of the fields.
*/
async function getForm(formId) {
	const res = await getJson(`/form-schema-service/v4/forms/${encodeURIComponent(formId)}`);
	if (!res?.form) throw new Error(`forms: form "${formId}" not found.`);
	return toForm(res.form, imgSrc);
}
// src/wix/forms/submissions-core.ts
/**
* Statuses that mean the submission EXISTS — `CONFIRMED` is recorded, `PENDING` is created but
* not recorded yet, `PAYMENT_WAITING` is created on a form that also collects payment and now
* needs the visitor at checkout (`SubmissionDto.checkoutId`). Treating one as a failure invites
* the visitor to submit again, which costs the owner duplicate entries for a submission that
* already exists. `PAYMENT_CANCELED` also exists in the enum but is never what a create returns.
*
* An allowlist rather than a catch-all, so a status added to the enum later cannot silently
* render a thank-you for something that is not a submission.
*/
var SUBMITTED_OK = /* @__PURE__ */ new Set([
	"CONFIRMED",
	"PENDING",
	"PAYMENT_WAITING"
]);
/**
* Strip visitor-added formatting from a phone number — submit this, not the raw control text.
* Wix keeps digits and the leading + only (normalize-values.ts acceptPhoneValue).
*/
var normalizePhone = (v) => {
	const raw = String(v ?? "").trim();
	const digits = raw.replace(/\D/g, "");
	if (!digits) return "";
	if (raw.startsWith("+")) return `+${digits}`;
	if (raw.startsWith("00")) return `+${digits.slice(2)}`;
	if (digits.length === 10) return `+1${digits}`;
	if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
	return `+${digits}`;
};
/**
* "example.com/page" → "https://example.com/page". Wix's own field prefixes a scheme on blur
* when the text looks like a domain; a value that already has one, or does not look like a
* host, is returned as typed.
*/
function normalizeUrl(v) {
	const s = String(v ?? "").trim();
	if (!s || /^[a-z][a-z0-9+.-]*:\/\//i.test(s)) return s;
	return /^[\w-]+(\.[\w-]+)+(\/|$|\?|#)/.test(s) ? `https://${s}` : s;
}
/** Wix's own email pattern (form-validator email-validation.ts): unicode-aware, a letter in the TLD. */
var L = "\\u00A1-\\uD7FF\\uE000-\\uFFFF-a-zA-Z";
var LD = `${L}0-9`;
var SYM = "!#$%&'*+/=?^_`{|}~-";
var EMAIL_PATTERN = new RegExp(`^(?:[${LD}${SYM}]+(?:\\.[${LD}${SYM}]+)*)@(?:[${LD}](?:[${LD}-]*[${LD}])?\\.)+(?:(?:[0-9]+[${L}][${LD}]*)|(?:[${L}][${LD}]{1,}))$`);
/** E.164 as the server checks it (ajv-custom-formats.ts): a leading +, then 2 to 15 digits. */
var PHONE_PATTERN = /^\+[1-9]\d{1,14}$/;
/**
* A browser leaves `type` empty for extensions it does not recognize; the generic type keeps
* the upload-URL call valid (Media Manager rejects a mime type that contradicts the extension).
*/
var uploadMimeType = (file) => file.type || "application/octet-stream";
/** A value already produced by an upload (a retry after the server rejected some OTHER field). */
var isUploaded = (v) => typeof v === "object" && v !== null && typeof v.fileId === "string" && typeof v.displayName === "string";
/**
* PUT the bytes to the generated upload URL and build the value to submit for the field.
*
* A WIX_FILE value is a list of `{ fileId, displayName, fileType, url }` — the three ids are
* required by the server's schema (predefined-schema-property-mapper.ts), `url` is what the
* owner's dashboard links. Wix's own runtime reads the PUT response's `file` (use-upload-file.tsx
* + headless file-upload-utils.ts) rather than submitting a bare URL. The PUT goes to a pre-signed
* host with plain `fetch`, never through the SDK or the REST client: adding the visitor's
* Authorization header to a pre-signed URL turns a working upload into a 400.
*/
async function putUpload(uploadUrl, file, mimeType = uploadMimeType(file)) {
	const put = await fetch(`${uploadUrl}?filename=${encodeURIComponent(file.name)}`, {
		method: "PUT",
		headers: { "Content-Type": mimeType },
		body: file
	});
	if (!put.ok) throw new Error(`forms: could not upload "${file.name}" (${put.status}). Check its size and type.`);
	let uploaded = {};
	try {
		uploaded = (await put.json())?.file ?? {};
	} catch {}
	return {
		fileId: String(uploaded.id ?? uploaded.fileId ?? "uploaded"),
		displayName: String(uploaded.displayName ?? file.name),
		fileType: mimeType,
		...uploaded.url ? { url: String(uploaded.url) } : {}
	};
}
/**
* Upload every File sitting in the form's values and return a copy with each file field
* replaced by its uploaded value(s). Values already holding uploaded entries (a retry after the
* server rejected some OTHER field) are kept as they are, so a retry never re-uploads. `uploadOne`
* is the transport's getMediaUploadUrl + putUpload.
*/
async function uploadFilesWith(uploadOne, formId, fields, values) {
	const next = { ...values };
	for (const field of fields) {
		if (field.hidden || field.control !== "file" && field.control !== "signature") continue;
		const picked = [].concat(values[field.target] ?? []);
		const done = [];
		for (const item of picked) if (isUploaded(item)) done.push(item);
		else if (typeof File !== "undefined" && item instanceof File) done.push(await uploadOne(formId, item));
		next[field.target] = done;
	}
	return next;
}
/** `HH:mm` → `HH:mm:ss`, `YYYY-MM-DDTHH:mm` → `…:ss`: Wix always serializes seconds (time-input-field-headless.tsx, date-time-field-utils.ts). */
function withSeconds(value) {
	return /(^|T)\d{2}:\d{2}$/.test(value) ? `${value}:00` : value;
}
/**
* Turn the visitor's values into the map `createSubmission` expects, keyed by each field's
* `target` — the same key the controls are bound to, so the keys come out right by
* construction with no hand-maintained list to drift.
*
* Walks the FIELDS, not the values object: a stray key can never reach the API, and a field
* the owner just added shows up the moment the schema does. A field hidden right now (by the
* owner or by a rule) is left out, as Wix clears it.
*
* Value shapes: a flat value (text/choice/date), an ARRAY (multi-choice), an OBJECT (an
* address, keyed by subfield — the shape behind `address/city` error paths), a LIST OF FILE
* OBJECTS (attachments). An empty optional field is OMITTED rather than sent as "": the server
* validates what it is given. A required empty address is sent as `{}` so the server reports
* which subfields are missing (multiline-address-toolkit.ts normalizeEmptyValues).
*/
function toSubmissionValues(fields, values) {
	const filled = (v) => v !== void 0 && v !== null && String(v).trim() !== "";
	const out = {};
	for (const field of fields) {
		if (field.hidden) continue;
		const raw = values?.[field.target];
		if (field.control === "address") {
			const parts = {};
			const held = raw ?? {};
			for (const { sub } of field.addressParts) if (filled(held[sub])) parts[sub] = String(held[sub]).trim();
			if (Object.keys(parts).length || field.required) out[field.target] = parts;
			continue;
		}
		if (field.control === "file" || field.control === "signature") {
			const files = [].concat(raw ?? []).filter(isUploaded);
			if (files.length) out[field.target] = files;
			continue;
		}
		if (field.inputType === "ARRAY") {
			const picked = (Array.isArray(raw) ? raw : []).filter(filled);
			if (picked.length) out[field.target] = picked;
			continue;
		}
		if (field.control === "checkbox") {
			if (raw === true) out[field.target] = true;
			continue;
		}
		if (!filled(raw)) continue;
		const value = typeof raw === "string" ? raw.trim() : raw;
		out[field.target] = field.control === "number" || field.control === "rating" ? Number(value) : field.control === "phone" ? normalizePhone(value) : field.control === "url" ? normalizeUrl(value) : field.control === "time" || field.control === "datetime" ? withSeconds(String(value)) : value;
	}
	return out;
}
/**
* The created submission as a DTO. Accepts the REST envelope (`{ submission }`) and the SDK's bare
* entity; throws when nothing came back or the status is not one that means "created", so a
* caller never shows a thank-you for something that is not a submission. A paid form answers
* `PAYMENT_WAITING` with `orderDetails.checkoutId` — carried through for the checkout hand-off.
*/
function toSubmission(created) {
	const submission = created?.submission ?? created;
	const id = submission?._id ?? submission?.id;
	if (!id) throw new Error("forms: submission failed (nothing returned).");
	const status = submission?.status ?? "";
	if (!SUBMITTED_OK.has(status)) throw new Error(`forms: submission status is "${status}" — not one of the statuses that mean the submission was created (${[...SUBMITTED_OK].join(", ")}), so do not show a success state.`);
	const checkoutId = submission?.orderDetails?.checkoutId;
	return {
		id,
		status,
		...checkoutId ? { checkoutId } : {}
	};
}
/**
* The redirect-session request that turns a checkout id into the Wix-hosted checkout URL —
* the same call the storefront's cart uses. `origin` is the site's real https origin
* (window.location.origin) so the checkout can send the visitor back.
* POST /headless/v1/redirect-session  { ecomCheckout: { checkoutId }, callbacks }  → { redirectSession: { fullUrl } }
* docs: https://dev.wix.com/docs/api-reference/business-management/headless/redirects/create-redirect-session.md
*/
function redirectSessionBody(checkoutId, origin) {
	return {
		ecomCheckout: { checkoutId },
		callbacks: origin ? {
			postFlowUrl: `${origin}/`,
			thankYouPageUrl: `${origin}/`
		} : {}
	};
}
function redirectSessionUrl(res) {
	const url = res?.redirectSession?.fullUrl;
	if (!url) throw new Error("forms: checkout could not start (no redirect URL returned).");
	return url;
}
/** The `details` block of a failed call, wherever the transport left it. */
function detailsOf(err) {
	const e = err;
	return e?.details ?? e?.body?.details ?? e?.response?.data?.details ?? {};
}
/** Every validation entry of a failed create, flattened out of `fieldViolations[].data.errors[]`. */
function violationEntries(err) {
	return (detailsOf(err)?.validationError?.fieldViolations ?? []).flatMap((v) => v.data?.errors ?? [v]);
}
/**
* Pull per-field violations out of a failed create, keyed by input NAME so each message lands
* on its own control. `errorPath` is the field's `target`, or a nested path like
* `address/subdivision` — exactly how the controls are named, so it maps straight across.
*
* The documented entries arrive under `details.validationError.fieldViolations[]`, each with
* its own nested `data.errors[]` — two levels deeper than the docs' shape. This flattens that.
* The SDK error and the REST client's WixApiError both carry that block as `details`. An entry
* flagged `useCustomErrorMessage` carries the owner's own wording — shown verbatim, as Wix does
* (use-submit/utils.ts getFieldCustomErrorMessages).
*
* Two rejections here are SEED bugs, not frontend bugs — fix them in `seed/SEED.md`, never
* by mangling the key or the value:
*   - UNKNOWN_VALUE_ERROR on a key that IS in the schema → the field was seeded with no
*     `validation` block, and that block is what registers the target as an accepted value.
*   - NOT_ALLOWED_VALUE_ERROR on a choice field → the seed's `options[].value` and its
*     validation enum disagree; the two declarations must match.
*/
function submissionErrors(err, fields) {
	const byTarget = new Map(fields.map((f) => [f.target, f]));
	const out = {};
	for (const entry of violationEntries(err)) {
		const path = entry?.errorPath;
		if (!path) continue;
		const field = byTarget.get(path.split("/")[0]);
		if (!field) continue;
		console.debug("forms: server violation", path, entry.errorType, entry.errorMessage);
		out[path] = entry.useCustomErrorMessage && entry.errorMessage ? String(entry.errorMessage) : messageFor(entry.errorType, field, path);
	}
	return out;
}
/**
* The FORM-level message for a failed create that no single control owns: the form was
* switched off or hit its limit (DISABLED_FORM_ERROR, errorPath `form.properties.disabled`), an
* application error (`details.applicationError.code`: INVALID_CAPTCHA, FORM_NOT_FOUND,
* SITE_IS_A_TEMPLATE, FORM_RETRIEVAL_ERROR), or an owner-worded violation with no path. Null when
* the failure is something else — the caller shows its generic wording.
*/
function formLevelError(err, form) {
	switch (detailsOf(err)?.applicationError?.code ?? err?.code) {
		case "INVALID_CAPTCHA": return "The spam check did not pass. Please try again.";
		case "FORM_NOT_FOUND": return "This form no longer exists.";
		case "SITE_IS_A_TEMPLATE": return "This site is a template and does not accept submissions.";
		case "FORM_RETRIEVAL_ERROR": return "The form could not be loaded. Please try again.";
	}
	for (const entry of violationEntries(err)) {
		if (entry.errorType === "DISABLED_FORM_ERROR" || entry.errorPath === "form.properties.disabled") return form?.disabledMessage || "This form is no longer accepting submissions.";
		if (entry.useCustomErrorMessage && !entry.errorPath && entry.errorMessage) return String(entry.errorMessage);
	}
	return null;
}
/** Wix's own "this is required" copy per field kind (form-fields messages_en.json). */
function requiredMessage(f) {
	switch (f.identifier) {
		case "CONTACTS_FIRST_NAME":
		case "FULL_NAME_FIRST_NAME": return "Enter a first name.";
		case "CONTACTS_LAST_NAME":
		case "FULL_NAME_LAST_NAME": return "Enter a last name.";
		case "CONTACTS_COMPANY": return "Enter a company name.";
		case "CONTACTS_POSITION": return "Enter a position or job title.";
		case "CONTACTS_ADDRESS": return "Enter an address.";
		case "VAT_ID":
		case "CONTACTS_TAX_ID": return "Enter a VAT ID number.";
	}
	switch (f.control) {
		case "email": return "Enter an email address like example@mysite.com.";
		case "phone": return "Enter a phone number.";
		case "url": return "Enter a web URL like https://www.example.com.";
		case "number": return "Enter a number.";
		case "rating": return "Choose a star rating.";
		case "date":
		case "datetime": return "Choose a date.";
		case "time": return "Enter a time.";
		case "select":
		case "radio":
		case "checkboxGroup":
		case "tags": return "Choose an option.";
		case "checkbox": return "Check the box to continue.";
		case "file": return "Upload a file.";
		case "signature": return "Sign in the box above.";
		case "address": return "Enter an address.";
		default: return "Enter an answer.";
	}
}
/** Wix's copy for an address subfield left empty (mla-* messages). */
function addressPartMessage(sub) {
	switch (sub) {
		case "country": return "Choose a country/region.";
		case "addressLine": return "Enter an address.";
		case "addressLine2": return "Enter a second address line (e.g., apartment, suite, floor).";
		case "city": return "Enter a city.";
		case "postalCode": return "Enter a zip/postal code.";
		case "subdivision": return "Choose an option.";
		case "streetName": return "Enter a street name.";
		case "streetNumber": return "Enter a house number.";
		default: return "This field is required.";
	}
}
var plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
/**
* errorType → visitor-facing copy in Wix's own wording (messages_en.json), written from the
* field's schema. The same table the client check uses, so a server rejection reads like the
* inline one.
*/
function messageFor(errorType, f, path = f.target) {
	const v = f.validation;
	const sub = path.includes("/") ? path.split("/")[1] : void 0;
	switch (errorType) {
		case "REQUIRED_VALUE_ERROR": return sub ? addressPartMessage(sub) : requiredMessage(f);
		case "MIN_LENGTH_ERROR":
		case "MAX_LENGTH_ERROR":
		case "CHARACTER_LENGTH_RANGE_ERROR":
		case "EXACT_CHARACTER_LENGTH_ERROR": return lengthMessage(v.minLength, v.maxLength);
		case "MIN_VALUE_ERROR":
		case "MAX_VALUE_ERROR":
		case "VALUE_RANGE_ERROR":
			if (f.identifier === "CONTACTS_BIRTHDATE") return "Enter a date from January 1, 1900 to today.";
			if (f.control === "date" || f.control === "datetime" || f.control === "time") return dateRangeMessage(v.minDate, v.maxDate);
			return rangeMessage(v.minimum, v.maximum);
		case "MULTIPLE_OF_VALUE_ERROR":
		case "DECIMAL_POINT_ERROR": return multipleOfMessage(v.multipleOf);
		case "MIN_ITEMS_ERROR":
		case "MAX_ITEMS_ERROR":
		case "EXACT_ITEMS_NUMBER_ERROR": return itemsMessage(v.minItems, v.maxItems);
		case "PATTERN_ERROR":
		case "INVALID_VALUE_FOR_PATTERN_ERROR": return v.patternMessage ?? (sub === "postalCode" ? "Enter a valid zip/postal code." : "Enter a valid answer.");
		case "NOT_ALLOWED_VALUE_ERROR":
			if (f.control === "checkbox") return "Check the box to continue.";
			if (f.control === "phone") return "Phone numbers with this country code aren’t accepted.";
			return "The chosen value is not allowed.";
		case "INVALID_PHONE_COUNTRY_CODE_ERROR": return "Enter a valid country code.";
		case "INCOMPLETE_DATE_ERROR": return "Enter a month, day and year.";
		case "FORMAT_ERROR": return f.control === "email" || v.format === "EMAIL" ? "Enter an email address like example@mysite.com." : f.control === "phone" || v.format === "PHONE" ? "Enter a valid phone number." : f.control === "url" || v.format === "URL" ? "Enter a web URL like https://www.example.com." : f.control === "time" ? "Enter hours and minutes." : f.control === "date" || f.control === "datetime" ? "Enter a month, day and year." : "Enter a valid answer.";
		case "TYPE_ERROR": return "Enter a valid answer.";
		case "UNKNOWN_VALUE_ERROR": return sub ? `${humanizeSub(sub)} isn't part of an address in this country.` : "This answer isn't accepted here.";
		default: return `Please check ${f.label}.`;
	}
}
function lengthMessage(min, max) {
	if (min && max) return min === max ? `Enter exactly ${plural(min, "character", "characters")}.` : `Enter between ${min} and ${max} characters.`;
	if (min) return `Enter at least ${plural(min, "character", "characters")}.`;
	return `Enter less than ${plural(max ?? 0, "character", "characters")}.`;
}
function rangeMessage(min, max) {
	if (min != null && max != null) return `Enter a number from ${min} to ${max}.`;
	if (min != null) return `Enter a number that is ${min} or more.`;
	return `Enter a number that is ${max} or less.`;
}
function dateRangeMessage(min, max) {
	const show = (s) => s.replace("T", " ");
	if (min && max) return `Choose a date from ${show(min)} to ${show(max)}.`;
	if (min) return `Choose a date from ${show(min)} on.`;
	return `Choose a date up to ${show(max ?? "")}.`;
}
function multipleOfMessage(step) {
	const decimals = String(step ?? 1).split(".")[1]?.length ?? 0;
	return decimals ? `Add ${decimals} number(s) after the decimal point.` : step && step !== 1 ? `Choose a multiple of ${step}.` : "Enter a whole number.";
}
function itemsMessage(min, max) {
	if (min && max && min === max) return `Choose ${plural(min, "option", "options")}.`;
	if (min && max) return `Choose between ${min} and ${max} options.`;
	if (min) return `Choose at least ${plural(min, "option", "options")}.`;
	return `Choose up to ${plural(max ?? 0, "option", "options")}.`;
}
// src/wix/forms/submissions.ts
var submissions$1 = wixModule(submissions);
/** Upload one File and return the value to submit for its field ({ fileId, displayName, fileType, url }). */
async function uploadFile(formId, file) {
	const mimeType = uploadMimeType(file);
	const res = await submissions$1.getMediaUploadUrl(formId, file.name, mimeType);
	const uploadUrl = res?.uploadUrl ?? res?.url;
	if (!uploadUrl) throw new Error(`forms: no upload URL for "${file.name}".`);
	return putUpload(uploadUrl, file, mimeType);
}
/** Upload every File in the form's values; returns a copy with each file field holding its uploaded entries. */
async function uploadFiles(formId, fields, values) {
	return uploadFilesWith(uploadFile, formId, fields, values);
}
/**
* Create the submission. This is the write — and the only confirmation there is.
*
* Let a rejection throw. `submissionErrors` turns it into per-control messages and
* `formLevelError` into the form-level one; a `.catch` that swallows it costs the visitor the
* reason their form would not send.
*/
async function createSubmission(formId, values, { captchaToken } = {}) {
	return toSubmission(await submissions$1.createSubmission({
		formId,
		submissions: values
	}, captchaToken ? { captchaToken } : {}));
}
/**
* The Wix-hosted checkout for a `PAYMENT_WAITING` submission — navigate the FULL document to the
* URL. Call from the browser: the return origin must be the site's real https origin
* (window.location.origin), never a server-derived request origin. Over wixFetch rather than the
* @wix/redirects module so this vertical adds no dependency.
*/
async function checkoutUrl(checkoutId, origin = typeof window !== "undefined" ? window.location.origin : "") {
	const res = await wixFetch("/headless/v1/redirect-session", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(redirectSessionBody(checkoutId, origin))
	});
	if (!res.ok) throw new Error(`forms: checkout could not start (${res.status}).`);
	return redirectSessionUrl(await res.json());
}
// src/wix/forms/form-store.ts
/**
* The key in `errors` for a message that belongs to the FORM rather than one field — a schema
* that failed to load, a closed form, or a rejection with no per-field violations. `@` cannot
* appear in a form `target`, so this never collides with a field's own error.
*/
var FORM_ERROR = "@form";
/** The empty value of a field's SHAPE — what a control binds to before anyone typed. */
function emptyValue(field) {
	return field.control === "address" ? {} : field.inputType === "ARRAY" || field.inputType === "WIX_FILE" ? [] : field.inputType === "BOOLEAN" ? false : "";
}
/** The empty form: every field at its prefill, or the empty value of its shape. */
function defaultValues(fields) {
	const values = {};
	for (const f of fields) values[f.target] = Array.isArray(f.defaultValue) ? [...f.defaultValue] : f.defaultValue;
	return values;
}
var isBlank = (v) => v === void 0 || v === null || String(v).trim() === "";
/**
* Check one field's value against its own schema. A plain function — usable outside the store,
* and the place to look when a message needs rewording. Messages are Wix's own copy for the
* common cases, so the inline check and a server rejection read alike.
*
* Every rule comes from the schema, never from a field's NAME. (The classic mistake is keying
* the email check on `target === "email"`; deriving it from `format` means an owner-added
* PHONE/URL/length rule is honored with no code change.)
*
* A client check LAXER than the server's is worse than none — the visitor then learns about
* the problem only after a round trip, in the server's wording rather than yours.
*/
function validateValue(field, value) {
	const v = String(value ?? "").trim();
	const rules = field.validation;
	if (field.required && !field.readOnly && !v) return requiredMessage(field);
	if (!v) return "";
	if (field.control === "number" || field.control === "rating") {
		const n = Number(v);
		if (!Number.isFinite(n)) return "Enter a number.";
		if (field.control === "rating" && !(Number.isInteger(n) && n >= 1 && n <= 5)) return "Choose a star rating.";
		if (rules.minimum != null && n < rules.minimum || rules.maximum != null && n > rules.maximum) return rangeMessage(rules.minimum, rules.maximum);
		if (rules.multipleOf && Math.abs(n / rules.multipleOf - Math.round(n / rules.multipleOf)) > 1e-9) return multipleOfMessage(rules.multipleOf);
		return "";
	}
	if (field.control === "date" || field.control === "time" || field.control === "datetime") {
		const x = withSeconds(v);
		if (rules.minDate && x < withSeconds(rules.minDate) || rules.maxDate && x > withSeconds(rules.maxDate)) return field.identifier === "CONTACTS_BIRTHDATE" ? "Enter a date from January 1, 1900 to today." : dateRangeMessage(rules.minDate, rules.maxDate);
		return "";
	}
	if (field.control === "select" || field.control === "radio") {
		if (field.choices.length && !field.otherOption && !field.choices.some((c) => c.value === v)) return "The chosen value is not allowed.";
		return "";
	}
	if (rules.minLength && v.length < rules.minLength || rules.maxLength && v.length > rules.maxLength) return lengthMessage(rules.minLength, rules.maxLength);
	if (rules.format === "EMAIL" && !EMAIL_PATTERN.test(v)) return "Enter an email address like example@mysite.com.";
	if (rules.format === "URL" && !/^https?:\/\/[^\s/?#]+[^\s]*$/i.test(normalizeUrl(v))) return "Enter a web URL like https://www.example.com.";
	if (rules.format === "PHONE" && !PHONE_PATTERN.test(normalizePhone(v))) return "Enter a valid phone number.";
	if (rules.pattern) try {
		if (!new RegExp(rules.pattern).test(v)) return rules.patternMessage ?? "Enter a valid answer.";
	} catch {}
	return "";
}
/**
* One field's error entries, keyed the way the controls are named. A plain field yields at most
* one (`target`); an ADDRESS yields one per failing subfield (`target/sub`). A hidden field
* yields none — Wix drops hidden fields from the required set and clears their values.
*
* An address subfield gets the `required` check only — `subdivision` is a country-dependent
* enum the schema does not enumerate, so its content is the server's call.
*/
function errorsForField(field, values) {
	const errors = {};
	if (field.hidden) return errors;
	const required = field.required && !field.readOnly;
	if (field.control === "address") {
		const parts = values[field.target] ?? {};
		for (const { sub, required: subRequired } of field.addressParts) if (subRequired && isBlank(parts[sub])) errors[`${field.target}/${sub}`] = addressPartMessage(sub);
		return errors;
	}
	if (field.control === "file" || field.control === "signature") {
		const picked = [].concat(values[field.target] ?? []).filter(Boolean);
		const limit = Math.min(field.validation.fileLimit ?? 30, 30);
		if (required && !picked.length) errors[field.target] = requiredMessage(field);
		else if (picked.length > limit) errors[field.target] = `There is an upload limit of ${limit} file${limit === 1 ? "" : "s"}.`;
		return errors;
	}
	if (field.inputType === "ARRAY") {
		const picked = (Array.isArray(values[field.target]) ? values[field.target] : []).filter((x) => !isBlank(x));
		const { minItems, maxItems } = field.validation;
		if (required && !picked.length) errors[field.target] = requiredMessage(field);
		else if (minItems && picked.length < minItems || maxItems && picked.length > maxItems) errors[field.target] = itemsMessage(minItems, maxItems);
		else if (field.choices.length && !field.otherOption && picked.some((x) => !field.choices.some((c) => c.value === x))) errors[field.target] = "The chosen value is not allowed.";
		return errors;
	}
	if (field.control === "checkbox") {
		if ((required || field.validation.mustBeTrue) && values[field.target] !== true) errors[field.target] = "Check the box to continue.";
		return errors;
	}
	const message = validateValue(field, values[field.target]);
	if (message) errors[field.target] = message;
	return errors;
}
function errorsForForm(fields, values) {
	const errors = {};
	for (const field of fields) Object.assign(errors, errorsForField(field, values));
	return errors;
}
/**
* Move focus to a control by input name. `namedItem` returns a RadioNodeList for a radio or
* checkbox group and an element for everything else — a guard checking only for an element
* silently skips every choice group. FOCUS, not scrollIntoView: scrolling moves the viewport and
* nothing else, leaving a keyboard or screen-reader user where they were.
*/
function focusControl(formEl, name) {
	const control = formEl?.elements?.namedItem?.(name);
	(typeof RadioNodeList !== "undefined" && control instanceof RadioNodeList ? control[0] : control)?.focus?.();
}
function createFormStore({ formId, initialForm }) {
	let base = initialForm ?? null;
	let applied = base ? applyRules(base, defaultValues(base.fields)) : [];
	let empty = defaultValues(base?.fields ?? []);
	let values = empty;
	let errors = {};
	let loading = !initialForm;
	let step = 0;
	let outcome = null;
	let captchaToken = null;
	let started = false;
	let generation = 0;
	let hideTimer = null;
	const listeners = /* @__PURE__ */ new Set();
	let snapshot = null;
	const emit = () => {
		snapshot = null;
		for (const fn of listeners) fn();
	};
	/**
	* An address field with its parts for the country the visitor picked: Israel shows a street
	* name and number and no subdivision, the United States one address line and a state. Values
	* typed under a subfield the new country lacks stay in `values` but are neither validated nor
	* submitted (both read `addressParts`), so switching countries never sends an unknown key.
	*/
	const withCountryParts = (f) => {
		if (f.control !== "address" || !f.addressOverrides) return f;
		const country = values[f.target]?.country;
		return {
			...f,
			addressParts: addressPartsForCountry(typeof country === "string" && country ? country : void 0, f.addressOverrides, f.required)
		};
	};
	/** `base` narrowed to what is visible right now. */
	function visibleForm() {
		if (!base) return null;
		const fields = applied.filter((f) => !f.hidden).map(withCountryParts);
		const shown = new Set(fields.map((f) => f.target));
		const steps = base.steps.map((s) => ({
			...s,
			targets: s.targets.filter((t) => shown.has(t))
		}));
		return {
			...base,
			fields,
			steps
		};
	}
	function getState() {
		if (snapshot) return snapshot;
		snapshot = {
			form: visibleForm(),
			values,
			errors,
			loading,
			step,
			closed: base ? isClosed(base) : false,
			outcome
		};
		return snapshot;
	}
	const visibleFields = () => applied.filter((f) => !f.hidden).map(withCountryParts);
	const stepFields = (i) => {
		const s = base?.steps[i];
		return s ? visibleFields().filter((f) => f.stepId === s.id) : visibleFields();
	};
	/**
	* Adopt new values: re-run the rules, and clear the value and errors of every field a rule
	* just hid, repeating until nothing else hides (clear-fields.ts does the same fixed point —
	* clearing one field can satisfy another rule's condition).
	*/
	function adoptValues(next) {
		if (!base) {
			values = next;
			return;
		}
		let hiddenBefore = new Set(applied.filter((f) => f.hidden).map((f) => f.target));
		const cleared = [];
		for (let i = 0; i <= base.fields.length; i++) {
			applied = applyRules(base, next);
			const toClear = applied.filter((f) => f.hidden && !hiddenBefore.has(f.target));
			if (!toClear.length) break;
			next = { ...next };
			for (const f of toClear) {
				next[f.target] = emptyValue(f);
				cleared.push(f.target);
			}
			hiddenBefore = new Set(applied.filter((f) => f.hidden).map((f) => f.target));
		}
		values = next;
		if (cleared.length) {
			const kept = {};
			for (const [k, msg] of Object.entries(errors)) if (!cleared.includes(k.split("/")[0])) kept[k] = msg;
			errors = kept;
		}
	}
	function adopt(loaded) {
		base = loaded;
		empty = defaultValues(loaded.fields);
		applied = applyRules(loaded, empty);
		values = empty;
		errors = {};
		step = 0;
		loading = false;
		emit();
	}
	function setErrors(next) {
		errors = next;
		emit();
	}
	/** Show the step that holds a control, then focus it. */
	function focusError(formEl, key) {
		const target = key.split("/")[0];
		const field = applied.find((f) => f.target === target);
		const at = base?.steps.findIndex((s) => s.id === field?.stepId) ?? -1;
		if (at >= 0 && at !== step) {
			step = at;
			emit();
		}
		focusControl(formEl, key);
	}
	/** The keys a `validate(target)` call owns, so a re-check CLEARS what it fixed as well as flagging what it did not. */
	function ownedKeys(key, field) {
		return key.includes("/") ? [key] : field.control === "address" ? field.addressParts.map(({ sub }) => `${field.target}/${sub}`) : [field.target];
	}
	function validateFields(fields, formEl) {
		const found = errorsForForm(fields, values);
		const owned = new Set(fields.flatMap((f) => ownedKeys(f.target, f)));
		const next = {};
		for (const [k, msg] of Object.entries(errors)) if (!owned.has(k) && k !== "@form") next[k] = msg;
		Object.assign(next, found);
		setErrors(next);
		const first = fields.flatMap((f) => ownedKeys(f.target, f)).find((k) => found[k]);
		if (first) focusError(formEl, first);
		return !first;
	}
	return {
		getState,
		subscribe(fn) {
			listeners.add(fn);
			return () => listeners.delete(fn);
		},
		start() {
			if (started) return;
			started = true;
			if (base) return;
			if (!formId) {
				loading = false;
				errors = { [FORM_ERROR]: "No formId — pass one from the seed's forms map." };
				emit();
				return;
			}
			const id = ++generation;
			loading = true;
			emit();
			getForm(formId).then((loaded) => {
				if (started && generation === id) adopt(loaded);
			}).catch((e) => {
				if (!started || generation !== id) return;
				loading = false;
				errors = { [FORM_ERROR]: e instanceof Error ? e.message : "Could not load the form." };
				emit();
			});
		},
		stop() {
			started = false;
			generation++;
			if (hideTimer) {
				clearTimeout(hideTimer);
				hideTimer = null;
			}
		},
		setValues(next) {
			adoptValues(typeof next === "function" ? next(values) : next);
			emit();
		},
		setValue(target, value) {
			adoptValues({
				...values,
				[target]: value
			});
			emit();
		},
		validate(target) {
			if (!target) return validateFields(visibleFields(), null);
			const key = String(target);
			const field = visibleFields().find((f) => f.target === key.split("/")[0]);
			if (!field) return true;
			if (field.control === "url" && typeof values[field.target] === "string") {
				const fixed = normalizeUrl(values[field.target]);
				if (fixed !== values[field.target]) values = {
					...values,
					[field.target]: fixed
				};
			}
			const owned = ownedKeys(key, field);
			const found = errorsForField(field, values);
			const next = { ...errors };
			for (const k of owned) {
				delete next[k];
				if (found[k]) next[k] = found[k];
			}
			setErrors(next);
			return owned.every((k) => !found[k]);
		},
		next(event) {
			event?.preventDefault?.();
			const formEl = event?.currentTarget ?? null;
			if (!base || step >= base.steps.length - 1) return false;
			if (!validateFields(stepFields(step), formEl)) return false;
			step += 1;
			emit();
			return true;
		},
		previous() {
			if (step > 0) {
				step -= 1;
				emit();
			}
		},
		goToStep(index) {
			if (base && index >= 0 && index < base.steps.length && index !== step) {
				step = index;
				emit();
			}
		},
		setCaptchaToken(token) {
			captchaToken = token;
		},
		reset() {
			if (hideTimer) {
				clearTimeout(hideTimer);
				hideTimer = null;
			}
			outcome = null;
			step = 0;
			emit();
		},
		async submit(event) {
			event?.preventDefault?.();
			const formEl = event?.currentTarget ?? null;
			if (!base) return false;
			const current = base;
			if (isClosed(current)) {
				setErrors({ [FORM_ERROR]: current.disabledMessage || "This form is no longer accepting submissions." });
				return false;
			}
			const currentFields = visibleFields();
			if (!validateFields(currentFields, formEl)) return false;
			loading = true;
			emit();
			try {
				const uploaded = await uploadFiles(current.id, currentFields, values);
				values = uploaded;
				emit();
				const submission = await createSubmission(current.id, toSubmissionValues(currentFields, uploaded), captchaToken ? { captchaToken } : {});
				errors = {};
				captchaToken = null;
				if (submission.checkoutId) {
					outcome = {
						submission,
						action: "CHECKOUT"
					};
					try {
						outcome.url = await checkoutUrl(submission.checkoutId);
					} catch (e) {
						errors = { [FORM_ERROR]: e instanceof Error ? e.message : "Checkout could not start." };
					}
				} else {
					const s = current.success;
					outcome = {
						submission,
						action: s.action,
						...s.message ? { message: s.message } : {},
						...s.durationSeconds ? { durationSeconds: s.durationSeconds } : {},
						...s.redirectUrl ? {
							url: s.redirectUrl,
							newTab: s.newTab === true
						} : {}
					};
					if (s.durationSeconds && typeof setTimeout !== "undefined") {
						if (hideTimer) clearTimeout(hideTimer);
						hideTimer = setTimeout(() => {
							hideTimer = null;
							outcome = null;
							emit();
						}, s.durationSeconds * 1e3);
					}
				}
				adoptValues(empty);
				step = 0;
				return outcome;
			} catch (e) {
				const mapped = submissionErrors(e, currentFields);
				if (Object.keys(mapped).length) {
					errors = mapped;
					focusError(formEl, Object.keys(mapped)[0]);
				} else errors = { [FORM_ERROR]: formLevelError(e, current) ?? (e instanceof Error ? e.message : "Could not send the form. Please try again.") };
				return false;
			} finally {
				loading = false;
				emit();
			}
		}
	};
}
// src/hooks/forms/useWixForm.ts
function useWixForm(formId, options = {}) {
	const { initialForm } = options;
	const ref = useRef(null);
	if (!ref.current || ref.current.formId !== formId) ref.current = {
		formId,
		store: createFormStore({
			formId,
			initialForm
		})
	};
	const store = ref.current.store;
	useEffect(() => {
		store.start();
		return () => store.stop();
	}, [store]);
	const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);
	const { values, errors } = state;
	const bind = useCallback((target) => ({
		name: target,
		value: String(values[target] ?? ""),
		onChange: (e) => store.setValue(target, e.target.value),
		onBlur: () => store.validate(target),
		"aria-describedby": `err-${target}`,
		"aria-invalid": errors[target] ? true : void 0
	}), [
		values,
		errors,
		store
	]);
	return {
		form: state.form,
		values,
		setValues: store.setValues,
		bind,
		submit: store.submit,
		validate: store.validate,
		errors,
		loading: state.loading,
		step: state.step,
		next: store.next,
		previous: store.previous,
		goToStep: store.goToStep,
		closed: state.closed,
		outcome: state.outcome,
		reset: store.reset,
		setCaptchaToken: store.setCaptchaToken
	};
}
export { FORM_ERROR as n, getForm as r, useWixForm as t };
