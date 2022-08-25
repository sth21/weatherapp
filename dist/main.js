/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/country-code-lookup/index.js":
/*!***************************************************!*\
  !*** ./node_modules/country-code-lookup/index.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports.byFips = function(code) {
  return search('fips', code.toUpperCase())
}

module.exports.byIso = function(code) {
  if (!isNaN(parseInt(code))) {
    return search('isoNo', code.toString())
  }

  if (code.length === 2) {
    return search('iso2', code.toUpperCase())
  }

  if (code.length === 3) {
    return search('iso3', code.toUpperCase())
  }

  throw new Error('cannot determine ISO code type')
}

module.exports.byInternet = function(code) {
  return search('internet', code.toUpperCase())
}

module.exports.byCountry = function(country) {
  return search('country', country)
}

function search(field, code) {
  for (var i = 0; i < countries.length; i++) {
    if (countries[i][field] === code) {
      return countries[i]
    }
  }
  return null
}

var countries = [
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Afghanistan',
    capital: 'Kabul',
    fips: 'AF',
    iso2: 'AF',
    iso3: 'AFG',
    isoNo: '4',
    internet: 'AF'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Albania',
    capital: 'Tirana',
    fips: 'AL',
    iso2: 'AL',
    iso3: 'ALB',
    isoNo: '8',
    internet: 'AL'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Algeria',
    capital: 'Algiers',
    fips: 'AG',
    iso2: 'DZ',
    iso3: 'DZA',
    isoNo: '12',
    internet: 'DZ'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'American Samoa',
    capital: 'Pago Pago',
    fips: 'AQ',
    iso2: 'AS',
    iso3: 'ASM',
    isoNo: '16',
    internet: 'AS'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Andorra',
    capital: 'Andorra la Vella',
    fips: 'AN',
    iso2: 'AD',
    iso3: 'AND',
    isoNo: '20',
    internet: 'AD'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Angola',
    capital: 'Luanda',
    fips: 'AO',
    iso2: 'AO',
    iso3: 'AGO',
    isoNo: '24',
    internet: 'AO'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Anguilla',
    capital: 'The Valley',
    fips: 'AV',
    iso2: 'AI',
    iso3: 'AIA',
    isoNo: '660',
    internet: 'AI'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Antigua and Barbuda',
    capital: "Saint John's",
    fips: 'AC',
    iso2: 'AG',
    iso3: 'ATG',
    isoNo: '28',
    internet: 'AG'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Argentina',
    capital: 'Buenos Aires',
    fips: 'AR',
    iso2: 'AR',
    iso3: 'ARG',
    isoNo: '32',
    internet: 'AR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Armenia',
    capital: 'Yerevan',
    fips: 'AM',
    iso2: 'AM',
    iso3: 'ARM',
    isoNo: '51',
    internet: 'AM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Aruba',
    capital: 'Oranjestad',
    fips: 'AA',
    iso2: 'AW',
    iso3: 'ABW',
    isoNo: '533',
    internet: 'AW'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Australia',
    capital: 'Canberra',
    fips: 'AS',
    iso2: 'AU',
    iso3: 'AUS',
    isoNo: '36',
    internet: 'AU'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Austria',
    capital: 'Vienna',
    fips: 'AU',
    iso2: 'AT',
    iso3: 'AUT',
    isoNo: '40',
    internet: 'AT'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Azerbaijan',
    capital: 'Baku (Baki)',
    fips: 'AJ',
    iso2: 'AZ',
    iso3: 'AZE',
    isoNo: '31',
    internet: 'AZ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'The Bahamas',
    capital: 'Nassau',
    fips: 'BF',
    iso2: 'BS',
    iso3: 'BHS',
    isoNo: '44',
    internet: 'BS'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Bahrain',
    capital: 'Manama',
    fips: 'BA',
    iso2: 'BH',
    iso3: 'BHR',
    isoNo: '48',
    internet: 'BH'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Bangladesh',
    capital: 'Dhaka',
    fips: 'BG',
    iso2: 'BD',
    iso3: 'BGD',
    isoNo: '50',
    internet: 'BD'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Barbados',
    capital: 'Bridgetown',
    fips: 'BB',
    iso2: 'BB',
    iso3: 'BRB',
    isoNo: '52',
    internet: 'BB'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Belarus',
    capital: 'Minsk',
    fips: 'BO',
    iso2: 'BY',
    iso3: 'BLR',
    isoNo: '112',
    internet: 'BY'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Belgium',
    capital: 'Brussels',
    fips: 'BE',
    iso2: 'BE',
    iso3: 'BEL',
    isoNo: '56',
    internet: 'BE'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Belize',
    capital: 'Belmopan',
    fips: 'BH',
    iso2: 'BZ',
    iso3: 'BLZ',
    isoNo: '84',
    internet: 'BZ'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Benin',
    capital: 'Porto-Novo��',
    fips: 'BN',
    iso2: 'BJ',
    iso3: 'BEN',
    isoNo: '204',
    internet: 'BJ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Bermuda',
    capital: 'Hamilton',
    fips: 'BD',
    iso2: 'BM',
    iso3: 'BMU',
    isoNo: '60',
    internet: 'BM'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Bhutan',
    capital: 'Thimphu',
    fips: 'BT',
    iso2: 'BT',
    iso3: 'BTN',
    isoNo: '64',
    internet: 'BT'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Bolivia',
    capital: 'La Paz / Sucre',
    fips: 'BL',
    iso2: 'BO',
    iso3: 'BOL',
    isoNo: '68',
    internet: 'BO'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    fips: 'BK',
    iso2: 'BA',
    iso3: 'BIH',
    isoNo: '70',
    internet: 'BA'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Botswana',
    capital: 'Gaborone',
    fips: 'BC',
    iso2: 'BW',
    iso3: 'BWA',
    isoNo: '72',
    internet: 'BW'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Brazil',
    capital: 'Brasilia',
    fips: 'BR',
    iso2: 'BR',
    iso3: 'BRA',
    isoNo: '76',
    internet: 'BR'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'British Virgin Islands',
    capital: 'Road Town',
    fips: 'VI',
    iso2: 'VG',
    iso3: 'VGB',
    isoNo: '92',
    internet: 'VG'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Brunei',
    capital: 'Bandar Seri Begawan',
    fips: 'BX',
    iso2: 'BN',
    iso3: 'BRN',
    isoNo: '96',
    internet: 'BN'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Bulgaria',
    capital: 'Sofia',
    fips: 'BU',
    iso2: 'BG',
    iso3: 'BGR',
    isoNo: '100',
    internet: 'BG'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Burkina Faso',
    capital: 'Ouagadougou',
    fips: 'UV',
    iso2: 'BF',
    iso3: 'BFA',
    isoNo: '854',
    internet: 'BF'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Burundi',
    capital: 'Bujumbura',
    fips: 'BY',
    iso2: 'BI',
    iso3: 'BDI',
    isoNo: '108',
    internet: 'BI'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Cambodia',
    capital: 'Phnom Penh',
    fips: 'CB',
    iso2: 'KH',
    iso3: 'KHM',
    isoNo: '116',
    internet: 'KH'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Cameroon',
    capital: 'Yaounde',
    fips: 'CM',
    iso2: 'CM',
    iso3: 'CMR',
    isoNo: '120',
    internet: 'CM'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Canada',
    capital: 'Ottawa',
    fips: 'CA',
    iso2: 'CA',
    iso3: 'CAN',
    isoNo: '124',
    internet: 'CA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Cape Verde',
    capital: 'Praia',
    fips: 'CV',
    iso2: 'CV',
    iso3: 'CPV',
    isoNo: '132',
    internet: 'CV'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Cayman Islands',
    capital: 'George Town',
    fips: 'CJ',
    iso2: 'KY',
    iso3: 'CYM',
    isoNo: '136',
    internet: 'KY'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Central African Republic',
    capital: 'Bangui',
    fips: 'CT',
    iso2: 'CF',
    iso3: 'CAF',
    isoNo: '140',
    internet: 'CF'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Chad',
    capital: "N'Djamena",
    fips: 'CD',
    iso2: 'TD',
    iso3: 'TCD',
    isoNo: '148',
    internet: 'TD'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Chile',
    capital: 'Santiago',
    fips: 'CI',
    iso2: 'CL',
    iso3: 'CHL',
    isoNo: '152',
    internet: 'CL'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'China',
    capital: 'Beijing',
    fips: 'CH',
    iso2: 'CN',
    iso3: 'CHN',
    isoNo: '156',
    internet: 'CN'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Christmas Island',
    capital: 'The Settlement',
    fips: 'KT',
    iso2: 'CX',
    iso3: 'CXR',
    isoNo: '162',
    internet: 'CX'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    fips: 'CK',
    iso2: 'CC',
    iso3: 'CCK',
    isoNo: '166',
    internet: 'CC'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Colombia',
    capital: 'Bogota',
    fips: 'CO',
    iso2: 'CO',
    iso3: 'COL',
    isoNo: '170',
    internet: 'CO'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Comoros',
    capital: 'Moroni',
    fips: 'CN',
    iso2: 'KM',
    iso3: 'COM',
    isoNo: '174',
    internet: 'KM'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Republic of the Congo',
    capital: 'Brazzaville',
    fips: 'CF',
    iso2: 'CG',
    iso3: 'COG',
    isoNo: '178',
    internet: 'CG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Cook Islands',
    capital: 'Avarua',
    fips: 'CW',
    iso2: 'CK',
    iso3: 'COK',
    isoNo: '184',
    internet: 'CK'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Costa Rica',
    capital: 'San Jose',
    fips: 'CS',
    iso2: 'CR',
    iso3: 'CRI',
    isoNo: '188',
    internet: 'CR'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: "Cote d'Ivoire",
    capital: 'Yamoussoukro',
    fips: 'IV',
    iso2: 'CI',
    iso3: 'CIV',
    isoNo: '384',
    internet: 'CI'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Croatia',
    capital: 'Zagreb',
    fips: 'HR',
    iso2: 'HR',
    iso3: 'HRV',
    isoNo: '191',
    internet: 'HR'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Cuba',
    capital: 'Havana',
    fips: 'CU',
    iso2: 'CU',
    iso3: 'CUB',
    isoNo: '192',
    internet: 'CU'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Cyprus',
    capital: 'Nicosia',
    fips: 'CY',
    iso2: 'CY',
    iso3: 'CYP',
    isoNo: '196',
    internet: 'CY'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Czech Republic',
    capital: 'Prague',
    fips: 'EZ',
    iso2: 'CZ',
    iso3: 'CZE',
    isoNo: '203',
    internet: 'CZ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Denmark',
    capital: 'Copenhagen',
    fips: 'DA',
    iso2: 'DK',
    iso3: 'DNK',
    isoNo: '208',
    internet: 'DK'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Djibouti',
    capital: 'Djibouti',
    fips: 'DJ',
    iso2: 'DJ',
    iso3: 'DJI',
    isoNo: '262',
    internet: 'DJ'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Dominica',
    capital: 'Roseau',
    fips: 'DO',
    iso2: 'DM',
    iso3: 'DMA',
    isoNo: '212',
    internet: 'DM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Dominican Republic',
    capital: 'Santo Domingo',
    fips: 'DR',
    iso2: 'DO',
    iso3: 'DOM',
    isoNo: '214',
    internet: 'DO'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Ecuador',
    capital: 'Quito',
    fips: 'EC',
    iso2: 'EC',
    iso3: 'ECU',
    isoNo: '218',
    internet: 'EC'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Egypt',
    capital: 'Cairo',
    fips: 'EG',
    iso2: 'EG',
    iso3: 'EGY',
    isoNo: '818',
    internet: 'EG'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'El Salvador',
    capital: 'San Salvador',
    fips: 'ES',
    iso2: 'SV',
    iso3: 'SLV',
    isoNo: '222',
    internet: 'SV'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Equatorial Guinea',
    capital: 'Malabo',
    fips: 'EK',
    iso2: 'GQ',
    iso3: 'GNQ',
    isoNo: '226',
    internet: 'GQ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Eritrea',
    capital: 'Asmara',
    fips: 'ER',
    iso2: 'ER',
    iso3: 'ERI',
    isoNo: '232',
    internet: 'ER'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Estonia',
    capital: 'Tallinn',
    fips: 'EN',
    iso2: 'EE',
    iso3: 'EST',
    isoNo: '233',
    internet: 'EE'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Ethiopia',
    capital: 'Addis Ababa',
    fips: 'ET',
    iso2: 'ET',
    iso3: 'ETH',
    isoNo: '231',
    internet: 'ET'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Falkland Islands (Islas Malvinas)',
    capital: 'Stanley',
    fips: 'FA',
    iso2: 'FK',
    iso3: 'FLK',
    isoNo: '238',
    internet: 'FK'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Faroe Islands',
    capital: 'Torshavn',
    fips: 'FO',
    iso2: 'FO',
    iso3: 'FRO',
    isoNo: '234',
    internet: 'FO'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Fiji',
    capital: 'Suva',
    fips: 'FJ',
    iso2: 'FJ',
    iso3: 'FJI',
    isoNo: '242',
    internet: 'FJ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Finland',
    capital: 'Helsinki',
    fips: 'FI',
    iso2: 'FI',
    iso3: 'FIN',
    isoNo: '246',
    internet: 'FI'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'France',
    capital: 'Paris',
    fips: 'FR',
    iso2: 'FR',
    iso3: 'FRA',
    isoNo: '250',
    internet: 'FR'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'French Guiana',
    capital: 'Cayenne',
    fips: 'FG',
    iso2: 'GF',
    iso3: 'GUF',
    isoNo: '254',
    internet: 'GF'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'French Polynesia',
    capital: 'Papeete',
    fips: 'FP',
    iso2: 'PF',
    iso3: 'PYF',
    isoNo: '258',
    internet: 'PF'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Gabon',
    capital: 'Libreville',
    fips: 'GB',
    iso2: 'GA',
    iso3: 'GAB',
    isoNo: '266',
    internet: 'GA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'The Gambia',
    capital: 'Banjul',
    fips: 'GA',
    iso2: 'GM',
    iso3: 'GMB',
    isoNo: '270',
    internet: 'GM'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Georgia',
    capital: "T'bilisi",
    fips: 'GG',
    iso2: 'GE',
    iso3: 'GEO',
    isoNo: '268',
    internet: 'GE'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Germany',
    capital: 'Berlin',
    fips: 'GM',
    iso2: 'DE',
    iso3: 'DEU',
    isoNo: '276',
    internet: 'DE'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Ghana',
    capital: 'Accra',
    fips: 'GH',
    iso2: 'GH',
    iso3: 'GHA',
    isoNo: '288',
    internet: 'GH'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Gibraltar',
    capital: 'Gibraltar',
    fips: 'GI',
    iso2: 'GI',
    iso3: 'GIB',
    isoNo: '292',
    internet: 'GI'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Greece',
    capital: 'Athens',
    fips: 'GR',
    iso2: 'GR',
    iso3: 'GRC',
    isoNo: '300',
    internet: 'GR'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Greenland',
    capital: 'Nuuk (Godthab)',
    fips: 'GL',
    iso2: 'GL',
    iso3: 'GRL',
    isoNo: '304',
    internet: 'GL'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Grenada',
    capital: "Saint George's",
    fips: 'GJ',
    iso2: 'GD',
    iso3: 'GRD',
    isoNo: '308',
    internet: 'GD'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Guadeloupe',
    capital: 'Basse-Terre',
    fips: 'GP',
    iso2: 'GP',
    iso3: 'GLP',
    isoNo: '312',
    internet: 'GP'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Guam',
    capital: 'Hagatna (Agana)',
    fips: 'GQ',
    iso2: 'GU',
    iso3: 'GUM',
    isoNo: '316',
    internet: 'GU'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Guatemala',
    capital: 'Guatemala',
    fips: 'GT',
    iso2: 'GT',
    iso3: 'GTM',
    isoNo: '320',
    internet: 'GT'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Guinea',
    capital: 'Conakry',
    fips: 'GV',
    iso2: 'GN',
    iso3: 'GIN',
    isoNo: '324',
    internet: 'GN'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Guinea-Bissau',
    capital: 'Bissau',
    fips: 'PU',
    iso2: 'GW',
    iso3: 'GNB',
    isoNo: '624',
    internet: 'GW'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Guyana',
    capital: 'Georgetown',
    fips: 'GY',
    iso2: 'GY',
    iso3: 'GUY',
    isoNo: '328',
    internet: 'GY'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Haiti',
    capital: 'Port-au-Prince',
    fips: 'HA',
    iso2: 'HT',
    iso3: 'HTI',
    isoNo: '332',
    internet: 'HT'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Holy See (Vatican City)',
    capital: 'Vatican City',
    fips: 'VT',
    iso2: 'VA',
    iso3: 'VAT',
    isoNo: '336',
    internet: 'VA'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Honduras',
    capital: 'Tegucigalpa',
    fips: 'HO',
    iso2: 'HN',
    iso3: 'HND',
    isoNo: '340',
    internet: 'HN'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Hungary',
    capital: 'Budapest',
    fips: 'HU',
    iso2: 'HU',
    iso3: 'HUN',
    isoNo: '348',
    internet: 'HU'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Iceland',
    capital: 'Reykjavik',
    fips: 'IC',
    iso2: 'IS',
    iso3: 'ISL',
    isoNo: '352',
    internet: 'IS'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'India',
    capital: 'New Delhi',
    fips: 'IN',
    iso2: 'IN',
    iso3: 'IND',
    isoNo: '356',
    internet: 'IN'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Indonesia',
    capital: 'Jakarta',
    fips: 'ID',
    iso2: 'ID',
    iso3: 'IDN',
    isoNo: '360',
    internet: 'ID'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Iran',
    capital: 'Tehran',
    fips: 'IR',
    iso2: 'IR',
    iso3: 'IRN',
    isoNo: '364',
    internet: 'IR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Iraq',
    capital: 'Baghdad',
    fips: 'IZ',
    iso2: 'IQ',
    iso3: 'IRQ',
    isoNo: '368',
    internet: 'IQ'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Ireland',
    capital: 'Dublin',
    fips: 'EI',
    iso2: 'IE',
    iso3: 'IRL',
    isoNo: '372',
    internet: 'IE'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Israel',
    capital: 'Jerusalem',
    fips: 'IS',
    iso2: 'IL',
    iso3: 'ISR',
    isoNo: '376',
    internet: 'IL'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Italy',
    capital: 'Rome',
    fips: 'IT',
    iso2: 'IT',
    iso3: 'ITA',
    isoNo: '380',
    internet: 'IT'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Jamaica',
    capital: 'Kingston',
    fips: 'JM',
    iso2: 'JM',
    iso3: 'JAM',
    isoNo: '388',
    internet: 'JM'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Japan',
    capital: 'Tokyo',
    fips: 'JA',
    iso2: 'JP',
    iso3: 'JPN',
    isoNo: '392',
    internet: 'JP'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Jordan',
    capital: 'Amman',
    fips: 'JO',
    iso2: 'JO',
    iso3: 'JOR',
    isoNo: '400',
    internet: 'JO'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Kazakhstan',
    capital: 'Astana (Akmola)',
    fips: 'KZ',
    iso2: 'KZ',
    iso3: 'KAZ',
    isoNo: '398',
    internet: 'KZ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Kenya',
    capital: 'Nairobi',
    fips: 'KE',
    iso2: 'KE',
    iso3: 'KEN',
    isoNo: '404',
    internet: 'KE'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Kiribati',
    capital: 'Tarawa',
    fips: 'KR',
    iso2: 'KI',
    iso3: 'KIR',
    isoNo: '296',
    internet: 'KI'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'North Korea',
    capital: "P'yongyang",
    fips: 'KN',
    iso2: 'KP',
    iso3: 'PRK',
    isoNo: '408',
    internet: 'KP'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'South Korea',
    capital: 'Seoul',
    fips: 'KS',
    iso2: 'KR',
    iso3: 'KOR',
    isoNo: '410',
    internet: 'KR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Kuwait',
    capital: 'Kuwait',
    fips: 'KU',
    iso2: 'KW',
    iso3: 'KWT',
    isoNo: '414',
    internet: 'KW'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Kyrgyzstan',
    capital: 'Bishkek',
    fips: 'KG',
    iso2: 'KG',
    iso3: 'KGZ',
    isoNo: '417',
    internet: 'KG'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Laos',
    capital: 'Vientiane',
    fips: 'LA',
    iso2: 'LA',
    iso3: 'LAO',
    isoNo: '418',
    internet: 'LA'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Latvia',
    capital: 'Riga',
    fips: 'LG',
    iso2: 'LV',
    iso3: 'LVA',
    isoNo: '428',
    internet: 'LV'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Lebanon',
    capital: 'Beirut',
    fips: 'LE',
    iso2: 'LB',
    iso3: 'LBN',
    isoNo: '422',
    internet: 'LB'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Lesotho',
    capital: 'Maseru',
    fips: 'LT',
    iso2: 'LS',
    iso3: 'LSO',
    isoNo: '426',
    internet: 'LS'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Liberia',
    capital: 'Monrovia',
    fips: 'LI',
    iso2: 'LR',
    iso3: 'LBR',
    isoNo: '430',
    internet: 'LR'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Libya',
    capital: 'Tripoli',
    fips: 'LY',
    iso2: 'LY',
    iso3: 'LBY',
    isoNo: '434',
    internet: 'LY'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Liechtenstein',
    capital: 'Vaduz',
    fips: 'LS',
    iso2: 'LI',
    iso3: 'LIE',
    isoNo: '438',
    internet: 'LI'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Lithuania',
    capital: 'Vilnius',
    fips: 'LH',
    iso2: 'LT',
    iso3: 'LTU',
    isoNo: '440',
    internet: 'LT'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Luxembourg',
    capital: 'Luxembourg',
    fips: 'LU',
    iso2: 'LU',
    iso3: 'LUX',
    isoNo: '442',
    internet: 'LU'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'North Macedonia',
    capital: 'Skopje',
    fips: 'MK',
    iso2: 'MK',
    iso3: 'MKD',
    isoNo: '807',
    internet: 'MK'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Madagascar',
    capital: 'Antananarivo',
    fips: 'MA',
    iso2: 'MG',
    iso3: 'MDG',
    isoNo: '450',
    internet: 'MG'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Malawi',
    capital: 'Lilongwe',
    fips: 'MI',
    iso2: 'MW',
    iso3: 'MWI',
    isoNo: '454',
    internet: 'MW'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    fips: 'MY',
    iso2: 'MY',
    iso3: 'MYS',
    isoNo: '458',
    internet: 'MY'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Maldives',
    capital: 'Male (Maale)',
    fips: 'MV',
    iso2: 'MV',
    iso3: 'MDV',
    isoNo: '462',
    internet: 'MV'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Mali',
    capital: 'Bamako',
    fips: 'ML',
    iso2: 'ML',
    iso3: 'MLI',
    isoNo: '466',
    internet: 'ML'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'Malta',
    capital: 'Valletta',
    fips: 'MT',
    iso2: 'MT',
    iso3: 'MLT',
    isoNo: '470',
    internet: 'MT'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Isle of Man',
    capital: 'Douglas',
    fips: 'IM',
    iso2: 'IM',
    iso3: 'IMN',
    isoNo: '833',
    internet: 'IM'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Marshall Islands',
    capital: 'Majuro',
    fips: 'RM',
    iso2: 'MH',
    iso3: 'MHL',
    isoNo: '584',
    internet: 'MH'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Martinique',
    capital: 'Fort-de-France',
    fips: 'MB',
    iso2: 'MQ',
    iso3: 'MTQ',
    isoNo: '474',
    internet: 'MQ'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Mauritania',
    capital: 'Nouakchott',
    fips: 'MR',
    iso2: 'MR',
    iso3: 'MRT',
    isoNo: '478',
    internet: 'MR'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Mauritius',
    capital: 'Port Louis',
    fips: 'MP',
    iso2: 'MU',
    iso3: 'MUS',
    isoNo: '480',
    internet: 'MU'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Mayotte',
    capital: 'Mamoutzou',
    fips: 'MF',
    iso2: 'YT',
    iso3: 'MYT',
    isoNo: '175',
    internet: 'YT'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Mexico',
    capital: 'Mexico',
    fips: 'MX',
    iso2: 'MX',
    iso3: 'MEX',
    isoNo: '484',
    internet: 'MX'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Federated States of Micronesia',
    capital: 'Palikir',
    fips: '',
    iso2: 'FM',
    iso3: 'FSM',
    isoNo: '583',
    internet: 'FM'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Moldova',
    capital: 'Chisinau',
    fips: 'MD',
    iso2: 'MD',
    iso3: 'MDA',
    isoNo: '498',
    internet: 'MD'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Monaco',
    capital: 'Monaco',
    fips: 'MN',
    iso2: 'MC',
    iso3: 'MCO',
    isoNo: '492',
    internet: 'MC'
  },
  {
    continent: 'Asia',
    region: 'Northern Asia',
    country: 'Mongolia',
    capital: 'Ulaanbaatar',
    fips: 'MG',
    iso2: 'MN',
    iso3: 'MNG',
    isoNo: '496',
    internet: 'MN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Montserrat',
    capital: 'Plymouth',
    fips: 'MH',
    iso2: 'MS',
    iso3: 'MSR',
    isoNo: '500',
    internet: 'MS'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Morocco',
    capital: 'Rabat',
    fips: 'MO',
    iso2: 'MA',
    iso3: 'MAR',
    isoNo: '504',
    internet: 'MA'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Mozambique',
    capital: 'Maputo',
    fips: 'MZ',
    iso2: 'MZ',
    iso3: 'MOZ',
    isoNo: '508',
    internet: 'MZ'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Myanmar (Burma)',
    capital: 'Rangoon (Yangon)',
    fips: 'BM',
    iso2: 'MM',
    iso3: 'MMR',
    isoNo: '104',
    internet: 'MM'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Namibia',
    capital: 'Windhoek',
    fips: 'WA',
    iso2: 'NA',
    iso3: 'NAM',
    isoNo: '516',
    internet: 'NA'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Nauru',
    capital: 'no official capital',
    fips: 'NR',
    iso2: 'NR',
    iso3: 'NRU',
    isoNo: '520',
    internet: 'NR'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Nepal',
    capital: 'Kathmandu',
    fips: 'NP',
    iso2: 'NP',
    iso3: 'NPL',
    isoNo: '524',
    internet: 'NP'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Netherlands',
    capital: 'Amsterdam',
    fips: 'NL',
    iso2: 'NL',
    iso3: 'NLD',
    isoNo: '528',
    internet: 'NL'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Netherlands Antilles',
    capital: 'Willemstad',
    fips: 'NT',
    iso2: 'AN',
    iso3: 'ANT',
    isoNo: '530',
    internet: 'AN'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'New Caledonia',
    capital: 'Noumea',
    fips: 'NC',
    iso2: 'NC',
    iso3: 'NCL',
    isoNo: '540',
    internet: 'NC'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'New Zealand',
    capital: 'Wellington',
    fips: 'NZ',
    iso2: 'NZ',
    iso3: 'NZL',
    isoNo: '554',
    internet: 'NZ'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Nicaragua',
    capital: 'Managua',
    fips: 'NU',
    iso2: 'NI',
    iso3: 'NIC',
    isoNo: '558',
    internet: 'NI'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Niger',
    capital: 'Niamey',
    fips: 'NG',
    iso2: 'NE',
    iso3: 'NER',
    isoNo: '562',
    internet: 'NE'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Nigeria',
    capital: 'Abuja',
    fips: 'NI',
    iso2: 'NG',
    iso3: 'NGA',
    isoNo: '566',
    internet: 'NG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Niue',
    capital: 'Alofi',
    fips: 'NE',
    iso2: 'NU',
    iso3: 'NIU',
    isoNo: '570',
    internet: 'NU'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Norfolk Island',
    capital: 'Kingston',
    fips: 'NF',
    iso2: 'NF',
    iso3: 'NFK',
    isoNo: '574',
    internet: 'NF'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Northern Mariana Islands',
    capital: 'Saipan',
    fips: 'CQ',
    iso2: 'MP',
    iso3: 'MNP',
    isoNo: '580',
    internet: 'MP'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Norway',
    capital: 'Oslo',
    fips: 'NO',
    iso2: 'NO',
    iso3: 'NOR',
    isoNo: '578',
    internet: 'NO'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Oman',
    capital: 'Muscat',
    fips: 'MU',
    iso2: 'OM',
    iso3: 'OMN',
    isoNo: '512',
    internet: 'OM'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Pakistan',
    capital: 'Islamabad',
    fips: 'PK',
    iso2: 'PK',
    iso3: 'PAK',
    isoNo: '586',
    internet: 'PK'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Palau',
    capital: 'Koror',
    fips: 'PS',
    iso2: 'PW',
    iso3: 'PLW',
    isoNo: '585',
    internet: 'PW'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Palestinian Territory',
    capital: 'East Jerusalem',
    fips: 'WE',
    iso2: 'PS',
    iso3: 'PSE',
    isoNo: '275',
    internet: 'PS'
  },
  {
    continent: 'Americas',
    region: 'Central America',
    country: 'Panama',
    capital: 'Panama',
    fips: 'PM',
    iso2: 'PA',
    iso3: 'PAN',
    isoNo: '591',
    internet: 'PA'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Papua New Guinea',
    capital: 'Port Moresby',
    fips: 'PP',
    iso2: 'PG',
    iso3: 'PNG',
    isoNo: '598',
    internet: 'PG'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Paraguay',
    capital: 'Asuncion',
    fips: 'PA',
    iso2: 'PY',
    iso3: 'PRY',
    isoNo: '600',
    internet: 'PY'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Peru',
    capital: 'Lima',
    fips: 'PE',
    iso2: 'PE',
    iso3: 'PER',
    isoNo: '604',
    internet: 'PE'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Philippines',
    capital: 'Manila',
    fips: 'RP',
    iso2: 'PH',
    iso3: 'PHL',
    isoNo: '608',
    internet: 'PH'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Pitcairn Islands',
    capital: 'Adamstown',
    fips: 'PC',
    iso2: 'PN',
    iso3: 'PCN',
    isoNo: '612',
    internet: 'PN'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Poland',
    capital: 'Warsaw',
    fips: 'PL',
    iso2: 'PL',
    iso3: 'POL',
    isoNo: '616',
    internet: 'PL'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Portugal',
    capital: 'Lisbon',
    fips: 'PO',
    iso2: 'PT',
    iso3: 'PRT',
    isoNo: '620',
    internet: 'PT'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Puerto Rico',
    capital: 'San Juan',
    fips: 'RQ',
    iso2: 'PR',
    iso3: 'PRI',
    isoNo: '630',
    internet: 'PR'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Qatar',
    capital: 'Doha',
    fips: 'QA',
    iso2: 'QA',
    iso3: 'QAT',
    isoNo: '634',
    internet: 'QA'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Reunion',
    capital: 'Saint-Denis',
    fips: 'RE',
    iso2: 'RE',
    iso3: 'REU',
    isoNo: '638',
    internet: 'RE'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Romania',
    capital: 'Bucharest',
    fips: 'RO',
    iso2: 'RO',
    iso3: 'ROU',
    isoNo: '642',
    internet: 'RO'
  },
  {
    continent: 'Asia',
    region: 'Northern Asia',
    country: 'Russia',
    capital: 'Moscow',
    fips: 'RS',
    iso2: 'RU',
    iso3: 'RUS',
    isoNo: '643',
    internet: 'RU'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Rwanda',
    capital: 'Kigali',
    fips: 'RW',
    iso2: 'RW',
    iso3: 'RWA',
    isoNo: '646',
    internet: 'RW'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    fips: 'SC',
    iso2: 'KN',
    iso3: 'KNA',
    isoNo: '659',
    internet: 'KN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Lucia',
    capital: 'Castries',
    fips: 'ST',
    iso2: 'LC',
    iso3: 'LCA',
    isoNo: '662',
    internet: 'LC'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    fips: 'SB',
    iso2: 'PM',
    iso3: 'SPM',
    isoNo: '666',
    internet: 'PM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    fips: 'VC',
    iso2: 'VC',
    iso3: 'VCT',
    isoNo: '670',
    internet: 'VC'
  },
  {
    continent: 'Europe',
    region: 'Southern Europe',
    country: 'San Marino',
    capital: 'San Marino',
    fips: 'SM',
    iso2: 'SM',
    iso3: 'SMR',
    isoNo: '674',
    internet: 'SM'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Sao Tome and Principe',
    capital: 'Sao Tome',
    fips: 'TP',
    iso2: 'ST',
    iso3: 'STP',
    isoNo: '678',
    internet: 'ST'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Saudi Arabia',
    capital: 'Riyadh',
    fips: 'SA',
    iso2: 'SA',
    iso3: 'SAU',
    isoNo: '682',
    internet: 'SA'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Senegal',
    capital: 'Dakar',
    fips: 'SG',
    iso2: 'SN',
    iso3: 'SEN',
    isoNo: '686',
    internet: 'SN'
  },
  {
    continent: 'Africa',
    region: 'Indian Ocean',
    country: 'Seychelles',
    capital: 'Victoria',
    fips: 'SE',
    iso2: 'SC',
    iso3: 'SYC',
    isoNo: '690',
    internet: 'SC'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Sierra Leone',
    capital: 'Freetown',
    fips: 'SL',
    iso2: 'SL',
    iso3: 'SLE',
    isoNo: '694',
    internet: 'SL'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Singapore',
    capital: 'Singapore',
    fips: 'SN',
    iso2: 'SG',
    iso3: 'SGP',
    isoNo: '702',
    internet: 'SG'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Slovakia',
    capital: 'Bratislava',
    fips: 'LO',
    iso2: 'SK',
    iso3: 'SVK',
    isoNo: '703',
    internet: 'SK'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Slovenia',
    capital: 'Ljubljana',
    fips: 'SI',
    iso2: 'SI',
    iso3: 'SVN',
    isoNo: '705',
    internet: 'SI'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Solomon Islands',
    capital: 'Honiara',
    fips: 'BP',
    iso2: 'SB',
    iso3: 'SLB',
    isoNo: '90',
    internet: 'SB'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Somalia',
    capital: 'Mogadishu',
    fips: 'SO',
    iso2: 'SO',
    iso3: 'SOM',
    isoNo: '706',
    internet: 'SO'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'South Africa',
    capital: 'Pretoria��',
    fips: 'SF',
    iso2: 'ZA',
    iso3: 'ZAF',
    isoNo: '710',
    internet: 'ZA'
  },
  {
    continent: 'Europe',
    region: 'South West Europe',
    country: 'Spain',
    capital: 'Madrid',
    fips: 'SP',
    iso2: 'ES',
    iso3: 'ESP',
    isoNo: '724',
    internet: 'ES'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'Sri Lanka',
    capital: 'Colombo',
    fips: 'CE',
    iso2: 'LK',
    iso3: 'LKA',
    isoNo: '144',
    internet: 'LK'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Sudan',
    capital: 'Khartoum',
    fips: 'SU',
    iso2: 'SD',
    iso3: 'SDN',
    isoNo: '736',
    internet: 'SD'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Suriname',
    capital: 'Paramaribo',
    fips: 'NS',
    iso2: 'SR',
    iso3: 'SUR',
    isoNo: '740',
    internet: 'SR'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Svalbard',
    capital: 'Longyearbyen',
    fips: 'SV',
    iso2: 'SJ',
    iso3: 'SJM',
    isoNo: '744',
    internet: 'SJ'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Eswatini',
    capital: 'Mbabane',
    fips: 'WZ',
    iso2: 'SZ',
    iso3: 'SWZ',
    isoNo: '748',
    internet: 'SZ'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Sweden',
    capital: 'Stockholm',
    fips: 'SW',
    iso2: 'SE',
    iso3: 'SWE',
    isoNo: '752',
    internet: 'SE'
  },
  {
    continent: 'Europe',
    region: 'Central Europe',
    country: 'Switzerland',
    capital: 'Bern',
    fips: 'SZ',
    iso2: 'CH',
    iso3: 'CHE',
    isoNo: '756',
    internet: 'CH'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Syria',
    capital: 'Damascus',
    fips: 'SY',
    iso2: 'SY',
    iso3: 'SYR',
    isoNo: '760',
    internet: 'SY'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Taiwan',
    capital: 'Taipei',
    fips: 'TW',
    iso2: 'TW',
    iso3: 'TWN',
    isoNo: '158',
    internet: 'TW'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Tajikistan',
    capital: 'Dushanbe',
    fips: 'TI',
    iso2: 'TJ',
    iso3: 'TJK',
    isoNo: '762',
    internet: 'TJ'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Tanzania',
    capital: 'Dar es Salaam',
    fips: 'TZ',
    iso2: 'TZ',
    iso3: 'TZA',
    isoNo: '834',
    internet: 'TZ'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Thailand',
    capital: 'Bangkok',
    fips: 'TH',
    iso2: 'TH',
    iso3: 'THA',
    isoNo: '764',
    internet: 'TH'
  },
  {
    continent: 'Africa',
    region: 'Western Africa',
    country: 'Togo',
    capital: 'Lome',
    fips: 'TO',
    iso2: 'TG',
    iso3: 'TGO',
    isoNo: '768',
    internet: 'TG'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tokelau',
    capital: 'none',
    fips: 'TL',
    iso2: 'TK',
    iso3: 'TKL',
    isoNo: '772',
    internet: 'TK'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tonga',
    capital: "Nuku'alofa",
    fips: 'TN',
    iso2: 'TO',
    iso3: 'TON',
    isoNo: '776',
    internet: 'TO'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Trinidad and Tobago',
    capital: 'Port-of-Spain',
    fips: 'TD',
    iso2: 'TT',
    iso3: 'TTO',
    isoNo: '780',
    internet: 'TT'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Tunisia',
    capital: 'Tunis',
    fips: 'TS',
    iso2: 'TN',
    iso3: 'TUN',
    isoNo: '788',
    internet: 'TN'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Turkey',
    capital: 'Ankara',
    fips: 'TU',
    iso2: 'TR',
    iso3: 'TUR',
    isoNo: '792',
    internet: 'TR'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Turkmenistan',
    capital: 'Ashgabat',
    fips: 'TX',
    iso2: 'TM',
    iso3: 'TKM',
    isoNo: '795',
    internet: 'TM'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Turks and Caicos Islands',
    capital: 'Grand Turk',
    fips: 'TK',
    iso2: 'TC',
    iso3: 'TCA',
    isoNo: '796',
    internet: 'TC'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Tuvalu',
    capital: 'Funafuti',
    fips: 'TV',
    iso2: 'TV',
    iso3: 'TUV',
    isoNo: '798',
    internet: 'TV'
  },
  {
    continent: 'Africa',
    region: 'Eastern Africa',
    country: 'Uganda',
    capital: 'Kampala',
    fips: 'UG',
    iso2: 'UG',
    iso3: 'UGA',
    isoNo: '800',
    internet: 'UG'
  },
  {
    continent: 'Europe',
    region: 'Eastern Europe',
    country: 'Ukraine',
    capital: 'Kiev',
    fips: 'UP',
    iso2: 'UA',
    iso3: 'UKR',
    isoNo: '804',
    internet: 'UA'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    fips: 'TC',
    iso2: 'AE',
    iso3: 'ARE',
    isoNo: '784',
    internet: 'AE'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'United Kingdom',
    capital: 'London',
    fips: 'UK',
    iso2: 'GB',
    iso3: 'GBR',
    isoNo: '826',
    internet: 'UK'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'United States',
    capital: 'Washington DC',
    fips: 'US',
    iso2: 'US',
    iso3: 'USA',
    isoNo: '840',
    internet: 'US'
  },
  {
    continent: 'Americas',
    region: 'North America',
    country: 'United States Minor Outlying Islands',
    capital: 'Washington DC',
    fips: '',
    iso2: 'UM',
    iso3: 'UMI',
    isoNo: '581',
    internet: 'US'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Uruguay',
    capital: 'Montevideo',
    fips: 'UY',
    iso2: 'UY',
    iso3: 'URY',
    isoNo: '858',
    internet: 'UY'
  },
  {
    continent: 'Asia',
    region: 'Central Asia',
    country: 'Uzbekistan',
    capital: 'Tashkent (Toshkent)',
    fips: 'UZ',
    iso2: 'UZ',
    iso3: 'UZB',
    isoNo: '860',
    internet: 'UZ'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Vanuatu',
    capital: 'Port-Vila',
    fips: 'NH',
    iso2: 'VU',
    iso3: 'VUT',
    isoNo: '548',
    internet: 'VU'
  },
  {
    continent: 'Americas',
    region: 'South America',
    country: 'Venezuela',
    capital: 'Caracas',
    fips: 'VE',
    iso2: 'VE',
    iso3: 'VEN',
    isoNo: '862',
    internet: 'UE'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Vietnam',
    capital: 'Hanoi',
    fips: 'VN',
    iso2: 'VN',
    iso3: 'VNM',
    isoNo: '704',
    internet: 'VN'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Virgin Islands',
    capital: 'Charlotte Amalie',
    fips: 'VQ',
    iso2: 'VI',
    iso3: 'VIR',
    isoNo: '850',
    internet: 'VI'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Wallis and Futuna',
    capital: 'Mata-Utu (on Ile Uvea)',
    fips: 'WF',
    iso2: 'WF',
    iso3: 'WLF',
    isoNo: '876',
    internet: 'WF'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'Western Sahara',
    capital: 'none',
    fips: 'WI',
    iso2: 'EH',
    iso3: 'ESH',
    isoNo: '732',
    internet: 'EH'
  },
  {
    continent: 'Oceania',
    region: 'Pacific',
    country: 'Western Samoa',
    capital: 'Apia',
    fips: 'WS',
    iso2: 'WS',
    iso3: 'WSM',
    isoNo: '882',
    internet: 'WS'
  },
  {
    continent: 'Asia',
    region: 'South West Asia',
    country: 'Yemen',
    capital: 'Sanaa',
    fips: 'YM',
    iso2: 'YE',
    iso3: 'YEM',
    isoNo: '887',
    internet: 'YE'
  },
  {
    continent: 'Africa',
    region: 'Central Africa',
    country: 'Democratic Republic of the Congo',
    capital: 'Kinshasa',
    fips: 'CG',
    iso2: 'CD',
    iso3: 'COD',
    isoNo: '180',
    internet: 'ZR'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Zambia',
    capital: 'Lusaka',
    fips: 'ZA',
    iso2: 'ZM',
    iso3: 'ZMB',
    isoNo: '894',
    internet: 'ZM'
  },
  {
    continent: 'Africa',
    region: 'Southern Africa',
    country: 'Zimbabwe',
    capital: 'Harare',
    fips: 'ZI',
    iso2: 'ZW',
    iso3: 'ZWE',
    isoNo: '716',
    internet: 'ZW'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Hong Kong',
    capital: 'Victoria',
    fips: 'HK',
    iso2: 'HK',
    iso3: 'HKG',
    isoNo: '344',
    internet: 'HK'
  },
  {
    continent: 'Asia',
    region: 'East Asia',
    country: 'Macau',
    capital: 'Macau',
    fips: 'MC',
    iso2: 'MO',
    iso3: 'MAC',
    isoNo: '446',
    internet: 'MO'
  },
  {
    continent: 'Antarctica',
    region: 'Antarctica',
    country: 'Antarctica',
    capital: '',
    fips: 'AY',
    iso2: 'AQ',
    iso3: 'ATA',
    isoNo: '10',
    internet: 'AQ'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'Bouvet Island',
    capital: '',
    fips: 'BV',
    iso2: 'BV',
    iso3: 'BVT',
    isoNo: '74',
    internet: 'BV'
  },
  {
    continent: 'Asia',
    region: 'South Asia',
    country: 'British Indian Ocean Territory',
    capital: '',
    fips: 'IO',
    iso2: 'IO',
    iso3: 'IOT',
    isoNo: '86',
    internet: 'IO'
  },
  {
    continent: 'Indian Ocean',
    region: 'Southern Indian Ocean',
    country: 'French Southern and Antarctic Lands',
    capital: '',
    fips: 'FS',
    iso2: 'TF',
    iso3: 'ATF',
    isoNo: '260',
    internet: '--'
  },
  {
    continent: 'Indian Ocean',
    region: 'Southern Indian Ocean',
    country: 'Heard Island and McDonald Islands',
    capital: '',
    fips: 'HM',
    iso2: 'HM',
    iso3: 'HMD',
    isoNo: '334',
    internet: 'HM'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'Saint Helena',
    capital: '',
    fips: 'SH',
    iso2: 'SH',
    iso3: 'SHN',
    isoNo: '654',
    internet: 'SH'
  },
  {
    continent: 'Atlantic Ocean',
    region: 'South Atlantic Ocean',
    country: 'South Georgia and the South Sandwich Islands',
    capital: '',
    fips: 'SX',
    iso2: 'GS',
    iso3: 'SGS',
    isoNo: '239',
    internet: 'GS'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Guernsey',
    capital: 'Saint Peter Port',
    fips: 'GK',
    iso2: 'GG',
    iso3: 'GGY',
    isoNo: '831',
    internet: 'GG'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Serbia',
    capital: 'Belgrade',
    fips: 'RI',
    iso2: 'RS',
    iso3: 'SRB',
    isoNo: '688',
    internet: 'RS'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Barthélemy',
    capital: 'Gustavia',
    fips: 'TB',
    iso2: 'BL',
    iso3: 'BLM',
    isoNo: '652',
    internet: 'BL'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Montenegro',
    capital: 'Podgorica',
    fips: 'MJ',
    iso2: 'ME',
    iso3: 'MNE',
    isoNo: '499',
    internet: 'ME'
  },
  {
    continent: 'Europe',
    region: 'Western Europe',
    country: 'Jersey',
    capital: 'Saint Helier',
    fips: 'JE',
    iso2: 'JE',
    iso3: 'JEY',
    isoNo: '832',
    internet: 'JE'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Curaçao',
    capital: 'Willemstad',
    fips: 'UC',
    iso2: 'CW',
    iso3: 'CUW',
    isoNo: '531',
    internet: 'CW'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Saint Martin',
    capital: 'Marigot',
    fips: 'RN',
    iso2: 'MF',
    iso3: 'MAF',
    isoNo: '663',
    internet: 'MF'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Sint Maarten',
    capital: 'Philipsburg',
    fips: 'NN',
    iso2: 'SX',
    iso3: 'SXM',
    isoNo: '534',
    internet: 'SX'
  },
  {
    continent: 'Asia',
    region: 'South East Asia',
    country: 'Timor-Leste',
    capital: 'Dili',
    fips: 'TT',
    iso2: 'TL',
    iso3: 'TLS',
    isoNo: '626',
    internet: 'TL'
  },
  {
    continent: 'Africa',
    region: 'Northern Africa',
    country: 'South Sudan',
    capital: 'Juba',
    fips: 'OD',
    iso2: 'SS',
    iso3: 'SSD',
    isoNo: '728',
    internet: 'SS'
  },
  {
    continent: 'Europe',
    region: 'Northern Europe',
    country: 'Åland Islands',
    capital: 'Mariehamn',
    fips: 'AX',
    iso2: 'AX',
    iso3: 'ALA',
    isoNo: '248',
    internet: 'AX'
  },
  {
    continent: 'Americas',
    region: 'West Indies',
    country: 'Bonaire',
    capital: 'Kralendijk',
    fips: 'BQ',
    iso2: 'BQ',
    iso3: 'BES',
    isoNo: '535',
    internet: 'BQ'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Republic of Kosovo',
    capital: 'Pristina',
    fips: 'KV',
    iso2: 'XK',
    iso3: 'UNK',
    isoNo: null,
    internet: 'XK'
  },
]

module.exports.countries = countries


/***/ }),

