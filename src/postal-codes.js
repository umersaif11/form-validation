const constraints = {
    "Afghanistan": [
        "^\\d{4}$",
        "Afghanistan postal codes must have exactly 4 digits."
    ],
    "Åland Islands": [
        "^(AX-)?\\d{5}$",
        "Åland Islands postal codes must have exactly 5 digits, and may be prefixed with 'AX-'."
    ],
    "Albania": [
        "^\\d{4}$",
        "Albania postal codes must have exactly 4 digits."
    ],
    "Algeria": [
        "^\\d{5}$",
        "Algeria postal codes must have exactly 5 digits."
    ],
    "American Samoa": [
        "^96799$",
        "American Samoa uses the US ZIP code 96799."
    ],
    "Andorra": [
        "^(AD)?\\d{3}$",
        "Andorra postal codes must have exactly 3 digits, and may be prefixed with 'AD'."
    ],
    "Angola": [
        "^$", // No postal codes
        "Angola does not use postal codes."
    ],
    "Anguilla": [
        "^AI-2640$",
        "Anguilla uses the postal code AI-2640."
    ],
    "Antigua and Barbuda": [
        "^$",
        "Antigua and Barbuda does not use postal codes."
    ],
    "Argentina": [
        "^[A-Z]?\\d{4}[A-Z]{0,3}$",
        "Argentina postal codes consist of a letter, 4 digits, and up to 3 letters (e.g., C1000AAA)."
    ],
    "Armenia": [
        "^\\d{4}$",
        "Armenia postal codes must have exactly 4 digits."
    ],
    "Aruba": [
        "^$", // No postal codes
        "Aruba does not use postal codes."
    ],
    "Australia": [
        "^\\d{4}$",
        "Australia postal codes must have exactly 4 digits."
    ],
    "Austria": [
        "^\\d{4}$",
        "Austria postal codes must have exactly 4 digits."
    ],
    "Azerbaijan": [
        "^(AZ)?\\d{4}$",
        "Azerbaijan postal codes must have exactly 4 digits, and may be prefixed with 'AZ'."
    ],
    "Bahamas": [
        "^$",
        "The Bahamas does not use postal codes."
    ],
    "Bahrain": [
        "^\\d{3,4}$",
        "Bahrain postal codes must have 3 or 4 digits."
    ],
    "Bangladesh": [
        "^\\d{4}$",
        "Bangladesh postal codes must have exactly 4 digits."
    ],
    "Barbados": [
        "^(BB)?\\d{5}$",
        "Barbados postal codes must have 5 digits, and may be prefixed with 'BB'."
    ],
    "Belarus": [
        "^\\d{6}$",
        "Belarus postal codes must have exactly 6 digits."
    ],
    "Belgium": [
        "^\\d{4}$",
        "Belgium postal codes must have exactly 4 digits."
    ],
    "Belize": [
        "^$",
        "Belize does not use postal codes."
    ],
    "Benin": [
        "^$",
        "Benin does not use postal codes."
    ],
    "Bermuda": [
        "^[A-Z]{2}\\s*\\d{2}$",
        "Bermuda postal codes must have 2 letters and 2 digits (e.g., GE 01)."
    ],
    "Bhutan": [
        "^\\d{5}$",
        "Bhutan postal codes must have exactly 5 digits."
    ],
    "Bolivia": [
        "^\\d{4}$",
        "Bolivia postal codes must have exactly 4 digits."
    ],
    "Bosnia and Herzegovina": [
        "^\\d{5}$",
        "Bosnia and Herzegovina postal codes must have exactly 5 digits."
    ],
    "Botswana": [
        "^$",
        "Botswana does not use postal codes."
    ],
    "Brazil": [
        "^\\d{5}-?\\d{3}$",
        "Brazil CEP codes must be in the format XXXXX-XXX or XXXXXXXX."
    ],
    "British Indian Ocean Territory": [
        "^BBND 1ZZ$",
        "British Indian Ocean Territory uses the postal code BBND 1ZZ."
    ],
    "Brunei Darussalam": [
        "^[A-Z]{2}\\d{4}$",
        "Brunei postal codes must have 2 letters and 4 digits."
    ],
    "Bulgaria": [
        "^\\d{4}$",
        "Bulgaria postal codes must have exactly 4 digits."
    ],
    "Burkina Faso": [
        "^$",
        "Burkina Faso does not use postal codes."
    ],
    "Burundi": [
        "^$",
        "Burundi does not use postal codes."
    ],
    "Cambodia": [
        "^\\d{5}$",
        "Cambodia postal codes must have exactly 5 digits."
    ],
    "Cameroon": [
        "^$",
        "Cameroon does not use postal codes."
    ],
    "Canada": [
        "^[A-Z]\\d[A-Z]\\s*\\d[A-Z]\\d$",
        "Canadian postal codes must be in the format A1A 1A1."
    ],
    "Cape Verde": [
        "^\\d{4}$",
        "Cape Verde postal codes must have exactly 4 digits."
    ],
    "Cayman Islands": [
        "^KY\\d-\\d{4}$",
        "Cayman Islands postal codes must be in the format KYX-XXXX."
    ],
    "Central African Republic": [
        "^$",
        "Central African Republic does not use postal codes."
    ],
    "Chad": [
        "^$",
        "Chad does not use postal codes."
    ],
    "Chile": [
        "^\\d{7}$",
        "Chile postal codes must have exactly 7 digits."
    ],
    "China": [
        "^\\d{6}$",
        "China postal codes must have exactly 6 digits."
    ],
    "Christmas Island": [
        "^6798$",
        "Christmas Island uses the postal code 6798."
    ],
    "Cocos (Keeling) Islands": [
        "^6799$",
        "Cocos (Keeling) Islands uses the postal code 6799."
    ],
    "Colombia": [
        "^\\d{6}$",
        "Colombia postal codes must have exactly 6 digits."
    ],
    "Comoros": [
        "^$",
        "Comoros does not use postal codes."
    ],
    "Congo": [
        "^$",
        "Congo does not use postal codes."
    ],
    "Cook Islands": [
        "^$",
        "Cook Islands does not use postal codes."
    ],
    "Costa Rica": [
        "^\\d{5}$",
        "Costa Rica postal codes must have exactly 5 digits."
    ],
    "Cote D'ivoire": [
        "^$",
        "Cote D'ivoire does not use postal codes."
    ],
    "Croatia": [
        "^(HR-)?\\d{5}$",
        "Croatia postal codes must have exactly 5 digits, and may be prefixed with 'HR-'."
    ],
    "Cuba": [
        "^(CP)?\\d{5}$",
        "Cuba postal codes must have exactly 5 digits, and may be prefixed with 'CP'."
    ],
    "Cyprus": [
        "^\\d{4}$",
        "Cyprus postal codes must have exactly 4 digits."
    ],
    "Czech Republic": [
        "^\\d{3}\\s*\\d{2}$",
        "Czech Republic postal codes must be in the format XXX XX."
    ],
    "Denmark": [
        "^\\d{4}$",
        "Denmark postal codes must have exactly 4 digits."
    ],
    "Djibouti": [
        "^$",
        "Djibouti does not use postal codes."
    ],
    "Dominica": [
        "^$",
        "Dominica does not use postal codes."
    ],
    "Dominican Republic": [
        "^\\d{5}$",
        "Dominican Republic postal codes must have exactly 5 digits."
    ],
    "Ecuador": [
        "^\\d{6}$",
        "Ecuador postal codes must have exactly 6 digits."
    ],
    "Egypt": [
        "^\\d{5}$",
        "Egypt postal codes must have exactly 5 digits."
    ],
    "El Salvador": [
        "^\\d{4}$",
        "El Salvador postal codes must have exactly 4 digits."
    ],
    "Equatorial Guinea": [
        "^$",
        "Equatorial Guinea does not use postal codes."
    ],
    "Eritrea": [
        "^$",
        "Eritrea does not use postal codes."
    ],
    "Estonia": [
        "^\\d{5}$",
        "Estonia postal codes must have exactly 5 digits."
    ],
    "Ethiopia": [
        "^\\d{4}$",
        "Ethiopia postal codes must have exactly 4 digits."
    ],
    "Falkland Islands (Malvinas)": [
        "^FIQQ 1ZZ$",
        "Falkland Islands use the postal code FIQQ 1ZZ."
    ],
    "Faroe Islands": [
        "^\\d{3}$",
        "Faroe Islands postal codes must have exactly 3 digits."
    ],
    "Fiji": [
        "^$",
        "Fiji does not use postal codes."
    ],
    "Finland": [
        "^(FI-)?\\d{5}$",
        "Finland postal codes must have exactly 5 digits, and may be prefixed with 'FI-'."
    ],
    "France": [
        "^(F-)?\\d{5}$",
        "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    "French Guiana": [
        "^973\\d{2}$",
        "French Guiana postal codes must have 5 digits and start with 973."
    ],
    "French Polynesia": [
        "^987\\d{2}$",
        "French Polynesia postal codes must have 5 digits and start with 987."
    ],
    "Gabon": [
        "^$",
        "Gabon does not use postal codes."
    ],
    "Gambia": [
        "^$",
        "Gambia does not use postal codes."
    ],
    "Georgia": [
        "^\\d{4}$",
        "Georgia postal codes must have exactly 4 digits."
    ],
    "Germany": [
        "^(D-)?\\d{5}$",
        "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    "Ghana": [
        "^$",
        "Ghana does not use postal codes."
    ],
    "Gibraltar": [
        "^GX11 1AA$",
        "Gibraltar uses the postal code GX11 1AA."
    ],
    "Greece": [
        "^\\d{3}\\s*\\d{2}$",
        "Greece postal codes must be in the format XXX XX."
    ],
    "Greenland": [
        "^\\d{4}$",
        "Greenland postal codes must have exactly 4 digits."
    ],
    "Grenada": [
        "^$",
        "Grenada does not use postal codes."
    ],
    "Guadeloupe": [
        "^971\\d{2}$",
        "Guadeloupe postal codes must have 5 digits and start with 971."
    ],
    "Guam": [
        "^969\\d{2}$",
        "Guam uses US ZIP codes in the format 969XX."
    ],
    "Guatemala": [
        "^\\d{5}$",
        "Guatemala postal codes must have exactly 5 digits."
    ],
    "Guernsey": [
        "^GY\\d[\\dA-Z]?\\s?\\d[ABD-HJLNP-UW-Z]{2}$",
        "Guernsey postal codes must be in a valid format (e.g., GY1 1AA)."
    ],
    "Guinea": [
        "^$",
        "Guinea does not use postal codes."
    ],
    "Guinea-bissau": [
        "^\\d{4}$",
        "Guinea-Bissau postal codes must have exactly 4 digits."
    ],
    "Guyana": [
        "^$",
        "Guyana does not use postal codes."
    ],
    "Haiti": [
        "^(HT)?\\d{4}$",
        "Haiti postal codes must have 4 digits, and may be prefixed with 'HT'."
    ],
    "Holy See (Vatican City State)": [
        "^00120$",
        "Vatican City uses the postal code 00120."
    ],
    "Honduras": [
        "^\\d{5}$",
        "Honduras postal codes must have exactly 5 digits."
    ],
    "Hong Kong": [
        "^$", // No postal codes
        "Hong Kong does not use a postal code system."
    ],
    "Hungary": [
        "^\\d{4}$",
        "Hungary postal codes must have exactly 4 digits."
    ],
    "Iceland": [
        "^\\d{3}$",
        "Iceland postal codes must have exactly 3 digits."
    ],
    "India": [
        "^\\d{6}$",
        "Indian PIN codes must have exactly 6 digits."
    ],
    "Indonesia": [
        "^\\d{5}$",
        "Indonesia postal codes must have exactly 5 digits."
    ],
    "Iran, Islamic Republic of": [
        "^\\d{10}$",
        "Iran postal codes must have exactly 10 digits."
    ],
    "Iraq": [
        "^\\d{5}$",
        "Iraq postal codes must have exactly 5 digits."
    ],
    "Ireland": [
        "^[A-Z0-9]{3}\\s*[A-Z0-9]{4}$",
        "Irish Eircodes must be in the format A12 B3C4."
    ],
    "Isle of Man": [
        "^IM\\d[\\dA-Z]?\\s?\\d[ABD-HJLNP-UW-Z]{2}$",
        "Isle of Man postal codes must be in a valid format (e.g., IM1 1AA)."
    ],
    "Israel": [
        "^\\d{7}$",
        "Israel postal codes must have exactly 7 digits."
    ],
    "Italy": [
        "^(I-)?\\d{5}$",
        "Italy postal codes must have exactly 5 digits, and may be prefixed with 'I-'."
    ],
    "Jamaica": [
        "^[A-Z]{2}[0-9]{2}$",
        "Jamaica uses postal zones, not full codes (e.g., JM)."
    ],
    "Japan": [
        "^\\d{3}-?\\d{4}$",
        "Japan postal codes must be in the format XXX-XXXX or XXXXXXX."
    ],
    "Jersey": [
        "^JE\\d[\\dA-Z]?\\s?\\d[ABD-HJLNP-UW-Z]{2}$",
        "Jersey postal codes must be in a valid format (e.g., JE2 4WE)."
    ],
    "Jordan": [
        "^\\d{5}$",
        "Jordan postal codes must have exactly 5 digits."
    ],
    "Kazakhstan": [
        "^\\d{6}$",
        "Kazakhstan postal codes must have exactly 6 digits."
    ],
    "Kenya": [
        "^\\d{5}$",
        "Kenya postal codes must have exactly 5 digits."
    ],
    "Kiribati": [
        "^$",
        "Kiribati does not use postal codes."
    ],
    "Korea, Democratic People's Republic of": [
        "^$",
        "North Korea does not use postal codes."
    ],
    "Korea, Republic of": [
        "^\\d{5}$",
        "South Korea postal codes must have exactly 5 digits."
    ],
    "Kuwait": [
        "^\\d{5}$",
        "Kuwait postal codes must have exactly 5 digits."
    ],
    "Kyrgyzstan": [
        "^\\d{6}$",
        "Kyrgyzstan postal codes must have exactly 6 digits."
    ],
    "Lao People's Democratic Republic": [
        "^\\d{5}$",
        "Laos postal codes must have exactly 5 digits."
    ],
    "Latvia": [
        "^(LV-)?\\d{4}$",
        "Latvia postal codes must have exactly 4 digits, and may be prefixed with 'LV-'."
    ],
    "Lebanon": [
        "^\\d{4}(\\s\\d{4})?$",
        "Lebanon postal codes must have 4 or 8 digits."
    ],
    "Lesotho": [
        "^\\d{3}$",
        "Lesotho postal codes must have exactly 3 digits."
    ],
    "Liberia": [
        "^\\d{4}$",
        "Liberia postal codes must have exactly 4 digits."
    ],
    "Libyan Arab Jamahiriya": [
        "^$",
        "Libya does not use postal codes."
    ],
    "Liechtenstein": [
        "^\\d{4}$",
        "Liechtenstein postal codes must have exactly 4 digits."
    ],
    "Lithuania": [
        "^(LT-)?\\d{5}$",
        "Lithuania postal codes must have exactly 5 digits, and may be prefixed with 'LT-'."
    ],
    "Luxembourg": [
        "^(L-)?\\d{4}$",
        "Luxembourg postal codes must have exactly 4 digits, and may be prefixed with 'L-'."
    ],
    "Macao": [
        "^$",
        "Macao does not use postal codes."
    ],
    "Macedonia, The Former Yugoslav Republic of": [
        "^\\d{4}$",
        "North Macedonia postal codes must have exactly 4 digits."
    ],
    "Madagascar": [
        "^\\d{3}$",
        "Madagascar postal codes must have exactly 3 digits."
    ],
    "Malawi": [
        "^$",
        "Malawi does not use postal codes."
    ],
    "Malaysia": [
        "^\\d{5}$",
        "Malaysia postal codes must have exactly 5 digits."
    ],
    "Maldives": [
        "^\\d{5}$",
        "Maldives postal codes must have exactly 5 digits."
    ],
    "Mali": [
        "^$",
        "Mali does not use postal codes."
    ],
    "Malta": [
        "^[A-Z]{3}\\s?\\d{4}$",
        "Malta postal codes must be in the format AAA 1234."
    ],
    "Marshall Islands": [
        "^969[67]0$",
        "Marshall Islands uses US ZIP codes 96960 and 96970."
    ],
    "Martinique": [
        "^972\\d{2}$",
        "Martinique postal codes must have 5 digits and start with 972."
    ],
    "Mauritania": [
        "^$",
        "Mauritania does not use postal codes."
    ],
    "Mauritius": [
        "^(\\d{5})?$",
        "Mauritius postal codes have 5 digits, but are optional."
    ],
    "Mayotte": [
        "^976\\d{2}$",
        "Mayotte postal codes must have 5 digits and start with 976."
    ],
    "Mexico": [
        "^\\d{5}$",
        "Mexico postal codes must have exactly 5 digits."
    ],
    "Micronesia, Federated States of": [
        "^\\d{5}$",
        "Micronesia uses US-format 5-digit ZIP codes."
    ],
    "Moldova, Republic of": [
        "^(MD-)?\\d{4}$",
        "Moldova postal codes must have exactly 4 digits, and may be prefixed with 'MD-'."
    ],
    "Monaco": [
        "^980\\d{2}$",
        "Monaco postal codes must have 5 digits and start with 980."
    ],
    "Mongolia": [
        "^\\d{5}$",
        "Mongolia postal codes must have exactly 5 digits."
    ],
    "Montenegro": [
        "^\\d{5}$",
        "Montenegro postal codes must have exactly 5 digits."
    ],
    "Montserrat": [
        "^MSR \\d{4}$",
        "Montserrat postal codes must be in the format MSR XXXX."
    ],
    "Morocco": [
        "^\\d{5}$",
        "Morocco postal codes must have exactly 5 digits."
    ],
    "Mozambique": [
        "^\\d{4}$",
        "Mozambique postal codes must have exactly 4 digits."
    ],
    "Myanmar": [
        "^\\d{5}$",
        "Myanmar postal codes must have exactly 5 digits."
    ],
    "Namibia": [
        "^$",
        "Namibia does not use postal codes."
    ],
    "Nauru": [
        "^$",
        "Nauru does not use postal codes."
    ],
    "Nepal": [
        "^\\d{5}$",
        "Nepal postal codes must have exactly 5 digits."
    ],
    "Netherlands": [
        "^(NL-)?\\d{4}\\s*[A-Z]{2}$",
        "Dutch postal codes must have 4 digits followed by 2 letters."
    ],
    "New Caledonia": [
        "^988\\d{2}$",
        "New Caledonia postal codes must have 5 digits and start with 988."
    ],
    "New Zealand": [
        "^\\d{4}$",
        "New Zealand postal codes must have exactly 4 digits."
    ],
    "Nicaragua": [
        "^\\d{5}$",
        "Nicaragua postal codes must have exactly 5 digits."
    ],
    "Niger": [
        "^\\d{4}$",
        "Niger postal codes must have exactly 4 digits."
    ],
    "Nigeria": [
        "^\\d{6}$",
        "Nigeria postal codes must have exactly 6 digits."
    ],
    "Niue": [
        "^$",
        "Niue does not use postal codes."
    ],
    "Norfolk Island": [
        "^2899$",
        "Norfolk Island uses the postal code 2899."
    ],
    "Northern Mariana Islands": [
        "^9695[012]$",
        "Northern Mariana Islands use US ZIP codes 96950, 96951, 96952."
    ],
    "Norway": [
        "^\\d{4}$",
        "Norway postal codes must have exactly 4 digits."
    ],
    "Oman": [
        "^\\d{3}$",
        "Oman postal codes must have exactly 3 digits."
    ],
    "Pakistan": [
        "^\\d{5}$",
        "Pakistan postal codes must have exactly 5 digits."
    ],
    "Palau": [
        "^96940$",
        "Palau uses the US ZIP code 96940."
    ],
    "Panama": [
        "^$",
        "Panama does not use postal codes."
    ],
    "Papua New Guinea": [
        "^\\d{3}$",
        "Papua New Guinea postal codes must have exactly 3 digits."
    ],
    "Paraguay": [
        "^\\d{4}$",
        "Paraguay postal codes must have exactly 4 digits."
    ],
    "Peru": [
        "^\\d{5}$",
        "Peru postal codes must have exactly 5 digits."
    ],
    "Philippines": [
        "^\\d{4}$",
        "Philippines postal codes must have exactly 4 digits."
    ],
    "Pitcairn": [
        "^PCRN 1ZZ$",
        "Pitcairn Islands use the postal code PCRN 1ZZ."
    ],
    "Poland": [
        "^\\d{2}-?\\d{3}$",
        "Poland postal codes must be in the format XX-XXX or XXXXX."
    ],
    "Portugal": [
        "^\\d{4}-?\\d{3}$",
        "Portugal postal codes must be in the format XXXX-XXX or XXXXXXX."
    ],
    "Puerto Rico": [
        "^00[679]\\d{2}(-\\d{4})?$",
        "Puerto Rico uses US ZIP codes in the format 00XXX or 00XXX-XXXX."
    ],
    "Qatar": [
        "^$",
        "Qatar does not use postal codes."
    ],
    "Reunion": [
        "^974\\d{2}$",
        "Réunion postal codes must have 5 digits and start with 974."
    ],
    "Romania": [
        "^\\d{6}$",
        "Romania postal codes must have exactly 6 digits."
    ],
    "Russian Federation": [
        "^\\d{6}$",
        "Russia postal codes must have exactly 6 digits."
    ],
    "Rwanda": [
        "^$",
        "Rwanda does not use postal codes."
    ],
    "Saint Helena": [
        "^STHL 1ZZ$",
        "Saint Helena uses the postal code STHL 1ZZ."
    ],
    "Saint Kitts and Nevis": [
        "^[A-Z]{2}\\d{4}$",
        "Saint Kitts and Nevis postal codes must have 2 letters and 4 digits."
    ],
    "Saint Lucia": [
        "^$",
        "Saint Lucia does not use postal codes."
    ],
    "Saint Pierre and Miquelon": [
        "^97500$",
        "Saint Pierre and Miquelon uses the postal code 97500."
    ],
    "Saint Vincent and The Grenadines": [
        "^VC\\d{4}$",
        "Saint Vincent and The Grenadines postal codes must be in the format VCXXXX."
    ],
    "Samoa": [
        "^$",
        "Samoa does not use postal codes."
    ],
    "San Marino": [
        "^4789\\d$",
        "San Marino postal codes must have 5 digits and start with 4789."
    ],
    "Sao Tome and Principe": [
        "^$",
        "Sao Tome and Principe does not use postal codes."
    ],
    "Saudi Arabia": [
        "^\\d{5}(-\\d{4})?$",
        "Saudi Arabia postal codes must have 5 digits, optionally followed by -4 digits."
    ],
    "Senegal": [
        "^\\d{5}$",
        "Senegal postal codes must have exactly 5 digits."
    ],
    "Serbia": [
        "^\\d{5}$",
        "Serbia postal codes must have exactly 5 digits."
    ],
    "Seychelles": [
        "^$",
        "Seychelles does not use postal codes."
    ],
    "Sierra Leone": [
        "^$",
        "Sierra Leone does not use postal codes."
    ],
    "Singapore": [
        "^\\d{6}$",
        "Singapore postal codes must have exactly 6 digits."
    ],
    "Slovakia": [
        "^\\d{3}\\s*\\d{2}$",
        "Slovakia postal codes must be in the format XXX XX."
    ],
    "Slovenia": [
        "^(SI-)?\\d{4}$",
        "Slovenia postal codes must have exactly 4 digits, and may be prefixed with 'SI-'."
    ],
    "Solomon Islands": [
        "^$",
        "Solomon Islands does not use postal codes."
    ],
    "Somalia": [
        "^[A-Z]{2}\\s\\d{5}$",
        "Somalia postal codes must be in the format AA XXXXX."
    ],
    "South Africa": [
        "^\\d{4}$",
        "South Africa postal codes must have exactly 4 digits."
    ],
    "South Georgia and The South Sandwich Islands": [
        "^SIQQ 1ZZ$",
        "South Georgia and The South Sandwich Islands use the postal code SIQQ 1ZZ."
    ],
    "Spain": [
        "^\\d{5}$",
        "Spain postal codes must have exactly 5 digits."
    ],
    "Sri Lanka": [
        "^\\d{5}$",
        "Sri Lanka postal codes must have exactly 5 digits."
    ],
    "Sudan": [
        "^\\d{5}$",
        "Sudan postal codes must have exactly 5 digits."
    ],
    "Suriname": [
        "^$",
        "Suriname does not use postal codes."
    ],
    "Svalbard and Jan Mayen": [
        "^\\d{4}$",
        "Svalbard and Jan Mayen postal codes must have exactly 4 digits."
    ],
    "Swaziland": [
        "^[A-Z]\\d{3}$",
        "Eswatini (Swaziland) postal codes must have a letter and 3 digits."
    ],
    "Sweden": [
        "^(SE-)?\\d{3}\\s*\\d{2}$",
        "Sweden postal codes must be in the format XXX XX, and may be prefixed with 'SE-'."
    ],
    "Switzerland": [
        "^(CH-)?\\d{4}$",
        "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    "Syrian Arab Republic": [
        "^$",
        "Syria does not use postal codes."
    ],
    "Taiwan": [
        "^\\d{3}(\\d{2})?$",
        "Taiwan postal codes must have 3 or 5 digits."
    ],
    "Tajikistan": [
        "^\\d{6}$",
        "Tajikistan postal codes must have exactly 6 digits."
    ],
    "Tanzania, United Republic of": [
        "^\\d{5}$",
        "Tanzania postal codes must have exactly 5 digits."
    ],
    "Thailand": [
        "^\\d{5}$",
        "Thailand postal codes must have exactly 5 digits."
    ],
    "Timor-leste": [
        "^$",
        "Timor-Leste does not use postal codes."
    ],
    "Togo": [
        "^$",
        "Togo does not use postal codes."
    ],
    "Tokelau": [
        "^$",
        "Tokelau does not use postal codes."
    ],
    "Tonga": [
        "^$",
        "Tonga does not use postal codes."
    ],
    "Trinidad and Tobago": [
        "^\\d{6}$",
        "Trinidad and Tobago postal codes must have exactly 6 digits."
    ],
    "Tunisia": [
        "^\\d{4}$",
        "Tunisia postal codes must have exactly 4 digits."
    ],
    "Turkey": [
        "^\\d{5}$",
        "Turkey postal codes must have exactly 5 digits."
    ],
    "Turkmenistan": [
        "^\\d{6}$",
        "Turkmenistan postal codes must have exactly 6 digits."
    ],
    "Turks and Caicos Islands": [
        "^TKCA 1ZZ$",
        "Turks and Caicos Islands use the postal code TKCA 1ZZ."
    ],
    "Tuvalu": [
        "^$",
        "Tuvalu does not use postal codes."
    ],
    "Uganda": [
        "^$",
        "Uganda does not use postal codes."
    ],
    "Ukraine": [
        "^\\d{5}$",
        "Ukraine postal codes must have exactly 5 digits."
    ],
    "United Arab Emirates": [
        "^$", // No postal codes
        "United Arab Emirates does not use postal codes."
    ],
    "United Kingdom": [
        "^[A-Z]{1,2}[0-9R][0-9A-Z]?\\s*[0-9][A-Z]{2}$",
        "UK postcodes must be in a valid format (e.g., SW1A 0AA)."
    ],
    "United States": [
        "^\\d{5}(-\\d{4})?$",
        "US ZIP codes must be in the format XXXXX or XXXXX-XXXX."
    ],
    "Uruguay": [
        "^\\d{5}$",
        "Uruguay postal codes must have exactly 5 digits."
    ],
    "Uzbekistan": [
        "^\\d{6}$",
        "Uzbekistan postal codes must have exactly 6 digits."
    ],
    "Vanuatu": [
        "^$",
        "Vanuatu does not use postal codes."
    ],
    "Venezuela": [
        "^\\d{4}(-[A-Z])?$",
        "Venezuela postal codes must have 4 digits, optionally followed by a hyphen and a letter."
    ],
    "Viet Nam": [
        "^\\d{6}$",
        "Vietnam postal codes must have exactly 6 digits."
    ],
    "Virgin Islands, British": [
        "^VG\\d{4}$",
        "British Virgin Islands postal codes must be in the format VGXXXX."
    ],
    "Virgin Islands, U.S.": [
        "^008\\d{2}(-\\d{4})?$",
        "U.S. Virgin Islands use US ZIP codes in the format 008XX or 008XX-XXXX."
    ],
    "Wallis and Futuna": [
        "^986\\d{2}$",
        "Wallis and Futuna postal codes must have 5 digits and start with 986."
    ],
    "Yemen": [
        "^$",
        "Yemen does not use postal codes."
    ],
    "Zambia": [
        "^\\d{5}$",
        "Zambia postal codes must have exactly 5 digits."
    ],
    "Zimbabwe": [
        "^$", // No postal codes
        "Zimbabwe does not use postal codes."
    ],
};
export {constraints};