/***/ "./node_modules/us-state-converter/index.js":
/*!**************************************************!*\
  !*** ./node_modules/us-state-converter/index.js ***!
  \**************************************************/
/***/ ((module) => {

const list = [
  {
    name: 'Alabama',
    usps: 'AL',
    demonym: 'Alabamian',
    iso: 'US-AL',
    altAbbr: ['Ala'],
    uscg: 'AL',
  },
  {
    name: 'Alaska',
    usps: 'AK',
    demonym: 'Alaskan',
    iso: 'US-AK',
    altAbbr: ['Alas'],
    uscg: 'AK',
  },
  {
    name: 'Arizona',
    usps: 'AZ',
    demonym: 'Arizonan',
    iso: 'US-AZ',
    altAbbr: ['Ariz'],
    uscg: 'AZ',
  },
  {
    name: 'Arkansas',
    usps: 'AR',
    demonym: 'Arkansan',
    iso: 'US-AR',
    altAbbr: ['Ark'],
    uscg: 'AR',
  },
  {
    name: 'California',
    usps: 'CA',
    demonym: 'Californian',
    iso: 'US-CA',
    altAbbr: ['Cal', 'Calif'],
    uscg: 'CF',
  },
  {
    name: 'Colorado',
    usps: 'CO',
    demonym: 'Coloradan',
    iso: 'US-CO',
    altAbbr: ['Colo', 'Col'],
    uscg: 'CL',
  },
  {
    name: 'Connecticut',
    usps: 'CT',
    demonym: 'Connecticuter',
    iso: 'US-CT',
    altAbbr: ['Conn'],
    uscg: 'CT',
  },
  {
    name: 'Delaware',
    usps: 'DE',
    demonym: 'Delawarean',
    iso: 'US-DE',
    altAbbr: ['Del'],
    uscg: 'DL',
  },
  {
    name: 'District of Columbia',
    usps: 'DC',
    demonym: 'Washingtonian',
    iso: 'US-DC',
    altAbbr: ['Wash DC'],
    uscg: 'DC',
  },
  {
    name: 'Florida',
    usps: 'FL',
    demonym: 'Floridian',
    iso: 'US-FL',
    altAbbr: ['Fla', 'Flor'],
    uscg: 'FL',
  },
  {
    name: 'Georgia',
    usps: 'GA',
    demonym: 'Georgian',
    iso: 'US-GA',
    altAbbr: ['Geo'],
    uscg: 'GA',
  },
  {
    name: 'Hawaii',
    usps: 'HI',
    demonym: 'Hawaii resident',
    iso: 'US-HI',
    altAbbr: ['Geo'],
    uscg: 'HA',
  },
  {
    name: 'Idaho',
    usps: 'ID',
    demonym: 'Idahoan',
    iso: 'US-ID',
    altAbbr: ['Ida'],
    uscg: 'ID',
  },
  {
    name: 'Illinois',
    usps: 'IL',
    demonym: 'Illinoisan',
    iso: 'US-IL',
    altAbbr: ['Ill', 'Ills', "Ill's"],
    uscg: 'IL',
  },
  {
    name: 'Indiana',
    usps: 'IN',
    demonym: 'Hoosier',
    iso: 'US-IN',
    altAbbr: ['Ind'],
    uscg: 'IN',
  },
  {
    name: 'Iowa',
    usps: 'IA',
    demonym: 'Iowan',
    iso: 'US-IA',
    altAbbr: ['Ioa'],
    uscg: 'IA',
  },
  {
    name: 'Kansas',
    usps: 'KS',
    demonym: 'Kansan',
    iso: 'US-KS',
    altAbbr: ['Kans', 'Kan'],
    uscg: 'KA',
  },
  {
    name: 'Kentucky',
    usps: 'KY',
    demonym: 'Kentuckian',
    iso: 'US-KY',
    altAbbr: ['Ken', 'Kent'],
    uscg: 'KY',
  },
  {
    name: 'Louisiana',
    usps: 'LA',
    demonym: 'Louisianian',
    iso: 'US-LA',
    altAbbr: [],
    uscg: 'LA',
  },
  {
    name: 'Maine',
    usps: 'ME',
    demonym: 'Mainer',
    iso: 'US-ME',
    altAbbr: [],
    uscg: 'ME',
  },
  {
    name: 'Maryland',
    usps: 'MD',
    demonym: 'Marylander',
    iso: 'US-MD',
    altAbbr: [],
    uscg: 'MD',
  },
  {
    name: 'Massachusetts',
    usps: 'MA',
    demonym: 'Massachusettsan',
    iso: 'US-MA',
    altAbbr: ['Mass'],
    uscg: 'MS',
  },
  {
    name: 'Michigan',
    usps: 'MI',
    demonym: 'Michiganian',
    iso: 'US-MI',
    altAbbr: ['Mich'],
    uscg: 'MC',
  },
  {
    name: 'Minnesota',
    usps: 'MN',
    demonym: 'Minnesotan',
    iso: 'US-MN',
    altAbbr: ['Minn'],
    uscg: 'MN',
  },
  {
    name: 'Mississippi',
    usps: 'MS',
    demonym: 'Mississippian',
    iso: 'US-MS',
    altAbbr: ['Miss'],
    uscg: 'MI',
  },
  {
    name: 'Missouri',
    usps: 'MO',
    demonym: 'Missourian',
    iso: 'US-MO',
    altAbbr: [],
    uscg: 'MO',
  },
  {
    name: 'Montana',
    usps: 'MT',
    demonym: 'Montanan',
    iso: 'US-MT',
    altAbbr: ['Mont'],
    uscg: 'MT',
  },
  {
    name: 'Nebraska',
    usps: 'NE',
    demonym: 'Nebraskan',
    iso: 'US-NE',
    altAbbr: ['Nebr', 'Neb'],
    uscg: 'NB',
  },
  {
    name: 'Nevada',
    usps: 'NV',
    demonym: 'Nevadan',
    iso: 'US-NV',
    altAbbr: ['Nev'],
    uscg: 'NV',
  },
  {
    name: 'Nevada',
    usps: 'NV',
    demonym: 'Nevadan',
    iso: 'US-NV',
    altAbbr: ['Nev'],
    uscg: 'NV',
  },
  {
    name: 'New Hampshire',
    usps: 'NH',
    demonym: 'New Hampshirite',
    iso: 'US-NH',
    altAbbr: [],
    uscg: 'NH',
  },
  {
    name: 'New Jersey',
    usps: 'NJ',
    demonym: 'New Jerseyan',
    iso: 'US-NJ',
    altAbbr: ['N Jersey'],
    uscg: 'NJ',
  },
  {
    name: 'New Mexico',
    usps: 'NM',
    demonym: 'New Mexican',
    iso: 'US-NM',
    altAbbr: ['N Mex', 'New M'],
    uscg: 'NM',
  },
  {
    name: 'New York',
    usps: 'NY',
    demonym: 'New Yorker',
    iso: 'US-NY',
    altAbbr: ['N York'],
    uscg: 'NY',
  },
  {
    name: 'North Carolina',
    usps: 'NC',
    demonym: 'North Carolinian',
    iso: 'US-NC',
    altAbbr: ['N Car'],
    uscg: 'NC',
  },
  {
    name: 'North Dakota',
    usps: 'ND',
    demonym: 'North Dakotan',
    iso: 'US-ND',
    altAbbr: ['N Dak', 'NoDak'],
    uscg: 'ND',
  },
  {
    name: 'Ohio',
    usps: 'OH',
    demonym: 'Ohioan',
    iso: 'US-OH',
    altAbbr: ['O'],
    uscg: 'OH',
  },
  {
    name: 'Oklahoma',
    usps: 'OK',
    demonym: 'Oklahoman',
    iso: 'US-OK',
    altAbbr: ['Okla'],
    uscg: 'OK',
  },
  {
    name: 'Oregon',
    usps: 'OR',
    demonym: 'Oregonian',
    iso: 'US-OR',
    altAbbr: ['Ore'],
    uscg: 'OR',
  },
  {
    name: 'Pennsylvania',
    usps: 'PA',
    demonym: 'Pennsylvanian',
    iso: 'US-PA',
    altAbbr: ['Penn', 'Penna'],
    uscg: 'PA',
  },
  {
    name: 'Rhode Island',
    usps: 'RI',
    demonym: 'Rhode Islander',
    iso: 'US-RI',
    altAbbr: ['RI & PP', 'R Isl'],
    uscg: 'RI',
  },
  {
    name: 'South Carolina',
    usps: 'SC',
    demonym: 'South Carolinian',
    iso: 'US-SC',
    altAbbr: ['S Car'],
    uscg: 'SC',
  },
  {
    name: 'South Dakota',
    usps: 'SD',
    demonym: 'South Dakotan',
    iso: 'US-SD',
    altAbbr: ['S Dak', 'SoDak'],
    uscg: 'SD',
  },
  {
    name: 'Tennessee',
    usps: 'TN',
    demonym: 'Tennessean',
    iso: 'US-TN',
    altAbbr: ['Tenn'],
    uscg: 'TN',
  },
  {
    name: 'Texas',
    usps: 'TX',
    demonym: 'Texan',
    iso: 'US-TX',
    altAbbr: ['Tex'],
    uscg: 'TX',
  },
  {
    name: 'Utah',
    usps: 'UT',
    demonym: 'Utahn',
    iso: 'US-UT',
    altAbbr: [],
    uscg: 'UT',
  },
  {
    name: 'Vermont',
    usps: 'VT',
    demonym: 'Vermonter',
    iso: 'US-VT',
    altAbbr: [],
    uscg: 'VT',
  },
  {
    name: 'Virginia',
    usps: 'VA',
    demonym: 'Virginian',
    iso: 'US-VA',
    altAbbr: ['Virg'],
    uscg: 'VA',
  },
  {
    name: 'Washington',
    usps: 'WA',
    demonym: 'Washingtonian',
    iso: 'US-WA',
    altAbbr: ['Wash', 'Wn'],
    uscg: 'WN',
  },
  {
    name: 'West Virginia',
    usps: 'WV',
    demonym: 'West Virginian',
    iso: 'US-WV',
    altAbbr: ['W Va', 'W Virg'],
    uscg: 'WV',
  },
  {
    name: 'Wisconsin',
    usps: 'WI',
    demonym: 'Wisconsinite',
    iso: 'US-WI',
    altAbbr: ['Wis', 'Wisc'],
    uscg: 'WS',
  },
  {
    name: 'Wyoming',
    usps: 'WY',
    demonym: 'Wyomingite',
    iso: 'US-WY',
    altAbbr: ['Wyo'],
    uscg: 'WY',
  },
  {
    name: 'American Samoa',
    usps: 'AS',
    demonym: 'American Samoan',
    iso: 'US-AS',
    altAbbr: [],
    uscg: 'AS',
  },
  {
    name: 'Guam',
    usps: 'GU',
    demonym: 'Guamanian',
    iso: 'US-GU',
    altAbbr: [],
    uscg: 'GU',
  },
  {
    name: 'Northern Mariana Islands',
    usps: 'MP',
    demonym: 'Mariana Islander',
    iso: 'US-MP',
    altAbbr: ['CNMI'],
    uscg: 'CM',
  },
  {
    name: 'Puerto Rico',
    usps: 'PR',
    demonym: 'Puerto Rican',
    iso: 'US-PR',
    altAbbr: [],
    uscg: 'PR',
  },
  {
    name: 'US Virgin Islands',
    usps: 'VI',
    demonym: 'Virgin Islander',
    iso: 'US-VI',
    altAbbr: ['USVI'],
    uscg: 'VI',
  },
  {
    name: 'US Minor Outlying Islands',
    usps: 'UM',
    demonym: '',
    iso: 'US-UM',
    altAbbr: [],
    uscg: 'UM',
  },
]

module.exports = (() => {
  const main = state => {
    if (!state) return list
    state = state.split('.').join('')
    const found = list.find(
      item =>
        item.name.toUpperCase() === state.toUpperCase() ||
        item.usps.toUpperCase() === state.toUpperCase() ||
        item.altAbbr.find(st => st.toUpperCase() === state.toUpperCase()),
    )
    if (found) return found

    return 'No state found!'
  }

  main.abbr = state => {
    if (!state) return 'Please pass a full state name as your argument'
    const found = list.find(
      item => item.name.toUpperCase() === state.toUpperCase(),
    )
    if (found) return found.usps
    return 'No abbreviation found with that state name'
  }

  main.fullName = abbr => {
    if (!abbr) return 'Please pass an abbreviation as your argument'
    const found = list.find(
      item =>
        item.usps.toUpperCase() === abbr.toUpperCase() ||
        item.altAbbr.find(st => st.toUpperCase() === abbr.toUpperCase()),
    )
    if (found) return found.name
    return 'No state found with that abbreviation'
  }

  main.only50 = () => {
    const notStates = ['DC', 'AS', 'GU', 'MP', 'PR', 'VI', 'UM']
    return list.filter(item => !notStates.includes(item.usps))
  }

  main.demonym = state => {
    if (!state)
      return 'Please pass a state name or abbreviation as your argument'
    const found = list.find(
      item =>
        item.name.toUpperCase() === state.toUpperCase() ||
        item.usps.toUpperCase() === state.toUpperCase() ||
        item.altAbbr.find(st => st.toUpperCase() === state.toUpperCase()),
    )
    if (found) return found.demonym
    return 'No demonym found for that state'
  }

  return main
})()


/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _media_clearsky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media/clearsky.png */ "./src/media/clearsky.png");
/* harmony import */ var _media_fewclouds_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/fewclouds.png */ "./src/media/fewclouds.png");
/* harmony import */ var _media_scatteredclouds_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/scatteredclouds.png */ "./src/media/scatteredclouds.png");
/* harmony import */ var _media_brokenclouds_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/brokenclouds.png */ "./src/media/brokenclouds.png");
/* harmony import */ var _media_showerrain_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/showerrain.png */ "./src/media/showerrain.png");
/* harmony import */ var _media_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/rain.png */ "./src/media/rain.png");
/* harmony import */ var _media_thunderstorm_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/thunderstorm.png */ "./src/media/thunderstorm.png");
/* harmony import */ var _media_snow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/snow.png */ "./src/media/snow.png");
/* harmony import */ var _media_mist_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media/mist.png */ "./src/media/mist.png");
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */










const DOM = (() => {
    const formatWeather = (weatherArr) => {
        weatherArr.forEach((word, index) => {
            weatherArr[index] = word[0].toUpperCase() + word.substring(1);
        });
        return weatherArr.join(' ');
    };
    const formatDate = (weatherData, dateNum) => {
        let dateTxt = new Date(weatherData.list[dateNum].dt_txt.substring(0, 10));
        dateTxt.setDate(dateTxt.getDate() + 1);
        dateTxt = dateTxt.toString();
        dateTxt = dateTxt.substring(4, 15);
        return `${dateTxt.substring(0, dateTxt.length - 4)}, ${dateTxt.substring(dateTxt.length - 4, dateTxt.length)}`;
    };
    const findIcon = (weatherData, dateNum) => {
        const code = weatherData.list[dateNum].weather[0].icon;
        let iconsrc;
        if (code === '01d' || code === '01n') {
            iconsrc = _media_clearsky_png__WEBPACK_IMPORTED_MODULE_0__;
        } else if (code === '02d' || code === '02n') {
            iconsrc = _media_fewclouds_png__WEBPACK_IMPORTED_MODULE_1__;
        } else if (code === '03d' || code === '03n') {
            iconsrc = _media_scatteredclouds_png__WEBPACK_IMPORTED_MODULE_2__;
        } else if (code === '04d' || code === '04n') {
            iconsrc = _media_brokenclouds_png__WEBPACK_IMPORTED_MODULE_3__;
        } else if (code === '09d' || code === '09n') {
            iconsrc = _media_showerrain_png__WEBPACK_IMPORTED_MODULE_4__;
        } else if (code === '10d' || code === '10n') {
            iconsrc = _media_rain_png__WEBPACK_IMPORTED_MODULE_5__;
        } else if (code === '11d' || code === '11n') {
            iconsrc = _media_thunderstorm_png__WEBPACK_IMPORTED_MODULE_6__;
        } else if (code === '13d' || code === '13n') {
            iconsrc = _media_snow_png__WEBPACK_IMPORTED_MODULE_7__;
        } else {
            iconsrc = _media_mist_png__WEBPACK_IMPORTED_MODULE_8__;
        }
        return iconsrc;
    };
    const renderMainWeather = (weatherData) => {
        const location = document.querySelector('.location');
        location.textContent = `${weatherData.city.name}, ${weatherData.city.country}`;

        const weather = document.querySelector('.weather');
        weather.textContent = formatWeather(weatherData.list[0].weather[0].description.split(' '));

        const date = document.querySelector('.date');
        date.textContent = formatDate(weatherData, 0);

        const temperature = document.querySelector('.temp');
        temperature.textContent = `Currently: ${weatherData.list[0].main.temp}°`;

        const feelsLike = document.querySelector('.feels-like');
        feelsLike.textContent = `Feels Like: ${weatherData.list[0].main.feels_like}°`;

        const img = document.querySelector('.weather-icon');
        img.src = findIcon(weatherData, 0);
    };
    const renderExtraWeather = (weatherData) => {
        const highTemp = document.querySelector('.high-temp').children[1];
        highTemp.textContent = `${weatherData.list[0].main.temp_max}°`;

        const lowTemp = document.querySelector('.low-temp').children[1];
        lowTemp.textContent = `${weatherData.list[0].main.temp_min}°`;

        const humidity = document.querySelector('.humidity').children[1];
        humidity.textContent = `${weatherData.list[0].main.humidity}%`;

        const airPressure = document.querySelector('.air-pressure').children[1];
        airPressure.textContent = `${weatherData.list[0].main.pressure} psi`;
    };
    const renderForecast = (weatherData) => {
        const day1 = document.querySelector('.day-one');
        const day1date = day1.children[0];
        day1date.textContent = formatDate(weatherData, 0);
        const day1img = day1.children[1];
        day1img.src = findIcon(weatherData, 0);
        const day1high = day1.children[2];
        day1high.textContent = `High: ${weatherData.list[0].main.temp_max}°`;
        const day1low = day1.children[3];
        day1low.textContent = `Low: ${weatherData.list[0].main.temp_min}°`;

        const day2 = document.querySelector('.day-two');
        const day2date = day2.children[0];
        day2date.textContent = formatDate(weatherData, 8);
        const day2img = day2.children[1];
        day2img.src = findIcon(weatherData, 8);
        const day2high = day2.children[2];
        day2high.textContent = `High: ${weatherData.list[8].main.temp_max}°`;
        const day2low = day2.children[3];
        day2low.textContent = `Low: ${weatherData.list[8].main.temp_min}°`;

        const day3 = document.querySelector('.day-three');
        const day3date = day3.children[0];
        day3date.textContent = formatDate(weatherData, 16);
        const day3img = day3.children[1];
        day3img.src = findIcon(weatherData, 16);
        const day3high = day3.children[2];
        day3high.textContent = `High: ${weatherData.list[16].main.temp_max}°`;
        const day3low = day3.children[3];
        day3low.textContent = `Low: ${weatherData.list[16].main.temp_min}°`;

        const day4 = document.querySelector('.day-four');
        const day4date = day4.children[0];
        day4date.textContent = formatDate(weatherData, 24);
        const day4img = day4.children[1];
        day4img.src = findIcon(weatherData, 24);
        const day4high = day4.children[2];
        day4high.textContent = `High: ${weatherData.list[24].main.temp_max}°`;
        const day4low = day4.children[3];
        day4low.textContent = `Low: ${weatherData.list[24].main.temp_min}°`;

        const day5 = document.querySelector('.day-five');
        const day5date = day5.children[0];
        day5date.textContent = formatDate(weatherData, 32);
        const day5img = day5.children[1];
        day5img.src = findIcon(weatherData, 32);
        const day5high = day5.children[2];
        day5high.textContent = `High: ${weatherData.list[32].main.temp_max}°`;
        const day5low = day5.children[3];
        day5low.textContent = `Low: ${weatherData.list[32].main.temp_min}°`;
    };
    const switchMeasurement = () => {

    };
    const loadError = () => {
        const dataControl = document.getElementById('data-control');
        const toggleMeasureSyst = document.getElementById('toggle-measure-syst');
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Sorry, we could not find that city.';
        dataControl.insertBefore(errorMsg, toggleMeasureSyst);
    };
    const removeError = () => {
        const dataControl = document.getElementById('data-control');
        if (dataControl.children[1].getAttribute('id') !== 'toggle-measure-syst') {
            dataControl.children[1].remove();
        }
    };

    return {
        renderMainWeather,
        renderExtraWeather,
        renderForecast,
        switchMeasurement,
        loadError,
        removeError,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);


/***/ }),

/***/ "./src/async.js":
/*!**********************!*\
  !*** ./src/async.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */


const async = (() => {
    const getWeather = async (location, units) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=220032af2efc25d26fc2e72d3abc3914`, { mode: 'cors' });
            if (response.status !== 200) {
                throw new Error();
            } else {
                const weatherData = await response.json();
                return weatherData;
            }
        } catch {
            _DOM__WEBPACK_IMPORTED_MODULE_0__["default"].loadError();
        }
    };
    const switchMeasurement = (event) => {
        const toggleText = document.querySelector('#toggle-measure-syst > p').textContent;
        if (toggleText === 'F°') {
            // call getWeather but with celsius
        } else {
            // call getWeather but with fahrenheit
        }
    };

    return { getWeather, switchMeasurement };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async);


/***/ }),

/***/ "./dist/d2062b8b8cc750f6a8bc.png":
/*!***************************************!*\
  !*** ./dist/d2062b8b8cc750f6a8bc.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2062b8b8cc750f6a8bc.png";

/***/ }),

/***/ "./src/media/brokenclouds.png":
/*!************************************!*\
  !*** ./src/media/brokenclouds.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0cbfe3e6fbd263349d54.png";

/***/ }),

/***/ "./src/media/clearsky.png":
/*!********************************!*\
  !*** ./src/media/clearsky.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4283bdd5bdd05ccf8ee0.png";

/***/ }),

/***/ "./src/media/fewclouds.png":
/*!*********************************!*\
  !*** ./src/media/fewclouds.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cd67490f81d6bf05e49f.png";

/***/ }),

/***/ "./src/media/mist.png":
/*!****************************!*\
  !*** ./src/media/mist.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3b5b650f499ad0f11760.png";

/***/ }),

/***/ "./src/media/rain.png":
/*!****************************!*\
  !*** ./src/media/rain.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d804f4c83a5c1235b75.png";

/***/ }),

/***/ "./src/media/scatteredclouds.png":
/*!***************************************!*\
  !*** ./src/media/scatteredclouds.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e334ad707738cf4c9ecc.png";

/***/ }),

/***/ "./src/media/showerrain.png":
/*!**********************************!*\
  !*** ./src/media/showerrain.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8f7252d5f516f4c2987.png";

/***/ }),

/***/ "./src/media/snow.png":
/*!****************************!*\
  !*** ./src/media/snow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "49393def75aa5b71fc67.png";

/***/ }),

/***/ "./src/media/thunderstorm.png":
/*!************************************!*\
  !*** ./src/media/thunderstorm.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "58fe95be7f3570525121.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var us_state_converter_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! us-state-converter/index */ "./node_modules/us-state-converter/index.js");
/* harmony import */ var us_state_converter_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(us_state_converter_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var country_code_lookup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-code-lookup */ "./node_modules/country-code-lookup/index.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async */ "./src/async.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _dist_d2062b8b8cc750f6a8bc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/d2062b8b8cc750f6a8bc.png */ "./dist/d2062b8b8cc750f6a8bc.png");
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */






const controller = (() => {
    let measurementUnit = 'imperial';
    const acquireLocation = () => {
        let data = document.getElementById('search').value;
        data = data.split(', ');
        let location;

        // If format = state or state, country
        if (data.length === 1) {
            if (us_state_converter_index__WEBPACK_IMPORTED_MODULE_0___default().abbr(data[0]) !== 'No abbreviation found with that state name') {
                location = [us_state_converter_index__WEBPACK_IMPORTED_MODULE_0___default().abbr(data[0]), 'US'];
            // If format = country
            } else if (country_code_lookup__WEBPACK_IMPORTED_MODULE_1__.byCountry(data[0]) !== null) {
                location = [country_code_lookup__WEBPACK_IMPORTED_MODULE_1__.byCountry(data[0]).iso3];
            // If format = city
            } else {
                location = [data[0]];
            }
        // If format = city, state or city, state, country
        } else if (us_state_converter_index__WEBPACK_IMPORTED_MODULE_0___default().abbr(data[1]) !== 'No abbreviation found with that state name') {
            location = [data[0], data[1], 'US'];
        // If format = city, country
        } else {
            location = [data[0], data[1]];
        }
        return location.join(',');
    };

    const changeLocation = async (event) => {
        event.preventDefault();
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].removeError();
        const location = acquireLocation();
        const weatherData = await _async__WEBPACK_IMPORTED_MODULE_2__["default"].getWeather(location, measurementUnit);
        if (weatherData === undefined) {
            return;
        }
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderMainWeather(weatherData);
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderExtraWeather(weatherData);
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderForecast(weatherData);
        document.getElementById('search').value = '';
    };

    const toggleMeasurementSystem = (event) => {
        let text;
        (event.target.getAttribute('id') === 'toggle-measure-syst') ? text = event.target.children[0] : text = event.target;
        if (text.textContent === 'F°') {
            text.textContent = 'C°';
            measurementUnit = 'metric';
        } else {
            text.textContent = 'F°';
            measurementUnit = 'imperial';
        }
        document.getElementById('search').value = document.querySelector('.location').textContent;
        document.getElementById('submit').click();
    };

    return { acquireLocation, toggleMeasurementSystem, changeLocation };
})();

document.getElementById('submit').src = _dist_d2062b8b8cc750f6a8bc_png__WEBPACK_IMPORTED_MODULE_4__;
document.addEventListener('submit', controller.changeLocation);
document.getElementById('toggle-measure-syst').addEventListener('click', controller.toggleMeasurementSystem);
document.getElementById('submit').click();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsd0JBQXdCOzs7Ozs7Ozs7OztBQ2p2RnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pnQkQ7QUFDQTtBQUM0QztBQUNFO0FBQ1k7QUFDTjtBQUNKO0FBQ1o7QUFDZ0I7QUFDaEI7QUFDQTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUNBQXlDLElBQUksc0RBQXNEO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQVE7QUFDOUIsVUFBVTtBQUNWLHNCQUFzQixpREFBUztBQUMvQixVQUFVO0FBQ1Ysc0JBQXNCLHVEQUFlO0FBQ3JDLFVBQVU7QUFDVixzQkFBc0Isb0RBQVk7QUFDbEMsVUFBVTtBQUNWLHNCQUFzQixrREFBVTtBQUNoQyxVQUFVO0FBQ1Ysc0JBQXNCLDRDQUFJO0FBQzFCLFVBQVU7QUFDVixzQkFBc0Isb0RBQVk7QUFDbEMsVUFBVTtBQUNWLHNCQUFzQiw0Q0FBSTtBQUMxQixVQUFVO0FBQ1Ysc0JBQXNCLDRDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0JBQXNCLElBQUkseUJBQXlCOztBQUVyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsOEJBQThCOztBQUU5RTtBQUNBLCtDQUErQyxvQ0FBb0M7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0NBQWtDOztBQUVwRTtBQUNBLGlDQUFpQyxrQ0FBa0M7O0FBRW5FO0FBQ0Esa0NBQWtDLGtDQUFrQzs7QUFFcEU7QUFDQSxxQ0FBcUMsbUNBQW1DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0NBQWtDO0FBQzFFO0FBQ0Esc0NBQXNDLGtDQUFrQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRTtBQUNBLHNDQUFzQyxrQ0FBa0M7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQSxzQ0FBc0MsbUNBQW1DOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0Esc0NBQXNDLG1DQUFtQzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBLHNDQUFzQyxtQ0FBbUM7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS25CO0FBQ0E7QUFDd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLCtGQUErRixTQUFTLFNBQVMsTUFBTSw0Q0FBNEMsY0FBYztBQUNqTDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixZQUFZLHNEQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhDO0FBQ0w7QUFDYjtBQUNKO0FBQ2tDOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvRUFBVztBQUMzQiw0QkFBNEIsb0VBQVc7QUFDdkM7QUFDQSxjQUFjLFNBQVMsMERBQWdCO0FBQ3ZDLDRCQUE0QiwwREFBZ0I7QUFDNUM7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVSxTQUFTLG9FQUFXO0FBQzlCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQWU7QUFDdkI7QUFDQSxrQ0FBa0MseURBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXFCO0FBQzdCLFFBQVEsK0RBQXNCO0FBQzlCLFFBQVEsMkRBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCx3Q0FBd0MsMkRBQVU7QUFDbEQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jb3VudHJ5LWNvZGUtbG9va3VwL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvdXMtc3RhdGUtY29udmVydGVyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cy5ieUZpcHMgPSBmdW5jdGlvbihjb2RlKSB7XG4gIHJldHVybiBzZWFyY2goJ2ZpcHMnLCBjb2RlLnRvVXBwZXJDYXNlKCkpXG59XG5cbm1vZHVsZS5leHBvcnRzLmJ5SXNvID0gZnVuY3Rpb24oY29kZSkge1xuICBpZiAoIWlzTmFOKHBhcnNlSW50KGNvZGUpKSkge1xuICAgIHJldHVybiBzZWFyY2goJ2lzb05vJywgY29kZS50b1N0cmluZygpKVxuICB9XG5cbiAgaWYgKGNvZGUubGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIHNlYXJjaCgnaXNvMicsIGNvZGUudG9VcHBlckNhc2UoKSlcbiAgfVxuXG4gIGlmIChjb2RlLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBzZWFyY2goJ2lzbzMnLCBjb2RlLnRvVXBwZXJDYXNlKCkpXG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBkZXRlcm1pbmUgSVNPIGNvZGUgdHlwZScpXG59XG5cbm1vZHVsZS5leHBvcnRzLmJ5SW50ZXJuZXQgPSBmdW5jdGlvbihjb2RlKSB7XG4gIHJldHVybiBzZWFyY2goJ2ludGVybmV0JywgY29kZS50b1VwcGVyQ2FzZSgpKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5ieUNvdW50cnkgPSBmdW5jdGlvbihjb3VudHJ5KSB7XG4gIHJldHVybiBzZWFyY2goJ2NvdW50cnknLCBjb3VudHJ5KVxufVxuXG5mdW5jdGlvbiBzZWFyY2goZmllbGQsIGNvZGUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY291bnRyaWVzW2ldW2ZpZWxkXSA9PT0gY29kZSkge1xuICAgICAgcmV0dXJuIGNvdW50cmllc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG52YXIgY291bnRyaWVzID0gW1xuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ0FmZ2hhbmlzdGFuJyxcbiAgICBjYXBpdGFsOiAnS2FidWwnLFxuICAgIGZpcHM6ICdBRicsXG4gICAgaXNvMjogJ0FGJyxcbiAgICBpc28zOiAnQUZHJyxcbiAgICBpc29ObzogJzQnLFxuICAgIGludGVybmV0OiAnQUYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQWxiYW5pYScsXG4gICAgY2FwaXRhbDogJ1RpcmFuYScsXG4gICAgZmlwczogJ0FMJyxcbiAgICBpc28yOiAnQUwnLFxuICAgIGlzbzM6ICdBTEInLFxuICAgIGlzb05vOiAnOCcsXG4gICAgaW50ZXJuZXQ6ICdBTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQWxnZXJpYScsXG4gICAgY2FwaXRhbDogJ0FsZ2llcnMnLFxuICAgIGZpcHM6ICdBRycsXG4gICAgaXNvMjogJ0RaJyxcbiAgICBpc28zOiAnRFpBJyxcbiAgICBpc29ObzogJzEyJyxcbiAgICBpbnRlcm5ldDogJ0RaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICBjYXBpdGFsOiAnUGFnbyBQYWdvJyxcbiAgICBmaXBzOiAnQVEnLFxuICAgIGlzbzI6ICdBUycsXG4gICAgaXNvMzogJ0FTTScsXG4gICAgaXNvTm86ICcxNicsXG4gICAgaW50ZXJuZXQ6ICdBUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdBbmRvcnJhJyxcbiAgICBjYXBpdGFsOiAnQW5kb3JyYSBsYSBWZWxsYScsXG4gICAgZmlwczogJ0FOJyxcbiAgICBpc28yOiAnQUQnLFxuICAgIGlzbzM6ICdBTkQnLFxuICAgIGlzb05vOiAnMjAnLFxuICAgIGludGVybmV0OiAnQUQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0FuZ29sYScsXG4gICAgY2FwaXRhbDogJ0x1YW5kYScsXG4gICAgZmlwczogJ0FPJyxcbiAgICBpc28yOiAnQU8nLFxuICAgIGlzbzM6ICdBR08nLFxuICAgIGlzb05vOiAnMjQnLFxuICAgIGludGVybmV0OiAnQU8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdBbmd1aWxsYScsXG4gICAgY2FwaXRhbDogJ1RoZSBWYWxsZXknLFxuICAgIGZpcHM6ICdBVicsXG4gICAgaXNvMjogJ0FJJyxcbiAgICBpc28zOiAnQUlBJyxcbiAgICBpc29ObzogJzY2MCcsXG4gICAgaW50ZXJuZXQ6ICdBSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxuICAgIGNhcGl0YWw6IFwiU2FpbnQgSm9obidzXCIsXG4gICAgZmlwczogJ0FDJyxcbiAgICBpc28yOiAnQUcnLFxuICAgIGlzbzM6ICdBVEcnLFxuICAgIGlzb05vOiAnMjgnLFxuICAgIGludGVybmV0OiAnQUcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0FyZ2VudGluYScsXG4gICAgY2FwaXRhbDogJ0J1ZW5vcyBBaXJlcycsXG4gICAgZmlwczogJ0FSJyxcbiAgICBpc28yOiAnQVInLFxuICAgIGlzbzM6ICdBUkcnLFxuICAgIGlzb05vOiAnMzInLFxuICAgIGludGVybmV0OiAnQVInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdBcm1lbmlhJyxcbiAgICBjYXBpdGFsOiAnWWVyZXZhbicsXG4gICAgZmlwczogJ0FNJyxcbiAgICBpc28yOiAnQU0nLFxuICAgIGlzbzM6ICdBUk0nLFxuICAgIGlzb05vOiAnNTEnLFxuICAgIGludGVybmV0OiAnQU0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdBcnViYScsXG4gICAgY2FwaXRhbDogJ09yYW5qZXN0YWQnLFxuICAgIGZpcHM6ICdBQScsXG4gICAgaXNvMjogJ0FXJyxcbiAgICBpc28zOiAnQUJXJyxcbiAgICBpc29ObzogJzUzMycsXG4gICAgaW50ZXJuZXQ6ICdBVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdBdXN0cmFsaWEnLFxuICAgIGNhcGl0YWw6ICdDYW5iZXJyYScsXG4gICAgZmlwczogJ0FTJyxcbiAgICBpc28yOiAnQVUnLFxuICAgIGlzbzM6ICdBVVMnLFxuICAgIGlzb05vOiAnMzYnLFxuICAgIGludGVybmV0OiAnQVUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQXVzdHJpYScsXG4gICAgY2FwaXRhbDogJ1ZpZW5uYScsXG4gICAgZmlwczogJ0FVJyxcbiAgICBpc28yOiAnQVQnLFxuICAgIGlzbzM6ICdBVVQnLFxuICAgIGlzb05vOiAnNDAnLFxuICAgIGludGVybmV0OiAnQVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdBemVyYmFpamFuJyxcbiAgICBjYXBpdGFsOiAnQmFrdSAoQmFraSknLFxuICAgIGZpcHM6ICdBSicsXG4gICAgaXNvMjogJ0FaJyxcbiAgICBpc28zOiAnQVpFJyxcbiAgICBpc29ObzogJzMxJyxcbiAgICBpbnRlcm5ldDogJ0FaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnVGhlIEJhaGFtYXMnLFxuICAgIGNhcGl0YWw6ICdOYXNzYXUnLFxuICAgIGZpcHM6ICdCRicsXG4gICAgaXNvMjogJ0JTJyxcbiAgICBpc28zOiAnQkhTJyxcbiAgICBpc29ObzogJzQ0JyxcbiAgICBpbnRlcm5ldDogJ0JTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQmFocmFpbicsXG4gICAgY2FwaXRhbDogJ01hbmFtYScsXG4gICAgZmlwczogJ0JBJyxcbiAgICBpc28yOiAnQkgnLFxuICAgIGlzbzM6ICdCSFInLFxuICAgIGlzb05vOiAnNDgnLFxuICAgIGludGVybmV0OiAnQkgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQmFuZ2xhZGVzaCcsXG4gICAgY2FwaXRhbDogJ0RoYWthJyxcbiAgICBmaXBzOiAnQkcnLFxuICAgIGlzbzI6ICdCRCcsXG4gICAgaXNvMzogJ0JHRCcsXG4gICAgaXNvTm86ICc1MCcsXG4gICAgaW50ZXJuZXQ6ICdCRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0JhcmJhZG9zJyxcbiAgICBjYXBpdGFsOiAnQnJpZGdldG93bicsXG4gICAgZmlwczogJ0JCJyxcbiAgICBpc28yOiAnQkInLFxuICAgIGlzbzM6ICdCUkInLFxuICAgIGlzb05vOiAnNTInLFxuICAgIGludGVybmV0OiAnQkInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQmVsYXJ1cycsXG4gICAgY2FwaXRhbDogJ01pbnNrJyxcbiAgICBmaXBzOiAnQk8nLFxuICAgIGlzbzI6ICdCWScsXG4gICAgaXNvMzogJ0JMUicsXG4gICAgaXNvTm86ICcxMTInLFxuICAgIGludGVybmV0OiAnQlknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQmVsZ2l1bScsXG4gICAgY2FwaXRhbDogJ0JydXNzZWxzJyxcbiAgICBmaXBzOiAnQkUnLFxuICAgIGlzbzI6ICdCRScsXG4gICAgaXNvMzogJ0JFTCcsXG4gICAgaXNvTm86ICc1NicsXG4gICAgaW50ZXJuZXQ6ICdCRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdCZWxpemUnLFxuICAgIGNhcGl0YWw6ICdCZWxtb3BhbicsXG4gICAgZmlwczogJ0JIJyxcbiAgICBpc28yOiAnQlonLFxuICAgIGlzbzM6ICdCTFonLFxuICAgIGlzb05vOiAnODQnLFxuICAgIGludGVybmV0OiAnQlonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQmVuaW4nLFxuICAgIGNhcGl0YWw6ICdQb3J0by1Ob3Zv77+977+9JyxcbiAgICBmaXBzOiAnQk4nLFxuICAgIGlzbzI6ICdCSicsXG4gICAgaXNvMzogJ0JFTicsXG4gICAgaXNvTm86ICcyMDQnLFxuICAgIGludGVybmV0OiAnQkonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdCZXJtdWRhJyxcbiAgICBjYXBpdGFsOiAnSGFtaWx0b24nLFxuICAgIGZpcHM6ICdCRCcsXG4gICAgaXNvMjogJ0JNJyxcbiAgICBpc28zOiAnQk1VJyxcbiAgICBpc29ObzogJzYwJyxcbiAgICBpbnRlcm5ldDogJ0JNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ0JodXRhbicsXG4gICAgY2FwaXRhbDogJ1RoaW1waHUnLFxuICAgIGZpcHM6ICdCVCcsXG4gICAgaXNvMjogJ0JUJyxcbiAgICBpc28zOiAnQlROJyxcbiAgICBpc29ObzogJzY0JyxcbiAgICBpbnRlcm5ldDogJ0JUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdCb2xpdmlhJyxcbiAgICBjYXBpdGFsOiAnTGEgUGF6IC8gU3VjcmUnLFxuICAgIGZpcHM6ICdCTCcsXG4gICAgaXNvMjogJ0JPJyxcbiAgICBpc28zOiAnQk9MJyxcbiAgICBpc29ObzogJzY4JyxcbiAgICBpbnRlcm5ldDogJ0JPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLFxuICAgIGNhcGl0YWw6ICdTYXJhamV2bycsXG4gICAgZmlwczogJ0JLJyxcbiAgICBpc28yOiAnQkEnLFxuICAgIGlzbzM6ICdCSUgnLFxuICAgIGlzb05vOiAnNzAnLFxuICAgIGludGVybmV0OiAnQkEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0JvdHN3YW5hJyxcbiAgICBjYXBpdGFsOiAnR2Fib3JvbmUnLFxuICAgIGZpcHM6ICdCQycsXG4gICAgaXNvMjogJ0JXJyxcbiAgICBpc28zOiAnQldBJyxcbiAgICBpc29ObzogJzcyJyxcbiAgICBpbnRlcm5ldDogJ0JXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdCcmF6aWwnLFxuICAgIGNhcGl0YWw6ICdCcmFzaWxpYScsXG4gICAgZmlwczogJ0JSJyxcbiAgICBpc28yOiAnQlInLFxuICAgIGlzbzM6ICdCUkEnLFxuICAgIGlzb05vOiAnNzYnLFxuICAgIGludGVybmV0OiAnQlInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdCcml0aXNoIFZpcmdpbiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnUm9hZCBUb3duJyxcbiAgICBmaXBzOiAnVkknLFxuICAgIGlzbzI6ICdWRycsXG4gICAgaXNvMzogJ1ZHQicsXG4gICAgaXNvTm86ICc5MicsXG4gICAgaW50ZXJuZXQ6ICdWRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0JydW5laScsXG4gICAgY2FwaXRhbDogJ0JhbmRhciBTZXJpIEJlZ2F3YW4nLFxuICAgIGZpcHM6ICdCWCcsXG4gICAgaXNvMjogJ0JOJyxcbiAgICBpc28zOiAnQlJOJyxcbiAgICBpc29ObzogJzk2JyxcbiAgICBpbnRlcm5ldDogJ0JOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0J1bGdhcmlhJyxcbiAgICBjYXBpdGFsOiAnU29maWEnLFxuICAgIGZpcHM6ICdCVScsXG4gICAgaXNvMjogJ0JHJyxcbiAgICBpc28zOiAnQkdSJyxcbiAgICBpc29ObzogJzEwMCcsXG4gICAgaW50ZXJuZXQ6ICdCRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdCdXJraW5hIEZhc28nLFxuICAgIGNhcGl0YWw6ICdPdWFnYWRvdWdvdScsXG4gICAgZmlwczogJ1VWJyxcbiAgICBpc28yOiAnQkYnLFxuICAgIGlzbzM6ICdCRkEnLFxuICAgIGlzb05vOiAnODU0JyxcbiAgICBpbnRlcm5ldDogJ0JGJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ0J1cnVuZGknLFxuICAgIGNhcGl0YWw6ICdCdWp1bWJ1cmEnLFxuICAgIGZpcHM6ICdCWScsXG4gICAgaXNvMjogJ0JJJyxcbiAgICBpc28zOiAnQkRJJyxcbiAgICBpc29ObzogJzEwOCcsXG4gICAgaW50ZXJuZXQ6ICdCSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0NhbWJvZGlhJyxcbiAgICBjYXBpdGFsOiAnUGhub20gUGVuaCcsXG4gICAgZmlwczogJ0NCJyxcbiAgICBpc28yOiAnS0gnLFxuICAgIGlzbzM6ICdLSE0nLFxuICAgIGlzb05vOiAnMTE2JyxcbiAgICBpbnRlcm5ldDogJ0tIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0NhbWVyb29uJyxcbiAgICBjYXBpdGFsOiAnWWFvdW5kZScsXG4gICAgZmlwczogJ0NNJyxcbiAgICBpc28yOiAnQ00nLFxuICAgIGlzbzM6ICdDTVInLFxuICAgIGlzb05vOiAnMTIwJyxcbiAgICBpbnRlcm5ldDogJ0NNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdDYW5hZGEnLFxuICAgIGNhcGl0YWw6ICdPdHRhd2EnLFxuICAgIGZpcHM6ICdDQScsXG4gICAgaXNvMjogJ0NBJyxcbiAgICBpc28zOiAnQ0FOJyxcbiAgICBpc29ObzogJzEyNCcsXG4gICAgaW50ZXJuZXQ6ICdDQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdDYXBlIFZlcmRlJyxcbiAgICBjYXBpdGFsOiAnUHJhaWEnLFxuICAgIGZpcHM6ICdDVicsXG4gICAgaXNvMjogJ0NWJyxcbiAgICBpc28zOiAnQ1BWJyxcbiAgICBpc29ObzogJzEzMicsXG4gICAgaW50ZXJuZXQ6ICdDVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0NheW1hbiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnR2VvcmdlIFRvd24nLFxuICAgIGZpcHM6ICdDSicsXG4gICAgaXNvMjogJ0tZJyxcbiAgICBpc28zOiAnQ1lNJyxcbiAgICBpc29ObzogJzEzNicsXG4gICAgaW50ZXJuZXQ6ICdLWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMnLFxuICAgIGNhcGl0YWw6ICdCYW5ndWknLFxuICAgIGZpcHM6ICdDVCcsXG4gICAgaXNvMjogJ0NGJyxcbiAgICBpc28zOiAnQ0FGJyxcbiAgICBpc29ObzogJzE0MCcsXG4gICAgaW50ZXJuZXQ6ICdDRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdDaGFkJyxcbiAgICBjYXBpdGFsOiBcIk4nRGphbWVuYVwiLFxuICAgIGZpcHM6ICdDRCcsXG4gICAgaXNvMjogJ1REJyxcbiAgICBpc28zOiAnVENEJyxcbiAgICBpc29ObzogJzE0OCcsXG4gICAgaW50ZXJuZXQ6ICdURCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ2hpbGUnLFxuICAgIGNhcGl0YWw6ICdTYW50aWFnbycsXG4gICAgZmlwczogJ0NJJyxcbiAgICBpc28yOiAnQ0wnLFxuICAgIGlzbzM6ICdDSEwnLFxuICAgIGlzb05vOiAnMTUyJyxcbiAgICBpbnRlcm5ldDogJ0NMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQ2hpbmEnLFxuICAgIGNhcGl0YWw6ICdCZWlqaW5nJyxcbiAgICBmaXBzOiAnQ0gnLFxuICAgIGlzbzI6ICdDTicsXG4gICAgaXNvMzogJ0NITicsXG4gICAgaXNvTm86ICcxNTYnLFxuICAgIGludGVybmV0OiAnQ04nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdDaHJpc3RtYXMgSXNsYW5kJyxcbiAgICBjYXBpdGFsOiAnVGhlIFNldHRsZW1lbnQnLFxuICAgIGZpcHM6ICdLVCcsXG4gICAgaXNvMjogJ0NYJyxcbiAgICBpc28zOiAnQ1hSJyxcbiAgICBpc29ObzogJzE2MicsXG4gICAgaW50ZXJuZXQ6ICdDWCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnV2VzdCBJc2xhbmQnLFxuICAgIGZpcHM6ICdDSycsXG4gICAgaXNvMjogJ0NDJyxcbiAgICBpc28zOiAnQ0NLJyxcbiAgICBpc29ObzogJzE2NicsXG4gICAgaW50ZXJuZXQ6ICdDQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ29sb21iaWEnLFxuICAgIGNhcGl0YWw6ICdCb2dvdGEnLFxuICAgIGZpcHM6ICdDTycsXG4gICAgaXNvMjogJ0NPJyxcbiAgICBpc28zOiAnQ09MJyxcbiAgICBpc29ObzogJzE3MCcsXG4gICAgaW50ZXJuZXQ6ICdDTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnQ29tb3JvcycsXG4gICAgY2FwaXRhbDogJ01vcm9uaScsXG4gICAgZmlwczogJ0NOJyxcbiAgICBpc28yOiAnS00nLFxuICAgIGlzbzM6ICdDT00nLFxuICAgIGlzb05vOiAnMTc0JyxcbiAgICBpbnRlcm5ldDogJ0tNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ1JlcHVibGljIG9mIHRoZSBDb25nbycsXG4gICAgY2FwaXRhbDogJ0JyYXp6YXZpbGxlJyxcbiAgICBmaXBzOiAnQ0YnLFxuICAgIGlzbzI6ICdDRycsXG4gICAgaXNvMzogJ0NPRycsXG4gICAgaXNvTm86ICcxNzgnLFxuICAgIGludGVybmV0OiAnQ0cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnQ29vayBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnQXZhcnVhJyxcbiAgICBmaXBzOiAnQ1cnLFxuICAgIGlzbzI6ICdDSycsXG4gICAgaXNvMzogJ0NPSycsXG4gICAgaXNvTm86ICcxODQnLFxuICAgIGludGVybmV0OiAnQ0snXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ29zdGEgUmljYScsXG4gICAgY2FwaXRhbDogJ1NhbiBKb3NlJyxcbiAgICBmaXBzOiAnQ1MnLFxuICAgIGlzbzI6ICdDUicsXG4gICAgaXNvMzogJ0NSSScsXG4gICAgaXNvTm86ICcxODgnLFxuICAgIGludGVybmV0OiAnQ1InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiBcIkNvdGUgZCdJdm9pcmVcIixcbiAgICBjYXBpdGFsOiAnWWFtb3Vzc291a3JvJyxcbiAgICBmaXBzOiAnSVYnLFxuICAgIGlzbzI6ICdDSScsXG4gICAgaXNvMzogJ0NJVicsXG4gICAgaXNvTm86ICczODQnLFxuICAgIGludGVybmV0OiAnQ0knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQ3JvYXRpYScsXG4gICAgY2FwaXRhbDogJ1phZ3JlYicsXG4gICAgZmlwczogJ0hSJyxcbiAgICBpc28yOiAnSFInLFxuICAgIGlzbzM6ICdIUlYnLFxuICAgIGlzb05vOiAnMTkxJyxcbiAgICBpbnRlcm5ldDogJ0hSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQ3ViYScsXG4gICAgY2FwaXRhbDogJ0hhdmFuYScsXG4gICAgZmlwczogJ0NVJyxcbiAgICBpc28yOiAnQ1UnLFxuICAgIGlzbzM6ICdDVUInLFxuICAgIGlzb05vOiAnMTkyJyxcbiAgICBpbnRlcm5ldDogJ0NVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQ3lwcnVzJyxcbiAgICBjYXBpdGFsOiAnTmljb3NpYScsXG4gICAgZmlwczogJ0NZJyxcbiAgICBpc28yOiAnQ1knLFxuICAgIGlzbzM6ICdDWVAnLFxuICAgIGlzb05vOiAnMTk2JyxcbiAgICBpbnRlcm5ldDogJ0NZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0N6ZWNoIFJlcHVibGljJyxcbiAgICBjYXBpdGFsOiAnUHJhZ3VlJyxcbiAgICBmaXBzOiAnRVonLFxuICAgIGlzbzI6ICdDWicsXG4gICAgaXNvMzogJ0NaRScsXG4gICAgaXNvTm86ICcyMDMnLFxuICAgIGludGVybmV0OiAnQ1onXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0Rlbm1hcmsnLFxuICAgIGNhcGl0YWw6ICdDb3BlbmhhZ2VuJyxcbiAgICBmaXBzOiAnREEnLFxuICAgIGlzbzI6ICdESycsXG4gICAgaXNvMzogJ0ROSycsXG4gICAgaXNvTm86ICcyMDgnLFxuICAgIGludGVybmV0OiAnREsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRGppYm91dGknLFxuICAgIGNhcGl0YWw6ICdEamlib3V0aScsXG4gICAgZmlwczogJ0RKJyxcbiAgICBpc28yOiAnREonLFxuICAgIGlzbzM6ICdESkknLFxuICAgIGlzb05vOiAnMjYyJyxcbiAgICBpbnRlcm5ldDogJ0RKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnRG9taW5pY2EnLFxuICAgIGNhcGl0YWw6ICdSb3NlYXUnLFxuICAgIGZpcHM6ICdETycsXG4gICAgaXNvMjogJ0RNJyxcbiAgICBpc28zOiAnRE1BJyxcbiAgICBpc29ObzogJzIxMicsXG4gICAgaW50ZXJuZXQ6ICdETSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gICAgY2FwaXRhbDogJ1NhbnRvIERvbWluZ28nLFxuICAgIGZpcHM6ICdEUicsXG4gICAgaXNvMjogJ0RPJyxcbiAgICBpc28zOiAnRE9NJyxcbiAgICBpc29ObzogJzIxNCcsXG4gICAgaW50ZXJuZXQ6ICdETydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnRWN1YWRvcicsXG4gICAgY2FwaXRhbDogJ1F1aXRvJyxcbiAgICBmaXBzOiAnRUMnLFxuICAgIGlzbzI6ICdFQycsXG4gICAgaXNvMzogJ0VDVScsXG4gICAgaXNvTm86ICcyMTgnLFxuICAgIGludGVybmV0OiAnRUMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0VneXB0JyxcbiAgICBjYXBpdGFsOiAnQ2Fpcm8nLFxuICAgIGZpcHM6ICdFRycsXG4gICAgaXNvMjogJ0VHJyxcbiAgICBpc28zOiAnRUdZJyxcbiAgICBpc29ObzogJzgxOCcsXG4gICAgaW50ZXJuZXQ6ICdFRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdFbCBTYWx2YWRvcicsXG4gICAgY2FwaXRhbDogJ1NhbiBTYWx2YWRvcicsXG4gICAgZmlwczogJ0VTJyxcbiAgICBpc28yOiAnU1YnLFxuICAgIGlzbzM6ICdTTFYnLFxuICAgIGlzb05vOiAnMjIyJyxcbiAgICBpbnRlcm5ldDogJ1NWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0VxdWF0b3JpYWwgR3VpbmVhJyxcbiAgICBjYXBpdGFsOiAnTWFsYWJvJyxcbiAgICBmaXBzOiAnRUsnLFxuICAgIGlzbzI6ICdHUScsXG4gICAgaXNvMzogJ0dOUScsXG4gICAgaXNvTm86ICcyMjYnLFxuICAgIGludGVybmV0OiAnR1EnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRXJpdHJlYScsXG4gICAgY2FwaXRhbDogJ0FzbWFyYScsXG4gICAgZmlwczogJ0VSJyxcbiAgICBpc28yOiAnRVInLFxuICAgIGlzbzM6ICdFUkknLFxuICAgIGlzb05vOiAnMjMyJyxcbiAgICBpbnRlcm5ldDogJ0VSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0VzdG9uaWEnLFxuICAgIGNhcGl0YWw6ICdUYWxsaW5uJyxcbiAgICBmaXBzOiAnRU4nLFxuICAgIGlzbzI6ICdFRScsXG4gICAgaXNvMzogJ0VTVCcsXG4gICAgaXNvTm86ICcyMzMnLFxuICAgIGludGVybmV0OiAnRUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRXRoaW9waWEnLFxuICAgIGNhcGl0YWw6ICdBZGRpcyBBYmFiYScsXG4gICAgZmlwczogJ0VUJyxcbiAgICBpc28yOiAnRVQnLFxuICAgIGlzbzM6ICdFVEgnLFxuICAgIGlzb05vOiAnMjMxJyxcbiAgICBpbnRlcm5ldDogJ0VUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdGYWxrbGFuZCBJc2xhbmRzIChJc2xhcyBNYWx2aW5hcyknLFxuICAgIGNhcGl0YWw6ICdTdGFubGV5JyxcbiAgICBmaXBzOiAnRkEnLFxuICAgIGlzbzI6ICdGSycsXG4gICAgaXNvMzogJ0ZMSycsXG4gICAgaXNvTm86ICcyMzgnLFxuICAgIGludGVybmV0OiAnRksnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0Zhcm9lIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdUb3JzaGF2bicsXG4gICAgZmlwczogJ0ZPJyxcbiAgICBpc28yOiAnRk8nLFxuICAgIGlzbzM6ICdGUk8nLFxuICAgIGlzb05vOiAnMjM0JyxcbiAgICBpbnRlcm5ldDogJ0ZPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0ZpamknLFxuICAgIGNhcGl0YWw6ICdTdXZhJyxcbiAgICBmaXBzOiAnRkonLFxuICAgIGlzbzI6ICdGSicsXG4gICAgaXNvMzogJ0ZKSScsXG4gICAgaXNvTm86ICcyNDInLFxuICAgIGludGVybmV0OiAnRkonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0ZpbmxhbmQnLFxuICAgIGNhcGl0YWw6ICdIZWxzaW5raScsXG4gICAgZmlwczogJ0ZJJyxcbiAgICBpc28yOiAnRkknLFxuICAgIGlzbzM6ICdGSU4nLFxuICAgIGlzb05vOiAnMjQ2JyxcbiAgICBpbnRlcm5ldDogJ0ZJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0ZyYW5jZScsXG4gICAgY2FwaXRhbDogJ1BhcmlzJyxcbiAgICBmaXBzOiAnRlInLFxuICAgIGlzbzI6ICdGUicsXG4gICAgaXNvMzogJ0ZSQScsXG4gICAgaXNvTm86ICcyNTAnLFxuICAgIGludGVybmV0OiAnRlInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0ZyZW5jaCBHdWlhbmEnLFxuICAgIGNhcGl0YWw6ICdDYXllbm5lJyxcbiAgICBmaXBzOiAnRkcnLFxuICAgIGlzbzI6ICdHRicsXG4gICAgaXNvMzogJ0dVRicsXG4gICAgaXNvTm86ICcyNTQnLFxuICAgIGludGVybmV0OiAnR0YnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnRnJlbmNoIFBvbHluZXNpYScsXG4gICAgY2FwaXRhbDogJ1BhcGVldGUnLFxuICAgIGZpcHM6ICdGUCcsXG4gICAgaXNvMjogJ1BGJyxcbiAgICBpc28zOiAnUFlGJyxcbiAgICBpc29ObzogJzI1OCcsXG4gICAgaW50ZXJuZXQ6ICdQRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdHYWJvbicsXG4gICAgY2FwaXRhbDogJ0xpYnJldmlsbGUnLFxuICAgIGZpcHM6ICdHQicsXG4gICAgaXNvMjogJ0dBJyxcbiAgICBpc28zOiAnR0FCJyxcbiAgICBpc29ObzogJzI2NicsXG4gICAgaW50ZXJuZXQ6ICdHQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdUaGUgR2FtYmlhJyxcbiAgICBjYXBpdGFsOiAnQmFuanVsJyxcbiAgICBmaXBzOiAnR0EnLFxuICAgIGlzbzI6ICdHTScsXG4gICAgaXNvMzogJ0dNQicsXG4gICAgaXNvTm86ICcyNzAnLFxuICAgIGludGVybmV0OiAnR00nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdHZW9yZ2lhJyxcbiAgICBjYXBpdGFsOiBcIlQnYmlsaXNpXCIsXG4gICAgZmlwczogJ0dHJyxcbiAgICBpc28yOiAnR0UnLFxuICAgIGlzbzM6ICdHRU8nLFxuICAgIGlzb05vOiAnMjY4JyxcbiAgICBpbnRlcm5ldDogJ0dFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0dlcm1hbnknLFxuICAgIGNhcGl0YWw6ICdCZXJsaW4nLFxuICAgIGZpcHM6ICdHTScsXG4gICAgaXNvMjogJ0RFJyxcbiAgICBpc28zOiAnREVVJyxcbiAgICBpc29ObzogJzI3NicsXG4gICAgaW50ZXJuZXQ6ICdERSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdHaGFuYScsXG4gICAgY2FwaXRhbDogJ0FjY3JhJyxcbiAgICBmaXBzOiAnR0gnLFxuICAgIGlzbzI6ICdHSCcsXG4gICAgaXNvMzogJ0dIQScsXG4gICAgaXNvTm86ICcyODgnLFxuICAgIGludGVybmV0OiAnR0gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnR2licmFsdGFyJyxcbiAgICBjYXBpdGFsOiAnR2licmFsdGFyJyxcbiAgICBmaXBzOiAnR0knLFxuICAgIGlzbzI6ICdHSScsXG4gICAgaXNvMzogJ0dJQicsXG4gICAgaXNvTm86ICcyOTInLFxuICAgIGludGVybmV0OiAnR0knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnR3JlZWNlJyxcbiAgICBjYXBpdGFsOiAnQXRoZW5zJyxcbiAgICBmaXBzOiAnR1InLFxuICAgIGlzbzI6ICdHUicsXG4gICAgaXNvMzogJ0dSQycsXG4gICAgaXNvTm86ICczMDAnLFxuICAgIGludGVybmV0OiAnR1InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnTm9ydGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0dyZWVubGFuZCcsXG4gICAgY2FwaXRhbDogJ051dWsgKEdvZHRoYWIpJyxcbiAgICBmaXBzOiAnR0wnLFxuICAgIGlzbzI6ICdHTCcsXG4gICAgaXNvMzogJ0dSTCcsXG4gICAgaXNvTm86ICczMDQnLFxuICAgIGludGVybmV0OiAnR0wnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdHcmVuYWRhJyxcbiAgICBjYXBpdGFsOiBcIlNhaW50IEdlb3JnZSdzXCIsXG4gICAgZmlwczogJ0dKJyxcbiAgICBpc28yOiAnR0QnLFxuICAgIGlzbzM6ICdHUkQnLFxuICAgIGlzb05vOiAnMzA4JyxcbiAgICBpbnRlcm5ldDogJ0dEJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnR3VhZGVsb3VwZScsXG4gICAgY2FwaXRhbDogJ0Jhc3NlLVRlcnJlJyxcbiAgICBmaXBzOiAnR1AnLFxuICAgIGlzbzI6ICdHUCcsXG4gICAgaXNvMzogJ0dMUCcsXG4gICAgaXNvTm86ICczMTInLFxuICAgIGludGVybmV0OiAnR1AnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnR3VhbScsXG4gICAgY2FwaXRhbDogJ0hhZ2F0bmEgKEFnYW5hKScsXG4gICAgZmlwczogJ0dRJyxcbiAgICBpc28yOiAnR1UnLFxuICAgIGlzbzM6ICdHVU0nLFxuICAgIGlzb05vOiAnMzE2JyxcbiAgICBpbnRlcm5ldDogJ0dVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ0d1YXRlbWFsYScsXG4gICAgY2FwaXRhbDogJ0d1YXRlbWFsYScsXG4gICAgZmlwczogJ0dUJyxcbiAgICBpc28yOiAnR1QnLFxuICAgIGlzbzM6ICdHVE0nLFxuICAgIGlzb05vOiAnMzIwJyxcbiAgICBpbnRlcm5ldDogJ0dUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0d1aW5lYScsXG4gICAgY2FwaXRhbDogJ0NvbmFrcnknLFxuICAgIGZpcHM6ICdHVicsXG4gICAgaXNvMjogJ0dOJyxcbiAgICBpc28zOiAnR0lOJyxcbiAgICBpc29ObzogJzMyNCcsXG4gICAgaW50ZXJuZXQ6ICdHTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdHdWluZWEtQmlzc2F1JyxcbiAgICBjYXBpdGFsOiAnQmlzc2F1JyxcbiAgICBmaXBzOiAnUFUnLFxuICAgIGlzbzI6ICdHVycsXG4gICAgaXNvMzogJ0dOQicsXG4gICAgaXNvTm86ICc2MjQnLFxuICAgIGludGVybmV0OiAnR1cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0d1eWFuYScsXG4gICAgY2FwaXRhbDogJ0dlb3JnZXRvd24nLFxuICAgIGZpcHM6ICdHWScsXG4gICAgaXNvMjogJ0dZJyxcbiAgICBpc28zOiAnR1VZJyxcbiAgICBpc29ObzogJzMyOCcsXG4gICAgaW50ZXJuZXQ6ICdHWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0hhaXRpJyxcbiAgICBjYXBpdGFsOiAnUG9ydC1hdS1QcmluY2UnLFxuICAgIGZpcHM6ICdIQScsXG4gICAgaXNvMjogJ0hUJyxcbiAgICBpc28zOiAnSFRJJyxcbiAgICBpc29ObzogJzMzMicsXG4gICAgaW50ZXJuZXQ6ICdIVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSG9seSBTZWUgKFZhdGljYW4gQ2l0eSknLFxuICAgIGNhcGl0YWw6ICdWYXRpY2FuIENpdHknLFxuICAgIGZpcHM6ICdWVCcsXG4gICAgaXNvMjogJ1ZBJyxcbiAgICBpc28zOiAnVkFUJyxcbiAgICBpc29ObzogJzMzNicsXG4gICAgaW50ZXJuZXQ6ICdWQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdIb25kdXJhcycsXG4gICAgY2FwaXRhbDogJ1RlZ3VjaWdhbHBhJyxcbiAgICBmaXBzOiAnSE8nLFxuICAgIGlzbzI6ICdITicsXG4gICAgaXNvMzogJ0hORCcsXG4gICAgaXNvTm86ICczNDAnLFxuICAgIGludGVybmV0OiAnSE4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSHVuZ2FyeScsXG4gICAgY2FwaXRhbDogJ0J1ZGFwZXN0JyxcbiAgICBmaXBzOiAnSFUnLFxuICAgIGlzbzI6ICdIVScsXG4gICAgaXNvMzogJ0hVTicsXG4gICAgaXNvTm86ICczNDgnLFxuICAgIGludGVybmV0OiAnSFUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0ljZWxhbmQnLFxuICAgIGNhcGl0YWw6ICdSZXlramF2aWsnLFxuICAgIGZpcHM6ICdJQycsXG4gICAgaXNvMjogJ0lTJyxcbiAgICBpc28zOiAnSVNMJyxcbiAgICBpc29ObzogJzM1MicsXG4gICAgaW50ZXJuZXQ6ICdJUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdJbmRpYScsXG4gICAgY2FwaXRhbDogJ05ldyBEZWxoaScsXG4gICAgZmlwczogJ0lOJyxcbiAgICBpc28yOiAnSU4nLFxuICAgIGlzbzM6ICdJTkQnLFxuICAgIGlzb05vOiAnMzU2JyxcbiAgICBpbnRlcm5ldDogJ0lOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSW5kb25lc2lhJyxcbiAgICBjYXBpdGFsOiAnSmFrYXJ0YScsXG4gICAgZmlwczogJ0lEJyxcbiAgICBpc28yOiAnSUQnLFxuICAgIGlzbzM6ICdJRE4nLFxuICAgIGlzb05vOiAnMzYwJyxcbiAgICBpbnRlcm5ldDogJ0lEJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSXJhbicsXG4gICAgY2FwaXRhbDogJ1RlaHJhbicsXG4gICAgZmlwczogJ0lSJyxcbiAgICBpc28yOiAnSVInLFxuICAgIGlzbzM6ICdJUk4nLFxuICAgIGlzb05vOiAnMzY0JyxcbiAgICBpbnRlcm5ldDogJ0lSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSXJhcScsXG4gICAgY2FwaXRhbDogJ0JhZ2hkYWQnLFxuICAgIGZpcHM6ICdJWicsXG4gICAgaXNvMjogJ0lRJyxcbiAgICBpc28zOiAnSVJRJyxcbiAgICBpc29ObzogJzM2OCcsXG4gICAgaW50ZXJuZXQ6ICdJUSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdJcmVsYW5kJyxcbiAgICBjYXBpdGFsOiAnRHVibGluJyxcbiAgICBmaXBzOiAnRUknLFxuICAgIGlzbzI6ICdJRScsXG4gICAgaXNvMzogJ0lSTCcsXG4gICAgaXNvTm86ICczNzInLFxuICAgIGludGVybmV0OiAnSUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdJc3JhZWwnLFxuICAgIGNhcGl0YWw6ICdKZXJ1c2FsZW0nLFxuICAgIGZpcHM6ICdJUycsXG4gICAgaXNvMjogJ0lMJyxcbiAgICBpc28zOiAnSVNSJyxcbiAgICBpc29ObzogJzM3NicsXG4gICAgaW50ZXJuZXQ6ICdJTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSXRhbHknLFxuICAgIGNhcGl0YWw6ICdSb21lJyxcbiAgICBmaXBzOiAnSVQnLFxuICAgIGlzbzI6ICdJVCcsXG4gICAgaXNvMzogJ0lUQScsXG4gICAgaXNvTm86ICczODAnLFxuICAgIGludGVybmV0OiAnSVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdKYW1haWNhJyxcbiAgICBjYXBpdGFsOiAnS2luZ3N0b24nLFxuICAgIGZpcHM6ICdKTScsXG4gICAgaXNvMjogJ0pNJyxcbiAgICBpc28zOiAnSkFNJyxcbiAgICBpc29ObzogJzM4OCcsXG4gICAgaW50ZXJuZXQ6ICdKTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0phcGFuJyxcbiAgICBjYXBpdGFsOiAnVG9reW8nLFxuICAgIGZpcHM6ICdKQScsXG4gICAgaXNvMjogJ0pQJyxcbiAgICBpc28zOiAnSlBOJyxcbiAgICBpc29ObzogJzM5MicsXG4gICAgaW50ZXJuZXQ6ICdKUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0pvcmRhbicsXG4gICAgY2FwaXRhbDogJ0FtbWFuJyxcbiAgICBmaXBzOiAnSk8nLFxuICAgIGlzbzI6ICdKTycsXG4gICAgaXNvMzogJ0pPUicsXG4gICAgaXNvTm86ICc0MDAnLFxuICAgIGludGVybmV0OiAnSk8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFzaWEnLFxuICAgIGNvdW50cnk6ICdLYXpha2hzdGFuJyxcbiAgICBjYXBpdGFsOiAnQXN0YW5hIChBa21vbGEpJyxcbiAgICBmaXBzOiAnS1onLFxuICAgIGlzbzI6ICdLWicsXG4gICAgaXNvMzogJ0tBWicsXG4gICAgaXNvTm86ICczOTgnLFxuICAgIGludGVybmV0OiAnS1onXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnS2VueWEnLFxuICAgIGNhcGl0YWw6ICdOYWlyb2JpJyxcbiAgICBmaXBzOiAnS0UnLFxuICAgIGlzbzI6ICdLRScsXG4gICAgaXNvMzogJ0tFTicsXG4gICAgaXNvTm86ICc0MDQnLFxuICAgIGludGVybmV0OiAnS0UnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnS2lyaWJhdGknLFxuICAgIGNhcGl0YWw6ICdUYXJhd2EnLFxuICAgIGZpcHM6ICdLUicsXG4gICAgaXNvMjogJ0tJJyxcbiAgICBpc28zOiAnS0lSJyxcbiAgICBpc29ObzogJzI5NicsXG4gICAgaW50ZXJuZXQ6ICdLSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ05vcnRoIEtvcmVhJyxcbiAgICBjYXBpdGFsOiBcIlAneW9uZ3lhbmdcIixcbiAgICBmaXBzOiAnS04nLFxuICAgIGlzbzI6ICdLUCcsXG4gICAgaXNvMzogJ1BSSycsXG4gICAgaXNvTm86ICc0MDgnLFxuICAgIGludGVybmV0OiAnS1AnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdTb3V0aCBLb3JlYScsXG4gICAgY2FwaXRhbDogJ1Nlb3VsJyxcbiAgICBmaXBzOiAnS1MnLFxuICAgIGlzbzI6ICdLUicsXG4gICAgaXNvMzogJ0tPUicsXG4gICAgaXNvTm86ICc0MTAnLFxuICAgIGludGVybmV0OiAnS1InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdLdXdhaXQnLFxuICAgIGNhcGl0YWw6ICdLdXdhaXQnLFxuICAgIGZpcHM6ICdLVScsXG4gICAgaXNvMjogJ0tXJyxcbiAgICBpc28zOiAnS1dUJyxcbiAgICBpc29ObzogJzQxNCcsXG4gICAgaW50ZXJuZXQ6ICdLVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQXNpYScsXG4gICAgY291bnRyeTogJ0t5cmd5enN0YW4nLFxuICAgIGNhcGl0YWw6ICdCaXNoa2VrJyxcbiAgICBmaXBzOiAnS0cnLFxuICAgIGlzbzI6ICdLRycsXG4gICAgaXNvMzogJ0tHWicsXG4gICAgaXNvTm86ICc0MTcnLFxuICAgIGludGVybmV0OiAnS0cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdMYW9zJyxcbiAgICBjYXBpdGFsOiAnVmllbnRpYW5lJyxcbiAgICBmaXBzOiAnTEEnLFxuICAgIGlzbzI6ICdMQScsXG4gICAgaXNvMzogJ0xBTycsXG4gICAgaXNvTm86ICc0MTgnLFxuICAgIGludGVybmV0OiAnTEEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTGF0dmlhJyxcbiAgICBjYXBpdGFsOiAnUmlnYScsXG4gICAgZmlwczogJ0xHJyxcbiAgICBpc28yOiAnTFYnLFxuICAgIGlzbzM6ICdMVkEnLFxuICAgIGlzb05vOiAnNDI4JyxcbiAgICBpbnRlcm5ldDogJ0xWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTGViYW5vbicsXG4gICAgY2FwaXRhbDogJ0JlaXJ1dCcsXG4gICAgZmlwczogJ0xFJyxcbiAgICBpc28yOiAnTEInLFxuICAgIGlzbzM6ICdMQk4nLFxuICAgIGlzb05vOiAnNDIyJyxcbiAgICBpbnRlcm5ldDogJ0xCJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdMZXNvdGhvJyxcbiAgICBjYXBpdGFsOiAnTWFzZXJ1JyxcbiAgICBmaXBzOiAnTFQnLFxuICAgIGlzbzI6ICdMUycsXG4gICAgaXNvMzogJ0xTTycsXG4gICAgaXNvTm86ICc0MjYnLFxuICAgIGludGVybmV0OiAnTFMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTGliZXJpYScsXG4gICAgY2FwaXRhbDogJ01vbnJvdmlhJyxcbiAgICBmaXBzOiAnTEknLFxuICAgIGlzbzI6ICdMUicsXG4gICAgaXNvMzogJ0xCUicsXG4gICAgaXNvTm86ICc0MzAnLFxuICAgIGludGVybmV0OiAnTFInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0xpYnlhJyxcbiAgICBjYXBpdGFsOiAnVHJpcG9saScsXG4gICAgZmlwczogJ0xZJyxcbiAgICBpc28yOiAnTFknLFxuICAgIGlzbzM6ICdMQlknLFxuICAgIGlzb05vOiAnNDM0JyxcbiAgICBpbnRlcm5ldDogJ0xZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0xpZWNodGVuc3RlaW4nLFxuICAgIGNhcGl0YWw6ICdWYWR1eicsXG4gICAgZmlwczogJ0xTJyxcbiAgICBpc28yOiAnTEknLFxuICAgIGlzbzM6ICdMSUUnLFxuICAgIGlzb05vOiAnNDM4JyxcbiAgICBpbnRlcm5ldDogJ0xJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0xpdGh1YW5pYScsXG4gICAgY2FwaXRhbDogJ1ZpbG5pdXMnLFxuICAgIGZpcHM6ICdMSCcsXG4gICAgaXNvMjogJ0xUJyxcbiAgICBpc28zOiAnTFRVJyxcbiAgICBpc29ObzogJzQ0MCcsXG4gICAgaW50ZXJuZXQ6ICdMVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdMdXhlbWJvdXJnJyxcbiAgICBjYXBpdGFsOiAnTHV4ZW1ib3VyZycsXG4gICAgZmlwczogJ0xVJyxcbiAgICBpc28yOiAnTFUnLFxuICAgIGlzbzM6ICdMVVgnLFxuICAgIGlzb05vOiAnNDQyJyxcbiAgICBpbnRlcm5ldDogJ0xVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ05vcnRoIE1hY2Vkb25pYScsXG4gICAgY2FwaXRhbDogJ1Nrb3BqZScsXG4gICAgZmlwczogJ01LJyxcbiAgICBpc28yOiAnTUsnLFxuICAgIGlzbzM6ICdNS0QnLFxuICAgIGlzb05vOiAnODA3JyxcbiAgICBpbnRlcm5ldDogJ01LJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdNYWRhZ2FzY2FyJyxcbiAgICBjYXBpdGFsOiAnQW50YW5hbmFyaXZvJyxcbiAgICBmaXBzOiAnTUEnLFxuICAgIGlzbzI6ICdNRycsXG4gICAgaXNvMzogJ01ERycsXG4gICAgaXNvTm86ICc0NTAnLFxuICAgIGludGVybmV0OiAnTUcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ01hbGF3aScsXG4gICAgY2FwaXRhbDogJ0xpbG9uZ3dlJyxcbiAgICBmaXBzOiAnTUknLFxuICAgIGlzbzI6ICdNVycsXG4gICAgaXNvMzogJ01XSScsXG4gICAgaXNvTm86ICc0NTQnLFxuICAgIGludGVybmV0OiAnTVcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdNYWxheXNpYScsXG4gICAgY2FwaXRhbDogJ0t1YWxhIEx1bXB1cicsXG4gICAgZmlwczogJ01ZJyxcbiAgICBpc28yOiAnTVknLFxuICAgIGlzbzM6ICdNWVMnLFxuICAgIGlzb05vOiAnNDU4JyxcbiAgICBpbnRlcm5ldDogJ01ZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ01hbGRpdmVzJyxcbiAgICBjYXBpdGFsOiAnTWFsZSAoTWFhbGUpJyxcbiAgICBmaXBzOiAnTVYnLFxuICAgIGlzbzI6ICdNVicsXG4gICAgaXNvMzogJ01EVicsXG4gICAgaXNvTm86ICc0NjInLFxuICAgIGludGVybmV0OiAnTVYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTWFsaScsXG4gICAgY2FwaXRhbDogJ0JhbWFrbycsXG4gICAgZmlwczogJ01MJyxcbiAgICBpc28yOiAnTUwnLFxuICAgIGlzbzM6ICdNTEknLFxuICAgIGlzb05vOiAnNDY2JyxcbiAgICBpbnRlcm5ldDogJ01MJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdNYWx0YScsXG4gICAgY2FwaXRhbDogJ1ZhbGxldHRhJyxcbiAgICBmaXBzOiAnTVQnLFxuICAgIGlzbzI6ICdNVCcsXG4gICAgaXNvMzogJ01MVCcsXG4gICAgaXNvTm86ICc0NzAnLFxuICAgIGludGVybmV0OiAnTVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSXNsZSBvZiBNYW4nLFxuICAgIGNhcGl0YWw6ICdEb3VnbGFzJyxcbiAgICBmaXBzOiAnSU0nLFxuICAgIGlzbzI6ICdJTScsXG4gICAgaXNvMzogJ0lNTicsXG4gICAgaXNvTm86ICc4MzMnLFxuICAgIGludGVybmV0OiAnSU0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTWFyc2hhbGwgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ01hanVybycsXG4gICAgZmlwczogJ1JNJyxcbiAgICBpc28yOiAnTUgnLFxuICAgIGlzbzM6ICdNSEwnLFxuICAgIGlzb05vOiAnNTg0JyxcbiAgICBpbnRlcm5ldDogJ01IJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnTWFydGluaXF1ZScsXG4gICAgY2FwaXRhbDogJ0ZvcnQtZGUtRnJhbmNlJyxcbiAgICBmaXBzOiAnTUInLFxuICAgIGlzbzI6ICdNUScsXG4gICAgaXNvMzogJ01UUScsXG4gICAgaXNvTm86ICc0NzQnLFxuICAgIGludGVybmV0OiAnTVEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTWF1cml0YW5pYScsXG4gICAgY2FwaXRhbDogJ05vdWFrY2hvdHQnLFxuICAgIGZpcHM6ICdNUicsXG4gICAgaXNvMjogJ01SJyxcbiAgICBpc28zOiAnTVJUJyxcbiAgICBpc29ObzogJzQ3OCcsXG4gICAgaW50ZXJuZXQ6ICdNUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnTWF1cml0aXVzJyxcbiAgICBjYXBpdGFsOiAnUG9ydCBMb3VpcycsXG4gICAgZmlwczogJ01QJyxcbiAgICBpc28yOiAnTVUnLFxuICAgIGlzbzM6ICdNVVMnLFxuICAgIGlzb05vOiAnNDgwJyxcbiAgICBpbnRlcm5ldDogJ01VJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdNYXlvdHRlJyxcbiAgICBjYXBpdGFsOiAnTWFtb3V0em91JyxcbiAgICBmaXBzOiAnTUYnLFxuICAgIGlzbzI6ICdZVCcsXG4gICAgaXNvMzogJ01ZVCcsXG4gICAgaXNvTm86ICcxNzUnLFxuICAgIGludGVybmV0OiAnWVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnTWV4aWNvJyxcbiAgICBjYXBpdGFsOiAnTWV4aWNvJyxcbiAgICBmaXBzOiAnTVgnLFxuICAgIGlzbzI6ICdNWCcsXG4gICAgaXNvMzogJ01FWCcsXG4gICAgaXNvTm86ICc0ODQnLFxuICAgIGludGVybmV0OiAnTVgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnRmVkZXJhdGVkIFN0YXRlcyBvZiBNaWNyb25lc2lhJyxcbiAgICBjYXBpdGFsOiAnUGFsaWtpcicsXG4gICAgZmlwczogJycsXG4gICAgaXNvMjogJ0ZNJyxcbiAgICBpc28zOiAnRlNNJyxcbiAgICBpc29ObzogJzU4MycsXG4gICAgaW50ZXJuZXQ6ICdGTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdNb2xkb3ZhJyxcbiAgICBjYXBpdGFsOiAnQ2hpc2luYXUnLFxuICAgIGZpcHM6ICdNRCcsXG4gICAgaXNvMjogJ01EJyxcbiAgICBpc28zOiAnTURBJyxcbiAgICBpc29ObzogJzQ5OCcsXG4gICAgaW50ZXJuZXQ6ICdNRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdNb25hY28nLFxuICAgIGNhcGl0YWw6ICdNb25hY28nLFxuICAgIGZpcHM6ICdNTicsXG4gICAgaXNvMjogJ01DJyxcbiAgICBpc28zOiAnTUNPJyxcbiAgICBpc29ObzogJzQ5MicsXG4gICAgaW50ZXJuZXQ6ICdNQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFzaWEnLFxuICAgIGNvdW50cnk6ICdNb25nb2xpYScsXG4gICAgY2FwaXRhbDogJ1VsYWFuYmFhdGFyJyxcbiAgICBmaXBzOiAnTUcnLFxuICAgIGlzbzI6ICdNTicsXG4gICAgaXNvMzogJ01ORycsXG4gICAgaXNvTm86ICc0OTYnLFxuICAgIGludGVybmV0OiAnTU4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdNb250c2VycmF0JyxcbiAgICBjYXBpdGFsOiAnUGx5bW91dGgnLFxuICAgIGZpcHM6ICdNSCcsXG4gICAgaXNvMjogJ01TJyxcbiAgICBpc28zOiAnTVNSJyxcbiAgICBpc29ObzogJzUwMCcsXG4gICAgaW50ZXJuZXQ6ICdNUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTW9yb2NjbycsXG4gICAgY2FwaXRhbDogJ1JhYmF0JyxcbiAgICBmaXBzOiAnTU8nLFxuICAgIGlzbzI6ICdNQScsXG4gICAgaXNvMzogJ01BUicsXG4gICAgaXNvTm86ICc1MDQnLFxuICAgIGludGVybmV0OiAnTUEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ01vemFtYmlxdWUnLFxuICAgIGNhcGl0YWw6ICdNYXB1dG8nLFxuICAgIGZpcHM6ICdNWicsXG4gICAgaXNvMjogJ01aJyxcbiAgICBpc28zOiAnTU9aJyxcbiAgICBpc29ObzogJzUwOCcsXG4gICAgaW50ZXJuZXQ6ICdNWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ015YW5tYXIgKEJ1cm1hKScsXG4gICAgY2FwaXRhbDogJ1Jhbmdvb24gKFlhbmdvbiknLFxuICAgIGZpcHM6ICdCTScsXG4gICAgaXNvMjogJ01NJyxcbiAgICBpc28zOiAnTU1SJyxcbiAgICBpc29ObzogJzEwNCcsXG4gICAgaW50ZXJuZXQ6ICdNTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTmFtaWJpYScsXG4gICAgY2FwaXRhbDogJ1dpbmRob2VrJyxcbiAgICBmaXBzOiAnV0EnLFxuICAgIGlzbzI6ICdOQScsXG4gICAgaXNvMzogJ05BTScsXG4gICAgaXNvTm86ICc1MTYnLFxuICAgIGludGVybmV0OiAnTkEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTmF1cnUnLFxuICAgIGNhcGl0YWw6ICdubyBvZmZpY2lhbCBjYXBpdGFsJyxcbiAgICBmaXBzOiAnTlInLFxuICAgIGlzbzI6ICdOUicsXG4gICAgaXNvMzogJ05SVScsXG4gICAgaXNvTm86ICc1MjAnLFxuICAgIGludGVybmV0OiAnTlInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTmVwYWwnLFxuICAgIGNhcGl0YWw6ICdLYXRobWFuZHUnLFxuICAgIGZpcHM6ICdOUCcsXG4gICAgaXNvMjogJ05QJyxcbiAgICBpc28zOiAnTlBMJyxcbiAgICBpc29ObzogJzUyNCcsXG4gICAgaW50ZXJuZXQ6ICdOUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdOZXRoZXJsYW5kcycsXG4gICAgY2FwaXRhbDogJ0Ftc3RlcmRhbScsXG4gICAgZmlwczogJ05MJyxcbiAgICBpc28yOiAnTkwnLFxuICAgIGlzbzM6ICdOTEQnLFxuICAgIGlzb05vOiAnNTI4JyxcbiAgICBpbnRlcm5ldDogJ05MJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnTmV0aGVybGFuZHMgQW50aWxsZXMnLFxuICAgIGNhcGl0YWw6ICdXaWxsZW1zdGFkJyxcbiAgICBmaXBzOiAnTlQnLFxuICAgIGlzbzI6ICdBTicsXG4gICAgaXNvMzogJ0FOVCcsXG4gICAgaXNvTm86ICc1MzAnLFxuICAgIGludGVybmV0OiAnQU4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTmV3IENhbGVkb25pYScsXG4gICAgY2FwaXRhbDogJ05vdW1lYScsXG4gICAgZmlwczogJ05DJyxcbiAgICBpc28yOiAnTkMnLFxuICAgIGlzbzM6ICdOQ0wnLFxuICAgIGlzb05vOiAnNTQwJyxcbiAgICBpbnRlcm5ldDogJ05DJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05ldyBaZWFsYW5kJyxcbiAgICBjYXBpdGFsOiAnV2VsbGluZ3RvbicsXG4gICAgZmlwczogJ05aJyxcbiAgICBpc28yOiAnTlonLFxuICAgIGlzbzM6ICdOWkwnLFxuICAgIGlzb05vOiAnNTU0JyxcbiAgICBpbnRlcm5ldDogJ05aJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ05pY2FyYWd1YScsXG4gICAgY2FwaXRhbDogJ01hbmFndWEnLFxuICAgIGZpcHM6ICdOVScsXG4gICAgaXNvMjogJ05JJyxcbiAgICBpc28zOiAnTklDJyxcbiAgICBpc29ObzogJzU1OCcsXG4gICAgaW50ZXJuZXQ6ICdOSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdOaWdlcicsXG4gICAgY2FwaXRhbDogJ05pYW1leScsXG4gICAgZmlwczogJ05HJyxcbiAgICBpc28yOiAnTkUnLFxuICAgIGlzbzM6ICdORVInLFxuICAgIGlzb05vOiAnNTYyJyxcbiAgICBpbnRlcm5ldDogJ05FJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ05pZ2VyaWEnLFxuICAgIGNhcGl0YWw6ICdBYnVqYScsXG4gICAgZmlwczogJ05JJyxcbiAgICBpc28yOiAnTkcnLFxuICAgIGlzbzM6ICdOR0EnLFxuICAgIGlzb05vOiAnNTY2JyxcbiAgICBpbnRlcm5ldDogJ05HJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05pdWUnLFxuICAgIGNhcGl0YWw6ICdBbG9maScsXG4gICAgZmlwczogJ05FJyxcbiAgICBpc28yOiAnTlUnLFxuICAgIGlzbzM6ICdOSVUnLFxuICAgIGlzb05vOiAnNTcwJyxcbiAgICBpbnRlcm5ldDogJ05VJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05vcmZvbGsgSXNsYW5kJyxcbiAgICBjYXBpdGFsOiAnS2luZ3N0b24nLFxuICAgIGZpcHM6ICdORicsXG4gICAgaXNvMjogJ05GJyxcbiAgICBpc28zOiAnTkZLJyxcbiAgICBpc29ObzogJzU3NCcsXG4gICAgaW50ZXJuZXQ6ICdORidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdTYWlwYW4nLFxuICAgIGZpcHM6ICdDUScsXG4gICAgaXNvMjogJ01QJyxcbiAgICBpc28zOiAnTU5QJyxcbiAgICBpc29ObzogJzU4MCcsXG4gICAgaW50ZXJuZXQ6ICdNUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTm9yd2F5JyxcbiAgICBjYXBpdGFsOiAnT3NsbycsXG4gICAgZmlwczogJ05PJyxcbiAgICBpc28yOiAnTk8nLFxuICAgIGlzbzM6ICdOT1InLFxuICAgIGlzb05vOiAnNTc4JyxcbiAgICBpbnRlcm5ldDogJ05PJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnT21hbicsXG4gICAgY2FwaXRhbDogJ011c2NhdCcsXG4gICAgZmlwczogJ01VJyxcbiAgICBpc28yOiAnT00nLFxuICAgIGlzbzM6ICdPTU4nLFxuICAgIGlzb05vOiAnNTEyJyxcbiAgICBpbnRlcm5ldDogJ09NJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ1Bha2lzdGFuJyxcbiAgICBjYXBpdGFsOiAnSXNsYW1hYmFkJyxcbiAgICBmaXBzOiAnUEsnLFxuICAgIGlzbzI6ICdQSycsXG4gICAgaXNvMzogJ1BBSycsXG4gICAgaXNvTm86ICc1ODYnLFxuICAgIGludGVybmV0OiAnUEsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnUGFsYXUnLFxuICAgIGNhcGl0YWw6ICdLb3JvcicsXG4gICAgZmlwczogJ1BTJyxcbiAgICBpc28yOiAnUFcnLFxuICAgIGlzbzM6ICdQTFcnLFxuICAgIGlzb05vOiAnNTg1JyxcbiAgICBpbnRlcm5ldDogJ1BXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnUGFsZXN0aW5pYW4gVGVycml0b3J5JyxcbiAgICBjYXBpdGFsOiAnRWFzdCBKZXJ1c2FsZW0nLFxuICAgIGZpcHM6ICdXRScsXG4gICAgaXNvMjogJ1BTJyxcbiAgICBpc28zOiAnUFNFJyxcbiAgICBpc29ObzogJzI3NScsXG4gICAgaW50ZXJuZXQ6ICdQUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdQYW5hbWEnLFxuICAgIGNhcGl0YWw6ICdQYW5hbWEnLFxuICAgIGZpcHM6ICdQTScsXG4gICAgaXNvMjogJ1BBJyxcbiAgICBpc28zOiAnUEFOJyxcbiAgICBpc29ObzogJzU5MScsXG4gICAgaW50ZXJuZXQ6ICdQQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdQYXB1YSBOZXcgR3VpbmVhJyxcbiAgICBjYXBpdGFsOiAnUG9ydCBNb3Jlc2J5JyxcbiAgICBmaXBzOiAnUFAnLFxuICAgIGlzbzI6ICdQRycsXG4gICAgaXNvMzogJ1BORycsXG4gICAgaXNvTm86ICc1OTgnLFxuICAgIGludGVybmV0OiAnUEcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1BhcmFndWF5JyxcbiAgICBjYXBpdGFsOiAnQXN1bmNpb24nLFxuICAgIGZpcHM6ICdQQScsXG4gICAgaXNvMjogJ1BZJyxcbiAgICBpc28zOiAnUFJZJyxcbiAgICBpc29ObzogJzYwMCcsXG4gICAgaW50ZXJuZXQ6ICdQWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnUGVydScsXG4gICAgY2FwaXRhbDogJ0xpbWEnLFxuICAgIGZpcHM6ICdQRScsXG4gICAgaXNvMjogJ1BFJyxcbiAgICBpc28zOiAnUEVSJyxcbiAgICBpc29ObzogJzYwNCcsXG4gICAgaW50ZXJuZXQ6ICdQRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1BoaWxpcHBpbmVzJyxcbiAgICBjYXBpdGFsOiAnTWFuaWxhJyxcbiAgICBmaXBzOiAnUlAnLFxuICAgIGlzbzI6ICdQSCcsXG4gICAgaXNvMzogJ1BITCcsXG4gICAgaXNvTm86ICc2MDgnLFxuICAgIGludGVybmV0OiAnUEgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnUGl0Y2Fpcm4gSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0FkYW1zdG93bicsXG4gICAgZmlwczogJ1BDJyxcbiAgICBpc28yOiAnUE4nLFxuICAgIGlzbzM6ICdQQ04nLFxuICAgIGlzb05vOiAnNjEyJyxcbiAgICBpbnRlcm5ldDogJ1BOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1BvbGFuZCcsXG4gICAgY2FwaXRhbDogJ1dhcnNhdycsXG4gICAgZmlwczogJ1BMJyxcbiAgICBpc28yOiAnUEwnLFxuICAgIGlzbzM6ICdQT0wnLFxuICAgIGlzb05vOiAnNjE2JyxcbiAgICBpbnRlcm5ldDogJ1BMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1BvcnR1Z2FsJyxcbiAgICBjYXBpdGFsOiAnTGlzYm9uJyxcbiAgICBmaXBzOiAnUE8nLFxuICAgIGlzbzI6ICdQVCcsXG4gICAgaXNvMzogJ1BSVCcsXG4gICAgaXNvTm86ICc2MjAnLFxuICAgIGludGVybmV0OiAnUFQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdQdWVydG8gUmljbycsXG4gICAgY2FwaXRhbDogJ1NhbiBKdWFuJyxcbiAgICBmaXBzOiAnUlEnLFxuICAgIGlzbzI6ICdQUicsXG4gICAgaXNvMzogJ1BSSScsXG4gICAgaXNvTm86ICc2MzAnLFxuICAgIGludGVybmV0OiAnUFInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdRYXRhcicsXG4gICAgY2FwaXRhbDogJ0RvaGEnLFxuICAgIGZpcHM6ICdRQScsXG4gICAgaXNvMjogJ1FBJyxcbiAgICBpc28zOiAnUUFUJyxcbiAgICBpc29ObzogJzYzNCcsXG4gICAgaW50ZXJuZXQ6ICdRQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnUmV1bmlvbicsXG4gICAgY2FwaXRhbDogJ1NhaW50LURlbmlzJyxcbiAgICBmaXBzOiAnUkUnLFxuICAgIGlzbzI6ICdSRScsXG4gICAgaXNvMzogJ1JFVScsXG4gICAgaXNvTm86ICc2MzgnLFxuICAgIGludGVybmV0OiAnUkUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnUm9tYW5pYScsXG4gICAgY2FwaXRhbDogJ0J1Y2hhcmVzdCcsXG4gICAgZmlwczogJ1JPJyxcbiAgICBpc28yOiAnUk8nLFxuICAgIGlzbzM6ICdST1UnLFxuICAgIGlzb05vOiAnNjQyJyxcbiAgICBpbnRlcm5ldDogJ1JPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQXNpYScsXG4gICAgY291bnRyeTogJ1J1c3NpYScsXG4gICAgY2FwaXRhbDogJ01vc2NvdycsXG4gICAgZmlwczogJ1JTJyxcbiAgICBpc28yOiAnUlUnLFxuICAgIGlzbzM6ICdSVVMnLFxuICAgIGlzb05vOiAnNjQzJyxcbiAgICBpbnRlcm5ldDogJ1JVJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ1J3YW5kYScsXG4gICAgY2FwaXRhbDogJ0tpZ2FsaScsXG4gICAgZmlwczogJ1JXJyxcbiAgICBpc28yOiAnUlcnLFxuICAgIGlzbzM6ICdSV0EnLFxuICAgIGlzb05vOiAnNjQ2JyxcbiAgICBpbnRlcm5ldDogJ1JXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcbiAgICBjYXBpdGFsOiAnQmFzc2V0ZXJyZScsXG4gICAgZmlwczogJ1NDJyxcbiAgICBpc28yOiAnS04nLFxuICAgIGlzbzM6ICdLTkEnLFxuICAgIGlzb05vOiAnNjU5JyxcbiAgICBpbnRlcm5ldDogJ0tOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgTHVjaWEnLFxuICAgIGNhcGl0YWw6ICdDYXN0cmllcycsXG4gICAgZmlwczogJ1NUJyxcbiAgICBpc28yOiAnTEMnLFxuICAgIGlzbzM6ICdMQ0EnLFxuICAgIGlzb05vOiAnNjYyJyxcbiAgICBpbnRlcm5ldDogJ0xDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uJyxcbiAgICBjYXBpdGFsOiAnU2FpbnQtUGllcnJlJyxcbiAgICBmaXBzOiAnU0InLFxuICAgIGlzbzI6ICdQTScsXG4gICAgaXNvMzogJ1NQTScsXG4gICAgaXNvTm86ICc2NjYnLFxuICAgIGludGVybmV0OiAnUE0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gICAgY2FwaXRhbDogJ0tpbmdzdG93bicsXG4gICAgZmlwczogJ1ZDJyxcbiAgICBpc28yOiAnVkMnLFxuICAgIGlzbzM6ICdWQ1QnLFxuICAgIGlzb05vOiAnNjcwJyxcbiAgICBpbnRlcm5ldDogJ1ZDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTYW4gTWFyaW5vJyxcbiAgICBjYXBpdGFsOiAnU2FuIE1hcmlubycsXG4gICAgZmlwczogJ1NNJyxcbiAgICBpc28yOiAnU00nLFxuICAgIGlzbzM6ICdTTVInLFxuICAgIGlzb05vOiAnNjc0JyxcbiAgICBpbnRlcm5ldDogJ1NNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsXG4gICAgY2FwaXRhbDogJ1NhbyBUb21lJyxcbiAgICBmaXBzOiAnVFAnLFxuICAgIGlzbzI6ICdTVCcsXG4gICAgaXNvMzogJ1NUUCcsXG4gICAgaXNvTm86ICc2NzgnLFxuICAgIGludGVybmV0OiAnU1QnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdTYXVkaSBBcmFiaWEnLFxuICAgIGNhcGl0YWw6ICdSaXlhZGgnLFxuICAgIGZpcHM6ICdTQScsXG4gICAgaXNvMjogJ1NBJyxcbiAgICBpc28zOiAnU0FVJyxcbiAgICBpc29ObzogJzY4MicsXG4gICAgaW50ZXJuZXQ6ICdTQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTZW5lZ2FsJyxcbiAgICBjYXBpdGFsOiAnRGFrYXInLFxuICAgIGZpcHM6ICdTRycsXG4gICAgaXNvMjogJ1NOJyxcbiAgICBpc28zOiAnU0VOJyxcbiAgICBpc29ObzogJzY4NicsXG4gICAgaW50ZXJuZXQ6ICdTTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnSW5kaWFuIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnU2V5Y2hlbGxlcycsXG4gICAgY2FwaXRhbDogJ1ZpY3RvcmlhJyxcbiAgICBmaXBzOiAnU0UnLFxuICAgIGlzbzI6ICdTQycsXG4gICAgaXNvMzogJ1NZQycsXG4gICAgaXNvTm86ICc2OTAnLFxuICAgIGludGVybmV0OiAnU0MnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU2llcnJhIExlb25lJyxcbiAgICBjYXBpdGFsOiAnRnJlZXRvd24nLFxuICAgIGZpcHM6ICdTTCcsXG4gICAgaXNvMjogJ1NMJyxcbiAgICBpc28zOiAnU0xFJyxcbiAgICBpc29ObzogJzY5NCcsXG4gICAgaW50ZXJuZXQ6ICdTTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1NpbmdhcG9yZScsXG4gICAgY2FwaXRhbDogJ1NpbmdhcG9yZScsXG4gICAgZmlwczogJ1NOJyxcbiAgICBpc28yOiAnU0cnLFxuICAgIGlzbzM6ICdTR1AnLFxuICAgIGlzb05vOiAnNzAyJyxcbiAgICBpbnRlcm5ldDogJ1NHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdDZW50cmFsIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1Nsb3Zha2lhJyxcbiAgICBjYXBpdGFsOiAnQnJhdGlzbGF2YScsXG4gICAgZmlwczogJ0xPJyxcbiAgICBpc28yOiAnU0snLFxuICAgIGlzbzM6ICdTVksnLFxuICAgIGlzb05vOiAnNzAzJyxcbiAgICBpbnRlcm5ldDogJ1NLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1Nsb3ZlbmlhJyxcbiAgICBjYXBpdGFsOiAnTGp1YmxqYW5hJyxcbiAgICBmaXBzOiAnU0knLFxuICAgIGlzbzI6ICdTSScsXG4gICAgaXNvMzogJ1NWTicsXG4gICAgaXNvTm86ICc3MDUnLFxuICAgIGludGVybmV0OiAnU0knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnU29sb21vbiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnSG9uaWFyYScsXG4gICAgZmlwczogJ0JQJyxcbiAgICBpc28yOiAnU0InLFxuICAgIGlzbzM6ICdTTEInLFxuICAgIGlzb05vOiAnOTAnLFxuICAgIGludGVybmV0OiAnU0InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU29tYWxpYScsXG4gICAgY2FwaXRhbDogJ01vZ2FkaXNodScsXG4gICAgZmlwczogJ1NPJyxcbiAgICBpc28yOiAnU08nLFxuICAgIGlzbzM6ICdTT00nLFxuICAgIGlzb05vOiAnNzA2JyxcbiAgICBpbnRlcm5ldDogJ1NPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTb3V0aCBBZnJpY2EnLFxuICAgIGNhcGl0YWw6ICdQcmV0b3JpYe+/ve+/vScsXG4gICAgZmlwczogJ1NGJyxcbiAgICBpc28yOiAnWkEnLFxuICAgIGlzbzM6ICdaQUYnLFxuICAgIGlzb05vOiAnNzEwJyxcbiAgICBpbnRlcm5ldDogJ1pBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1NwYWluJyxcbiAgICBjYXBpdGFsOiAnTWFkcmlkJyxcbiAgICBmaXBzOiAnU1AnLFxuICAgIGlzbzI6ICdFUycsXG4gICAgaXNvMzogJ0VTUCcsXG4gICAgaXNvTm86ICc3MjQnLFxuICAgIGludGVybmV0OiAnRVMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnU3JpIExhbmthJyxcbiAgICBjYXBpdGFsOiAnQ29sb21ibycsXG4gICAgZmlwczogJ0NFJyxcbiAgICBpc28yOiAnTEsnLFxuICAgIGlzbzM6ICdMS0EnLFxuICAgIGlzb05vOiAnMTQ0JyxcbiAgICBpbnRlcm5ldDogJ0xLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTdWRhbicsXG4gICAgY2FwaXRhbDogJ0toYXJ0b3VtJyxcbiAgICBmaXBzOiAnU1UnLFxuICAgIGlzbzI6ICdTRCcsXG4gICAgaXNvMzogJ1NETicsXG4gICAgaXNvTm86ICc3MzYnLFxuICAgIGludGVybmV0OiAnU0QnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1N1cmluYW1lJyxcbiAgICBjYXBpdGFsOiAnUGFyYW1hcmlibycsXG4gICAgZmlwczogJ05TJyxcbiAgICBpc28yOiAnU1InLFxuICAgIGlzbzM6ICdTVVInLFxuICAgIGlzb05vOiAnNzQwJyxcbiAgICBpbnRlcm5ldDogJ1NSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTdmFsYmFyZCcsXG4gICAgY2FwaXRhbDogJ0xvbmd5ZWFyYnllbicsXG4gICAgZmlwczogJ1NWJyxcbiAgICBpc28yOiAnU0onLFxuICAgIGlzbzM6ICdTSk0nLFxuICAgIGlzb05vOiAnNzQ0JyxcbiAgICBpbnRlcm5ldDogJ1NKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdFc3dhdGluaScsXG4gICAgY2FwaXRhbDogJ01iYWJhbmUnLFxuICAgIGZpcHM6ICdXWicsXG4gICAgaXNvMjogJ1NaJyxcbiAgICBpc28zOiAnU1daJyxcbiAgICBpc29ObzogJzc0OCcsXG4gICAgaW50ZXJuZXQ6ICdTWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU3dlZGVuJyxcbiAgICBjYXBpdGFsOiAnU3RvY2tob2xtJyxcbiAgICBmaXBzOiAnU1cnLFxuICAgIGlzbzI6ICdTRScsXG4gICAgaXNvMzogJ1NXRScsXG4gICAgaXNvTm86ICc3NTInLFxuICAgIGludGVybmV0OiAnU0UnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU3dpdHplcmxhbmQnLFxuICAgIGNhcGl0YWw6ICdCZXJuJyxcbiAgICBmaXBzOiAnU1onLFxuICAgIGlzbzI6ICdDSCcsXG4gICAgaXNvMzogJ0NIRScsXG4gICAgaXNvTm86ICc3NTYnLFxuICAgIGludGVybmV0OiAnQ0gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdTeXJpYScsXG4gICAgY2FwaXRhbDogJ0RhbWFzY3VzJyxcbiAgICBmaXBzOiAnU1knLFxuICAgIGlzbzI6ICdTWScsXG4gICAgaXNvMzogJ1NZUicsXG4gICAgaXNvTm86ICc3NjAnLFxuICAgIGludGVybmV0OiAnU1knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdUYWl3YW4nLFxuICAgIGNhcGl0YWw6ICdUYWlwZWknLFxuICAgIGZpcHM6ICdUVycsXG4gICAgaXNvMjogJ1RXJyxcbiAgICBpc28zOiAnVFdOJyxcbiAgICBpc29ObzogJzE1OCcsXG4gICAgaW50ZXJuZXQ6ICdUVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQXNpYScsXG4gICAgY291bnRyeTogJ1RhamlraXN0YW4nLFxuICAgIGNhcGl0YWw6ICdEdXNoYW5iZScsXG4gICAgZmlwczogJ1RJJyxcbiAgICBpc28yOiAnVEonLFxuICAgIGlzbzM6ICdUSksnLFxuICAgIGlzb05vOiAnNzYyJyxcbiAgICBpbnRlcm5ldDogJ1RKJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1RhbnphbmlhJyxcbiAgICBjYXBpdGFsOiAnRGFyIGVzIFNhbGFhbScsXG4gICAgZmlwczogJ1RaJyxcbiAgICBpc28yOiAnVFonLFxuICAgIGlzbzM6ICdUWkEnLFxuICAgIGlzb05vOiAnODM0JyxcbiAgICBpbnRlcm5ldDogJ1RaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVGhhaWxhbmQnLFxuICAgIGNhcGl0YWw6ICdCYW5na29rJyxcbiAgICBmaXBzOiAnVEgnLFxuICAgIGlzbzI6ICdUSCcsXG4gICAgaXNvMzogJ1RIQScsXG4gICAgaXNvTm86ICc3NjQnLFxuICAgIGludGVybmV0OiAnVEgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnVG9nbycsXG4gICAgY2FwaXRhbDogJ0xvbWUnLFxuICAgIGZpcHM6ICdUTycsXG4gICAgaXNvMjogJ1RHJyxcbiAgICBpc28zOiAnVEdPJyxcbiAgICBpc29ObzogJzc2OCcsXG4gICAgaW50ZXJuZXQ6ICdURydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdUb2tlbGF1JyxcbiAgICBjYXBpdGFsOiAnbm9uZScsXG4gICAgZmlwczogJ1RMJyxcbiAgICBpc28yOiAnVEsnLFxuICAgIGlzbzM6ICdUS0wnLFxuICAgIGlzb05vOiAnNzcyJyxcbiAgICBpbnRlcm5ldDogJ1RLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1RvbmdhJyxcbiAgICBjYXBpdGFsOiBcIk51a3UnYWxvZmFcIixcbiAgICBmaXBzOiAnVE4nLFxuICAgIGlzbzI6ICdUTycsXG4gICAgaXNvMzogJ1RPTicsXG4gICAgaXNvTm86ICc3NzYnLFxuICAgIGludGVybmV0OiAnVE8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcbiAgICBjYXBpdGFsOiAnUG9ydC1vZi1TcGFpbicsXG4gICAgZmlwczogJ1REJyxcbiAgICBpc28yOiAnVFQnLFxuICAgIGlzbzM6ICdUVE8nLFxuICAgIGlzb05vOiAnNzgwJyxcbiAgICBpbnRlcm5ldDogJ1RUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdUdW5pc2lhJyxcbiAgICBjYXBpdGFsOiAnVHVuaXMnLFxuICAgIGZpcHM6ICdUUycsXG4gICAgaXNvMjogJ1ROJyxcbiAgICBpc28zOiAnVFVOJyxcbiAgICBpc29ObzogJzc4OCcsXG4gICAgaW50ZXJuZXQ6ICdUTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1R1cmtleScsXG4gICAgY2FwaXRhbDogJ0Fua2FyYScsXG4gICAgZmlwczogJ1RVJyxcbiAgICBpc28yOiAnVFInLFxuICAgIGlzbzM6ICdUVVInLFxuICAgIGlzb05vOiAnNzkyJyxcbiAgICBpbnRlcm5ldDogJ1RSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVHVya21lbmlzdGFuJyxcbiAgICBjYXBpdGFsOiAnQXNoZ2FiYXQnLFxuICAgIGZpcHM6ICdUWCcsXG4gICAgaXNvMjogJ1RNJyxcbiAgICBpc28zOiAnVEtNJyxcbiAgICBpc29ObzogJzc5NScsXG4gICAgaW50ZXJuZXQ6ICdUTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0dyYW5kIFR1cmsnLFxuICAgIGZpcHM6ICdUSycsXG4gICAgaXNvMjogJ1RDJyxcbiAgICBpc28zOiAnVENBJyxcbiAgICBpc29ObzogJzc5NicsXG4gICAgaW50ZXJuZXQ6ICdUQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdUdXZhbHUnLFxuICAgIGNhcGl0YWw6ICdGdW5hZnV0aScsXG4gICAgZmlwczogJ1RWJyxcbiAgICBpc28yOiAnVFYnLFxuICAgIGlzbzM6ICdUVVYnLFxuICAgIGlzb05vOiAnNzk4JyxcbiAgICBpbnRlcm5ldDogJ1RWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1VnYW5kYScsXG4gICAgY2FwaXRhbDogJ0thbXBhbGEnLFxuICAgIGZpcHM6ICdVRycsXG4gICAgaXNvMjogJ1VHJyxcbiAgICBpc28zOiAnVUdBJyxcbiAgICBpc29ObzogJzgwMCcsXG4gICAgaW50ZXJuZXQ6ICdVRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdVa3JhaW5lJyxcbiAgICBjYXBpdGFsOiAnS2lldicsXG4gICAgZmlwczogJ1VQJyxcbiAgICBpc28yOiAnVUEnLFxuICAgIGlzbzM6ICdVS1InLFxuICAgIGlzb05vOiAnODA0JyxcbiAgICBpbnRlcm5ldDogJ1VBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxuICAgIGNhcGl0YWw6ICdBYnUgRGhhYmknLFxuICAgIGZpcHM6ICdUQycsXG4gICAgaXNvMjogJ0FFJyxcbiAgICBpc28zOiAnQVJFJyxcbiAgICBpc29ObzogJzc4NCcsXG4gICAgaW50ZXJuZXQ6ICdBRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXG4gICAgY2FwaXRhbDogJ0xvbmRvbicsXG4gICAgZmlwczogJ1VLJyxcbiAgICBpc28yOiAnR0InLFxuICAgIGlzbzM6ICdHQlInLFxuICAgIGlzb05vOiAnODI2JyxcbiAgICBpbnRlcm5ldDogJ1VLJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzJyxcbiAgICBjYXBpdGFsOiAnV2FzaGluZ3RvbiBEQycsXG4gICAgZmlwczogJ1VTJyxcbiAgICBpc28yOiAnVVMnLFxuICAgIGlzbzM6ICdVU0EnLFxuICAgIGlzb05vOiAnODQwJyxcbiAgICBpbnRlcm5ldDogJ1VTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ05vcnRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdXYXNoaW5ndG9uIERDJyxcbiAgICBmaXBzOiAnJyxcbiAgICBpc28yOiAnVU0nLFxuICAgIGlzbzM6ICdVTUknLFxuICAgIGlzb05vOiAnNTgxJyxcbiAgICBpbnRlcm5ldDogJ1VTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdVcnVndWF5JyxcbiAgICBjYXBpdGFsOiAnTW9udGV2aWRlbycsXG4gICAgZmlwczogJ1VZJyxcbiAgICBpc28yOiAnVVknLFxuICAgIGlzbzM6ICdVUlknLFxuICAgIGlzb05vOiAnODU4JyxcbiAgICBpbnRlcm5ldDogJ1VZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVXpiZWtpc3RhbicsXG4gICAgY2FwaXRhbDogJ1Rhc2hrZW50IChUb3Noa2VudCknLFxuICAgIGZpcHM6ICdVWicsXG4gICAgaXNvMjogJ1VaJyxcbiAgICBpc28zOiAnVVpCJyxcbiAgICBpc29ObzogJzg2MCcsXG4gICAgaW50ZXJuZXQ6ICdVWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdWYW51YXR1JyxcbiAgICBjYXBpdGFsOiAnUG9ydC1WaWxhJyxcbiAgICBmaXBzOiAnTkgnLFxuICAgIGlzbzI6ICdWVScsXG4gICAgaXNvMzogJ1ZVVCcsXG4gICAgaXNvTm86ICc1NDgnLFxuICAgIGludGVybmV0OiAnVlUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1ZlbmV6dWVsYScsXG4gICAgY2FwaXRhbDogJ0NhcmFjYXMnLFxuICAgIGZpcHM6ICdWRScsXG4gICAgaXNvMjogJ1ZFJyxcbiAgICBpc28zOiAnVkVOJyxcbiAgICBpc29ObzogJzg2MicsXG4gICAgaW50ZXJuZXQ6ICdVRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1ZpZXRuYW0nLFxuICAgIGNhcGl0YWw6ICdIYW5vaScsXG4gICAgZmlwczogJ1ZOJyxcbiAgICBpc28yOiAnVk4nLFxuICAgIGlzbzM6ICdWTk0nLFxuICAgIGlzb05vOiAnNzA0JyxcbiAgICBpbnRlcm5ldDogJ1ZOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnVmlyZ2luIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdDaGFybG90dGUgQW1hbGllJyxcbiAgICBmaXBzOiAnVlEnLFxuICAgIGlzbzI6ICdWSScsXG4gICAgaXNvMzogJ1ZJUicsXG4gICAgaXNvTm86ICc4NTAnLFxuICAgIGludGVybmV0OiAnVkknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnV2FsbGlzIGFuZCBGdXR1bmEnLFxuICAgIGNhcGl0YWw6ICdNYXRhLVV0dSAob24gSWxlIFV2ZWEpJyxcbiAgICBmaXBzOiAnV0YnLFxuICAgIGlzbzI6ICdXRicsXG4gICAgaXNvMzogJ1dMRicsXG4gICAgaXNvTm86ICc4NzYnLFxuICAgIGludGVybmV0OiAnV0YnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1dlc3Rlcm4gU2FoYXJhJyxcbiAgICBjYXBpdGFsOiAnbm9uZScsXG4gICAgZmlwczogJ1dJJyxcbiAgICBpc28yOiAnRUgnLFxuICAgIGlzbzM6ICdFU0gnLFxuICAgIGlzb05vOiAnNzMyJyxcbiAgICBpbnRlcm5ldDogJ0VIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1dlc3Rlcm4gU2Ftb2EnLFxuICAgIGNhcGl0YWw6ICdBcGlhJyxcbiAgICBmaXBzOiAnV1MnLFxuICAgIGlzbzI6ICdXUycsXG4gICAgaXNvMzogJ1dTTScsXG4gICAgaXNvTm86ICc4ODInLFxuICAgIGludGVybmV0OiAnV1MnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdZZW1lbicsXG4gICAgY2FwaXRhbDogJ1NhbmFhJyxcbiAgICBmaXBzOiAnWU0nLFxuICAgIGlzbzI6ICdZRScsXG4gICAgaXNvMzogJ1lFTScsXG4gICAgaXNvTm86ICc4ODcnLFxuICAgIGludGVybmV0OiAnWUUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgQ29uZ28nLFxuICAgIGNhcGl0YWw6ICdLaW5zaGFzYScsXG4gICAgZmlwczogJ0NHJyxcbiAgICBpc28yOiAnQ0QnLFxuICAgIGlzbzM6ICdDT0QnLFxuICAgIGlzb05vOiAnMTgwJyxcbiAgICBpbnRlcm5ldDogJ1pSJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdaYW1iaWEnLFxuICAgIGNhcGl0YWw6ICdMdXNha2EnLFxuICAgIGZpcHM6ICdaQScsXG4gICAgaXNvMjogJ1pNJyxcbiAgICBpc28zOiAnWk1CJyxcbiAgICBpc29ObzogJzg5NCcsXG4gICAgaW50ZXJuZXQ6ICdaTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnWmltYmFid2UnLFxuICAgIGNhcGl0YWw6ICdIYXJhcmUnLFxuICAgIGZpcHM6ICdaSScsXG4gICAgaXNvMjogJ1pXJyxcbiAgICBpc28zOiAnWldFJyxcbiAgICBpc29ObzogJzcxNicsXG4gICAgaW50ZXJuZXQ6ICdaVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0hvbmcgS29uZycsXG4gICAgY2FwaXRhbDogJ1ZpY3RvcmlhJyxcbiAgICBmaXBzOiAnSEsnLFxuICAgIGlzbzI6ICdISycsXG4gICAgaXNvMzogJ0hLRycsXG4gICAgaXNvTm86ICczNDQnLFxuICAgIGludGVybmV0OiAnSEsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdNYWNhdScsXG4gICAgY2FwaXRhbDogJ01hY2F1JyxcbiAgICBmaXBzOiAnTUMnLFxuICAgIGlzbzI6ICdNTycsXG4gICAgaXNvMzogJ01BQycsXG4gICAgaXNvTm86ICc0NDYnLFxuICAgIGludGVybmV0OiAnTU8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbnRhcmN0aWNhJyxcbiAgICByZWdpb246ICdBbnRhcmN0aWNhJyxcbiAgICBjb3VudHJ5OiAnQW50YXJjdGljYScsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ0FZJyxcbiAgICBpc28yOiAnQVEnLFxuICAgIGlzbzM6ICdBVEEnLFxuICAgIGlzb05vOiAnMTAnLFxuICAgIGludGVybmV0OiAnQVEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBdGxhbnRpYyBPY2VhbicsXG4gICAgcmVnaW9uOiAnU291dGggQXRsYW50aWMgT2NlYW4nLFxuICAgIGNvdW50cnk6ICdCb3V2ZXQgSXNsYW5kJyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnQlYnLFxuICAgIGlzbzI6ICdCVicsXG4gICAgaXNvMzogJ0JWVCcsXG4gICAgaXNvTm86ICc3NCcsXG4gICAgaW50ZXJuZXQ6ICdCVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdJTycsXG4gICAgaXNvMjogJ0lPJyxcbiAgICBpc28zOiAnSU9UJyxcbiAgICBpc29ObzogJzg2JyxcbiAgICBpbnRlcm5ldDogJ0lPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnSW5kaWFuIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdGcmVuY2ggU291dGhlcm4gYW5kIEFudGFyY3RpYyBMYW5kcycsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ0ZTJyxcbiAgICBpc28yOiAnVEYnLFxuICAgIGlzbzM6ICdBVEYnLFxuICAgIGlzb05vOiAnMjYwJyxcbiAgICBpbnRlcm5ldDogJy0tJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnSW5kaWFuIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdITScsXG4gICAgaXNvMjogJ0hNJyxcbiAgICBpc28zOiAnSE1EJyxcbiAgICBpc29ObzogJzMzNCcsXG4gICAgaW50ZXJuZXQ6ICdITSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0F0bGFudGljIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aCBBdGxhbnRpYyBPY2VhbicsXG4gICAgY291bnRyeTogJ1NhaW50IEhlbGVuYScsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ1NIJyxcbiAgICBpc28yOiAnU0gnLFxuICAgIGlzbzM6ICdTSE4nLFxuICAgIGlzb05vOiAnNjU0JyxcbiAgICBpbnRlcm5ldDogJ1NIJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXRsYW50aWMgT2NlYW4nLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEF0bGFudGljIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdTWCcsXG4gICAgaXNvMjogJ0dTJyxcbiAgICBpc28zOiAnU0dTJyxcbiAgICBpc29ObzogJzIzOScsXG4gICAgaW50ZXJuZXQ6ICdHUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdHdWVybnNleScsXG4gICAgY2FwaXRhbDogJ1NhaW50IFBldGVyIFBvcnQnLFxuICAgIGZpcHM6ICdHSycsXG4gICAgaXNvMjogJ0dHJyxcbiAgICBpc28zOiAnR0dZJyxcbiAgICBpc29ObzogJzgzMScsXG4gICAgaW50ZXJuZXQ6ICdHRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTZXJiaWEnLFxuICAgIGNhcGl0YWw6ICdCZWxncmFkZScsXG4gICAgZmlwczogJ1JJJyxcbiAgICBpc28yOiAnUlMnLFxuICAgIGlzbzM6ICdTUkInLFxuICAgIGlzb05vOiAnNjg4JyxcbiAgICBpbnRlcm5ldDogJ1JTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgQmFydGjDqWxlbXknLFxuICAgIGNhcGl0YWw6ICdHdXN0YXZpYScsXG4gICAgZmlwczogJ1RCJyxcbiAgICBpc28yOiAnQkwnLFxuICAgIGlzbzM6ICdCTE0nLFxuICAgIGlzb05vOiAnNjUyJyxcbiAgICBpbnRlcm5ldDogJ0JMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ01vbnRlbmVncm8nLFxuICAgIGNhcGl0YWw6ICdQb2Rnb3JpY2EnLFxuICAgIGZpcHM6ICdNSicsXG4gICAgaXNvMjogJ01FJyxcbiAgICBpc28zOiAnTU5FJyxcbiAgICBpc29ObzogJzQ5OScsXG4gICAgaW50ZXJuZXQ6ICdNRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdKZXJzZXknLFxuICAgIGNhcGl0YWw6ICdTYWludCBIZWxpZXInLFxuICAgIGZpcHM6ICdKRScsXG4gICAgaXNvMjogJ0pFJyxcbiAgICBpc28zOiAnSkVZJyxcbiAgICBpc29ObzogJzgzMicsXG4gICAgaW50ZXJuZXQ6ICdKRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0N1cmHDp2FvJyxcbiAgICBjYXBpdGFsOiAnV2lsbGVtc3RhZCcsXG4gICAgZmlwczogJ1VDJyxcbiAgICBpc28yOiAnQ1cnLFxuICAgIGlzbzM6ICdDVVcnLFxuICAgIGlzb05vOiAnNTMxJyxcbiAgICBpbnRlcm5ldDogJ0NXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgTWFydGluJyxcbiAgICBjYXBpdGFsOiAnTWFyaWdvdCcsXG4gICAgZmlwczogJ1JOJyxcbiAgICBpc28yOiAnTUYnLFxuICAgIGlzbzM6ICdNQUYnLFxuICAgIGlzb05vOiAnNjYzJyxcbiAgICBpbnRlcm5ldDogJ01GJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnU2ludCBNYWFydGVuJyxcbiAgICBjYXBpdGFsOiAnUGhpbGlwc2J1cmcnLFxuICAgIGZpcHM6ICdOTicsXG4gICAgaXNvMjogJ1NYJyxcbiAgICBpc28zOiAnU1hNJyxcbiAgICBpc29ObzogJzUzNCcsXG4gICAgaW50ZXJuZXQ6ICdTWCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1RpbW9yLUxlc3RlJyxcbiAgICBjYXBpdGFsOiAnRGlsaScsXG4gICAgZmlwczogJ1RUJyxcbiAgICBpc28yOiAnVEwnLFxuICAgIGlzbzM6ICdUTFMnLFxuICAgIGlzb05vOiAnNjI2JyxcbiAgICBpbnRlcm5ldDogJ1RMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTb3V0aCBTdWRhbicsXG4gICAgY2FwaXRhbDogJ0p1YmEnLFxuICAgIGZpcHM6ICdPRCcsXG4gICAgaXNvMjogJ1NTJyxcbiAgICBpc28zOiAnU1NEJyxcbiAgICBpc29ObzogJzcyOCcsXG4gICAgaW50ZXJuZXQ6ICdTUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnw4VsYW5kIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdNYXJpZWhhbW4nLFxuICAgIGZpcHM6ICdBWCcsXG4gICAgaXNvMjogJ0FYJyxcbiAgICBpc28zOiAnQUxBJyxcbiAgICBpc29ObzogJzI0OCcsXG4gICAgaW50ZXJuZXQ6ICdBWCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0JvbmFpcmUnLFxuICAgIGNhcGl0YWw6ICdLcmFsZW5kaWprJyxcbiAgICBmaXBzOiAnQlEnLFxuICAgIGlzbzI6ICdCUScsXG4gICAgaXNvMzogJ0JFUycsXG4gICAgaXNvTm86ICc1MzUnLFxuICAgIGludGVybmV0OiAnQlEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnUmVwdWJsaWMgb2YgS29zb3ZvJyxcbiAgICBjYXBpdGFsOiAnUHJpc3RpbmEnLFxuICAgIGZpcHM6ICdLVicsXG4gICAgaXNvMjogJ1hLJyxcbiAgICBpc28zOiAnVU5LJyxcbiAgICBpc29ObzogbnVsbCxcbiAgICBpbnRlcm5ldDogJ1hLJ1xuICB9LFxuXVxuXG5tb2R1bGUuZXhwb3J0cy5jb3VudHJpZXMgPSBjb3VudHJpZXNcbiIsImNvbnN0IGxpc3QgPSBbXG4gIHtcbiAgICBuYW1lOiAnQWxhYmFtYScsXG4gICAgdXNwczogJ0FMJyxcbiAgICBkZW1vbnltOiAnQWxhYmFtaWFuJyxcbiAgICBpc286ICdVUy1BTCcsXG4gICAgYWx0QWJicjogWydBbGEnXSxcbiAgICB1c2NnOiAnQUwnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FsYXNrYScsXG4gICAgdXNwczogJ0FLJyxcbiAgICBkZW1vbnltOiAnQWxhc2thbicsXG4gICAgaXNvOiAnVVMtQUsnLFxuICAgIGFsdEFiYnI6IFsnQWxhcyddLFxuICAgIHVzY2c6ICdBSycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQXJpem9uYScsXG4gICAgdXNwczogJ0FaJyxcbiAgICBkZW1vbnltOiAnQXJpem9uYW4nLFxuICAgIGlzbzogJ1VTLUFaJyxcbiAgICBhbHRBYmJyOiBbJ0FyaXonXSxcbiAgICB1c2NnOiAnQVonLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Fya2Fuc2FzJyxcbiAgICB1c3BzOiAnQVInLFxuICAgIGRlbW9ueW06ICdBcmthbnNhbicsXG4gICAgaXNvOiAnVVMtQVInLFxuICAgIGFsdEFiYnI6IFsnQXJrJ10sXG4gICAgdXNjZzogJ0FSJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDYWxpZm9ybmlhJyxcbiAgICB1c3BzOiAnQ0EnLFxuICAgIGRlbW9ueW06ICdDYWxpZm9ybmlhbicsXG4gICAgaXNvOiAnVVMtQ0EnLFxuICAgIGFsdEFiYnI6IFsnQ2FsJywgJ0NhbGlmJ10sXG4gICAgdXNjZzogJ0NGJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDb2xvcmFkbycsXG4gICAgdXNwczogJ0NPJyxcbiAgICBkZW1vbnltOiAnQ29sb3JhZGFuJyxcbiAgICBpc286ICdVUy1DTycsXG4gICAgYWx0QWJicjogWydDb2xvJywgJ0NvbCddLFxuICAgIHVzY2c6ICdDTCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ29ubmVjdGljdXQnLFxuICAgIHVzcHM6ICdDVCcsXG4gICAgZGVtb255bTogJ0Nvbm5lY3RpY3V0ZXInLFxuICAgIGlzbzogJ1VTLUNUJyxcbiAgICBhbHRBYmJyOiBbJ0Nvbm4nXSxcbiAgICB1c2NnOiAnQ1QnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RlbGF3YXJlJyxcbiAgICB1c3BzOiAnREUnLFxuICAgIGRlbW9ueW06ICdEZWxhd2FyZWFuJyxcbiAgICBpc286ICdVUy1ERScsXG4gICAgYWx0QWJicjogWydEZWwnXSxcbiAgICB1c2NnOiAnREwnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Rpc3RyaWN0IG9mIENvbHVtYmlhJyxcbiAgICB1c3BzOiAnREMnLFxuICAgIGRlbW9ueW06ICdXYXNoaW5ndG9uaWFuJyxcbiAgICBpc286ICdVUy1EQycsXG4gICAgYWx0QWJicjogWydXYXNoIERDJ10sXG4gICAgdXNjZzogJ0RDJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdGbG9yaWRhJyxcbiAgICB1c3BzOiAnRkwnLFxuICAgIGRlbW9ueW06ICdGbG9yaWRpYW4nLFxuICAgIGlzbzogJ1VTLUZMJyxcbiAgICBhbHRBYmJyOiBbJ0ZsYScsICdGbG9yJ10sXG4gICAgdXNjZzogJ0ZMJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHZW9yZ2lhJyxcbiAgICB1c3BzOiAnR0EnLFxuICAgIGRlbW9ueW06ICdHZW9yZ2lhbicsXG4gICAgaXNvOiAnVVMtR0EnLFxuICAgIGFsdEFiYnI6IFsnR2VvJ10sXG4gICAgdXNjZzogJ0dBJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdIYXdhaWknLFxuICAgIHVzcHM6ICdISScsXG4gICAgZGVtb255bTogJ0hhd2FpaSByZXNpZGVudCcsXG4gICAgaXNvOiAnVVMtSEknLFxuICAgIGFsdEFiYnI6IFsnR2VvJ10sXG4gICAgdXNjZzogJ0hBJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJZGFobycsXG4gICAgdXNwczogJ0lEJyxcbiAgICBkZW1vbnltOiAnSWRhaG9hbicsXG4gICAgaXNvOiAnVVMtSUQnLFxuICAgIGFsdEFiYnI6IFsnSWRhJ10sXG4gICAgdXNjZzogJ0lEJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbGxpbm9pcycsXG4gICAgdXNwczogJ0lMJyxcbiAgICBkZW1vbnltOiAnSWxsaW5vaXNhbicsXG4gICAgaXNvOiAnVVMtSUwnLFxuICAgIGFsdEFiYnI6IFsnSWxsJywgJ0lsbHMnLCBcIklsbCdzXCJdLFxuICAgIHVzY2c6ICdJTCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5kaWFuYScsXG4gICAgdXNwczogJ0lOJyxcbiAgICBkZW1vbnltOiAnSG9vc2llcicsXG4gICAgaXNvOiAnVVMtSU4nLFxuICAgIGFsdEFiYnI6IFsnSW5kJ10sXG4gICAgdXNjZzogJ0lOJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJb3dhJyxcbiAgICB1c3BzOiAnSUEnLFxuICAgIGRlbW9ueW06ICdJb3dhbicsXG4gICAgaXNvOiAnVVMtSUEnLFxuICAgIGFsdEFiYnI6IFsnSW9hJ10sXG4gICAgdXNjZzogJ0lBJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdLYW5zYXMnLFxuICAgIHVzcHM6ICdLUycsXG4gICAgZGVtb255bTogJ0thbnNhbicsXG4gICAgaXNvOiAnVVMtS1MnLFxuICAgIGFsdEFiYnI6IFsnS2FucycsICdLYW4nXSxcbiAgICB1c2NnOiAnS0EnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0tlbnR1Y2t5JyxcbiAgICB1c3BzOiAnS1knLFxuICAgIGRlbW9ueW06ICdLZW50dWNraWFuJyxcbiAgICBpc286ICdVUy1LWScsXG4gICAgYWx0QWJicjogWydLZW4nLCAnS2VudCddLFxuICAgIHVzY2c6ICdLWScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTG91aXNpYW5hJyxcbiAgICB1c3BzOiAnTEEnLFxuICAgIGRlbW9ueW06ICdMb3Vpc2lhbmlhbicsXG4gICAgaXNvOiAnVVMtTEEnLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdMQScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWFpbmUnLFxuICAgIHVzcHM6ICdNRScsXG4gICAgZGVtb255bTogJ01haW5lcicsXG4gICAgaXNvOiAnVVMtTUUnLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdNRScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWFyeWxhbmQnLFxuICAgIHVzcHM6ICdNRCcsXG4gICAgZGVtb255bTogJ01hcnlsYW5kZXInLFxuICAgIGlzbzogJ1VTLU1EJyxcbiAgICBhbHRBYmJyOiBbXSxcbiAgICB1c2NnOiAnTUQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01hc3NhY2h1c2V0dHMnLFxuICAgIHVzcHM6ICdNQScsXG4gICAgZGVtb255bTogJ01hc3NhY2h1c2V0dHNhbicsXG4gICAgaXNvOiAnVVMtTUEnLFxuICAgIGFsdEFiYnI6IFsnTWFzcyddLFxuICAgIHVzY2c6ICdNUycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWljaGlnYW4nLFxuICAgIHVzcHM6ICdNSScsXG4gICAgZGVtb255bTogJ01pY2hpZ2FuaWFuJyxcbiAgICBpc286ICdVUy1NSScsXG4gICAgYWx0QWJicjogWydNaWNoJ10sXG4gICAgdXNjZzogJ01DJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNaW5uZXNvdGEnLFxuICAgIHVzcHM6ICdNTicsXG4gICAgZGVtb255bTogJ01pbm5lc290YW4nLFxuICAgIGlzbzogJ1VTLU1OJyxcbiAgICBhbHRBYmJyOiBbJ01pbm4nXSxcbiAgICB1c2NnOiAnTU4nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01pc3Npc3NpcHBpJyxcbiAgICB1c3BzOiAnTVMnLFxuICAgIGRlbW9ueW06ICdNaXNzaXNzaXBwaWFuJyxcbiAgICBpc286ICdVUy1NUycsXG4gICAgYWx0QWJicjogWydNaXNzJ10sXG4gICAgdXNjZzogJ01JJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNaXNzb3VyaScsXG4gICAgdXNwczogJ01PJyxcbiAgICBkZW1vbnltOiAnTWlzc291cmlhbicsXG4gICAgaXNvOiAnVVMtTU8nLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdNTycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTW9udGFuYScsXG4gICAgdXNwczogJ01UJyxcbiAgICBkZW1vbnltOiAnTW9udGFuYW4nLFxuICAgIGlzbzogJ1VTLU1UJyxcbiAgICBhbHRBYmJyOiBbJ01vbnQnXSxcbiAgICB1c2NnOiAnTVQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ05lYnJhc2thJyxcbiAgICB1c3BzOiAnTkUnLFxuICAgIGRlbW9ueW06ICdOZWJyYXNrYW4nLFxuICAgIGlzbzogJ1VTLU5FJyxcbiAgICBhbHRBYmJyOiBbJ05lYnInLCAnTmViJ10sXG4gICAgdXNjZzogJ05CJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOZXZhZGEnLFxuICAgIHVzcHM6ICdOVicsXG4gICAgZGVtb255bTogJ05ldmFkYW4nLFxuICAgIGlzbzogJ1VTLU5WJyxcbiAgICBhbHRBYmJyOiBbJ05ldiddLFxuICAgIHVzY2c6ICdOVicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTmV2YWRhJyxcbiAgICB1c3BzOiAnTlYnLFxuICAgIGRlbW9ueW06ICdOZXZhZGFuJyxcbiAgICBpc286ICdVUy1OVicsXG4gICAgYWx0QWJicjogWydOZXYnXSxcbiAgICB1c2NnOiAnTlYnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ05ldyBIYW1wc2hpcmUnLFxuICAgIHVzcHM6ICdOSCcsXG4gICAgZGVtb255bTogJ05ldyBIYW1wc2hpcml0ZScsXG4gICAgaXNvOiAnVVMtTkgnLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdOSCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTmV3IEplcnNleScsXG4gICAgdXNwczogJ05KJyxcbiAgICBkZW1vbnltOiAnTmV3IEplcnNleWFuJyxcbiAgICBpc286ICdVUy1OSicsXG4gICAgYWx0QWJicjogWydOIEplcnNleSddLFxuICAgIHVzY2c6ICdOSicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTmV3IE1leGljbycsXG4gICAgdXNwczogJ05NJyxcbiAgICBkZW1vbnltOiAnTmV3IE1leGljYW4nLFxuICAgIGlzbzogJ1VTLU5NJyxcbiAgICBhbHRBYmJyOiBbJ04gTWV4JywgJ05ldyBNJ10sXG4gICAgdXNjZzogJ05NJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOZXcgWW9yaycsXG4gICAgdXNwczogJ05ZJyxcbiAgICBkZW1vbnltOiAnTmV3IFlvcmtlcicsXG4gICAgaXNvOiAnVVMtTlknLFxuICAgIGFsdEFiYnI6IFsnTiBZb3JrJ10sXG4gICAgdXNjZzogJ05ZJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOb3J0aCBDYXJvbGluYScsXG4gICAgdXNwczogJ05DJyxcbiAgICBkZW1vbnltOiAnTm9ydGggQ2Fyb2xpbmlhbicsXG4gICAgaXNvOiAnVVMtTkMnLFxuICAgIGFsdEFiYnI6IFsnTiBDYXInXSxcbiAgICB1c2NnOiAnTkMnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ05vcnRoIERha290YScsXG4gICAgdXNwczogJ05EJyxcbiAgICBkZW1vbnltOiAnTm9ydGggRGFrb3RhbicsXG4gICAgaXNvOiAnVVMtTkQnLFxuICAgIGFsdEFiYnI6IFsnTiBEYWsnLCAnTm9EYWsnXSxcbiAgICB1c2NnOiAnTkQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ09oaW8nLFxuICAgIHVzcHM6ICdPSCcsXG4gICAgZGVtb255bTogJ09oaW9hbicsXG4gICAgaXNvOiAnVVMtT0gnLFxuICAgIGFsdEFiYnI6IFsnTyddLFxuICAgIHVzY2c6ICdPSCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT2tsYWhvbWEnLFxuICAgIHVzcHM6ICdPSycsXG4gICAgZGVtb255bTogJ09rbGFob21hbicsXG4gICAgaXNvOiAnVVMtT0snLFxuICAgIGFsdEFiYnI6IFsnT2tsYSddLFxuICAgIHVzY2c6ICdPSycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT3JlZ29uJyxcbiAgICB1c3BzOiAnT1InLFxuICAgIGRlbW9ueW06ICdPcmVnb25pYW4nLFxuICAgIGlzbzogJ1VTLU9SJyxcbiAgICBhbHRBYmJyOiBbJ09yZSddLFxuICAgIHVzY2c6ICdPUicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUGVubnN5bHZhbmlhJyxcbiAgICB1c3BzOiAnUEEnLFxuICAgIGRlbW9ueW06ICdQZW5uc3lsdmFuaWFuJyxcbiAgICBpc286ICdVUy1QQScsXG4gICAgYWx0QWJicjogWydQZW5uJywgJ1Blbm5hJ10sXG4gICAgdXNjZzogJ1BBJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSaG9kZSBJc2xhbmQnLFxuICAgIHVzcHM6ICdSSScsXG4gICAgZGVtb255bTogJ1Job2RlIElzbGFuZGVyJyxcbiAgICBpc286ICdVUy1SSScsXG4gICAgYWx0QWJicjogWydSSSAmIFBQJywgJ1IgSXNsJ10sXG4gICAgdXNjZzogJ1JJJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTb3V0aCBDYXJvbGluYScsXG4gICAgdXNwczogJ1NDJyxcbiAgICBkZW1vbnltOiAnU291dGggQ2Fyb2xpbmlhbicsXG4gICAgaXNvOiAnVVMtU0MnLFxuICAgIGFsdEFiYnI6IFsnUyBDYXInXSxcbiAgICB1c2NnOiAnU0MnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NvdXRoIERha290YScsXG4gICAgdXNwczogJ1NEJyxcbiAgICBkZW1vbnltOiAnU291dGggRGFrb3RhbicsXG4gICAgaXNvOiAnVVMtU0QnLFxuICAgIGFsdEFiYnI6IFsnUyBEYWsnLCAnU29EYWsnXSxcbiAgICB1c2NnOiAnU0QnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1Rlbm5lc3NlZScsXG4gICAgdXNwczogJ1ROJyxcbiAgICBkZW1vbnltOiAnVGVubmVzc2VhbicsXG4gICAgaXNvOiAnVVMtVE4nLFxuICAgIGFsdEFiYnI6IFsnVGVubiddLFxuICAgIHVzY2c6ICdUTicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGV4YXMnLFxuICAgIHVzcHM6ICdUWCcsXG4gICAgZGVtb255bTogJ1RleGFuJyxcbiAgICBpc286ICdVUy1UWCcsXG4gICAgYWx0QWJicjogWydUZXgnXSxcbiAgICB1c2NnOiAnVFgnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1V0YWgnLFxuICAgIHVzcHM6ICdVVCcsXG4gICAgZGVtb255bTogJ1V0YWhuJyxcbiAgICBpc286ICdVUy1VVCcsXG4gICAgYWx0QWJicjogW10sXG4gICAgdXNjZzogJ1VUJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdWZXJtb250JyxcbiAgICB1c3BzOiAnVlQnLFxuICAgIGRlbW9ueW06ICdWZXJtb250ZXInLFxuICAgIGlzbzogJ1VTLVZUJyxcbiAgICBhbHRBYmJyOiBbXSxcbiAgICB1c2NnOiAnVlQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1ZpcmdpbmlhJyxcbiAgICB1c3BzOiAnVkEnLFxuICAgIGRlbW9ueW06ICdWaXJnaW5pYW4nLFxuICAgIGlzbzogJ1VTLVZBJyxcbiAgICBhbHRBYmJyOiBbJ1ZpcmcnXSxcbiAgICB1c2NnOiAnVkEnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1dhc2hpbmd0b24nLFxuICAgIHVzcHM6ICdXQScsXG4gICAgZGVtb255bTogJ1dhc2hpbmd0b25pYW4nLFxuICAgIGlzbzogJ1VTLVdBJyxcbiAgICBhbHRBYmJyOiBbJ1dhc2gnLCAnV24nXSxcbiAgICB1c2NnOiAnV04nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1dlc3QgVmlyZ2luaWEnLFxuICAgIHVzcHM6ICdXVicsXG4gICAgZGVtb255bTogJ1dlc3QgVmlyZ2luaWFuJyxcbiAgICBpc286ICdVUy1XVicsXG4gICAgYWx0QWJicjogWydXIFZhJywgJ1cgVmlyZyddLFxuICAgIHVzY2c6ICdXVicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV2lzY29uc2luJyxcbiAgICB1c3BzOiAnV0knLFxuICAgIGRlbW9ueW06ICdXaXNjb25zaW5pdGUnLFxuICAgIGlzbzogJ1VTLVdJJyxcbiAgICBhbHRBYmJyOiBbJ1dpcycsICdXaXNjJ10sXG4gICAgdXNjZzogJ1dTJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdXeW9taW5nJyxcbiAgICB1c3BzOiAnV1knLFxuICAgIGRlbW9ueW06ICdXeW9taW5naXRlJyxcbiAgICBpc286ICdVUy1XWScsXG4gICAgYWx0QWJicjogWydXeW8nXSxcbiAgICB1c2NnOiAnV1knLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgICB1c3BzOiAnQVMnLFxuICAgIGRlbW9ueW06ICdBbWVyaWNhbiBTYW1vYW4nLFxuICAgIGlzbzogJ1VTLUFTJyxcbiAgICBhbHRBYmJyOiBbXSxcbiAgICB1c2NnOiAnQVMnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0d1YW0nLFxuICAgIHVzcHM6ICdHVScsXG4gICAgZGVtb255bTogJ0d1YW1hbmlhbicsXG4gICAgaXNvOiAnVVMtR1UnLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdHVScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJyxcbiAgICB1c3BzOiAnTVAnLFxuICAgIGRlbW9ueW06ICdNYXJpYW5hIElzbGFuZGVyJyxcbiAgICBpc286ICdVUy1NUCcsXG4gICAgYWx0QWJicjogWydDTk1JJ10sXG4gICAgdXNjZzogJ0NNJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdWVydG8gUmljbycsXG4gICAgdXNwczogJ1BSJyxcbiAgICBkZW1vbnltOiAnUHVlcnRvIFJpY2FuJyxcbiAgICBpc286ICdVUy1QUicsXG4gICAgYWx0QWJicjogW10sXG4gICAgdXNjZzogJ1BSJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdVUyBWaXJnaW4gSXNsYW5kcycsXG4gICAgdXNwczogJ1ZJJyxcbiAgICBkZW1vbnltOiAnVmlyZ2luIElzbGFuZGVyJyxcbiAgICBpc286ICdVUy1WSScsXG4gICAgYWx0QWJicjogWydVU1ZJJ10sXG4gICAgdXNjZzogJ1ZJJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdVUyBNaW5vciBPdXRseWluZyBJc2xhbmRzJyxcbiAgICB1c3BzOiAnVU0nLFxuICAgIGRlbW9ueW06ICcnLFxuICAgIGlzbzogJ1VTLVVNJyxcbiAgICBhbHRBYmJyOiBbXSxcbiAgICB1c2NnOiAnVU0nLFxuICB9LFxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBzdGF0ZSA9PiB7XG4gICAgaWYgKCFzdGF0ZSkgcmV0dXJuIGxpc3RcbiAgICBzdGF0ZSA9IHN0YXRlLnNwbGl0KCcuJykuam9pbignJylcbiAgICBjb25zdCBmb3VuZCA9IGxpc3QuZmluZChcbiAgICAgIGl0ZW0gPT5cbiAgICAgICAgaXRlbS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHN0YXRlLnRvVXBwZXJDYXNlKCkgfHxcbiAgICAgICAgaXRlbS51c3BzLnRvVXBwZXJDYXNlKCkgPT09IHN0YXRlLnRvVXBwZXJDYXNlKCkgfHxcbiAgICAgICAgaXRlbS5hbHRBYmJyLmZpbmQoc3QgPT4gc3QudG9VcHBlckNhc2UoKSA9PT0gc3RhdGUudG9VcHBlckNhc2UoKSksXG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kXG5cbiAgICByZXR1cm4gJ05vIHN0YXRlIGZvdW5kISdcbiAgfVxuXG4gIG1haW4uYWJiciA9IHN0YXRlID0+IHtcbiAgICBpZiAoIXN0YXRlKSByZXR1cm4gJ1BsZWFzZSBwYXNzIGEgZnVsbCBzdGF0ZSBuYW1lIGFzIHlvdXIgYXJndW1lbnQnXG4gICAgY29uc3QgZm91bmQgPSBsaXN0LmZpbmQoXG4gICAgICBpdGVtID0+IGl0ZW0ubmFtZS50b1VwcGVyQ2FzZSgpID09PSBzdGF0ZS50b1VwcGVyQ2FzZSgpLFxuICAgIClcbiAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZC51c3BzXG4gICAgcmV0dXJuICdObyBhYmJyZXZpYXRpb24gZm91bmQgd2l0aCB0aGF0IHN0YXRlIG5hbWUnXG4gIH1cblxuICBtYWluLmZ1bGxOYW1lID0gYWJiciA9PiB7XG4gICAgaWYgKCFhYmJyKSByZXR1cm4gJ1BsZWFzZSBwYXNzIGFuIGFiYnJldmlhdGlvbiBhcyB5b3VyIGFyZ3VtZW50J1xuICAgIGNvbnN0IGZvdW5kID0gbGlzdC5maW5kKFxuICAgICAgaXRlbSA9PlxuICAgICAgICBpdGVtLnVzcHMudG9VcHBlckNhc2UoKSA9PT0gYWJici50b1VwcGVyQ2FzZSgpIHx8XG4gICAgICAgIGl0ZW0uYWx0QWJici5maW5kKHN0ID0+IHN0LnRvVXBwZXJDYXNlKCkgPT09IGFiYnIudG9VcHBlckNhc2UoKSksXG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLm5hbWVcbiAgICByZXR1cm4gJ05vIHN0YXRlIGZvdW5kIHdpdGggdGhhdCBhYmJyZXZpYXRpb24nXG4gIH1cblxuICBtYWluLm9ubHk1MCA9ICgpID0+IHtcbiAgICBjb25zdCBub3RTdGF0ZXMgPSBbJ0RDJywgJ0FTJywgJ0dVJywgJ01QJywgJ1BSJywgJ1ZJJywgJ1VNJ11cbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoaXRlbSA9PiAhbm90U3RhdGVzLmluY2x1ZGVzKGl0ZW0udXNwcykpXG4gIH1cblxuICBtYWluLmRlbW9ueW0gPSBzdGF0ZSA9PiB7XG4gICAgaWYgKCFzdGF0ZSlcbiAgICAgIHJldHVybiAnUGxlYXNlIHBhc3MgYSBzdGF0ZSBuYW1lIG9yIGFiYnJldmlhdGlvbiBhcyB5b3VyIGFyZ3VtZW50J1xuICAgIGNvbnN0IGZvdW5kID0gbGlzdC5maW5kKFxuICAgICAgaXRlbSA9PlxuICAgICAgICBpdGVtLm5hbWUudG9VcHBlckNhc2UoKSA9PT0gc3RhdGUudG9VcHBlckNhc2UoKSB8fFxuICAgICAgICBpdGVtLnVzcHMudG9VcHBlckNhc2UoKSA9PT0gc3RhdGUudG9VcHBlckNhc2UoKSB8fFxuICAgICAgICBpdGVtLmFsdEFiYnIuZmluZChzdCA9PiBzdC50b1VwcGVyQ2FzZSgpID09PSBzdGF0ZS50b1VwcGVyQ2FzZSgpKSxcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQuZGVtb255bVxuICAgIHJldHVybiAnTm8gZGVtb255bSBmb3VuZCBmb3IgdGhhdCBzdGF0ZSdcbiAgfVxuXG4gIHJldHVybiBtYWluXG59KSgpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBjbGVhcnNreSBmcm9tICcuL21lZGlhL2NsZWFyc2t5LnBuZyc7XG5pbXBvcnQgZmV3Y2xvdWRzIGZyb20gJy4vbWVkaWEvZmV3Y2xvdWRzLnBuZyc7XG5pbXBvcnQgc2NhdHRlcmVkY2xvdWRzIGZyb20gJy4vbWVkaWEvc2NhdHRlcmVkY2xvdWRzLnBuZyc7XG5pbXBvcnQgYnJva2VuY2xvdWRzIGZyb20gJy4vbWVkaWEvYnJva2VuY2xvdWRzLnBuZyc7XG5pbXBvcnQgc2hvd2VycmFpbiBmcm9tICcuL21lZGlhL3Nob3dlcnJhaW4ucG5nJztcbmltcG9ydCByYWluIGZyb20gJy4vbWVkaWEvcmFpbi5wbmcnO1xuaW1wb3J0IHRodW5kZXJzdG9ybSBmcm9tICcuL21lZGlhL3RodW5kZXJzdG9ybS5wbmcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi9tZWRpYS9zbm93LnBuZyc7XG5pbXBvcnQgbWlzdCBmcm9tICcuL21lZGlhL21pc3QucG5nJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBmb3JtYXRXZWF0aGVyID0gKHdlYXRoZXJBcnIpID0+IHtcbiAgICAgICAgd2VhdGhlckFyci5mb3JFYWNoKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgd2VhdGhlckFycltpbmRleF0gPSB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB3ZWF0aGVyQXJyLmpvaW4oJyAnKTtcbiAgICB9O1xuICAgIGNvbnN0IGZvcm1hdERhdGUgPSAod2VhdGhlckRhdGEsIGRhdGVOdW0pID0+IHtcbiAgICAgICAgbGV0IGRhdGVUeHQgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5saXN0W2RhdGVOdW1dLmR0X3R4dC5zdWJzdHJpbmcoMCwgMTApKTtcbiAgICAgICAgZGF0ZVR4dC5zZXREYXRlKGRhdGVUeHQuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIGRhdGVUeHQgPSBkYXRlVHh0LnRvU3RyaW5nKCk7XG4gICAgICAgIGRhdGVUeHQgPSBkYXRlVHh0LnN1YnN0cmluZyg0LCAxNSk7XG4gICAgICAgIHJldHVybiBgJHtkYXRlVHh0LnN1YnN0cmluZygwLCBkYXRlVHh0Lmxlbmd0aCAtIDQpfSwgJHtkYXRlVHh0LnN1YnN0cmluZyhkYXRlVHh0Lmxlbmd0aCAtIDQsIGRhdGVUeHQubGVuZ3RoKX1gO1xuICAgIH07XG4gICAgY29uc3QgZmluZEljb24gPSAod2VhdGhlckRhdGEsIGRhdGVOdW0pID0+IHtcbiAgICAgICAgY29uc3QgY29kZSA9IHdlYXRoZXJEYXRhLmxpc3RbZGF0ZU51bV0ud2VhdGhlclswXS5pY29uO1xuICAgICAgICBsZXQgaWNvbnNyYztcbiAgICAgICAgaWYgKGNvZGUgPT09ICcwMWQnIHx8IGNvZGUgPT09ICcwMW4nKSB7XG4gICAgICAgICAgICBpY29uc3JjID0gY2xlYXJza3k7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJzAyZCcgfHwgY29kZSA9PT0gJzAybicpIHtcbiAgICAgICAgICAgIGljb25zcmMgPSBmZXdjbG91ZHM7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJzAzZCcgfHwgY29kZSA9PT0gJzAzbicpIHtcbiAgICAgICAgICAgIGljb25zcmMgPSBzY2F0dGVyZWRjbG91ZHM7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJzA0ZCcgfHwgY29kZSA9PT0gJzA0bicpIHtcbiAgICAgICAgICAgIGljb25zcmMgPSBicm9rZW5jbG91ZHM7XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJzA5ZCcgfHwgY29kZSA9PT0gJzA5bicpIHtcbiAgICAgICAgICAgIGljb25zcmMgPSBzaG93ZXJyYWluO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICcxMGQnIHx8IGNvZGUgPT09ICcxMG4nKSB7XG4gICAgICAgICAgICBpY29uc3JjID0gcmFpbjtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAnMTFkJyB8fCBjb2RlID09PSAnMTFuJykge1xuICAgICAgICAgICAgaWNvbnNyYyA9IHRodW5kZXJzdG9ybTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgICAgICAgICAgaWNvbnNyYyA9IHNub3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpY29uc3JjID0gbWlzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWNvbnNyYztcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlck1haW5XZWF0aGVyID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG4gICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY2l0eS5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5jaXR5LmNvdW50cnl9YDtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKTtcbiAgICAgICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGZvcm1hdFdlYXRoZXIod2VhdGhlckRhdGEubGlzdFswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnNwbGl0KCcgJykpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSh3ZWF0aGVyRGF0YSwgMCk7XG5cbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBDdXJyZW50bHk6ICR7d2VhdGhlckRhdGEubGlzdFswXS5tYWluLnRlbXB9wrBgO1xuXG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi5mZWVsc19saWtlfcKwYDtcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pY29uJyk7XG4gICAgICAgIGltZy5zcmMgPSBmaW5kSWNvbih3ZWF0aGVyRGF0YSwgMCk7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJFeHRyYVdlYXRoZXIgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgaGlnaFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC10ZW1wJykuY2hpbGRyZW5bMV07XG4gICAgICAgIGhpZ2hUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubGlzdFswXS5tYWluLnRlbXBfbWF4fcKwYDtcblxuICAgICAgICBjb25zdCBsb3dUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy10ZW1wJykuY2hpbGRyZW5bMV07XG4gICAgICAgIGxvd1RlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5saXN0WzBdLm1haW4udGVtcF9taW59wrBgO1xuXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JykuY2hpbGRyZW5bMV07XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubGlzdFswXS5tYWluLmh1bWlkaXR5fSVgO1xuXG4gICAgICAgIGNvbnN0IGFpclByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpci1wcmVzc3VyZScpLmNoaWxkcmVuWzFdO1xuICAgICAgICBhaXJQcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi5wcmVzc3VyZX0gcHNpYDtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlckZvcmVjYXN0ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LW9uZScpO1xuICAgICAgICBjb25zdCBkYXkxZGF0ZSA9IGRheTEuY2hpbGRyZW5bMF07XG4gICAgICAgIGRheTFkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSh3ZWF0aGVyRGF0YSwgMCk7XG4gICAgICAgIGNvbnN0IGRheTFpbWcgPSBkYXkxLmNoaWxkcmVuWzFdO1xuICAgICAgICBkYXkxaW1nLnNyYyA9IGZpbmRJY29uKHdlYXRoZXJEYXRhLCAwKTtcbiAgICAgICAgY29uc3QgZGF5MWhpZ2ggPSBkYXkxLmNoaWxkcmVuWzJdO1xuICAgICAgICBkYXkxaGlnaC50ZXh0Q29udGVudCA9IGBIaWdoOiAke3dlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi50ZW1wX21heH3CsGA7XG4gICAgICAgIGNvbnN0IGRheTFsb3cgPSBkYXkxLmNoaWxkcmVuWzNdO1xuICAgICAgICBkYXkxbG93LnRleHRDb250ZW50ID0gYExvdzogJHt3ZWF0aGVyRGF0YS5saXN0WzBdLm1haW4udGVtcF9taW59wrBgO1xuXG4gICAgICAgIGNvbnN0IGRheTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LXR3bycpO1xuICAgICAgICBjb25zdCBkYXkyZGF0ZSA9IGRheTIuY2hpbGRyZW5bMF07XG4gICAgICAgIGRheTJkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSh3ZWF0aGVyRGF0YSwgOCk7XG4gICAgICAgIGNvbnN0IGRheTJpbWcgPSBkYXkyLmNoaWxkcmVuWzFdO1xuICAgICAgICBkYXkyaW1nLnNyYyA9IGZpbmRJY29uKHdlYXRoZXJEYXRhLCA4KTtcbiAgICAgICAgY29uc3QgZGF5MmhpZ2ggPSBkYXkyLmNoaWxkcmVuWzJdO1xuICAgICAgICBkYXkyaGlnaC50ZXh0Q29udGVudCA9IGBIaWdoOiAke3dlYXRoZXJEYXRhLmxpc3RbOF0ubWFpbi50ZW1wX21heH3CsGA7XG4gICAgICAgIGNvbnN0IGRheTJsb3cgPSBkYXkyLmNoaWxkcmVuWzNdO1xuICAgICAgICBkYXkybG93LnRleHRDb250ZW50ID0gYExvdzogJHt3ZWF0aGVyRGF0YS5saXN0WzhdLm1haW4udGVtcF9taW59wrBgO1xuXG4gICAgICAgIGNvbnN0IGRheTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LXRocmVlJyk7XG4gICAgICAgIGNvbnN0IGRheTNkYXRlID0gZGF5My5jaGlsZHJlblswXTtcbiAgICAgICAgZGF5M2RhdGUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKHdlYXRoZXJEYXRhLCAxNik7XG4gICAgICAgIGNvbnN0IGRheTNpbWcgPSBkYXkzLmNoaWxkcmVuWzFdO1xuICAgICAgICBkYXkzaW1nLnNyYyA9IGZpbmRJY29uKHdlYXRoZXJEYXRhLCAxNik7XG4gICAgICAgIGNvbnN0IGRheTNoaWdoID0gZGF5My5jaGlsZHJlblsyXTtcbiAgICAgICAgZGF5M2hpZ2gudGV4dENvbnRlbnQgPSBgSGlnaDogJHt3ZWF0aGVyRGF0YS5saXN0WzE2XS5tYWluLnRlbXBfbWF4fcKwYDtcbiAgICAgICAgY29uc3QgZGF5M2xvdyA9IGRheTMuY2hpbGRyZW5bM107XG4gICAgICAgIGRheTNsb3cudGV4dENvbnRlbnQgPSBgTG93OiAke3dlYXRoZXJEYXRhLmxpc3RbMTZdLm1haW4udGVtcF9taW59wrBgO1xuXG4gICAgICAgIGNvbnN0IGRheTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWZvdXInKTtcbiAgICAgICAgY29uc3QgZGF5NGRhdGUgPSBkYXk0LmNoaWxkcmVuWzBdO1xuICAgICAgICBkYXk0ZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUod2VhdGhlckRhdGEsIDI0KTtcbiAgICAgICAgY29uc3QgZGF5NGltZyA9IGRheTQuY2hpbGRyZW5bMV07XG4gICAgICAgIGRheTRpbWcuc3JjID0gZmluZEljb24od2VhdGhlckRhdGEsIDI0KTtcbiAgICAgICAgY29uc3QgZGF5NGhpZ2ggPSBkYXk0LmNoaWxkcmVuWzJdO1xuICAgICAgICBkYXk0aGlnaC50ZXh0Q29udGVudCA9IGBIaWdoOiAke3dlYXRoZXJEYXRhLmxpc3RbMjRdLm1haW4udGVtcF9tYXh9wrBgO1xuICAgICAgICBjb25zdCBkYXk0bG93ID0gZGF5NC5jaGlsZHJlblszXTtcbiAgICAgICAgZGF5NGxvdy50ZXh0Q29udGVudCA9IGBMb3c6ICR7d2VhdGhlckRhdGEubGlzdFsyNF0ubWFpbi50ZW1wX21pbn3CsGA7XG5cbiAgICAgICAgY29uc3QgZGF5NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktZml2ZScpO1xuICAgICAgICBjb25zdCBkYXk1ZGF0ZSA9IGRheTUuY2hpbGRyZW5bMF07XG4gICAgICAgIGRheTVkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSh3ZWF0aGVyRGF0YSwgMzIpO1xuICAgICAgICBjb25zdCBkYXk1aW1nID0gZGF5NS5jaGlsZHJlblsxXTtcbiAgICAgICAgZGF5NWltZy5zcmMgPSBmaW5kSWNvbih3ZWF0aGVyRGF0YSwgMzIpO1xuICAgICAgICBjb25zdCBkYXk1aGlnaCA9IGRheTUuY2hpbGRyZW5bMl07XG4gICAgICAgIGRheTVoaWdoLnRleHRDb250ZW50ID0gYEhpZ2g6ICR7d2VhdGhlckRhdGEubGlzdFszMl0ubWFpbi50ZW1wX21heH3CsGA7XG4gICAgICAgIGNvbnN0IGRheTVsb3cgPSBkYXk1LmNoaWxkcmVuWzNdO1xuICAgICAgICBkYXk1bG93LnRleHRDb250ZW50ID0gYExvdzogJHt3ZWF0aGVyRGF0YS5saXN0WzMyXS5tYWluLnRlbXBfbWlufcKwYDtcbiAgICB9O1xuICAgIGNvbnN0IHN3aXRjaE1lYXN1cmVtZW50ID0gKCkgPT4ge1xuXG4gICAgfTtcbiAgICBjb25zdCBsb2FkRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFDb250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEtY29udHJvbCcpO1xuICAgICAgICBjb25zdCB0b2dnbGVNZWFzdXJlU3lzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtbWVhc3VyZS1zeXN0Jyk7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9ICdTb3JyeSwgd2UgY291bGQgbm90IGZpbmQgdGhhdCBjaXR5Lic7XG4gICAgICAgIGRhdGFDb250cm9sLmluc2VydEJlZm9yZShlcnJvck1zZywgdG9nZ2xlTWVhc3VyZVN5c3QpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFDb250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEtY29udHJvbCcpO1xuICAgICAgICBpZiAoZGF0YUNvbnRyb2wuY2hpbGRyZW5bMV0uZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAndG9nZ2xlLW1lYXN1cmUtc3lzdCcpIHtcbiAgICAgICAgICAgIGRhdGFDb250cm9sLmNoaWxkcmVuWzFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlck1haW5XZWF0aGVyLFxuICAgICAgICByZW5kZXJFeHRyYVdlYXRoZXIsXG4gICAgICAgIHJlbmRlckZvcmVjYXN0LFxuICAgICAgICBzd2l0Y2hNZWFzdXJlbWVudCxcbiAgICAgICAgbG9hZEVycm9yLFxuICAgICAgICByZW1vdmVFcnJvcixcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgRE9NIGZyb20gJy4vRE9NJztcblxuY29uc3QgYXN5bmMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAobG9jYXRpb24sIHVuaXRzKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0yMjAwMzJhZjJlZmMyNWQyNmZjMmU3MmQzYWJjMzkxNGAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBET00ubG9hZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHN3aXRjaE1lYXN1cmVtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLW1lYXN1cmUtc3lzdCA+IHAnKS50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKHRvZ2dsZVRleHQgPT09ICdGwrAnKSB7XG4gICAgICAgICAgICAvLyBjYWxsIGdldFdlYXRoZXIgYnV0IHdpdGggY2Vsc2l1c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2FsbCBnZXRXZWF0aGVyIGJ1dCB3aXRoIGZhaHJlbmhlaXRcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRXZWF0aGVyLCBzd2l0Y2hNZWFzdXJlbWVudCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCBzdGF0ZXMgZnJvbSAndXMtc3RhdGUtY29udmVydGVyL2luZGV4JztcbmltcG9ydCBsb29rdXAgZnJvbSAnY291bnRyeS1jb2RlLWxvb2t1cCc7XG5pbXBvcnQgYXN5bmMgZnJvbSAnLi9hc3luYyc7XG5pbXBvcnQgRE9NIGZyb20gJy4vRE9NJztcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4uL2Rpc3QvZDIwNjJiOGI4Y2M3NTBmNmE4YmMucG5nJztcblxuY29uc3QgY29udHJvbGxlciA9ICgoKSA9PiB7XG4gICAgbGV0IG1lYXN1cmVtZW50VW5pdCA9ICdpbXBlcmlhbCc7XG4gICAgY29uc3QgYWNxdWlyZUxvY2F0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZTtcbiAgICAgICAgZGF0YSA9IGRhdGEuc3BsaXQoJywgJyk7XG4gICAgICAgIGxldCBsb2NhdGlvbjtcblxuICAgICAgICAvLyBJZiBmb3JtYXQgPSBzdGF0ZSBvciBzdGF0ZSwgY291bnRyeVxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZXMuYWJicihkYXRhWzBdKSAhPT0gJ05vIGFiYnJldmlhdGlvbiBmb3VuZCB3aXRoIHRoYXQgc3RhdGUgbmFtZScpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IFtzdGF0ZXMuYWJicihkYXRhWzBdKSwgJ1VTJ107XG4gICAgICAgICAgICAvLyBJZiBmb3JtYXQgPSBjb3VudHJ5XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvb2t1cC5ieUNvdW50cnkoZGF0YVswXSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IFtsb29rdXAuYnlDb3VudHJ5KGRhdGFbMF0pLmlzbzNdO1xuICAgICAgICAgICAgLy8gSWYgZm9ybWF0ID0gY2l0eVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IFtkYXRhWzBdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gSWYgZm9ybWF0ID0gY2l0eSwgc3RhdGUgb3IgY2l0eSwgc3RhdGUsIGNvdW50cnlcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZXMuYWJicihkYXRhWzFdKSAhPT0gJ05vIGFiYnJldmlhdGlvbiBmb3VuZCB3aXRoIHRoYXQgc3RhdGUgbmFtZScpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gW2RhdGFbMF0sIGRhdGFbMV0sICdVUyddO1xuICAgICAgICAvLyBJZiBmb3JtYXQgPSBjaXR5LCBjb3VudHJ5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IFtkYXRhWzBdLCBkYXRhWzFdXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYXRpb24uam9pbignLCcpO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VMb2NhdGlvbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBET00ucmVtb3ZlRXJyb3IoKTtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBhY3F1aXJlTG9jYXRpb24oKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBhc3luYy5nZXRXZWF0aGVyKGxvY2F0aW9uLCBtZWFzdXJlbWVudFVuaXQpO1xuICAgICAgICBpZiAod2VhdGhlckRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIERPTS5yZW5kZXJNYWluV2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgICAgIERPTS5yZW5kZXJFeHRyYVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICAgICAgICBET00ucmVuZGVyRm9yZWNhc3Qod2VhdGhlckRhdGEpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWUgPSAnJztcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlTWVhc3VyZW1lbnRTeXN0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAndG9nZ2xlLW1lYXN1cmUtc3lzdCcpID8gdGV4dCA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblswXSA6IHRleHQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0ZXh0LnRleHRDb250ZW50ID09PSAnRsKwJykge1xuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9ICdDwrAnO1xuICAgICAgICAgICAgbWVhc3VyZW1lbnRVbml0ID0gJ21ldHJpYyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0bCsCc7XG4gICAgICAgICAgICBtZWFzdXJlbWVudFVuaXQgPSAnaW1wZXJpYWwnO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpLnRleHRDb250ZW50O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykuY2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgYWNxdWlyZUxvY2F0aW9uLCB0b2dnbGVNZWFzdXJlbWVudFN5c3RlbSwgY2hhbmdlTG9jYXRpb24gfTtcbn0pKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKS5zcmMgPSBzZWFyY2hJY29uO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY29udHJvbGxlci5jaGFuZ2VMb2NhdGlvbik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLW1lYXN1cmUtc3lzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci50b2dnbGVNZWFzdXJlbWVudFN5c3RlbSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykuY2xpY2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==