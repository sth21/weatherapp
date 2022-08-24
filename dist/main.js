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
        let dateTxt = new Date(weatherData.list[dateNum].dt_txt.substring(0, 10)).toString();
        console.log(dateTxt);
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
        console.log(weatherData);
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
        day1high.textContent = `High: ${weatherData.list[0].main.temp_max}`;
        const day1low = day1.children[3];
        day1low.textContent = `Low: ${weatherData.list[0].main.temp_min}`;

        const day2 = document.querySelector('.day-two');
        const day2date = day2.children[0];
        day2date.textContent = formatDate(weatherData, 8);
        const day2img = day2.children[1];
        day2img.src = findIcon(weatherData, 8);
        const day2high = day2.children[2];
        day2high.textContent = `High: ${weatherData.list[8].main.temp_max}`;
        const day2low = day2.children[3];
        day2low.textContent = `Low: ${weatherData.list[8].main.temp_min}`;

        const day3 = document.querySelector('.day-three');
        const day3date = day3.children[0];
        day3date.textContent = formatDate(weatherData, 16);
        const day3img = day3.children[1];
        day3img.src = findIcon(weatherData, 16);
        const day3high = day3.children[2];
        day3high.textContent = `High: ${weatherData.list[16].main.temp_max}`;
        const day3low = day3.children[3];
        day3low.textContent = `Low: ${weatherData.list[16].main.temp_min}`;

        const day4 = document.querySelector('.day-four');
        const day4date = day4.children[0];
        day4date.textContent = formatDate(weatherData, 24);
        const day4img = day4.children[1];
        day4img.src = findIcon(weatherData, 24);
        const day4high = day4.children[2];
        day4high.textContent = `High: ${weatherData.list[24].main.temp_max}`;
        const day4low = day4.children[3];
        day4low.textContent = `Low: ${weatherData.list[24].main.temp_min}`;

        const day5 = document.querySelector('.day-five');
        const day5date = day5.children[0];
        day5date.textContent = formatDate(weatherData, 32);
        const day5img = day5.children[1];
        day5img.src = findIcon(weatherData, 32);
        const day5high = day5.children[2];
        day5high.textContent = `High: ${weatherData.list[32].main.temp_max}`;
        const day5low = day5.children[3];
        day5low.textContent = `Low: ${weatherData.list[32].main.temp_min}`;
    };
    const switchMeasurement = () => {

    };
    const loadError = () => {
        const dataControl = document.getElementById('data-control');
        const toggleMeasureSyst = document.getElementById('toggle-measure-syst');
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Sorry, we could not find that location.';
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
    const getWeather = async (location) => {
        const units = 'imperial';
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
/* eslint-disable no-undef */





const controller = (() => {
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

    const toggleMeasurementSystem = () => {

    };

    const changeLocation = async (event) => {
        event.preventDefault();
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].removeError();
        const location = acquireLocation();
        const weatherData = await _async__WEBPACK_IMPORTED_MODULE_2__["default"].getWeather(location);
        if (weatherData === undefined) {
            return;
        }
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderMainWeather(weatherData);
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderExtraWeather(weatherData);
        _DOM__WEBPACK_IMPORTED_MODULE_3__["default"].renderForecast(weatherData);
        document.getElementById('search').value = '';
    };
    return { acquireLocation, toggleMeasurementSystem, changeLocation };
})();

document.addEventListener('submit', controller.changeLocation);

document.getElementById('submit').click();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsd0JBQXdCOzs7Ozs7Ozs7OztBQ2p2RnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pnQkQ7QUFDQTtBQUM0QztBQUNFO0FBQ1k7QUFDTjtBQUNKO0FBQ1o7QUFDZ0I7QUFDaEI7QUFDQTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlDQUF5QyxJQUFJLHNEQUFzRDtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFRO0FBQzlCLFVBQVU7QUFDVixzQkFBc0IsaURBQVM7QUFDL0IsVUFBVTtBQUNWLHNCQUFzQix1REFBZTtBQUNyQyxVQUFVO0FBQ1Ysc0JBQXNCLG9EQUFZO0FBQ2xDLFVBQVU7QUFDVixzQkFBc0Isa0RBQVU7QUFDaEMsVUFBVTtBQUNWLHNCQUFzQiw0Q0FBSTtBQUMxQixVQUFVO0FBQ1Ysc0JBQXNCLG9EQUFZO0FBQ2xDLFVBQVU7QUFDVixzQkFBc0IsNENBQUk7QUFDMUIsVUFBVTtBQUNWLHNCQUFzQiw0Q0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0JBQXNCLElBQUkseUJBQXlCOztBQUVyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsOEJBQThCOztBQUU5RTtBQUNBLCtDQUErQyxvQ0FBb0M7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0NBQWtDOztBQUVwRTtBQUNBLGlDQUFpQyxrQ0FBa0M7O0FBRW5FO0FBQ0Esa0NBQWtDLGtDQUFrQzs7QUFFcEU7QUFDQSxxQ0FBcUMsbUNBQW1DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0NBQWtDO0FBQzFFO0FBQ0Esc0NBQXNDLGtDQUFrQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGtDQUFrQztBQUMxRTtBQUNBLHNDQUFzQyxrQ0FBa0M7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0U7QUFDQSxzQ0FBc0MsbUNBQW1DOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0Esc0NBQXNDLG1DQUFtQzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRTtBQUNBLHNDQUFzQyxtQ0FBbUM7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS25CO0FBQ0E7QUFDd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLFNBQVMsU0FBUyxNQUFNLDRDQUE0QyxjQUFjO0FBQ2pMO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVksc0RBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzhDO0FBQ0w7QUFDYjtBQUNKOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQVc7QUFDM0IsNEJBQTRCLG9FQUFXO0FBQ3ZDO0FBQ0EsY0FBYyxTQUFTLDBEQUFnQjtBQUN2Qyw0QkFBNEIsMERBQWdCO0FBQzVDO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUyxvRUFBVztBQUM5QjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCO0FBQ0Esa0NBQWtDLHlEQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFxQjtBQUM3QixRQUFRLCtEQUFzQjtBQUM5QixRQUFRLDJEQUFrQjtBQUMxQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2NvdW50cnktY29kZS1sb29rdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy91cy1zdGF0ZS1jb252ZXJ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hc3luYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzLmJ5RmlwcyA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgcmV0dXJuIHNlYXJjaCgnZmlwcycsIGNvZGUudG9VcHBlckNhc2UoKSlcbn1cblxubW9kdWxlLmV4cG9ydHMuYnlJc28gPSBmdW5jdGlvbihjb2RlKSB7XG4gIGlmICghaXNOYU4ocGFyc2VJbnQoY29kZSkpKSB7XG4gICAgcmV0dXJuIHNlYXJjaCgnaXNvTm8nLCBjb2RlLnRvU3RyaW5nKCkpXG4gIH1cblxuICBpZiAoY29kZS5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gc2VhcmNoKCdpc28yJywgY29kZS50b1VwcGVyQ2FzZSgpKVxuICB9XG5cbiAgaWYgKGNvZGUubGVuZ3RoID09PSAzKSB7XG4gICAgcmV0dXJuIHNlYXJjaCgnaXNvMycsIGNvZGUudG9VcHBlckNhc2UoKSlcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignY2Fubm90IGRldGVybWluZSBJU08gY29kZSB0eXBlJylcbn1cblxubW9kdWxlLmV4cG9ydHMuYnlJbnRlcm5ldCA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgcmV0dXJuIHNlYXJjaCgnaW50ZXJuZXQnLCBjb2RlLnRvVXBwZXJDYXNlKCkpXG59XG5cbm1vZHVsZS5leHBvcnRzLmJ5Q291bnRyeSA9IGZ1bmN0aW9uKGNvdW50cnkpIHtcbiAgcmV0dXJuIHNlYXJjaCgnY291bnRyeScsIGNvdW50cnkpXG59XG5cbmZ1bmN0aW9uIHNlYXJjaChmaWVsZCwgY29kZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjb3VudHJpZXNbaV1bZmllbGRdID09PSBjb2RlKSB7XG4gICAgICByZXR1cm4gY291bnRyaWVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbnZhciBjb3VudHJpZXMgPSBbXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQWZnaGFuaXN0YW4nLFxuICAgIGNhcGl0YWw6ICdLYWJ1bCcsXG4gICAgZmlwczogJ0FGJyxcbiAgICBpc28yOiAnQUYnLFxuICAgIGlzbzM6ICdBRkcnLFxuICAgIGlzb05vOiAnNCcsXG4gICAgaW50ZXJuZXQ6ICdBRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdBbGJhbmlhJyxcbiAgICBjYXBpdGFsOiAnVGlyYW5hJyxcbiAgICBmaXBzOiAnQUwnLFxuICAgIGlzbzI6ICdBTCcsXG4gICAgaXNvMzogJ0FMQicsXG4gICAgaXNvTm86ICc4JyxcbiAgICBpbnRlcm5ldDogJ0FMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdBbGdlcmlhJyxcbiAgICBjYXBpdGFsOiAnQWxnaWVycycsXG4gICAgZmlwczogJ0FHJyxcbiAgICBpc28yOiAnRFonLFxuICAgIGlzbzM6ICdEWkEnLFxuICAgIGlzb05vOiAnMTInLFxuICAgIGludGVybmV0OiAnRFonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnQW1lcmljYW4gU2Ftb2EnLFxuICAgIGNhcGl0YWw6ICdQYWdvIFBhZ28nLFxuICAgIGZpcHM6ICdBUScsXG4gICAgaXNvMjogJ0FTJyxcbiAgICBpc28zOiAnQVNNJyxcbiAgICBpc29ObzogJzE2JyxcbiAgICBpbnRlcm5ldDogJ0FTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ0FuZG9ycmEnLFxuICAgIGNhcGl0YWw6ICdBbmRvcnJhIGxhIFZlbGxhJyxcbiAgICBmaXBzOiAnQU4nLFxuICAgIGlzbzI6ICdBRCcsXG4gICAgaXNvMzogJ0FORCcsXG4gICAgaXNvTm86ICcyMCcsXG4gICAgaW50ZXJuZXQ6ICdBRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQW5nb2xhJyxcbiAgICBjYXBpdGFsOiAnTHVhbmRhJyxcbiAgICBmaXBzOiAnQU8nLFxuICAgIGlzbzI6ICdBTycsXG4gICAgaXNvMzogJ0FHTycsXG4gICAgaXNvTm86ICcyNCcsXG4gICAgaW50ZXJuZXQ6ICdBTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0FuZ3VpbGxhJyxcbiAgICBjYXBpdGFsOiAnVGhlIFZhbGxleScsXG4gICAgZmlwczogJ0FWJyxcbiAgICBpc28yOiAnQUknLFxuICAgIGlzbzM6ICdBSUEnLFxuICAgIGlzb05vOiAnNjYwJyxcbiAgICBpbnRlcm5ldDogJ0FJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQW50aWd1YSBhbmQgQmFyYnVkYScsXG4gICAgY2FwaXRhbDogXCJTYWludCBKb2huJ3NcIixcbiAgICBmaXBzOiAnQUMnLFxuICAgIGlzbzI6ICdBRycsXG4gICAgaXNvMzogJ0FURycsXG4gICAgaXNvTm86ICcyOCcsXG4gICAgaW50ZXJuZXQ6ICdBRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnQXJnZW50aW5hJyxcbiAgICBjYXBpdGFsOiAnQnVlbm9zIEFpcmVzJyxcbiAgICBmaXBzOiAnQVInLFxuICAgIGlzbzI6ICdBUicsXG4gICAgaXNvMzogJ0FSRycsXG4gICAgaXNvTm86ICczMicsXG4gICAgaW50ZXJuZXQ6ICdBUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0FybWVuaWEnLFxuICAgIGNhcGl0YWw6ICdZZXJldmFuJyxcbiAgICBmaXBzOiAnQU0nLFxuICAgIGlzbzI6ICdBTScsXG4gICAgaXNvMzogJ0FSTScsXG4gICAgaXNvTm86ICc1MScsXG4gICAgaW50ZXJuZXQ6ICdBTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0FydWJhJyxcbiAgICBjYXBpdGFsOiAnT3Jhbmplc3RhZCcsXG4gICAgZmlwczogJ0FBJyxcbiAgICBpc28yOiAnQVcnLFxuICAgIGlzbzM6ICdBQlcnLFxuICAgIGlzb05vOiAnNTMzJyxcbiAgICBpbnRlcm5ldDogJ0FXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ0F1c3RyYWxpYScsXG4gICAgY2FwaXRhbDogJ0NhbmJlcnJhJyxcbiAgICBmaXBzOiAnQVMnLFxuICAgIGlzbzI6ICdBVScsXG4gICAgaXNvMzogJ0FVUycsXG4gICAgaXNvTm86ICczNicsXG4gICAgaW50ZXJuZXQ6ICdBVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdBdXN0cmlhJyxcbiAgICBjYXBpdGFsOiAnVmllbm5hJyxcbiAgICBmaXBzOiAnQVUnLFxuICAgIGlzbzI6ICdBVCcsXG4gICAgaXNvMzogJ0FVVCcsXG4gICAgaXNvTm86ICc0MCcsXG4gICAgaW50ZXJuZXQ6ICdBVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0F6ZXJiYWlqYW4nLFxuICAgIGNhcGl0YWw6ICdCYWt1IChCYWtpKScsXG4gICAgZmlwczogJ0FKJyxcbiAgICBpc28yOiAnQVonLFxuICAgIGlzbzM6ICdBWkUnLFxuICAgIGlzb05vOiAnMzEnLFxuICAgIGludGVybmV0OiAnQVonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdUaGUgQmFoYW1hcycsXG4gICAgY2FwaXRhbDogJ05hc3NhdScsXG4gICAgZmlwczogJ0JGJyxcbiAgICBpc28yOiAnQlMnLFxuICAgIGlzbzM6ICdCSFMnLFxuICAgIGlzb05vOiAnNDQnLFxuICAgIGludGVybmV0OiAnQlMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdCYWhyYWluJyxcbiAgICBjYXBpdGFsOiAnTWFuYW1hJyxcbiAgICBmaXBzOiAnQkEnLFxuICAgIGlzbzI6ICdCSCcsXG4gICAgaXNvMzogJ0JIUicsXG4gICAgaXNvTm86ICc0OCcsXG4gICAgaW50ZXJuZXQ6ICdCSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdCYW5nbGFkZXNoJyxcbiAgICBjYXBpdGFsOiAnRGhha2EnLFxuICAgIGZpcHM6ICdCRycsXG4gICAgaXNvMjogJ0JEJyxcbiAgICBpc28zOiAnQkdEJyxcbiAgICBpc29ObzogJzUwJyxcbiAgICBpbnRlcm5ldDogJ0JEJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQmFyYmFkb3MnLFxuICAgIGNhcGl0YWw6ICdCcmlkZ2V0b3duJyxcbiAgICBmaXBzOiAnQkInLFxuICAgIGlzbzI6ICdCQicsXG4gICAgaXNvMzogJ0JSQicsXG4gICAgaXNvTm86ICc1MicsXG4gICAgaW50ZXJuZXQ6ICdCQidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdCZWxhcnVzJyxcbiAgICBjYXBpdGFsOiAnTWluc2snLFxuICAgIGZpcHM6ICdCTycsXG4gICAgaXNvMjogJ0JZJyxcbiAgICBpc28zOiAnQkxSJyxcbiAgICBpc29ObzogJzExMicsXG4gICAgaW50ZXJuZXQ6ICdCWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdCZWxnaXVtJyxcbiAgICBjYXBpdGFsOiAnQnJ1c3NlbHMnLFxuICAgIGZpcHM6ICdCRScsXG4gICAgaXNvMjogJ0JFJyxcbiAgICBpc28zOiAnQkVMJyxcbiAgICBpc29ObzogJzU2JyxcbiAgICBpbnRlcm5ldDogJ0JFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ0JlbGl6ZScsXG4gICAgY2FwaXRhbDogJ0JlbG1vcGFuJyxcbiAgICBmaXBzOiAnQkgnLFxuICAgIGlzbzI6ICdCWicsXG4gICAgaXNvMzogJ0JMWicsXG4gICAgaXNvTm86ICc4NCcsXG4gICAgaW50ZXJuZXQ6ICdCWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdCZW5pbicsXG4gICAgY2FwaXRhbDogJ1BvcnRvLU5vdm/vv73vv70nLFxuICAgIGZpcHM6ICdCTicsXG4gICAgaXNvMjogJ0JKJyxcbiAgICBpc28zOiAnQkVOJyxcbiAgICBpc29ObzogJzIwNCcsXG4gICAgaW50ZXJuZXQ6ICdCSidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0Jlcm11ZGEnLFxuICAgIGNhcGl0YWw6ICdIYW1pbHRvbicsXG4gICAgZmlwczogJ0JEJyxcbiAgICBpc28yOiAnQk0nLFxuICAgIGlzbzM6ICdCTVUnLFxuICAgIGlzb05vOiAnNjAnLFxuICAgIGludGVybmV0OiAnQk0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQmh1dGFuJyxcbiAgICBjYXBpdGFsOiAnVGhpbXBodScsXG4gICAgZmlwczogJ0JUJyxcbiAgICBpc28yOiAnQlQnLFxuICAgIGlzbzM6ICdCVE4nLFxuICAgIGlzb05vOiAnNjQnLFxuICAgIGludGVybmV0OiAnQlQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0JvbGl2aWEnLFxuICAgIGNhcGl0YWw6ICdMYSBQYXogLyBTdWNyZScsXG4gICAgZmlwczogJ0JMJyxcbiAgICBpc28yOiAnQk8nLFxuICAgIGlzbzM6ICdCT0wnLFxuICAgIGlzb05vOiAnNjgnLFxuICAgIGludGVybmV0OiAnQk8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScsXG4gICAgY2FwaXRhbDogJ1NhcmFqZXZvJyxcbiAgICBmaXBzOiAnQksnLFxuICAgIGlzbzI6ICdCQScsXG4gICAgaXNvMzogJ0JJSCcsXG4gICAgaXNvTm86ICc3MCcsXG4gICAgaW50ZXJuZXQ6ICdCQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQm90c3dhbmEnLFxuICAgIGNhcGl0YWw6ICdHYWJvcm9uZScsXG4gICAgZmlwczogJ0JDJyxcbiAgICBpc28yOiAnQlcnLFxuICAgIGlzbzM6ICdCV0EnLFxuICAgIGlzb05vOiAnNzInLFxuICAgIGludGVybmV0OiAnQlcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0JyYXppbCcsXG4gICAgY2FwaXRhbDogJ0JyYXNpbGlhJyxcbiAgICBmaXBzOiAnQlInLFxuICAgIGlzbzI6ICdCUicsXG4gICAgaXNvMzogJ0JSQScsXG4gICAgaXNvTm86ICc3NicsXG4gICAgaW50ZXJuZXQ6ICdCUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0JyaXRpc2ggVmlyZ2luIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdSb2FkIFRvd24nLFxuICAgIGZpcHM6ICdWSScsXG4gICAgaXNvMjogJ1ZHJyxcbiAgICBpc28zOiAnVkdCJyxcbiAgICBpc29ObzogJzkyJyxcbiAgICBpbnRlcm5ldDogJ1ZHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQnJ1bmVpJyxcbiAgICBjYXBpdGFsOiAnQmFuZGFyIFNlcmkgQmVnYXdhbicsXG4gICAgZmlwczogJ0JYJyxcbiAgICBpc28yOiAnQk4nLFxuICAgIGlzbzM6ICdCUk4nLFxuICAgIGlzb05vOiAnOTYnLFxuICAgIGludGVybmV0OiAnQk4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQnVsZ2FyaWEnLFxuICAgIGNhcGl0YWw6ICdTb2ZpYScsXG4gICAgZmlwczogJ0JVJyxcbiAgICBpc28yOiAnQkcnLFxuICAgIGlzbzM6ICdCR1InLFxuICAgIGlzb05vOiAnMTAwJyxcbiAgICBpbnRlcm5ldDogJ0JHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0J1cmtpbmEgRmFzbycsXG4gICAgY2FwaXRhbDogJ091YWdhZG91Z291JyxcbiAgICBmaXBzOiAnVVYnLFxuICAgIGlzbzI6ICdCRicsXG4gICAgaXNvMzogJ0JGQScsXG4gICAgaXNvTm86ICc4NTQnLFxuICAgIGludGVybmV0OiAnQkYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQnVydW5kaScsXG4gICAgY2FwaXRhbDogJ0J1anVtYnVyYScsXG4gICAgZmlwczogJ0JZJyxcbiAgICBpc28yOiAnQkknLFxuICAgIGlzbzM6ICdCREknLFxuICAgIGlzb05vOiAnMTA4JyxcbiAgICBpbnRlcm5ldDogJ0JJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQ2FtYm9kaWEnLFxuICAgIGNhcGl0YWw6ICdQaG5vbSBQZW5oJyxcbiAgICBmaXBzOiAnQ0InLFxuICAgIGlzbzI6ICdLSCcsXG4gICAgaXNvMzogJ0tITScsXG4gICAgaXNvTm86ICcxMTYnLFxuICAgIGludGVybmV0OiAnS0gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnQ2FtZXJvb24nLFxuICAgIGNhcGl0YWw6ICdZYW91bmRlJyxcbiAgICBmaXBzOiAnQ00nLFxuICAgIGlzbzI6ICdDTScsXG4gICAgaXNvMzogJ0NNUicsXG4gICAgaXNvTm86ICcxMjAnLFxuICAgIGludGVybmV0OiAnQ00nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnTm9ydGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0NhbmFkYScsXG4gICAgY2FwaXRhbDogJ090dGF3YScsXG4gICAgZmlwczogJ0NBJyxcbiAgICBpc28yOiAnQ0EnLFxuICAgIGlzbzM6ICdDQU4nLFxuICAgIGlzb05vOiAnMTI0JyxcbiAgICBpbnRlcm5ldDogJ0NBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0NhcGUgVmVyZGUnLFxuICAgIGNhcGl0YWw6ICdQcmFpYScsXG4gICAgZmlwczogJ0NWJyxcbiAgICBpc28yOiAnQ1YnLFxuICAgIGlzbzM6ICdDUFYnLFxuICAgIGlzb05vOiAnMTMyJyxcbiAgICBpbnRlcm5ldDogJ0NWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQ2F5bWFuIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdHZW9yZ2UgVG93bicsXG4gICAgZmlwczogJ0NKJyxcbiAgICBpc28yOiAnS1knLFxuICAgIGlzbzM6ICdDWU0nLFxuICAgIGlzb05vOiAnMTM2JyxcbiAgICBpbnRlcm5ldDogJ0tZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYycsXG4gICAgY2FwaXRhbDogJ0Jhbmd1aScsXG4gICAgZmlwczogJ0NUJyxcbiAgICBpc28yOiAnQ0YnLFxuICAgIGlzbzM6ICdDQUYnLFxuICAgIGlzb05vOiAnMTQwJyxcbiAgICBpbnRlcm5ldDogJ0NGJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFmcmljYScsXG4gICAgY291bnRyeTogJ0NoYWQnLFxuICAgIGNhcGl0YWw6IFwiTidEamFtZW5hXCIsXG4gICAgZmlwczogJ0NEJyxcbiAgICBpc28yOiAnVEQnLFxuICAgIGlzbzM6ICdUQ0QnLFxuICAgIGlzb05vOiAnMTQ4JyxcbiAgICBpbnRlcm5ldDogJ1REJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdDaGlsZScsXG4gICAgY2FwaXRhbDogJ1NhbnRpYWdvJyxcbiAgICBmaXBzOiAnQ0knLFxuICAgIGlzbzI6ICdDTCcsXG4gICAgaXNvMzogJ0NITCcsXG4gICAgaXNvTm86ICcxNTInLFxuICAgIGludGVybmV0OiAnQ0wnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdDaGluYScsXG4gICAgY2FwaXRhbDogJ0JlaWppbmcnLFxuICAgIGZpcHM6ICdDSCcsXG4gICAgaXNvMjogJ0NOJyxcbiAgICBpc28zOiAnQ0hOJyxcbiAgICBpc29ObzogJzE1NicsXG4gICAgaW50ZXJuZXQ6ICdDTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0NocmlzdG1hcyBJc2xhbmQnLFxuICAgIGNhcGl0YWw6ICdUaGUgU2V0dGxlbWVudCcsXG4gICAgZmlwczogJ0tUJyxcbiAgICBpc28yOiAnQ1gnLFxuICAgIGlzbzM6ICdDWFInLFxuICAgIGlzb05vOiAnMTYyJyxcbiAgICBpbnRlcm5ldDogJ0NYJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdXZXN0IElzbGFuZCcsXG4gICAgZmlwczogJ0NLJyxcbiAgICBpc28yOiAnQ0MnLFxuICAgIGlzbzM6ICdDQ0snLFxuICAgIGlzb05vOiAnMTY2JyxcbiAgICBpbnRlcm5ldDogJ0NDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdDb2xvbWJpYScsXG4gICAgY2FwaXRhbDogJ0JvZ290YScsXG4gICAgZmlwczogJ0NPJyxcbiAgICBpc28yOiAnQ08nLFxuICAgIGlzbzM6ICdDT0wnLFxuICAgIGlzb05vOiAnMTcwJyxcbiAgICBpbnRlcm5ldDogJ0NPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdDb21vcm9zJyxcbiAgICBjYXBpdGFsOiAnTW9yb25pJyxcbiAgICBmaXBzOiAnQ04nLFxuICAgIGlzbzI6ICdLTScsXG4gICAgaXNvMzogJ0NPTScsXG4gICAgaXNvTm86ICcxNzQnLFxuICAgIGludGVybmV0OiAnS00nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnUmVwdWJsaWMgb2YgdGhlIENvbmdvJyxcbiAgICBjYXBpdGFsOiAnQnJhenphdmlsbGUnLFxuICAgIGZpcHM6ICdDRicsXG4gICAgaXNvMjogJ0NHJyxcbiAgICBpc28zOiAnQ09HJyxcbiAgICBpc29ObzogJzE3OCcsXG4gICAgaW50ZXJuZXQ6ICdDRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdDb29rIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdBdmFydWEnLFxuICAgIGZpcHM6ICdDVycsXG4gICAgaXNvMjogJ0NLJyxcbiAgICBpc28zOiAnQ09LJyxcbiAgICBpc29ObzogJzE4NCcsXG4gICAgaW50ZXJuZXQ6ICdDSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdDb3N0YSBSaWNhJyxcbiAgICBjYXBpdGFsOiAnU2FuIEpvc2UnLFxuICAgIGZpcHM6ICdDUycsXG4gICAgaXNvMjogJ0NSJyxcbiAgICBpc28zOiAnQ1JJJyxcbiAgICBpc29ObzogJzE4OCcsXG4gICAgaW50ZXJuZXQ6ICdDUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6IFwiQ290ZSBkJ0l2b2lyZVwiLFxuICAgIGNhcGl0YWw6ICdZYW1vdXNzb3Vrcm8nLFxuICAgIGZpcHM6ICdJVicsXG4gICAgaXNvMjogJ0NJJyxcbiAgICBpc28zOiAnQ0lWJyxcbiAgICBpc29ObzogJzM4NCcsXG4gICAgaW50ZXJuZXQ6ICdDSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdDcm9hdGlhJyxcbiAgICBjYXBpdGFsOiAnWmFncmViJyxcbiAgICBmaXBzOiAnSFInLFxuICAgIGlzbzI6ICdIUicsXG4gICAgaXNvMzogJ0hSVicsXG4gICAgaXNvTm86ICcxOTEnLFxuICAgIGludGVybmV0OiAnSFInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdDdWJhJyxcbiAgICBjYXBpdGFsOiAnSGF2YW5hJyxcbiAgICBmaXBzOiAnQ1UnLFxuICAgIGlzbzI6ICdDVScsXG4gICAgaXNvMzogJ0NVQicsXG4gICAgaXNvTm86ICcxOTInLFxuICAgIGludGVybmV0OiAnQ1UnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdDeXBydXMnLFxuICAgIGNhcGl0YWw6ICdOaWNvc2lhJyxcbiAgICBmaXBzOiAnQ1knLFxuICAgIGlzbzI6ICdDWScsXG4gICAgaXNvMzogJ0NZUCcsXG4gICAgaXNvTm86ICcxOTYnLFxuICAgIGludGVybmV0OiAnQ1knXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnQ3plY2ggUmVwdWJsaWMnLFxuICAgIGNhcGl0YWw6ICdQcmFndWUnLFxuICAgIGZpcHM6ICdFWicsXG4gICAgaXNvMjogJ0NaJyxcbiAgICBpc28zOiAnQ1pFJyxcbiAgICBpc29ObzogJzIwMycsXG4gICAgaW50ZXJuZXQ6ICdDWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnRGVubWFyaycsXG4gICAgY2FwaXRhbDogJ0NvcGVuaGFnZW4nLFxuICAgIGZpcHM6ICdEQScsXG4gICAgaXNvMjogJ0RLJyxcbiAgICBpc28zOiAnRE5LJyxcbiAgICBpc29ObzogJzIwOCcsXG4gICAgaW50ZXJuZXQ6ICdESydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdEamlib3V0aScsXG4gICAgY2FwaXRhbDogJ0RqaWJvdXRpJyxcbiAgICBmaXBzOiAnREonLFxuICAgIGlzbzI6ICdESicsXG4gICAgaXNvMzogJ0RKSScsXG4gICAgaXNvTm86ICcyNjInLFxuICAgIGludGVybmV0OiAnREonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdEb21pbmljYScsXG4gICAgY2FwaXRhbDogJ1Jvc2VhdScsXG4gICAgZmlwczogJ0RPJyxcbiAgICBpc28yOiAnRE0nLFxuICAgIGlzbzM6ICdETUEnLFxuICAgIGlzb05vOiAnMjEyJyxcbiAgICBpbnRlcm5ldDogJ0RNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnRG9taW5pY2FuIFJlcHVibGljJyxcbiAgICBjYXBpdGFsOiAnU2FudG8gRG9taW5nbycsXG4gICAgZmlwczogJ0RSJyxcbiAgICBpc28yOiAnRE8nLFxuICAgIGlzbzM6ICdET00nLFxuICAgIGlzb05vOiAnMjE0JyxcbiAgICBpbnRlcm5ldDogJ0RPJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdFY3VhZG9yJyxcbiAgICBjYXBpdGFsOiAnUXVpdG8nLFxuICAgIGZpcHM6ICdFQycsXG4gICAgaXNvMjogJ0VDJyxcbiAgICBpc28zOiAnRUNVJyxcbiAgICBpc29ObzogJzIxOCcsXG4gICAgaW50ZXJuZXQ6ICdFQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRWd5cHQnLFxuICAgIGNhcGl0YWw6ICdDYWlybycsXG4gICAgZmlwczogJ0VHJyxcbiAgICBpc28yOiAnRUcnLFxuICAgIGlzbzM6ICdFR1knLFxuICAgIGlzb05vOiAnODE4JyxcbiAgICBpbnRlcm5ldDogJ0VHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ0VsIFNhbHZhZG9yJyxcbiAgICBjYXBpdGFsOiAnU2FuIFNhbHZhZG9yJyxcbiAgICBmaXBzOiAnRVMnLFxuICAgIGlzbzI6ICdTVicsXG4gICAgaXNvMzogJ1NMVicsXG4gICAgaXNvTm86ICcyMjInLFxuICAgIGludGVybmV0OiAnU1YnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnRXF1YXRvcmlhbCBHdWluZWEnLFxuICAgIGNhcGl0YWw6ICdNYWxhYm8nLFxuICAgIGZpcHM6ICdFSycsXG4gICAgaXNvMjogJ0dRJyxcbiAgICBpc28zOiAnR05RJyxcbiAgICBpc29ObzogJzIyNicsXG4gICAgaW50ZXJuZXQ6ICdHUSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdFcml0cmVhJyxcbiAgICBjYXBpdGFsOiAnQXNtYXJhJyxcbiAgICBmaXBzOiAnRVInLFxuICAgIGlzbzI6ICdFUicsXG4gICAgaXNvMzogJ0VSSScsXG4gICAgaXNvTm86ICcyMzInLFxuICAgIGludGVybmV0OiAnRVInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnRXN0b25pYScsXG4gICAgY2FwaXRhbDogJ1RhbGxpbm4nLFxuICAgIGZpcHM6ICdFTicsXG4gICAgaXNvMjogJ0VFJyxcbiAgICBpc28zOiAnRVNUJyxcbiAgICBpc29ObzogJzIzMycsXG4gICAgaW50ZXJuZXQ6ICdFRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdFdGhpb3BpYScsXG4gICAgY2FwaXRhbDogJ0FkZGlzIEFiYWJhJyxcbiAgICBmaXBzOiAnRVQnLFxuICAgIGlzbzI6ICdFVCcsXG4gICAgaXNvMzogJ0VUSCcsXG4gICAgaXNvTm86ICcyMzEnLFxuICAgIGludGVybmV0OiAnRVQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ0ZhbGtsYW5kIElzbGFuZHMgKElzbGFzIE1hbHZpbmFzKScsXG4gICAgY2FwaXRhbDogJ1N0YW5sZXknLFxuICAgIGZpcHM6ICdGQScsXG4gICAgaXNvMjogJ0ZLJyxcbiAgICBpc28zOiAnRkxLJyxcbiAgICBpc29ObzogJzIzOCcsXG4gICAgaW50ZXJuZXQ6ICdGSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnRmFyb2UgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ1RvcnNoYXZuJyxcbiAgICBmaXBzOiAnRk8nLFxuICAgIGlzbzI6ICdGTycsXG4gICAgaXNvMzogJ0ZSTycsXG4gICAgaXNvTm86ICcyMzQnLFxuICAgIGludGVybmV0OiAnRk8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnRmlqaScsXG4gICAgY2FwaXRhbDogJ1N1dmEnLFxuICAgIGZpcHM6ICdGSicsXG4gICAgaXNvMjogJ0ZKJyxcbiAgICBpc28zOiAnRkpJJyxcbiAgICBpc29ObzogJzI0MicsXG4gICAgaW50ZXJuZXQ6ICdGSidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnRmlubGFuZCcsXG4gICAgY2FwaXRhbDogJ0hlbHNpbmtpJyxcbiAgICBmaXBzOiAnRkknLFxuICAgIGlzbzI6ICdGSScsXG4gICAgaXNvMzogJ0ZJTicsXG4gICAgaXNvTm86ICcyNDYnLFxuICAgIGludGVybmV0OiAnRkknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnRnJhbmNlJyxcbiAgICBjYXBpdGFsOiAnUGFyaXMnLFxuICAgIGZpcHM6ICdGUicsXG4gICAgaXNvMjogJ0ZSJyxcbiAgICBpc28zOiAnRlJBJyxcbiAgICBpc29ObzogJzI1MCcsXG4gICAgaW50ZXJuZXQ6ICdGUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnRnJlbmNoIEd1aWFuYScsXG4gICAgY2FwaXRhbDogJ0NheWVubmUnLFxuICAgIGZpcHM6ICdGRycsXG4gICAgaXNvMjogJ0dGJyxcbiAgICBpc28zOiAnR1VGJyxcbiAgICBpc29ObzogJzI1NCcsXG4gICAgaW50ZXJuZXQ6ICdHRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdGcmVuY2ggUG9seW5lc2lhJyxcbiAgICBjYXBpdGFsOiAnUGFwZWV0ZScsXG4gICAgZmlwczogJ0ZQJyxcbiAgICBpc28yOiAnUEYnLFxuICAgIGlzbzM6ICdQWUYnLFxuICAgIGlzb05vOiAnMjU4JyxcbiAgICBpbnRlcm5ldDogJ1BGJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0dhYm9uJyxcbiAgICBjYXBpdGFsOiAnTGlicmV2aWxsZScsXG4gICAgZmlwczogJ0dCJyxcbiAgICBpc28yOiAnR0EnLFxuICAgIGlzbzM6ICdHQUInLFxuICAgIGlzb05vOiAnMjY2JyxcbiAgICBpbnRlcm5ldDogJ0dBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1RoZSBHYW1iaWEnLFxuICAgIGNhcGl0YWw6ICdCYW5qdWwnLFxuICAgIGZpcHM6ICdHQScsXG4gICAgaXNvMjogJ0dNJyxcbiAgICBpc28zOiAnR01CJyxcbiAgICBpc29ObzogJzI3MCcsXG4gICAgaW50ZXJuZXQ6ICdHTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0dlb3JnaWEnLFxuICAgIGNhcGl0YWw6IFwiVCdiaWxpc2lcIixcbiAgICBmaXBzOiAnR0cnLFxuICAgIGlzbzI6ICdHRScsXG4gICAgaXNvMzogJ0dFTycsXG4gICAgaXNvTm86ICcyNjgnLFxuICAgIGludGVybmV0OiAnR0UnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnR2VybWFueScsXG4gICAgY2FwaXRhbDogJ0JlcmxpbicsXG4gICAgZmlwczogJ0dNJyxcbiAgICBpc28yOiAnREUnLFxuICAgIGlzbzM6ICdERVUnLFxuICAgIGlzb05vOiAnMjc2JyxcbiAgICBpbnRlcm5ldDogJ0RFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0doYW5hJyxcbiAgICBjYXBpdGFsOiAnQWNjcmEnLFxuICAgIGZpcHM6ICdHSCcsXG4gICAgaXNvMjogJ0dIJyxcbiAgICBpc28zOiAnR0hBJyxcbiAgICBpc29ObzogJzI4OCcsXG4gICAgaW50ZXJuZXQ6ICdHSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdHaWJyYWx0YXInLFxuICAgIGNhcGl0YWw6ICdHaWJyYWx0YXInLFxuICAgIGZpcHM6ICdHSScsXG4gICAgaXNvMjogJ0dJJyxcbiAgICBpc28zOiAnR0lCJyxcbiAgICBpc29ObzogJzI5MicsXG4gICAgaW50ZXJuZXQ6ICdHSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdHcmVlY2UnLFxuICAgIGNhcGl0YWw6ICdBdGhlbnMnLFxuICAgIGZpcHM6ICdHUicsXG4gICAgaXNvMjogJ0dSJyxcbiAgICBpc28zOiAnR1JDJyxcbiAgICBpc29ObzogJzMwMCcsXG4gICAgaW50ZXJuZXQ6ICdHUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdOb3J0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnR3JlZW5sYW5kJyxcbiAgICBjYXBpdGFsOiAnTnV1ayAoR29kdGhhYiknLFxuICAgIGZpcHM6ICdHTCcsXG4gICAgaXNvMjogJ0dMJyxcbiAgICBpc28zOiAnR1JMJyxcbiAgICBpc29ObzogJzMwNCcsXG4gICAgaW50ZXJuZXQ6ICdHTCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0dyZW5hZGEnLFxuICAgIGNhcGl0YWw6IFwiU2FpbnQgR2VvcmdlJ3NcIixcbiAgICBmaXBzOiAnR0onLFxuICAgIGlzbzI6ICdHRCcsXG4gICAgaXNvMzogJ0dSRCcsXG4gICAgaXNvTm86ICczMDgnLFxuICAgIGludGVybmV0OiAnR0QnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdHdWFkZWxvdXBlJyxcbiAgICBjYXBpdGFsOiAnQmFzc2UtVGVycmUnLFxuICAgIGZpcHM6ICdHUCcsXG4gICAgaXNvMjogJ0dQJyxcbiAgICBpc28zOiAnR0xQJyxcbiAgICBpc29ObzogJzMxMicsXG4gICAgaW50ZXJuZXQ6ICdHUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdHdWFtJyxcbiAgICBjYXBpdGFsOiAnSGFnYXRuYSAoQWdhbmEpJyxcbiAgICBmaXBzOiAnR1EnLFxuICAgIGlzbzI6ICdHVScsXG4gICAgaXNvMzogJ0dVTScsXG4gICAgaXNvTm86ICczMTYnLFxuICAgIGludGVybmV0OiAnR1UnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnR3VhdGVtYWxhJyxcbiAgICBjYXBpdGFsOiAnR3VhdGVtYWxhJyxcbiAgICBmaXBzOiAnR1QnLFxuICAgIGlzbzI6ICdHVCcsXG4gICAgaXNvMzogJ0dUTScsXG4gICAgaXNvTm86ICczMjAnLFxuICAgIGludGVybmV0OiAnR1QnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnR3VpbmVhJyxcbiAgICBjYXBpdGFsOiAnQ29uYWtyeScsXG4gICAgZmlwczogJ0dWJyxcbiAgICBpc28yOiAnR04nLFxuICAgIGlzbzM6ICdHSU4nLFxuICAgIGlzb05vOiAnMzI0JyxcbiAgICBpbnRlcm5ldDogJ0dOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0d1aW5lYS1CaXNzYXUnLFxuICAgIGNhcGl0YWw6ICdCaXNzYXUnLFxuICAgIGZpcHM6ICdQVScsXG4gICAgaXNvMjogJ0dXJyxcbiAgICBpc28zOiAnR05CJyxcbiAgICBpc29ObzogJzYyNCcsXG4gICAgaW50ZXJuZXQ6ICdHVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnR3V5YW5hJyxcbiAgICBjYXBpdGFsOiAnR2VvcmdldG93bicsXG4gICAgZmlwczogJ0dZJyxcbiAgICBpc28yOiAnR1knLFxuICAgIGlzbzM6ICdHVVknLFxuICAgIGlzb05vOiAnMzI4JyxcbiAgICBpbnRlcm5ldDogJ0dZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnSGFpdGknLFxuICAgIGNhcGl0YWw6ICdQb3J0LWF1LVByaW5jZScsXG4gICAgZmlwczogJ0hBJyxcbiAgICBpc28yOiAnSFQnLFxuICAgIGlzbzM6ICdIVEknLFxuICAgIGlzb05vOiAnMzMyJyxcbiAgICBpbnRlcm5ldDogJ0hUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5KScsXG4gICAgY2FwaXRhbDogJ1ZhdGljYW4gQ2l0eScsXG4gICAgZmlwczogJ1ZUJyxcbiAgICBpc28yOiAnVkEnLFxuICAgIGlzbzM6ICdWQVQnLFxuICAgIGlzb05vOiAnMzM2JyxcbiAgICBpbnRlcm5ldDogJ1ZBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ0hvbmR1cmFzJyxcbiAgICBjYXBpdGFsOiAnVGVndWNpZ2FscGEnLFxuICAgIGZpcHM6ICdITycsXG4gICAgaXNvMjogJ0hOJyxcbiAgICBpc28zOiAnSE5EJyxcbiAgICBpc29ObzogJzM0MCcsXG4gICAgaW50ZXJuZXQ6ICdITidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdIdW5nYXJ5JyxcbiAgICBjYXBpdGFsOiAnQnVkYXBlc3QnLFxuICAgIGZpcHM6ICdIVScsXG4gICAgaXNvMjogJ0hVJyxcbiAgICBpc28zOiAnSFVOJyxcbiAgICBpc29ObzogJzM0OCcsXG4gICAgaW50ZXJuZXQ6ICdIVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnSWNlbGFuZCcsXG4gICAgY2FwaXRhbDogJ1JleWtqYXZpaycsXG4gICAgZmlwczogJ0lDJyxcbiAgICBpc28yOiAnSVMnLFxuICAgIGlzbzM6ICdJU0wnLFxuICAgIGlzb05vOiAnMzUyJyxcbiAgICBpbnRlcm5ldDogJ0lTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ0luZGlhJyxcbiAgICBjYXBpdGFsOiAnTmV3IERlbGhpJyxcbiAgICBmaXBzOiAnSU4nLFxuICAgIGlzbzI6ICdJTicsXG4gICAgaXNvMzogJ0lORCcsXG4gICAgaXNvTm86ICczNTYnLFxuICAgIGludGVybmV0OiAnSU4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdJbmRvbmVzaWEnLFxuICAgIGNhcGl0YWw6ICdKYWthcnRhJyxcbiAgICBmaXBzOiAnSUQnLFxuICAgIGlzbzI6ICdJRCcsXG4gICAgaXNvMzogJ0lETicsXG4gICAgaXNvTm86ICczNjAnLFxuICAgIGludGVybmV0OiAnSUQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdJcmFuJyxcbiAgICBjYXBpdGFsOiAnVGVocmFuJyxcbiAgICBmaXBzOiAnSVInLFxuICAgIGlzbzI6ICdJUicsXG4gICAgaXNvMzogJ0lSTicsXG4gICAgaXNvTm86ICczNjQnLFxuICAgIGludGVybmV0OiAnSVInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdJcmFxJyxcbiAgICBjYXBpdGFsOiAnQmFnaGRhZCcsXG4gICAgZmlwczogJ0laJyxcbiAgICBpc28yOiAnSVEnLFxuICAgIGlzbzM6ICdJUlEnLFxuICAgIGlzb05vOiAnMzY4JyxcbiAgICBpbnRlcm5ldDogJ0lRJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0lyZWxhbmQnLFxuICAgIGNhcGl0YWw6ICdEdWJsaW4nLFxuICAgIGZpcHM6ICdFSScsXG4gICAgaXNvMjogJ0lFJyxcbiAgICBpc28zOiAnSVJMJyxcbiAgICBpc29ObzogJzM3MicsXG4gICAgaW50ZXJuZXQ6ICdJRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0lzcmFlbCcsXG4gICAgY2FwaXRhbDogJ0plcnVzYWxlbScsXG4gICAgZmlwczogJ0lTJyxcbiAgICBpc28yOiAnSUwnLFxuICAgIGlzbzM6ICdJU1InLFxuICAgIGlzb05vOiAnMzc2JyxcbiAgICBpbnRlcm5ldDogJ0lMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdJdGFseScsXG4gICAgY2FwaXRhbDogJ1JvbWUnLFxuICAgIGZpcHM6ICdJVCcsXG4gICAgaXNvMjogJ0lUJyxcbiAgICBpc28zOiAnSVRBJyxcbiAgICBpc29ObzogJzM4MCcsXG4gICAgaW50ZXJuZXQ6ICdJVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ0phbWFpY2EnLFxuICAgIGNhcGl0YWw6ICdLaW5nc3RvbicsXG4gICAgZmlwczogJ0pNJyxcbiAgICBpc28yOiAnSk0nLFxuICAgIGlzbzM6ICdKQU0nLFxuICAgIGlzb05vOiAnMzg4JyxcbiAgICBpbnRlcm5ldDogJ0pNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSmFwYW4nLFxuICAgIGNhcGl0YWw6ICdUb2t5bycsXG4gICAgZmlwczogJ0pBJyxcbiAgICBpc28yOiAnSlAnLFxuICAgIGlzbzM6ICdKUE4nLFxuICAgIGlzb05vOiAnMzkyJyxcbiAgICBpbnRlcm5ldDogJ0pQJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSm9yZGFuJyxcbiAgICBjYXBpdGFsOiAnQW1tYW4nLFxuICAgIGZpcHM6ICdKTycsXG4gICAgaXNvMjogJ0pPJyxcbiAgICBpc28zOiAnSk9SJyxcbiAgICBpc29ObzogJzQwMCcsXG4gICAgaW50ZXJuZXQ6ICdKTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQXNpYScsXG4gICAgY291bnRyeTogJ0themFraHN0YW4nLFxuICAgIGNhcGl0YWw6ICdBc3RhbmEgKEFrbW9sYSknLFxuICAgIGZpcHM6ICdLWicsXG4gICAgaXNvMjogJ0taJyxcbiAgICBpc28zOiAnS0FaJyxcbiAgICBpc29ObzogJzM5OCcsXG4gICAgaW50ZXJuZXQ6ICdLWidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdLZW55YScsXG4gICAgY2FwaXRhbDogJ05haXJvYmknLFxuICAgIGZpcHM6ICdLRScsXG4gICAgaXNvMjogJ0tFJyxcbiAgICBpc28zOiAnS0VOJyxcbiAgICBpc29ObzogJzQwNCcsXG4gICAgaW50ZXJuZXQ6ICdLRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdLaXJpYmF0aScsXG4gICAgY2FwaXRhbDogJ1RhcmF3YScsXG4gICAgZmlwczogJ0tSJyxcbiAgICBpc28yOiAnS0knLFxuICAgIGlzbzM6ICdLSVInLFxuICAgIGlzb05vOiAnMjk2JyxcbiAgICBpbnRlcm5ldDogJ0tJJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTm9ydGggS29yZWEnLFxuICAgIGNhcGl0YWw6IFwiUCd5b25neWFuZ1wiLFxuICAgIGZpcHM6ICdLTicsXG4gICAgaXNvMjogJ0tQJyxcbiAgICBpc28zOiAnUFJLJyxcbiAgICBpc29ObzogJzQwOCcsXG4gICAgaW50ZXJuZXQ6ICdLUCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1NvdXRoIEtvcmVhJyxcbiAgICBjYXBpdGFsOiAnU2VvdWwnLFxuICAgIGZpcHM6ICdLUycsXG4gICAgaXNvMjogJ0tSJyxcbiAgICBpc28zOiAnS09SJyxcbiAgICBpc29ObzogJzQxMCcsXG4gICAgaW50ZXJuZXQ6ICdLUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0t1d2FpdCcsXG4gICAgY2FwaXRhbDogJ0t1d2FpdCcsXG4gICAgZmlwczogJ0tVJyxcbiAgICBpc28yOiAnS1cnLFxuICAgIGlzbzM6ICdLV1QnLFxuICAgIGlzb05vOiAnNDE0JyxcbiAgICBpbnRlcm5ldDogJ0tXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnS3lyZ3l6c3RhbicsXG4gICAgY2FwaXRhbDogJ0Jpc2hrZWsnLFxuICAgIGZpcHM6ICdLRycsXG4gICAgaXNvMjogJ0tHJyxcbiAgICBpc28zOiAnS0daJyxcbiAgICBpc29ObzogJzQxNycsXG4gICAgaW50ZXJuZXQ6ICdLRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ0xhb3MnLFxuICAgIGNhcGl0YWw6ICdWaWVudGlhbmUnLFxuICAgIGZpcHM6ICdMQScsXG4gICAgaXNvMjogJ0xBJyxcbiAgICBpc28zOiAnTEFPJyxcbiAgICBpc29ObzogJzQxOCcsXG4gICAgaW50ZXJuZXQ6ICdMQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdMYXR2aWEnLFxuICAgIGNhcGl0YWw6ICdSaWdhJyxcbiAgICBmaXBzOiAnTEcnLFxuICAgIGlzbzI6ICdMVicsXG4gICAgaXNvMzogJ0xWQScsXG4gICAgaXNvTm86ICc0MjgnLFxuICAgIGludGVybmV0OiAnTFYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdMZWJhbm9uJyxcbiAgICBjYXBpdGFsOiAnQmVpcnV0JyxcbiAgICBmaXBzOiAnTEUnLFxuICAgIGlzbzI6ICdMQicsXG4gICAgaXNvMzogJ0xCTicsXG4gICAgaXNvTm86ICc0MjInLFxuICAgIGludGVybmV0OiAnTEInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0xlc290aG8nLFxuICAgIGNhcGl0YWw6ICdNYXNlcnUnLFxuICAgIGZpcHM6ICdMVCcsXG4gICAgaXNvMjogJ0xTJyxcbiAgICBpc28zOiAnTFNPJyxcbiAgICBpc29ObzogJzQyNicsXG4gICAgaW50ZXJuZXQ6ICdMUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdMaWJlcmlhJyxcbiAgICBjYXBpdGFsOiAnTW9ucm92aWEnLFxuICAgIGZpcHM6ICdMSScsXG4gICAgaXNvMjogJ0xSJyxcbiAgICBpc28zOiAnTEJSJyxcbiAgICBpc29ObzogJzQzMCcsXG4gICAgaW50ZXJuZXQ6ICdMUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTGlieWEnLFxuICAgIGNhcGl0YWw6ICdUcmlwb2xpJyxcbiAgICBmaXBzOiAnTFknLFxuICAgIGlzbzI6ICdMWScsXG4gICAgaXNvMzogJ0xCWScsXG4gICAgaXNvTm86ICc0MzQnLFxuICAgIGludGVybmV0OiAnTFknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTGllY2h0ZW5zdGVpbicsXG4gICAgY2FwaXRhbDogJ1ZhZHV6JyxcbiAgICBmaXBzOiAnTFMnLFxuICAgIGlzbzI6ICdMSScsXG4gICAgaXNvMzogJ0xJRScsXG4gICAgaXNvTm86ICc0MzgnLFxuICAgIGludGVybmV0OiAnTEknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTGl0aHVhbmlhJyxcbiAgICBjYXBpdGFsOiAnVmlsbml1cycsXG4gICAgZmlwczogJ0xIJyxcbiAgICBpc28yOiAnTFQnLFxuICAgIGlzbzM6ICdMVFUnLFxuICAgIGlzb05vOiAnNDQwJyxcbiAgICBpbnRlcm5ldDogJ0xUJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0x1eGVtYm91cmcnLFxuICAgIGNhcGl0YWw6ICdMdXhlbWJvdXJnJyxcbiAgICBmaXBzOiAnTFUnLFxuICAgIGlzbzI6ICdMVScsXG4gICAgaXNvMzogJ0xVWCcsXG4gICAgaXNvTm86ICc0NDInLFxuICAgIGludGVybmV0OiAnTFUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTm9ydGggTWFjZWRvbmlhJyxcbiAgICBjYXBpdGFsOiAnU2tvcGplJyxcbiAgICBmaXBzOiAnTUsnLFxuICAgIGlzbzI6ICdNSycsXG4gICAgaXNvMzogJ01LRCcsXG4gICAgaXNvTm86ICc4MDcnLFxuICAgIGludGVybmV0OiAnTUsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0luZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ01hZGFnYXNjYXInLFxuICAgIGNhcGl0YWw6ICdBbnRhbmFuYXJpdm8nLFxuICAgIGZpcHM6ICdNQScsXG4gICAgaXNvMjogJ01HJyxcbiAgICBpc28zOiAnTURHJyxcbiAgICBpc29ObzogJzQ1MCcsXG4gICAgaW50ZXJuZXQ6ICdNRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTWFsYXdpJyxcbiAgICBjYXBpdGFsOiAnTGlsb25nd2UnLFxuICAgIGZpcHM6ICdNSScsXG4gICAgaXNvMjogJ01XJyxcbiAgICBpc28zOiAnTVdJJyxcbiAgICBpc29ObzogJzQ1NCcsXG4gICAgaW50ZXJuZXQ6ICdNVydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ01hbGF5c2lhJyxcbiAgICBjYXBpdGFsOiAnS3VhbGEgTHVtcHVyJyxcbiAgICBmaXBzOiAnTVknLFxuICAgIGlzbzI6ICdNWScsXG4gICAgaXNvMzogJ01ZUycsXG4gICAgaXNvTm86ICc0NTgnLFxuICAgIGludGVybmV0OiAnTVknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTWFsZGl2ZXMnLFxuICAgIGNhcGl0YWw6ICdNYWxlIChNYWFsZSknLFxuICAgIGZpcHM6ICdNVicsXG4gICAgaXNvMjogJ01WJyxcbiAgICBpc28zOiAnTURWJyxcbiAgICBpc29ObzogJzQ2MicsXG4gICAgaW50ZXJuZXQ6ICdNVidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdNYWxpJyxcbiAgICBjYXBpdGFsOiAnQmFtYWtvJyxcbiAgICBmaXBzOiAnTUwnLFxuICAgIGlzbzI6ICdNTCcsXG4gICAgaXNvMzogJ01MSScsXG4gICAgaXNvTm86ICc0NjYnLFxuICAgIGludGVybmV0OiAnTUwnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ01hbHRhJyxcbiAgICBjYXBpdGFsOiAnVmFsbGV0dGEnLFxuICAgIGZpcHM6ICdNVCcsXG4gICAgaXNvMjogJ01UJyxcbiAgICBpc28zOiAnTUxUJyxcbiAgICBpc29ObzogJzQ3MCcsXG4gICAgaW50ZXJuZXQ6ICdNVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdJc2xlIG9mIE1hbicsXG4gICAgY2FwaXRhbDogJ0RvdWdsYXMnLFxuICAgIGZpcHM6ICdJTScsXG4gICAgaXNvMjogJ0lNJyxcbiAgICBpc28zOiAnSU1OJyxcbiAgICBpc29ObzogJzgzMycsXG4gICAgaW50ZXJuZXQ6ICdJTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdNYXJzaGFsbCBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnTWFqdXJvJyxcbiAgICBmaXBzOiAnUk0nLFxuICAgIGlzbzI6ICdNSCcsXG4gICAgaXNvMzogJ01ITCcsXG4gICAgaXNvTm86ICc1ODQnLFxuICAgIGludGVybmV0OiAnTUgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdNYXJ0aW5pcXVlJyxcbiAgICBjYXBpdGFsOiAnRm9ydC1kZS1GcmFuY2UnLFxuICAgIGZpcHM6ICdNQicsXG4gICAgaXNvMjogJ01RJyxcbiAgICBpc28zOiAnTVRRJyxcbiAgICBpc29ObzogJzQ3NCcsXG4gICAgaW50ZXJuZXQ6ICdNUSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdNYXVyaXRhbmlhJyxcbiAgICBjYXBpdGFsOiAnTm91YWtjaG90dCcsXG4gICAgZmlwczogJ01SJyxcbiAgICBpc28yOiAnTVInLFxuICAgIGlzbzM6ICdNUlQnLFxuICAgIGlzb05vOiAnNDc4JyxcbiAgICBpbnRlcm5ldDogJ01SJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdNYXVyaXRpdXMnLFxuICAgIGNhcGl0YWw6ICdQb3J0IExvdWlzJyxcbiAgICBmaXBzOiAnTVAnLFxuICAgIGlzbzI6ICdNVScsXG4gICAgaXNvMzogJ01VUycsXG4gICAgaXNvTm86ICc0ODAnLFxuICAgIGludGVybmV0OiAnTVUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0luZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ01heW90dGUnLFxuICAgIGNhcGl0YWw6ICdNYW1vdXR6b3UnLFxuICAgIGZpcHM6ICdNRicsXG4gICAgaXNvMjogJ1lUJyxcbiAgICBpc28zOiAnTVlUJyxcbiAgICBpc29ObzogJzE3NScsXG4gICAgaW50ZXJuZXQ6ICdZVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdNZXhpY28nLFxuICAgIGNhcGl0YWw6ICdNZXhpY28nLFxuICAgIGZpcHM6ICdNWCcsXG4gICAgaXNvMjogJ01YJyxcbiAgICBpc28zOiAnTUVYJyxcbiAgICBpc29ObzogJzQ4NCcsXG4gICAgaW50ZXJuZXQ6ICdNWCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdGZWRlcmF0ZWQgU3RhdGVzIG9mIE1pY3JvbmVzaWEnLFxuICAgIGNhcGl0YWw6ICdQYWxpa2lyJyxcbiAgICBmaXBzOiAnJyxcbiAgICBpc28yOiAnRk0nLFxuICAgIGlzbzM6ICdGU00nLFxuICAgIGlzb05vOiAnNTgzJyxcbiAgICBpbnRlcm5ldDogJ0ZNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ01vbGRvdmEnLFxuICAgIGNhcGl0YWw6ICdDaGlzaW5hdScsXG4gICAgZmlwczogJ01EJyxcbiAgICBpc28yOiAnTUQnLFxuICAgIGlzbzM6ICdNREEnLFxuICAgIGlzb05vOiAnNDk4JyxcbiAgICBpbnRlcm5ldDogJ01EJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ01vbmFjbycsXG4gICAgY2FwaXRhbDogJ01vbmFjbycsXG4gICAgZmlwczogJ01OJyxcbiAgICBpc28yOiAnTUMnLFxuICAgIGlzbzM6ICdNQ08nLFxuICAgIGlzb05vOiAnNDkyJyxcbiAgICBpbnRlcm5ldDogJ01DJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQXNpYScsXG4gICAgY291bnRyeTogJ01vbmdvbGlhJyxcbiAgICBjYXBpdGFsOiAnVWxhYW5iYWF0YXInLFxuICAgIGZpcHM6ICdNRycsXG4gICAgaXNvMjogJ01OJyxcbiAgICBpc28zOiAnTU5HJyxcbiAgICBpc29ObzogJzQ5NicsXG4gICAgaW50ZXJuZXQ6ICdNTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ01vbnRzZXJyYXQnLFxuICAgIGNhcGl0YWw6ICdQbHltb3V0aCcsXG4gICAgZmlwczogJ01IJyxcbiAgICBpc28yOiAnTVMnLFxuICAgIGlzbzM6ICdNU1InLFxuICAgIGlzb05vOiAnNTAwJyxcbiAgICBpbnRlcm5ldDogJ01TJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdNb3JvY2NvJyxcbiAgICBjYXBpdGFsOiAnUmFiYXQnLFxuICAgIGZpcHM6ICdNTycsXG4gICAgaXNvMjogJ01BJyxcbiAgICBpc28zOiAnTUFSJyxcbiAgICBpc29ObzogJzUwNCcsXG4gICAgaW50ZXJuZXQ6ICdNQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnU291dGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTW96YW1iaXF1ZScsXG4gICAgY2FwaXRhbDogJ01hcHV0bycsXG4gICAgZmlwczogJ01aJyxcbiAgICBpc28yOiAnTVonLFxuICAgIGlzbzM6ICdNT1onLFxuICAgIGlzb05vOiAnNTA4JyxcbiAgICBpbnRlcm5ldDogJ01aJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnTXlhbm1hciAoQnVybWEpJyxcbiAgICBjYXBpdGFsOiAnUmFuZ29vbiAoWWFuZ29uKScsXG4gICAgZmlwczogJ0JNJyxcbiAgICBpc28yOiAnTU0nLFxuICAgIGlzbzM6ICdNTVInLFxuICAgIGlzb05vOiAnMTA0JyxcbiAgICBpbnRlcm5ldDogJ01NJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdOYW1pYmlhJyxcbiAgICBjYXBpdGFsOiAnV2luZGhvZWsnLFxuICAgIGZpcHM6ICdXQScsXG4gICAgaXNvMjogJ05BJyxcbiAgICBpc28zOiAnTkFNJyxcbiAgICBpc29ObzogJzUxNicsXG4gICAgaW50ZXJuZXQ6ICdOQSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdOYXVydScsXG4gICAgY2FwaXRhbDogJ25vIG9mZmljaWFsIGNhcGl0YWwnLFxuICAgIGZpcHM6ICdOUicsXG4gICAgaXNvMjogJ05SJyxcbiAgICBpc28zOiAnTlJVJyxcbiAgICBpc29ObzogJzUyMCcsXG4gICAgaW50ZXJuZXQ6ICdOUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdOZXBhbCcsXG4gICAgY2FwaXRhbDogJ0thdGhtYW5kdScsXG4gICAgZmlwczogJ05QJyxcbiAgICBpc28yOiAnTlAnLFxuICAgIGlzbzM6ICdOUEwnLFxuICAgIGlzb05vOiAnNTI0JyxcbiAgICBpbnRlcm5ldDogJ05QJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ05ldGhlcmxhbmRzJyxcbiAgICBjYXBpdGFsOiAnQW1zdGVyZGFtJyxcbiAgICBmaXBzOiAnTkwnLFxuICAgIGlzbzI6ICdOTCcsXG4gICAgaXNvMzogJ05MRCcsXG4gICAgaXNvTm86ICc1MjgnLFxuICAgIGludGVybmV0OiAnTkwnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXG4gICAgY2FwaXRhbDogJ1dpbGxlbXN0YWQnLFxuICAgIGZpcHM6ICdOVCcsXG4gICAgaXNvMjogJ0FOJyxcbiAgICBpc28zOiAnQU5UJyxcbiAgICBpc29ObzogJzUzMCcsXG4gICAgaW50ZXJuZXQ6ICdBTidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdOZXcgQ2FsZWRvbmlhJyxcbiAgICBjYXBpdGFsOiAnTm91bWVhJyxcbiAgICBmaXBzOiAnTkMnLFxuICAgIGlzbzI6ICdOQycsXG4gICAgaXNvMzogJ05DTCcsXG4gICAgaXNvTm86ICc1NDAnLFxuICAgIGludGVybmV0OiAnTkMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTmV3IFplYWxhbmQnLFxuICAgIGNhcGl0YWw6ICdXZWxsaW5ndG9uJyxcbiAgICBmaXBzOiAnTlonLFxuICAgIGlzbzI6ICdOWicsXG4gICAgaXNvMzogJ05aTCcsXG4gICAgaXNvTm86ICc1NTQnLFxuICAgIGludGVybmV0OiAnTlonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnTmljYXJhZ3VhJyxcbiAgICBjYXBpdGFsOiAnTWFuYWd1YScsXG4gICAgZmlwczogJ05VJyxcbiAgICBpc28yOiAnTkknLFxuICAgIGlzbzM6ICdOSUMnLFxuICAgIGlzb05vOiAnNTU4JyxcbiAgICBpbnRlcm5ldDogJ05JJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ05pZ2VyJyxcbiAgICBjYXBpdGFsOiAnTmlhbWV5JyxcbiAgICBmaXBzOiAnTkcnLFxuICAgIGlzbzI6ICdORScsXG4gICAgaXNvMzogJ05FUicsXG4gICAgaXNvTm86ICc1NjInLFxuICAgIGludGVybmV0OiAnTkUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnTmlnZXJpYScsXG4gICAgY2FwaXRhbDogJ0FidWphJyxcbiAgICBmaXBzOiAnTkknLFxuICAgIGlzbzI6ICdORycsXG4gICAgaXNvMzogJ05HQScsXG4gICAgaXNvTm86ICc1NjYnLFxuICAgIGludGVybmV0OiAnTkcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTml1ZScsXG4gICAgY2FwaXRhbDogJ0Fsb2ZpJyxcbiAgICBmaXBzOiAnTkUnLFxuICAgIGlzbzI6ICdOVScsXG4gICAgaXNvMzogJ05JVScsXG4gICAgaXNvTm86ICc1NzAnLFxuICAgIGludGVybmV0OiAnTlUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnTm9yZm9sayBJc2xhbmQnLFxuICAgIGNhcGl0YWw6ICdLaW5nc3RvbicsXG4gICAgZmlwczogJ05GJyxcbiAgICBpc28yOiAnTkYnLFxuICAgIGlzbzM6ICdORksnLFxuICAgIGlzb05vOiAnNTc0JyxcbiAgICBpbnRlcm5ldDogJ05GJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ1NhaXBhbicsXG4gICAgZmlwczogJ0NRJyxcbiAgICBpc28yOiAnTVAnLFxuICAgIGlzbzM6ICdNTlAnLFxuICAgIGlzb05vOiAnNTgwJyxcbiAgICBpbnRlcm5ldDogJ01QJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdOb3J3YXknLFxuICAgIGNhcGl0YWw6ICdPc2xvJyxcbiAgICBmaXBzOiAnTk8nLFxuICAgIGlzbzI6ICdOTycsXG4gICAgaXNvMzogJ05PUicsXG4gICAgaXNvTm86ICc1NzgnLFxuICAgIGludGVybmV0OiAnTk8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdPbWFuJyxcbiAgICBjYXBpdGFsOiAnTXVzY2F0JyxcbiAgICBmaXBzOiAnTVUnLFxuICAgIGlzbzI6ICdPTScsXG4gICAgaXNvMzogJ09NTicsXG4gICAgaXNvTm86ICc1MTInLFxuICAgIGludGVybmV0OiAnT00nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnUGFraXN0YW4nLFxuICAgIGNhcGl0YWw6ICdJc2xhbWFiYWQnLFxuICAgIGZpcHM6ICdQSycsXG4gICAgaXNvMjogJ1BLJyxcbiAgICBpc28zOiAnUEFLJyxcbiAgICBpc29ObzogJzU4NicsXG4gICAgaW50ZXJuZXQ6ICdQSydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdQYWxhdScsXG4gICAgY2FwaXRhbDogJ0tvcm9yJyxcbiAgICBmaXBzOiAnUFMnLFxuICAgIGlzbzI6ICdQVycsXG4gICAgaXNvMzogJ1BMVycsXG4gICAgaXNvTm86ICc1ODUnLFxuICAgIGludGVybmV0OiAnUFcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdQYWxlc3RpbmlhbiBUZXJyaXRvcnknLFxuICAgIGNhcGl0YWw6ICdFYXN0IEplcnVzYWxlbScsXG4gICAgZmlwczogJ1dFJyxcbiAgICBpc28yOiAnUFMnLFxuICAgIGlzbzM6ICdQU0UnLFxuICAgIGlzb05vOiAnMjc1JyxcbiAgICBpbnRlcm5ldDogJ1BTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQW1lcmljYScsXG4gICAgY291bnRyeTogJ1BhbmFtYScsXG4gICAgY2FwaXRhbDogJ1BhbmFtYScsXG4gICAgZmlwczogJ1BNJyxcbiAgICBpc28yOiAnUEEnLFxuICAgIGlzbzM6ICdQQU4nLFxuICAgIGlzb05vOiAnNTkxJyxcbiAgICBpbnRlcm5ldDogJ1BBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1BhcHVhIE5ldyBHdWluZWEnLFxuICAgIGNhcGl0YWw6ICdQb3J0IE1vcmVzYnknLFxuICAgIGZpcHM6ICdQUCcsXG4gICAgaXNvMjogJ1BHJyxcbiAgICBpc28zOiAnUE5HJyxcbiAgICBpc29ObzogJzU5OCcsXG4gICAgaW50ZXJuZXQ6ICdQRydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnUGFyYWd1YXknLFxuICAgIGNhcGl0YWw6ICdBc3VuY2lvbicsXG4gICAgZmlwczogJ1BBJyxcbiAgICBpc28yOiAnUFknLFxuICAgIGlzbzM6ICdQUlknLFxuICAgIGlzb05vOiAnNjAwJyxcbiAgICBpbnRlcm5ldDogJ1BZJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFtZXJpY2EnLFxuICAgIGNvdW50cnk6ICdQZXJ1JyxcbiAgICBjYXBpdGFsOiAnTGltYScsXG4gICAgZmlwczogJ1BFJyxcbiAgICBpc28yOiAnUEUnLFxuICAgIGlzbzM6ICdQRVInLFxuICAgIGlzb05vOiAnNjA0JyxcbiAgICBpbnRlcm5ldDogJ1BFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnUGhpbGlwcGluZXMnLFxuICAgIGNhcGl0YWw6ICdNYW5pbGEnLFxuICAgIGZpcHM6ICdSUCcsXG4gICAgaXNvMjogJ1BIJyxcbiAgICBpc28zOiAnUEhMJyxcbiAgICBpc29ObzogJzYwOCcsXG4gICAgaW50ZXJuZXQ6ICdQSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdQaXRjYWlybiBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnQWRhbXN0b3duJyxcbiAgICBmaXBzOiAnUEMnLFxuICAgIGlzbzI6ICdQTicsXG4gICAgaXNvMzogJ1BDTicsXG4gICAgaXNvTm86ICc2MTInLFxuICAgIGludGVybmV0OiAnUE4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnUG9sYW5kJyxcbiAgICBjYXBpdGFsOiAnV2Fyc2F3JyxcbiAgICBmaXBzOiAnUEwnLFxuICAgIGlzbzI6ICdQTCcsXG4gICAgaXNvMzogJ1BPTCcsXG4gICAgaXNvTm86ICc2MTYnLFxuICAgIGludGVybmV0OiAnUEwnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnUG9ydHVnYWwnLFxuICAgIGNhcGl0YWw6ICdMaXNib24nLFxuICAgIGZpcHM6ICdQTycsXG4gICAgaXNvMjogJ1BUJyxcbiAgICBpc28zOiAnUFJUJyxcbiAgICBpc29ObzogJzYyMCcsXG4gICAgaW50ZXJuZXQ6ICdQVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1B1ZXJ0byBSaWNvJyxcbiAgICBjYXBpdGFsOiAnU2FuIEp1YW4nLFxuICAgIGZpcHM6ICdSUScsXG4gICAgaXNvMjogJ1BSJyxcbiAgICBpc28zOiAnUFJJJyxcbiAgICBpc29ObzogJzYzMCcsXG4gICAgaW50ZXJuZXQ6ICdQUidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1FhdGFyJyxcbiAgICBjYXBpdGFsOiAnRG9oYScsXG4gICAgZmlwczogJ1FBJyxcbiAgICBpc28yOiAnUUEnLFxuICAgIGlzbzM6ICdRQVQnLFxuICAgIGlzb05vOiAnNjM0JyxcbiAgICBpbnRlcm5ldDogJ1FBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdSZXVuaW9uJyxcbiAgICBjYXBpdGFsOiAnU2FpbnQtRGVuaXMnLFxuICAgIGZpcHM6ICdSRScsXG4gICAgaXNvMjogJ1JFJyxcbiAgICBpc28zOiAnUkVVJyxcbiAgICBpc29ObzogJzYzOCcsXG4gICAgaW50ZXJuZXQ6ICdSRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdSb21hbmlhJyxcbiAgICBjYXBpdGFsOiAnQnVjaGFyZXN0JyxcbiAgICBmaXBzOiAnUk8nLFxuICAgIGlzbzI6ICdSTycsXG4gICAgaXNvMzogJ1JPVScsXG4gICAgaXNvTm86ICc2NDInLFxuICAgIGludGVybmV0OiAnUk8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBBc2lhJyxcbiAgICBjb3VudHJ5OiAnUnVzc2lhJyxcbiAgICBjYXBpdGFsOiAnTW9zY293JyxcbiAgICBmaXBzOiAnUlMnLFxuICAgIGlzbzI6ICdSVScsXG4gICAgaXNvMzogJ1JVUycsXG4gICAgaXNvTm86ICc2NDMnLFxuICAgIGludGVybmV0OiAnUlUnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnUndhbmRhJyxcbiAgICBjYXBpdGFsOiAnS2lnYWxpJyxcbiAgICBmaXBzOiAnUlcnLFxuICAgIGlzbzI6ICdSVycsXG4gICAgaXNvMzogJ1JXQScsXG4gICAgaXNvTm86ICc2NDYnLFxuICAgIGludGVybmV0OiAnUlcnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdTYWludCBLaXR0cyBhbmQgTmV2aXMnLFxuICAgIGNhcGl0YWw6ICdCYXNzZXRlcnJlJyxcbiAgICBmaXBzOiAnU0MnLFxuICAgIGlzbzI6ICdLTicsXG4gICAgaXNvMzogJ0tOQScsXG4gICAgaXNvTm86ICc2NTknLFxuICAgIGludGVybmV0OiAnS04nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdTYWludCBMdWNpYScsXG4gICAgY2FwaXRhbDogJ0Nhc3RyaWVzJyxcbiAgICBmaXBzOiAnU1QnLFxuICAgIGlzbzI6ICdMQycsXG4gICAgaXNvMzogJ0xDQScsXG4gICAgaXNvTm86ICc2NjInLFxuICAgIGludGVybmV0OiAnTEMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnTm9ydGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1NhaW50IFBpZXJyZSBhbmQgTWlxdWVsb24nLFxuICAgIGNhcGl0YWw6ICdTYWludC1QaWVycmUnLFxuICAgIGZpcHM6ICdTQicsXG4gICAgaXNvMjogJ1BNJyxcbiAgICBpc28zOiAnU1BNJyxcbiAgICBpc29ObzogJzY2NicsXG4gICAgaW50ZXJuZXQ6ICdQTSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcbiAgICBjYXBpdGFsOiAnS2luZ3N0b3duJyxcbiAgICBmaXBzOiAnVkMnLFxuICAgIGlzbzI6ICdWQycsXG4gICAgaXNvMzogJ1ZDVCcsXG4gICAgaXNvTm86ICc2NzAnLFxuICAgIGludGVybmV0OiAnVkMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1NhbiBNYXJpbm8nLFxuICAgIGNhcGl0YWw6ICdTYW4gTWFyaW5vJyxcbiAgICBmaXBzOiAnU00nLFxuICAgIGlzbzI6ICdTTScsXG4gICAgaXNvMzogJ1NNUicsXG4gICAgaXNvTm86ICc2NzQnLFxuICAgIGludGVybmV0OiAnU00nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1dlc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJyxcbiAgICBjYXBpdGFsOiAnU2FvIFRvbWUnLFxuICAgIGZpcHM6ICdUUCcsXG4gICAgaXNvMjogJ1NUJyxcbiAgICBpc28zOiAnU1RQJyxcbiAgICBpc29ObzogJzY3OCcsXG4gICAgaW50ZXJuZXQ6ICdTVCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1NhdWRpIEFyYWJpYScsXG4gICAgY2FwaXRhbDogJ1JpeWFkaCcsXG4gICAgZmlwczogJ1NBJyxcbiAgICBpc28yOiAnU0EnLFxuICAgIGlzbzM6ICdTQVUnLFxuICAgIGlzb05vOiAnNjgyJyxcbiAgICBpbnRlcm5ldDogJ1NBJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1NlbmVnYWwnLFxuICAgIGNhcGl0YWw6ICdEYWthcicsXG4gICAgZmlwczogJ1NHJyxcbiAgICBpc28yOiAnU04nLFxuICAgIGlzbzM6ICdTRU4nLFxuICAgIGlzb05vOiAnNjg2JyxcbiAgICBpbnRlcm5ldDogJ1NOJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdJbmRpYW4gT2NlYW4nLFxuICAgIGNvdW50cnk6ICdTZXljaGVsbGVzJyxcbiAgICBjYXBpdGFsOiAnVmljdG9yaWEnLFxuICAgIGZpcHM6ICdTRScsXG4gICAgaXNvMjogJ1NDJyxcbiAgICBpc28zOiAnU1lDJyxcbiAgICBpc29ObzogJzY5MCcsXG4gICAgaW50ZXJuZXQ6ICdTQydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTaWVycmEgTGVvbmUnLFxuICAgIGNhcGl0YWw6ICdGcmVldG93bicsXG4gICAgZmlwczogJ1NMJyxcbiAgICBpc28yOiAnU0wnLFxuICAgIGlzbzM6ICdTTEUnLFxuICAgIGlzb05vOiAnNjk0JyxcbiAgICBpbnRlcm5ldDogJ1NMJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnU2luZ2Fwb3JlJyxcbiAgICBjYXBpdGFsOiAnU2luZ2Fwb3JlJyxcbiAgICBmaXBzOiAnU04nLFxuICAgIGlzbzI6ICdTRycsXG4gICAgaXNvMzogJ1NHUCcsXG4gICAgaXNvTm86ICc3MDInLFxuICAgIGludGVybmV0OiAnU0cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ0NlbnRyYWwgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU2xvdmFraWEnLFxuICAgIGNhcGl0YWw6ICdCcmF0aXNsYXZhJyxcbiAgICBmaXBzOiAnTE8nLFxuICAgIGlzbzI6ICdTSycsXG4gICAgaXNvMzogJ1NWSycsXG4gICAgaXNvTm86ICc3MDMnLFxuICAgIGludGVybmV0OiAnU0snXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU2xvdmVuaWEnLFxuICAgIGNhcGl0YWw6ICdManVibGphbmEnLFxuICAgIGZpcHM6ICdTSScsXG4gICAgaXNvMjogJ1NJJyxcbiAgICBpc28zOiAnU1ZOJyxcbiAgICBpc29ObzogJzcwNScsXG4gICAgaW50ZXJuZXQ6ICdTSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdTb2xvbW9uIElzbGFuZHMnLFxuICAgIGNhcGl0YWw6ICdIb25pYXJhJyxcbiAgICBmaXBzOiAnQlAnLFxuICAgIGlzbzI6ICdTQicsXG4gICAgaXNvMzogJ1NMQicsXG4gICAgaXNvTm86ICc5MCcsXG4gICAgaW50ZXJuZXQ6ICdTQidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnRWFzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdTb21hbGlhJyxcbiAgICBjYXBpdGFsOiAnTW9nYWRpc2h1JyxcbiAgICBmaXBzOiAnU08nLFxuICAgIGlzbzI6ICdTTycsXG4gICAgaXNvMzogJ1NPTScsXG4gICAgaXNvTm86ICc3MDYnLFxuICAgIGludGVybmV0OiAnU08nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1NvdXRoIEFmcmljYScsXG4gICAgY2FwaXRhbDogJ1ByZXRvcmlh77+977+9JyxcbiAgICBmaXBzOiAnU0YnLFxuICAgIGlzbzI6ICdaQScsXG4gICAgaXNvMzogJ1pBRicsXG4gICAgaXNvTm86ICc3MTAnLFxuICAgIGludGVybmV0OiAnWkEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnU3BhaW4nLFxuICAgIGNhcGl0YWw6ICdNYWRyaWQnLFxuICAgIGZpcHM6ICdTUCcsXG4gICAgaXNvMjogJ0VTJyxcbiAgICBpc28zOiAnRVNQJyxcbiAgICBpc29ObzogJzcyNCcsXG4gICAgaW50ZXJuZXQ6ICdFUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEFzaWEnLFxuICAgIGNvdW50cnk6ICdTcmkgTGFua2EnLFxuICAgIGNhcGl0YWw6ICdDb2xvbWJvJyxcbiAgICBmaXBzOiAnQ0UnLFxuICAgIGlzbzI6ICdMSycsXG4gICAgaXNvMzogJ0xLQScsXG4gICAgaXNvTm86ICcxNDQnLFxuICAgIGludGVybmV0OiAnTEsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1N1ZGFuJyxcbiAgICBjYXBpdGFsOiAnS2hhcnRvdW0nLFxuICAgIGZpcHM6ICdTVScsXG4gICAgaXNvMjogJ1NEJyxcbiAgICBpc28zOiAnU0ROJyxcbiAgICBpc29ObzogJzczNicsXG4gICAgaW50ZXJuZXQ6ICdTRCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnU3VyaW5hbWUnLFxuICAgIGNhcGl0YWw6ICdQYXJhbWFyaWJvJyxcbiAgICBmaXBzOiAnTlMnLFxuICAgIGlzbzI6ICdTUicsXG4gICAgaXNvMzogJ1NVUicsXG4gICAgaXNvTm86ICc3NDAnLFxuICAgIGludGVybmV0OiAnU1InXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1N2YWxiYXJkJyxcbiAgICBjYXBpdGFsOiAnTG9uZ3llYXJieWVuJyxcbiAgICBmaXBzOiAnU1YnLFxuICAgIGlzbzI6ICdTSicsXG4gICAgaXNvMzogJ1NKTScsXG4gICAgaXNvTm86ICc3NDQnLFxuICAgIGludGVybmV0OiAnU0onXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ0Vzd2F0aW5pJyxcbiAgICBjYXBpdGFsOiAnTWJhYmFuZScsXG4gICAgZmlwczogJ1daJyxcbiAgICBpc28yOiAnU1onLFxuICAgIGlzbzM6ICdTV1onLFxuICAgIGlzb05vOiAnNzQ4JyxcbiAgICBpbnRlcm5ldDogJ1NaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTd2VkZW4nLFxuICAgIGNhcGl0YWw6ICdTdG9ja2hvbG0nLFxuICAgIGZpcHM6ICdTVycsXG4gICAgaXNvMjogJ1NFJyxcbiAgICBpc28zOiAnU1dFJyxcbiAgICBpc29ObzogJzc1MicsXG4gICAgaW50ZXJuZXQ6ICdTRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdTd2l0emVybGFuZCcsXG4gICAgY2FwaXRhbDogJ0Jlcm4nLFxuICAgIGZpcHM6ICdTWicsXG4gICAgaXNvMjogJ0NIJyxcbiAgICBpc28zOiAnQ0hFJyxcbiAgICBpc29ObzogJzc1NicsXG4gICAgaW50ZXJuZXQ6ICdDSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1N5cmlhJyxcbiAgICBjYXBpdGFsOiAnRGFtYXNjdXMnLFxuICAgIGZpcHM6ICdTWScsXG4gICAgaXNvMjogJ1NZJyxcbiAgICBpc28zOiAnU1lSJyxcbiAgICBpc29ObzogJzc2MCcsXG4gICAgaW50ZXJuZXQ6ICdTWSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1RhaXdhbicsXG4gICAgY2FwaXRhbDogJ1RhaXBlaScsXG4gICAgZmlwczogJ1RXJyxcbiAgICBpc28yOiAnVFcnLFxuICAgIGlzbzM6ICdUV04nLFxuICAgIGlzb05vOiAnMTU4JyxcbiAgICBpbnRlcm5ldDogJ1RXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVGFqaWtpc3RhbicsXG4gICAgY2FwaXRhbDogJ0R1c2hhbmJlJyxcbiAgICBmaXBzOiAnVEknLFxuICAgIGlzbzI6ICdUSicsXG4gICAgaXNvMzogJ1RKSycsXG4gICAgaXNvTm86ICc3NjInLFxuICAgIGludGVybmV0OiAnVEonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnVGFuemFuaWEnLFxuICAgIGNhcGl0YWw6ICdEYXIgZXMgU2FsYWFtJyxcbiAgICBmaXBzOiAnVFonLFxuICAgIGlzbzI6ICdUWicsXG4gICAgaXNvMzogJ1RaQScsXG4gICAgaXNvTm86ICc4MzQnLFxuICAgIGludGVybmV0OiAnVFonXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdUaGFpbGFuZCcsXG4gICAgY2FwaXRhbDogJ0Jhbmdrb2snLFxuICAgIGZpcHM6ICdUSCcsXG4gICAgaXNvMjogJ1RIJyxcbiAgICBpc28zOiAnVEhBJyxcbiAgICBpc29ObzogJzc2NCcsXG4gICAgaW50ZXJuZXQ6ICdUSCdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnV2VzdGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdUb2dvJyxcbiAgICBjYXBpdGFsOiAnTG9tZScsXG4gICAgZmlwczogJ1RPJyxcbiAgICBpc28yOiAnVEcnLFxuICAgIGlzbzM6ICdUR08nLFxuICAgIGlzb05vOiAnNzY4JyxcbiAgICBpbnRlcm5ldDogJ1RHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1Rva2VsYXUnLFxuICAgIGNhcGl0YWw6ICdub25lJyxcbiAgICBmaXBzOiAnVEwnLFxuICAgIGlzbzI6ICdUSycsXG4gICAgaXNvMzogJ1RLTCcsXG4gICAgaXNvTm86ICc3NzInLFxuICAgIGludGVybmV0OiAnVEsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnVG9uZ2EnLFxuICAgIGNhcGl0YWw6IFwiTnVrdSdhbG9mYVwiLFxuICAgIGZpcHM6ICdUTicsXG4gICAgaXNvMjogJ1RPJyxcbiAgICBpc28zOiAnVE9OJyxcbiAgICBpc29ObzogJzc3NicsXG4gICAgaW50ZXJuZXQ6ICdUTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdXZXN0IEluZGllcycsXG4gICAgY291bnRyeTogJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLFxuICAgIGNhcGl0YWw6ICdQb3J0LW9mLVNwYWluJyxcbiAgICBmaXBzOiAnVEQnLFxuICAgIGlzbzI6ICdUVCcsXG4gICAgaXNvMzogJ1RUTycsXG4gICAgaXNvTm86ICc3ODAnLFxuICAgIGludGVybmV0OiAnVFQnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1R1bmlzaWEnLFxuICAgIGNhcGl0YWw6ICdUdW5pcycsXG4gICAgZmlwczogJ1RTJyxcbiAgICBpc28yOiAnVE4nLFxuICAgIGlzbzM6ICdUVU4nLFxuICAgIGlzb05vOiAnNzg4JyxcbiAgICBpbnRlcm5ldDogJ1ROJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggV2VzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVHVya2V5JyxcbiAgICBjYXBpdGFsOiAnQW5rYXJhJyxcbiAgICBmaXBzOiAnVFUnLFxuICAgIGlzbzI6ICdUUicsXG4gICAgaXNvMzogJ1RVUicsXG4gICAgaXNvTm86ICc3OTInLFxuICAgIGludGVybmV0OiAnVFInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFzaWEnLFxuICAgIGNvdW50cnk6ICdUdXJrbWVuaXN0YW4nLFxuICAgIGNhcGl0YWw6ICdBc2hnYWJhdCcsXG4gICAgZmlwczogJ1RYJyxcbiAgICBpc28yOiAnVE0nLFxuICAgIGlzbzM6ICdUS00nLFxuICAgIGlzb05vOiAnNzk1JyxcbiAgICBpbnRlcm5ldDogJ1RNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJyxcbiAgICBjYXBpdGFsOiAnR3JhbmQgVHVyaycsXG4gICAgZmlwczogJ1RLJyxcbiAgICBpc28yOiAnVEMnLFxuICAgIGlzbzM6ICdUQ0EnLFxuICAgIGlzb05vOiAnNzk2JyxcbiAgICBpbnRlcm5ldDogJ1RDJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1R1dmFsdScsXG4gICAgY2FwaXRhbDogJ0Z1bmFmdXRpJyxcbiAgICBmaXBzOiAnVFYnLFxuICAgIGlzbzI6ICdUVicsXG4gICAgaXNvMzogJ1RVVicsXG4gICAgaXNvTm86ICc3OTgnLFxuICAgIGludGVybmV0OiAnVFYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ0Vhc3Rlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnVWdhbmRhJyxcbiAgICBjYXBpdGFsOiAnS2FtcGFsYScsXG4gICAgZmlwczogJ1VHJyxcbiAgICBpc28yOiAnVUcnLFxuICAgIGlzbzM6ICdVR0EnLFxuICAgIGlzb05vOiAnODAwJyxcbiAgICBpbnRlcm5ldDogJ1VHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdFYXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1VrcmFpbmUnLFxuICAgIGNhcGl0YWw6ICdLaWV2JyxcbiAgICBmaXBzOiAnVVAnLFxuICAgIGlzbzI6ICdVQScsXG4gICAgaXNvMzogJ1VLUicsXG4gICAgaXNvTm86ICc4MDQnLFxuICAgIGludGVybmV0OiAnVUEnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdTb3V0aCBXZXN0IEFzaWEnLFxuICAgIGNvdW50cnk6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycsXG4gICAgY2FwaXRhbDogJ0FidSBEaGFiaScsXG4gICAgZmlwczogJ1RDJyxcbiAgICBpc28yOiAnQUUnLFxuICAgIGlzbzM6ICdBUkUnLFxuICAgIGlzb05vOiAnNzg0JyxcbiAgICBpbnRlcm5ldDogJ0FFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgICBjYXBpdGFsOiAnTG9uZG9uJyxcbiAgICBmaXBzOiAnVUsnLFxuICAgIGlzbzI6ICdHQicsXG4gICAgaXNvMzogJ0dCUicsXG4gICAgaXNvTm86ICc4MjYnLFxuICAgIGludGVybmV0OiAnVUsnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnTm9ydGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMnLFxuICAgIGNhcGl0YWw6ICdXYXNoaW5ndG9uIERDJyxcbiAgICBmaXBzOiAnVVMnLFxuICAgIGlzbzI6ICdVUycsXG4gICAgaXNvMzogJ1VTQScsXG4gICAgaXNvTm86ICc4NDAnLFxuICAgIGludGVybmV0OiAnVVMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnTm9ydGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ1dhc2hpbmd0b24gREMnLFxuICAgIGZpcHM6ICcnLFxuICAgIGlzbzI6ICdVTScsXG4gICAgaXNvMzogJ1VNSScsXG4gICAgaXNvTm86ICc1ODEnLFxuICAgIGludGVybmV0OiAnVVMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnU291dGggQW1lcmljYScsXG4gICAgY291bnRyeTogJ1VydWd1YXknLFxuICAgIGNhcGl0YWw6ICdNb250ZXZpZGVvJyxcbiAgICBmaXBzOiAnVVknLFxuICAgIGlzbzI6ICdVWScsXG4gICAgaXNvMzogJ1VSWScsXG4gICAgaXNvTm86ICc4NTgnLFxuICAgIGludGVybmV0OiAnVVknXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBc2lhJyxcbiAgICByZWdpb246ICdDZW50cmFsIEFzaWEnLFxuICAgIGNvdW50cnk6ICdVemJla2lzdGFuJyxcbiAgICBjYXBpdGFsOiAnVGFzaGtlbnQgKFRvc2hrZW50KScsXG4gICAgZmlwczogJ1VaJyxcbiAgICBpc28yOiAnVVonLFxuICAgIGlzbzM6ICdVWkInLFxuICAgIGlzb05vOiAnODYwJyxcbiAgICBpbnRlcm5ldDogJ1VaJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnT2NlYW5pYScsXG4gICAgcmVnaW9uOiAnUGFjaWZpYycsXG4gICAgY291bnRyeTogJ1ZhbnVhdHUnLFxuICAgIGNhcGl0YWw6ICdQb3J0LVZpbGEnLFxuICAgIGZpcHM6ICdOSCcsXG4gICAgaXNvMjogJ1ZVJyxcbiAgICBpc28zOiAnVlVUJyxcbiAgICBpc29ObzogJzU0OCcsXG4gICAgaW50ZXJuZXQ6ICdWVSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FtZXJpY2FzJyxcbiAgICByZWdpb246ICdTb3V0aCBBbWVyaWNhJyxcbiAgICBjb3VudHJ5OiAnVmVuZXp1ZWxhJyxcbiAgICBjYXBpdGFsOiAnQ2FyYWNhcycsXG4gICAgZmlwczogJ1ZFJyxcbiAgICBpc28yOiAnVkUnLFxuICAgIGlzbzM6ICdWRU4nLFxuICAgIGlzb05vOiAnODYyJyxcbiAgICBpbnRlcm5ldDogJ1VFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVmlldG5hbScsXG4gICAgY2FwaXRhbDogJ0hhbm9pJyxcbiAgICBmaXBzOiAnVk4nLFxuICAgIGlzbzI6ICdWTicsXG4gICAgaXNvMzogJ1ZOTScsXG4gICAgaXNvTm86ICc3MDQnLFxuICAgIGludGVybmV0OiAnVk4nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdWaXJnaW4gSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ0NoYXJsb3R0ZSBBbWFsaWUnLFxuICAgIGZpcHM6ICdWUScsXG4gICAgaXNvMjogJ1ZJJyxcbiAgICBpc28zOiAnVklSJyxcbiAgICBpc29ObzogJzg1MCcsXG4gICAgaW50ZXJuZXQ6ICdWSSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ09jZWFuaWEnLFxuICAgIHJlZ2lvbjogJ1BhY2lmaWMnLFxuICAgIGNvdW50cnk6ICdXYWxsaXMgYW5kIEZ1dHVuYScsXG4gICAgY2FwaXRhbDogJ01hdGEtVXR1IChvbiBJbGUgVXZlYSknLFxuICAgIGZpcHM6ICdXRicsXG4gICAgaXNvMjogJ1dGJyxcbiAgICBpc28zOiAnV0xGJyxcbiAgICBpc29ObzogJzg3NicsXG4gICAgaW50ZXJuZXQ6ICdXRidcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnTm9ydGhlcm4gQWZyaWNhJyxcbiAgICBjb3VudHJ5OiAnV2VzdGVybiBTYWhhcmEnLFxuICAgIGNhcGl0YWw6ICdub25lJyxcbiAgICBmaXBzOiAnV0knLFxuICAgIGlzbzI6ICdFSCcsXG4gICAgaXNvMzogJ0VTSCcsXG4gICAgaXNvTm86ICc3MzInLFxuICAgIGludGVybmV0OiAnRUgnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdPY2VhbmlhJyxcbiAgICByZWdpb246ICdQYWNpZmljJyxcbiAgICBjb3VudHJ5OiAnV2VzdGVybiBTYW1vYScsXG4gICAgY2FwaXRhbDogJ0FwaWEnLFxuICAgIGZpcHM6ICdXUycsXG4gICAgaXNvMjogJ1dTJyxcbiAgICBpc28zOiAnV1NNJyxcbiAgICBpc29ObzogJzg4MicsXG4gICAgaW50ZXJuZXQ6ICdXUydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIFdlc3QgQXNpYScsXG4gICAgY291bnRyeTogJ1llbWVuJyxcbiAgICBjYXBpdGFsOiAnU2FuYWEnLFxuICAgIGZpcHM6ICdZTScsXG4gICAgaXNvMjogJ1lFJyxcbiAgICBpc28zOiAnWUVNJyxcbiAgICBpc29ObzogJzg4NycsXG4gICAgaW50ZXJuZXQ6ICdZRSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FmcmljYScsXG4gICAgcmVnaW9uOiAnQ2VudHJhbCBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSBDb25nbycsXG4gICAgY2FwaXRhbDogJ0tpbnNoYXNhJyxcbiAgICBmaXBzOiAnQ0cnLFxuICAgIGlzbzI6ICdDRCcsXG4gICAgaXNvMzogJ0NPRCcsXG4gICAgaXNvTm86ICcxODAnLFxuICAgIGludGVybmV0OiAnWlInXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1phbWJpYScsXG4gICAgY2FwaXRhbDogJ0x1c2FrYScsXG4gICAgZmlwczogJ1pBJyxcbiAgICBpc28yOiAnWk0nLFxuICAgIGlzbzM6ICdaTUInLFxuICAgIGlzb05vOiAnODk0JyxcbiAgICBpbnRlcm5ldDogJ1pNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQWZyaWNhJyxcbiAgICByZWdpb246ICdTb3V0aGVybiBBZnJpY2EnLFxuICAgIGNvdW50cnk6ICdaaW1iYWJ3ZScsXG4gICAgY2FwaXRhbDogJ0hhcmFyZScsXG4gICAgZmlwczogJ1pJJyxcbiAgICBpc28yOiAnWlcnLFxuICAgIGlzbzM6ICdaV0UnLFxuICAgIGlzb05vOiAnNzE2JyxcbiAgICBpbnRlcm5ldDogJ1pXJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnSG9uZyBLb25nJyxcbiAgICBjYXBpdGFsOiAnVmljdG9yaWEnLFxuICAgIGZpcHM6ICdISycsXG4gICAgaXNvMjogJ0hLJyxcbiAgICBpc28zOiAnSEtHJyxcbiAgICBpc29ObzogJzM0NCcsXG4gICAgaW50ZXJuZXQ6ICdISydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FzaWEnLFxuICAgIHJlZ2lvbjogJ0Vhc3QgQXNpYScsXG4gICAgY291bnRyeTogJ01hY2F1JyxcbiAgICBjYXBpdGFsOiAnTWFjYXUnLFxuICAgIGZpcHM6ICdNQycsXG4gICAgaXNvMjogJ01PJyxcbiAgICBpc28zOiAnTUFDJyxcbiAgICBpc29ObzogJzQ0NicsXG4gICAgaW50ZXJuZXQ6ICdNTydcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0FudGFyY3RpY2EnLFxuICAgIHJlZ2lvbjogJ0FudGFyY3RpY2EnLFxuICAgIGNvdW50cnk6ICdBbnRhcmN0aWNhJyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnQVknLFxuICAgIGlzbzI6ICdBUScsXG4gICAgaXNvMzogJ0FUQScsXG4gICAgaXNvTm86ICcxMCcsXG4gICAgaW50ZXJuZXQ6ICdBUSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0F0bGFudGljIE9jZWFuJyxcbiAgICByZWdpb246ICdTb3V0aCBBdGxhbnRpYyBPY2VhbicsXG4gICAgY291bnRyeTogJ0JvdXZldCBJc2xhbmQnLFxuICAgIGNhcGl0YWw6ICcnLFxuICAgIGZpcHM6ICdCVicsXG4gICAgaXNvMjogJ0JWJyxcbiAgICBpc28zOiAnQlZUJyxcbiAgICBpc29ObzogJzc0JyxcbiAgICBpbnRlcm5ldDogJ0JWJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggQXNpYScsXG4gICAgY291bnRyeTogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ0lPJyxcbiAgICBpc28yOiAnSU8nLFxuICAgIGlzbzM6ICdJT1QnLFxuICAgIGlzb05vOiAnODYnLFxuICAgIGludGVybmV0OiAnSU8nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdJbmRpYW4gT2NlYW4nLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEluZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ0ZyZW5jaCBTb3V0aGVybiBhbmQgQW50YXJjdGljIExhbmRzJyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnRlMnLFxuICAgIGlzbzI6ICdURicsXG4gICAgaXNvMzogJ0FURicsXG4gICAgaXNvTm86ICcyNjAnLFxuICAgIGludGVybmV0OiAnLS0nXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdJbmRpYW4gT2NlYW4nLFxuICAgIHJlZ2lvbjogJ1NvdXRoZXJuIEluZGlhbiBPY2VhbicsXG4gICAgY291bnRyeTogJ0hlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ0hNJyxcbiAgICBpc28yOiAnSE0nLFxuICAgIGlzbzM6ICdITUQnLFxuICAgIGlzb05vOiAnMzM0JyxcbiAgICBpbnRlcm5ldDogJ0hNJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXRsYW50aWMgT2NlYW4nLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEF0bGFudGljIE9jZWFuJyxcbiAgICBjb3VudHJ5OiAnU2FpbnQgSGVsZW5hJyxcbiAgICBjYXBpdGFsOiAnJyxcbiAgICBmaXBzOiAnU0gnLFxuICAgIGlzbzI6ICdTSCcsXG4gICAgaXNvMzogJ1NITicsXG4gICAgaXNvTm86ICc2NTQnLFxuICAgIGludGVybmV0OiAnU0gnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBdGxhbnRpYyBPY2VhbicsXG4gICAgcmVnaW9uOiAnU291dGggQXRsYW50aWMgT2NlYW4nLFxuICAgIGNvdW50cnk6ICdTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJycsXG4gICAgZmlwczogJ1NYJyxcbiAgICBpc28yOiAnR1MnLFxuICAgIGlzbzM6ICdTR1MnLFxuICAgIGlzb05vOiAnMjM5JyxcbiAgICBpbnRlcm5ldDogJ0dTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0d1ZXJuc2V5JyxcbiAgICBjYXBpdGFsOiAnU2FpbnQgUGV0ZXIgUG9ydCcsXG4gICAgZmlwczogJ0dLJyxcbiAgICBpc28yOiAnR0cnLFxuICAgIGlzbzM6ICdHR1knLFxuICAgIGlzb05vOiAnODMxJyxcbiAgICBpbnRlcm5ldDogJ0dHJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdTb3V0aCBFYXN0IEV1cm9wZScsXG4gICAgY291bnRyeTogJ1NlcmJpYScsXG4gICAgY2FwaXRhbDogJ0JlbGdyYWRlJyxcbiAgICBmaXBzOiAnUkknLFxuICAgIGlzbzI6ICdSUycsXG4gICAgaXNvMzogJ1NSQicsXG4gICAgaXNvTm86ICc2ODgnLFxuICAgIGludGVybmV0OiAnUlMnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdTYWludCBCYXJ0aMOpbGVteScsXG4gICAgY2FwaXRhbDogJ0d1c3RhdmlhJyxcbiAgICBmaXBzOiAnVEInLFxuICAgIGlzbzI6ICdCTCcsXG4gICAgaXNvMzogJ0JMTScsXG4gICAgaXNvTm86ICc2NTInLFxuICAgIGludGVybmV0OiAnQkwnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdFdXJvcGUnLFxuICAgIHJlZ2lvbjogJ1NvdXRoIEVhc3QgRXVyb3BlJyxcbiAgICBjb3VudHJ5OiAnTW9udGVuZWdybycsXG4gICAgY2FwaXRhbDogJ1BvZGdvcmljYScsXG4gICAgZmlwczogJ01KJyxcbiAgICBpc28yOiAnTUUnLFxuICAgIGlzbzM6ICdNTkUnLFxuICAgIGlzb05vOiAnNDk5JyxcbiAgICBpbnRlcm5ldDogJ01FJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdXZXN0ZXJuIEV1cm9wZScsXG4gICAgY291bnRyeTogJ0plcnNleScsXG4gICAgY2FwaXRhbDogJ1NhaW50IEhlbGllcicsXG4gICAgZmlwczogJ0pFJyxcbiAgICBpc28yOiAnSkUnLFxuICAgIGlzbzM6ICdKRVknLFxuICAgIGlzb05vOiAnODMyJyxcbiAgICBpbnRlcm5ldDogJ0pFJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQ3VyYcOnYW8nLFxuICAgIGNhcGl0YWw6ICdXaWxsZW1zdGFkJyxcbiAgICBmaXBzOiAnVUMnLFxuICAgIGlzbzI6ICdDVycsXG4gICAgaXNvMzogJ0NVVycsXG4gICAgaXNvTm86ICc1MzEnLFxuICAgIGludGVybmV0OiAnQ1cnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdTYWludCBNYXJ0aW4nLFxuICAgIGNhcGl0YWw6ICdNYXJpZ290JyxcbiAgICBmaXBzOiAnUk4nLFxuICAgIGlzbzI6ICdNRicsXG4gICAgaXNvMzogJ01BRicsXG4gICAgaXNvTm86ICc2NjMnLFxuICAgIGludGVybmV0OiAnTUYnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBbWVyaWNhcycsXG4gICAgcmVnaW9uOiAnV2VzdCBJbmRpZXMnLFxuICAgIGNvdW50cnk6ICdTaW50IE1hYXJ0ZW4nLFxuICAgIGNhcGl0YWw6ICdQaGlsaXBzYnVyZycsXG4gICAgZmlwczogJ05OJyxcbiAgICBpc28yOiAnU1gnLFxuICAgIGlzbzM6ICdTWE0nLFxuICAgIGlzb05vOiAnNTM0JyxcbiAgICBpbnRlcm5ldDogJ1NYJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQXNpYScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBBc2lhJyxcbiAgICBjb3VudHJ5OiAnVGltb3ItTGVzdGUnLFxuICAgIGNhcGl0YWw6ICdEaWxpJyxcbiAgICBmaXBzOiAnVFQnLFxuICAgIGlzbzI6ICdUTCcsXG4gICAgaXNvMzogJ1RMUycsXG4gICAgaXNvTm86ICc2MjYnLFxuICAgIGludGVybmV0OiAnVEwnXG4gIH0sXG4gIHtcbiAgICBjb250aW5lbnQ6ICdBZnJpY2EnLFxuICAgIHJlZ2lvbjogJ05vcnRoZXJuIEFmcmljYScsXG4gICAgY291bnRyeTogJ1NvdXRoIFN1ZGFuJyxcbiAgICBjYXBpdGFsOiAnSnViYScsXG4gICAgZmlwczogJ09EJyxcbiAgICBpc28yOiAnU1MnLFxuICAgIGlzbzM6ICdTU0QnLFxuICAgIGlzb05vOiAnNzI4JyxcbiAgICBpbnRlcm5ldDogJ1NTJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnRXVyb3BlJyxcbiAgICByZWdpb246ICdOb3J0aGVybiBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICfDhWxhbmQgSXNsYW5kcycsXG4gICAgY2FwaXRhbDogJ01hcmllaGFtbicsXG4gICAgZmlwczogJ0FYJyxcbiAgICBpc28yOiAnQVgnLFxuICAgIGlzbzM6ICdBTEEnLFxuICAgIGlzb05vOiAnMjQ4JyxcbiAgICBpbnRlcm5ldDogJ0FYJ1xuICB9LFxuICB7XG4gICAgY29udGluZW50OiAnQW1lcmljYXMnLFxuICAgIHJlZ2lvbjogJ1dlc3QgSW5kaWVzJyxcbiAgICBjb3VudHJ5OiAnQm9uYWlyZScsXG4gICAgY2FwaXRhbDogJ0tyYWxlbmRpamsnLFxuICAgIGZpcHM6ICdCUScsXG4gICAgaXNvMjogJ0JRJyxcbiAgICBpc28zOiAnQkVTJyxcbiAgICBpc29ObzogJzUzNScsXG4gICAgaW50ZXJuZXQ6ICdCUSdcbiAgfSxcbiAge1xuICAgIGNvbnRpbmVudDogJ0V1cm9wZScsXG4gICAgcmVnaW9uOiAnU291dGggRWFzdCBFdXJvcGUnLFxuICAgIGNvdW50cnk6ICdSZXB1YmxpYyBvZiBLb3Nvdm8nLFxuICAgIGNhcGl0YWw6ICdQcmlzdGluYScsXG4gICAgZmlwczogJ0tWJyxcbiAgICBpc28yOiAnWEsnLFxuICAgIGlzbzM6ICdVTksnLFxuICAgIGlzb05vOiBudWxsLFxuICAgIGludGVybmV0OiAnWEsnXG4gIH0sXG5dXG5cbm1vZHVsZS5leHBvcnRzLmNvdW50cmllcyA9IGNvdW50cmllc1xuIiwiY29uc3QgbGlzdCA9IFtcbiAge1xuICAgIG5hbWU6ICdBbGFiYW1hJyxcbiAgICB1c3BzOiAnQUwnLFxuICAgIGRlbW9ueW06ICdBbGFiYW1pYW4nLFxuICAgIGlzbzogJ1VTLUFMJyxcbiAgICBhbHRBYmJyOiBbJ0FsYSddLFxuICAgIHVzY2c6ICdBTCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQWxhc2thJyxcbiAgICB1c3BzOiAnQUsnLFxuICAgIGRlbW9ueW06ICdBbGFza2FuJyxcbiAgICBpc286ICdVUy1BSycsXG4gICAgYWx0QWJicjogWydBbGFzJ10sXG4gICAgdXNjZzogJ0FLJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdBcml6b25hJyxcbiAgICB1c3BzOiAnQVonLFxuICAgIGRlbW9ueW06ICdBcml6b25hbicsXG4gICAgaXNvOiAnVVMtQVonLFxuICAgIGFsdEFiYnI6IFsnQXJpeiddLFxuICAgIHVzY2c6ICdBWicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQXJrYW5zYXMnLFxuICAgIHVzcHM6ICdBUicsXG4gICAgZGVtb255bTogJ0Fya2Fuc2FuJyxcbiAgICBpc286ICdVUy1BUicsXG4gICAgYWx0QWJicjogWydBcmsnXSxcbiAgICB1c2NnOiAnQVInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NhbGlmb3JuaWEnLFxuICAgIHVzcHM6ICdDQScsXG4gICAgZGVtb255bTogJ0NhbGlmb3JuaWFuJyxcbiAgICBpc286ICdVUy1DQScsXG4gICAgYWx0QWJicjogWydDYWwnLCAnQ2FsaWYnXSxcbiAgICB1c2NnOiAnQ0YnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NvbG9yYWRvJyxcbiAgICB1c3BzOiAnQ08nLFxuICAgIGRlbW9ueW06ICdDb2xvcmFkYW4nLFxuICAgIGlzbzogJ1VTLUNPJyxcbiAgICBhbHRBYmJyOiBbJ0NvbG8nLCAnQ29sJ10sXG4gICAgdXNjZzogJ0NMJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDb25uZWN0aWN1dCcsXG4gICAgdXNwczogJ0NUJyxcbiAgICBkZW1vbnltOiAnQ29ubmVjdGljdXRlcicsXG4gICAgaXNvOiAnVVMtQ1QnLFxuICAgIGFsdEFiYnI6IFsnQ29ubiddLFxuICAgIHVzY2c6ICdDVCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGVsYXdhcmUnLFxuICAgIHVzcHM6ICdERScsXG4gICAgZGVtb255bTogJ0RlbGF3YXJlYW4nLFxuICAgIGlzbzogJ1VTLURFJyxcbiAgICBhbHRBYmJyOiBbJ0RlbCddLFxuICAgIHVzY2c6ICdETCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRGlzdHJpY3Qgb2YgQ29sdW1iaWEnLFxuICAgIHVzcHM6ICdEQycsXG4gICAgZGVtb255bTogJ1dhc2hpbmd0b25pYW4nLFxuICAgIGlzbzogJ1VTLURDJyxcbiAgICBhbHRBYmJyOiBbJ1dhc2ggREMnXSxcbiAgICB1c2NnOiAnREMnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Zsb3JpZGEnLFxuICAgIHVzcHM6ICdGTCcsXG4gICAgZGVtb255bTogJ0Zsb3JpZGlhbicsXG4gICAgaXNvOiAnVVMtRkwnLFxuICAgIGFsdEFiYnI6IFsnRmxhJywgJ0Zsb3InXSxcbiAgICB1c2NnOiAnRkwnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dlb3JnaWEnLFxuICAgIHVzcHM6ICdHQScsXG4gICAgZGVtb255bTogJ0dlb3JnaWFuJyxcbiAgICBpc286ICdVUy1HQScsXG4gICAgYWx0QWJicjogWydHZW8nXSxcbiAgICB1c2NnOiAnR0EnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0hhd2FpaScsXG4gICAgdXNwczogJ0hJJyxcbiAgICBkZW1vbnltOiAnSGF3YWlpIHJlc2lkZW50JyxcbiAgICBpc286ICdVUy1ISScsXG4gICAgYWx0QWJicjogWydHZW8nXSxcbiAgICB1c2NnOiAnSEEnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0lkYWhvJyxcbiAgICB1c3BzOiAnSUQnLFxuICAgIGRlbW9ueW06ICdJZGFob2FuJyxcbiAgICBpc286ICdVUy1JRCcsXG4gICAgYWx0QWJicjogWydJZGEnXSxcbiAgICB1c2NnOiAnSUQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0lsbGlub2lzJyxcbiAgICB1c3BzOiAnSUwnLFxuICAgIGRlbW9ueW06ICdJbGxpbm9pc2FuJyxcbiAgICBpc286ICdVUy1JTCcsXG4gICAgYWx0QWJicjogWydJbGwnLCAnSWxscycsIFwiSWxsJ3NcIl0sXG4gICAgdXNjZzogJ0lMJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmRpYW5hJyxcbiAgICB1c3BzOiAnSU4nLFxuICAgIGRlbW9ueW06ICdIb29zaWVyJyxcbiAgICBpc286ICdVUy1JTicsXG4gICAgYWx0QWJicjogWydJbmQnXSxcbiAgICB1c2NnOiAnSU4nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0lvd2EnLFxuICAgIHVzcHM6ICdJQScsXG4gICAgZGVtb255bTogJ0lvd2FuJyxcbiAgICBpc286ICdVUy1JQScsXG4gICAgYWx0QWJicjogWydJb2EnXSxcbiAgICB1c2NnOiAnSUEnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0thbnNhcycsXG4gICAgdXNwczogJ0tTJyxcbiAgICBkZW1vbnltOiAnS2Fuc2FuJyxcbiAgICBpc286ICdVUy1LUycsXG4gICAgYWx0QWJicjogWydLYW5zJywgJ0thbiddLFxuICAgIHVzY2c6ICdLQScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnS2VudHVja3knLFxuICAgIHVzcHM6ICdLWScsXG4gICAgZGVtb255bTogJ0tlbnR1Y2tpYW4nLFxuICAgIGlzbzogJ1VTLUtZJyxcbiAgICBhbHRBYmJyOiBbJ0tlbicsICdLZW50J10sXG4gICAgdXNjZzogJ0tZJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMb3Vpc2lhbmEnLFxuICAgIHVzcHM6ICdMQScsXG4gICAgZGVtb255bTogJ0xvdWlzaWFuaWFuJyxcbiAgICBpc286ICdVUy1MQScsXG4gICAgYWx0QWJicjogW10sXG4gICAgdXNjZzogJ0xBJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNYWluZScsXG4gICAgdXNwczogJ01FJyxcbiAgICBkZW1vbnltOiAnTWFpbmVyJyxcbiAgICBpc286ICdVUy1NRScsXG4gICAgYWx0QWJicjogW10sXG4gICAgdXNjZzogJ01FJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNYXJ5bGFuZCcsXG4gICAgdXNwczogJ01EJyxcbiAgICBkZW1vbnltOiAnTWFyeWxhbmRlcicsXG4gICAgaXNvOiAnVVMtTUQnLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdNRCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWFzc2FjaHVzZXR0cycsXG4gICAgdXNwczogJ01BJyxcbiAgICBkZW1vbnltOiAnTWFzc2FjaHVzZXR0c2FuJyxcbiAgICBpc286ICdVUy1NQScsXG4gICAgYWx0QWJicjogWydNYXNzJ10sXG4gICAgdXNjZzogJ01TJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNaWNoaWdhbicsXG4gICAgdXNwczogJ01JJyxcbiAgICBkZW1vbnltOiAnTWljaGlnYW5pYW4nLFxuICAgIGlzbzogJ1VTLU1JJyxcbiAgICBhbHRBYmJyOiBbJ01pY2gnXSxcbiAgICB1c2NnOiAnTUMnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01pbm5lc290YScsXG4gICAgdXNwczogJ01OJyxcbiAgICBkZW1vbnltOiAnTWlubmVzb3RhbicsXG4gICAgaXNvOiAnVVMtTU4nLFxuICAgIGFsdEFiYnI6IFsnTWlubiddLFxuICAgIHVzY2c6ICdNTicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTWlzc2lzc2lwcGknLFxuICAgIHVzcHM6ICdNUycsXG4gICAgZGVtb255bTogJ01pc3Npc3NpcHBpYW4nLFxuICAgIGlzbzogJ1VTLU1TJyxcbiAgICBhbHRBYmJyOiBbJ01pc3MnXSxcbiAgICB1c2NnOiAnTUknLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ01pc3NvdXJpJyxcbiAgICB1c3BzOiAnTU8nLFxuICAgIGRlbW9ueW06ICdNaXNzb3VyaWFuJyxcbiAgICBpc286ICdVUy1NTycsXG4gICAgYWx0QWJicjogW10sXG4gICAgdXNjZzogJ01PJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNb250YW5hJyxcbiAgICB1c3BzOiAnTVQnLFxuICAgIGRlbW9ueW06ICdNb250YW5hbicsXG4gICAgaXNvOiAnVVMtTVQnLFxuICAgIGFsdEFiYnI6IFsnTW9udCddLFxuICAgIHVzY2c6ICdNVCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTmVicmFza2EnLFxuICAgIHVzcHM6ICdORScsXG4gICAgZGVtb255bTogJ05lYnJhc2thbicsXG4gICAgaXNvOiAnVVMtTkUnLFxuICAgIGFsdEFiYnI6IFsnTmVicicsICdOZWInXSxcbiAgICB1c2NnOiAnTkInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ05ldmFkYScsXG4gICAgdXNwczogJ05WJyxcbiAgICBkZW1vbnltOiAnTmV2YWRhbicsXG4gICAgaXNvOiAnVVMtTlYnLFxuICAgIGFsdEFiYnI6IFsnTmV2J10sXG4gICAgdXNjZzogJ05WJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOZXZhZGEnLFxuICAgIHVzcHM6ICdOVicsXG4gICAgZGVtb255bTogJ05ldmFkYW4nLFxuICAgIGlzbzogJ1VTLU5WJyxcbiAgICBhbHRBYmJyOiBbJ05ldiddLFxuICAgIHVzY2c6ICdOVicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTmV3IEhhbXBzaGlyZScsXG4gICAgdXNwczogJ05IJyxcbiAgICBkZW1vbnltOiAnTmV3IEhhbXBzaGlyaXRlJyxcbiAgICBpc286ICdVUy1OSCcsXG4gICAgYWx0QWJicjogW10sXG4gICAgdXNjZzogJ05IJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOZXcgSmVyc2V5JyxcbiAgICB1c3BzOiAnTkonLFxuICAgIGRlbW9ueW06ICdOZXcgSmVyc2V5YW4nLFxuICAgIGlzbzogJ1VTLU5KJyxcbiAgICBhbHRBYmJyOiBbJ04gSmVyc2V5J10sXG4gICAgdXNjZzogJ05KJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOZXcgTWV4aWNvJyxcbiAgICB1c3BzOiAnTk0nLFxuICAgIGRlbW9ueW06ICdOZXcgTWV4aWNhbicsXG4gICAgaXNvOiAnVVMtTk0nLFxuICAgIGFsdEFiYnI6IFsnTiBNZXgnLCAnTmV3IE0nXSxcbiAgICB1c2NnOiAnTk0nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ05ldyBZb3JrJyxcbiAgICB1c3BzOiAnTlknLFxuICAgIGRlbW9ueW06ICdOZXcgWW9ya2VyJyxcbiAgICBpc286ICdVUy1OWScsXG4gICAgYWx0QWJicjogWydOIFlvcmsnXSxcbiAgICB1c2NnOiAnTlknLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ05vcnRoIENhcm9saW5hJyxcbiAgICB1c3BzOiAnTkMnLFxuICAgIGRlbW9ueW06ICdOb3J0aCBDYXJvbGluaWFuJyxcbiAgICBpc286ICdVUy1OQycsXG4gICAgYWx0QWJicjogWydOIENhciddLFxuICAgIHVzY2c6ICdOQycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTm9ydGggRGFrb3RhJyxcbiAgICB1c3BzOiAnTkQnLFxuICAgIGRlbW9ueW06ICdOb3J0aCBEYWtvdGFuJyxcbiAgICBpc286ICdVUy1ORCcsXG4gICAgYWx0QWJicjogWydOIERhaycsICdOb0RhayddLFxuICAgIHVzY2c6ICdORCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT2hpbycsXG4gICAgdXNwczogJ09IJyxcbiAgICBkZW1vbnltOiAnT2hpb2FuJyxcbiAgICBpc286ICdVUy1PSCcsXG4gICAgYWx0QWJicjogWydPJ10sXG4gICAgdXNjZzogJ09IJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPa2xhaG9tYScsXG4gICAgdXNwczogJ09LJyxcbiAgICBkZW1vbnltOiAnT2tsYWhvbWFuJyxcbiAgICBpc286ICdVUy1PSycsXG4gICAgYWx0QWJicjogWydPa2xhJ10sXG4gICAgdXNjZzogJ09LJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdPcmVnb24nLFxuICAgIHVzcHM6ICdPUicsXG4gICAgZGVtb255bTogJ09yZWdvbmlhbicsXG4gICAgaXNvOiAnVVMtT1InLFxuICAgIGFsdEFiYnI6IFsnT3JlJ10sXG4gICAgdXNjZzogJ09SJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQZW5uc3lsdmFuaWEnLFxuICAgIHVzcHM6ICdQQScsXG4gICAgZGVtb255bTogJ1Blbm5zeWx2YW5pYW4nLFxuICAgIGlzbzogJ1VTLVBBJyxcbiAgICBhbHRBYmJyOiBbJ1Blbm4nLCAnUGVubmEnXSxcbiAgICB1c2NnOiAnUEEnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1Job2RlIElzbGFuZCcsXG4gICAgdXNwczogJ1JJJyxcbiAgICBkZW1vbnltOiAnUmhvZGUgSXNsYW5kZXInLFxuICAgIGlzbzogJ1VTLVJJJyxcbiAgICBhbHRBYmJyOiBbJ1JJICYgUFAnLCAnUiBJc2wnXSxcbiAgICB1c2NnOiAnUkknLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NvdXRoIENhcm9saW5hJyxcbiAgICB1c3BzOiAnU0MnLFxuICAgIGRlbW9ueW06ICdTb3V0aCBDYXJvbGluaWFuJyxcbiAgICBpc286ICdVUy1TQycsXG4gICAgYWx0QWJicjogWydTIENhciddLFxuICAgIHVzY2c6ICdTQycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU291dGggRGFrb3RhJyxcbiAgICB1c3BzOiAnU0QnLFxuICAgIGRlbW9ueW06ICdTb3V0aCBEYWtvdGFuJyxcbiAgICBpc286ICdVUy1TRCcsXG4gICAgYWx0QWJicjogWydTIERhaycsICdTb0RhayddLFxuICAgIHVzY2c6ICdTRCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGVubmVzc2VlJyxcbiAgICB1c3BzOiAnVE4nLFxuICAgIGRlbW9ueW06ICdUZW5uZXNzZWFuJyxcbiAgICBpc286ICdVUy1UTicsXG4gICAgYWx0QWJicjogWydUZW5uJ10sXG4gICAgdXNjZzogJ1ROJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdUZXhhcycsXG4gICAgdXNwczogJ1RYJyxcbiAgICBkZW1vbnltOiAnVGV4YW4nLFxuICAgIGlzbzogJ1VTLVRYJyxcbiAgICBhbHRBYmJyOiBbJ1RleCddLFxuICAgIHVzY2c6ICdUWCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVXRhaCcsXG4gICAgdXNwczogJ1VUJyxcbiAgICBkZW1vbnltOiAnVXRhaG4nLFxuICAgIGlzbzogJ1VTLVVUJyxcbiAgICBhbHRBYmJyOiBbXSxcbiAgICB1c2NnOiAnVVQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1Zlcm1vbnQnLFxuICAgIHVzcHM6ICdWVCcsXG4gICAgZGVtb255bTogJ1Zlcm1vbnRlcicsXG4gICAgaXNvOiAnVVMtVlQnLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdWVCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVmlyZ2luaWEnLFxuICAgIHVzcHM6ICdWQScsXG4gICAgZGVtb255bTogJ1ZpcmdpbmlhbicsXG4gICAgaXNvOiAnVVMtVkEnLFxuICAgIGFsdEFiYnI6IFsnVmlyZyddLFxuICAgIHVzY2c6ICdWQScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV2FzaGluZ3RvbicsXG4gICAgdXNwczogJ1dBJyxcbiAgICBkZW1vbnltOiAnV2FzaGluZ3RvbmlhbicsXG4gICAgaXNvOiAnVVMtV0EnLFxuICAgIGFsdEFiYnI6IFsnV2FzaCcsICdXbiddLFxuICAgIHVzY2c6ICdXTicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV2VzdCBWaXJnaW5pYScsXG4gICAgdXNwczogJ1dWJyxcbiAgICBkZW1vbnltOiAnV2VzdCBWaXJnaW5pYW4nLFxuICAgIGlzbzogJ1VTLVdWJyxcbiAgICBhbHRBYmJyOiBbJ1cgVmEnLCAnVyBWaXJnJ10sXG4gICAgdXNjZzogJ1dWJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdXaXNjb25zaW4nLFxuICAgIHVzcHM6ICdXSScsXG4gICAgZGVtb255bTogJ1dpc2NvbnNpbml0ZScsXG4gICAgaXNvOiAnVVMtV0knLFxuICAgIGFsdEFiYnI6IFsnV2lzJywgJ1dpc2MnXSxcbiAgICB1c2NnOiAnV1MnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1d5b21pbmcnLFxuICAgIHVzcHM6ICdXWScsXG4gICAgZGVtb255bTogJ1d5b21pbmdpdGUnLFxuICAgIGlzbzogJ1VTLVdZJyxcbiAgICBhbHRBYmJyOiBbJ1d5byddLFxuICAgIHVzY2c6ICdXWScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQW1lcmljYW4gU2Ftb2EnLFxuICAgIHVzcHM6ICdBUycsXG4gICAgZGVtb255bTogJ0FtZXJpY2FuIFNhbW9hbicsXG4gICAgaXNvOiAnVVMtQVMnLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdBUycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR3VhbScsXG4gICAgdXNwczogJ0dVJyxcbiAgICBkZW1vbnltOiAnR3VhbWFuaWFuJyxcbiAgICBpc286ICdVUy1HVScsXG4gICAgYWx0QWJicjogW10sXG4gICAgdXNjZzogJ0dVJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLFxuICAgIHVzcHM6ICdNUCcsXG4gICAgZGVtb255bTogJ01hcmlhbmEgSXNsYW5kZXInLFxuICAgIGlzbzogJ1VTLU1QJyxcbiAgICBhbHRBYmJyOiBbJ0NOTUknXSxcbiAgICB1c2NnOiAnQ00nLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1ZXJ0byBSaWNvJyxcbiAgICB1c3BzOiAnUFInLFxuICAgIGRlbW9ueW06ICdQdWVydG8gUmljYW4nLFxuICAgIGlzbzogJ1VTLVBSJyxcbiAgICBhbHRBYmJyOiBbXSxcbiAgICB1c2NnOiAnUFInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1VTIFZpcmdpbiBJc2xhbmRzJyxcbiAgICB1c3BzOiAnVkknLFxuICAgIGRlbW9ueW06ICdWaXJnaW4gSXNsYW5kZXInLFxuICAgIGlzbzogJ1VTLVZJJyxcbiAgICBhbHRBYmJyOiBbJ1VTVkknXSxcbiAgICB1c2NnOiAnVkknLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1VTIE1pbm9yIE91dGx5aW5nIElzbGFuZHMnLFxuICAgIHVzcHM6ICdVTScsXG4gICAgZGVtb255bTogJycsXG4gICAgaXNvOiAnVVMtVU0nLFxuICAgIGFsdEFiYnI6IFtdLFxuICAgIHVzY2c6ICdVTScsXG4gIH0sXG5dXG5cbm1vZHVsZS5leHBvcnRzID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IHN0YXRlID0+IHtcbiAgICBpZiAoIXN0YXRlKSByZXR1cm4gbGlzdFxuICAgIHN0YXRlID0gc3RhdGUuc3BsaXQoJy4nKS5qb2luKCcnKVxuICAgIGNvbnN0IGZvdW5kID0gbGlzdC5maW5kKFxuICAgICAgaXRlbSA9PlxuICAgICAgICBpdGVtLm5hbWUudG9VcHBlckNhc2UoKSA9PT0gc3RhdGUudG9VcHBlckNhc2UoKSB8fFxuICAgICAgICBpdGVtLnVzcHMudG9VcHBlckNhc2UoKSA9PT0gc3RhdGUudG9VcHBlckNhc2UoKSB8fFxuICAgICAgICBpdGVtLmFsdEFiYnIuZmluZChzdCA9PiBzdC50b1VwcGVyQ2FzZSgpID09PSBzdGF0ZS50b1VwcGVyQ2FzZSgpKSxcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmRcblxuICAgIHJldHVybiAnTm8gc3RhdGUgZm91bmQhJ1xuICB9XG5cbiAgbWFpbi5hYmJyID0gc3RhdGUgPT4ge1xuICAgIGlmICghc3RhdGUpIHJldHVybiAnUGxlYXNlIHBhc3MgYSBmdWxsIHN0YXRlIG5hbWUgYXMgeW91ciBhcmd1bWVudCdcbiAgICBjb25zdCBmb3VuZCA9IGxpc3QuZmluZChcbiAgICAgIGl0ZW0gPT4gaXRlbS5uYW1lLnRvVXBwZXJDYXNlKCkgPT09IHN0YXRlLnRvVXBwZXJDYXNlKCksXG4gICAgKVxuICAgIGlmIChmb3VuZCkgcmV0dXJuIGZvdW5kLnVzcHNcbiAgICByZXR1cm4gJ05vIGFiYnJldmlhdGlvbiBmb3VuZCB3aXRoIHRoYXQgc3RhdGUgbmFtZSdcbiAgfVxuXG4gIG1haW4uZnVsbE5hbWUgPSBhYmJyID0+IHtcbiAgICBpZiAoIWFiYnIpIHJldHVybiAnUGxlYXNlIHBhc3MgYW4gYWJicmV2aWF0aW9uIGFzIHlvdXIgYXJndW1lbnQnXG4gICAgY29uc3QgZm91bmQgPSBsaXN0LmZpbmQoXG4gICAgICBpdGVtID0+XG4gICAgICAgIGl0ZW0udXNwcy50b1VwcGVyQ2FzZSgpID09PSBhYmJyLnRvVXBwZXJDYXNlKCkgfHxcbiAgICAgICAgaXRlbS5hbHRBYmJyLmZpbmQoc3QgPT4gc3QudG9VcHBlckNhc2UoKSA9PT0gYWJici50b1VwcGVyQ2FzZSgpKSxcbiAgICApXG4gICAgaWYgKGZvdW5kKSByZXR1cm4gZm91bmQubmFtZVxuICAgIHJldHVybiAnTm8gc3RhdGUgZm91bmQgd2l0aCB0aGF0IGFiYnJldmlhdGlvbidcbiAgfVxuXG4gIG1haW4ub25seTUwID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vdFN0YXRlcyA9IFsnREMnLCAnQVMnLCAnR1UnLCAnTVAnLCAnUFInLCAnVkknLCAnVU0nXVxuICAgIHJldHVybiBsaXN0LmZpbHRlcihpdGVtID0+ICFub3RTdGF0ZXMuaW5jbHVkZXMoaXRlbS51c3BzKSlcbiAgfVxuXG4gIG1haW4uZGVtb255bSA9IHN0YXRlID0+IHtcbiAgICBpZiAoIXN0YXRlKVxuICAgICAgcmV0dXJuICdQbGVhc2UgcGFzcyBhIHN0YXRlIG5hbWUgb3IgYWJicmV2aWF0aW9uIGFzIHlvdXIgYXJndW1lbnQnXG4gICAgY29uc3QgZm91bmQgPSBsaXN0LmZpbmQoXG4gICAgICBpdGVtID0+XG4gICAgICAgIGl0ZW0ubmFtZS50b1VwcGVyQ2FzZSgpID09PSBzdGF0ZS50b1VwcGVyQ2FzZSgpIHx8XG4gICAgICAgIGl0ZW0udXNwcy50b1VwcGVyQ2FzZSgpID09PSBzdGF0ZS50b1VwcGVyQ2FzZSgpIHx8XG4gICAgICAgIGl0ZW0uYWx0QWJici5maW5kKHN0ID0+IHN0LnRvVXBwZXJDYXNlKCkgPT09IHN0YXRlLnRvVXBwZXJDYXNlKCkpLFxuICAgIClcbiAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZC5kZW1vbnltXG4gICAgcmV0dXJuICdObyBkZW1vbnltIGZvdW5kIGZvciB0aGF0IHN0YXRlJ1xuICB9XG5cbiAgcmV0dXJuIG1haW5cbn0pKClcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IGNsZWFyc2t5IGZyb20gJy4vbWVkaWEvY2xlYXJza3kucG5nJztcbmltcG9ydCBmZXdjbG91ZHMgZnJvbSAnLi9tZWRpYS9mZXdjbG91ZHMucG5nJztcbmltcG9ydCBzY2F0dGVyZWRjbG91ZHMgZnJvbSAnLi9tZWRpYS9zY2F0dGVyZWRjbG91ZHMucG5nJztcbmltcG9ydCBicm9rZW5jbG91ZHMgZnJvbSAnLi9tZWRpYS9icm9rZW5jbG91ZHMucG5nJztcbmltcG9ydCBzaG93ZXJyYWluIGZyb20gJy4vbWVkaWEvc2hvd2VycmFpbi5wbmcnO1xuaW1wb3J0IHJhaW4gZnJvbSAnLi9tZWRpYS9yYWluLnBuZyc7XG5pbXBvcnQgdGh1bmRlcnN0b3JtIGZyb20gJy4vbWVkaWEvdGh1bmRlcnN0b3JtLnBuZyc7XG5pbXBvcnQgc25vdyBmcm9tICcuL21lZGlhL3Nub3cucG5nJztcbmltcG9ydCBtaXN0IGZyb20gJy4vbWVkaWEvbWlzdC5wbmcnO1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdFdlYXRoZXIgPSAod2VhdGhlckFycikgPT4ge1xuICAgICAgICB3ZWF0aGVyQXJyLmZvckVhY2goKHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB3ZWF0aGVyQXJyW2luZGV4XSA9IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJBcnIuam9pbignICcpO1xuICAgIH07XG4gICAgY29uc3QgZm9ybWF0RGF0ZSA9ICh3ZWF0aGVyRGF0YSwgZGF0ZU51bSkgPT4ge1xuICAgICAgICBsZXQgZGF0ZVR4dCA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmxpc3RbZGF0ZU51bV0uZHRfdHh0LnN1YnN0cmluZygwLCAxMCkpLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGVUeHQpO1xuICAgICAgICBkYXRlVHh0ID0gZGF0ZVR4dC5zdWJzdHJpbmcoNCwgMTUpO1xuICAgICAgICByZXR1cm4gYCR7ZGF0ZVR4dC5zdWJzdHJpbmcoMCwgZGF0ZVR4dC5sZW5ndGggLSA0KX0sICR7ZGF0ZVR4dC5zdWJzdHJpbmcoZGF0ZVR4dC5sZW5ndGggLSA0LCBkYXRlVHh0Lmxlbmd0aCl9YDtcbiAgICB9O1xuICAgIGNvbnN0IGZpbmRJY29uID0gKHdlYXRoZXJEYXRhLCBkYXRlTnVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB3ZWF0aGVyRGF0YS5saXN0W2RhdGVOdW1dLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgbGV0IGljb25zcmM7XG4gICAgICAgIGlmIChjb2RlID09PSAnMDFkJyB8fCBjb2RlID09PSAnMDFuJykge1xuICAgICAgICAgICAgaWNvbnNyYyA9IGNsZWFyc2t5O1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICcwMmQnIHx8IGNvZGUgPT09ICcwMm4nKSB7XG4gICAgICAgICAgICBpY29uc3JjID0gZmV3Y2xvdWRzO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICcwM2QnIHx8IGNvZGUgPT09ICcwM24nKSB7XG4gICAgICAgICAgICBpY29uc3JjID0gc2NhdHRlcmVkY2xvdWRzO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICcwNGQnIHx8IGNvZGUgPT09ICcwNG4nKSB7XG4gICAgICAgICAgICBpY29uc3JjID0gYnJva2VuY2xvdWRzO1xuICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICcwOWQnIHx8IGNvZGUgPT09ICcwOW4nKSB7XG4gICAgICAgICAgICBpY29uc3JjID0gc2hvd2VycmFpbjtcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAnMTBkJyB8fCBjb2RlID09PSAnMTBuJykge1xuICAgICAgICAgICAgaWNvbnNyYyA9IHJhaW47XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpIHtcbiAgICAgICAgICAgIGljb25zcmMgPSB0aHVuZGVyc3Rvcm07XG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJzEzZCcgfHwgY29kZSA9PT0gJzEzbicpIHtcbiAgICAgICAgICAgIGljb25zcmMgPSBzbm93O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWNvbnNyYyA9IG1pc3Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGljb25zcmM7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJNYWluV2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJyk7XG4gICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEuY2l0eS5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5jaXR5LmNvdW50cnl9YDtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKTtcbiAgICAgICAgd2VhdGhlci50ZXh0Q29udGVudCA9IGZvcm1hdFdlYXRoZXIod2VhdGhlckRhdGEubGlzdFswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnNwbGl0KCcgJykpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSh3ZWF0aGVyRGF0YSwgMCk7XG5cbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGBDdXJyZW50bHk6ICR7d2VhdGhlckRhdGEubGlzdFswXS5tYWluLnRlbXB9wrBgO1xuXG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi5mZWVsc19saWtlfcKwYDtcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pY29uJyk7XG4gICAgICAgIGltZy5zcmMgPSBmaW5kSWNvbih3ZWF0aGVyRGF0YSwgMCk7XG4gICAgfTtcbiAgICBjb25zdCByZW5kZXJFeHRyYVdlYXRoZXIgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgaGlnaFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC10ZW1wJykuY2hpbGRyZW5bMV07XG4gICAgICAgIGhpZ2hUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubGlzdFswXS5tYWluLnRlbXBfbWF4fcKwYDtcblxuICAgICAgICBjb25zdCBsb3dUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvdy10ZW1wJykuY2hpbGRyZW5bMV07XG4gICAgICAgIGxvd1RlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5saXN0WzBdLm1haW4udGVtcF9taW59wrBgO1xuXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JykuY2hpbGRyZW5bMV07XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubGlzdFswXS5tYWluLmh1bWlkaXR5fSVgO1xuXG4gICAgICAgIGNvbnN0IGFpclByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpci1wcmVzc3VyZScpLmNoaWxkcmVuWzFdO1xuICAgICAgICBhaXJQcmVzc3VyZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi5wcmVzc3VyZX0gcHNpYDtcbiAgICB9O1xuICAgIGNvbnN0IHJlbmRlckZvcmVjYXN0ID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LW9uZScpO1xuICAgICAgICBjb25zdCBkYXkxZGF0ZSA9IGRheTEuY2hpbGRyZW5bMF07XG4gICAgICAgIGRheTFkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSh3ZWF0aGVyRGF0YSwgMCk7XG4gICAgICAgIGNvbnN0IGRheTFpbWcgPSBkYXkxLmNoaWxkcmVuWzFdO1xuICAgICAgICBkYXkxaW1nLnNyYyA9IGZpbmRJY29uKHdlYXRoZXJEYXRhLCAwKTtcbiAgICAgICAgY29uc3QgZGF5MWhpZ2ggPSBkYXkxLmNoaWxkcmVuWzJdO1xuICAgICAgICBkYXkxaGlnaC50ZXh0Q29udGVudCA9IGBIaWdoOiAke3dlYXRoZXJEYXRhLmxpc3RbMF0ubWFpbi50ZW1wX21heH1gO1xuICAgICAgICBjb25zdCBkYXkxbG93ID0gZGF5MS5jaGlsZHJlblszXTtcbiAgICAgICAgZGF5MWxvdy50ZXh0Q29udGVudCA9IGBMb3c6ICR7d2VhdGhlckRhdGEubGlzdFswXS5tYWluLnRlbXBfbWlufWA7XG5cbiAgICAgICAgY29uc3QgZGF5MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktdHdvJyk7XG4gICAgICAgIGNvbnN0IGRheTJkYXRlID0gZGF5Mi5jaGlsZHJlblswXTtcbiAgICAgICAgZGF5MmRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKHdlYXRoZXJEYXRhLCA4KTtcbiAgICAgICAgY29uc3QgZGF5MmltZyA9IGRheTIuY2hpbGRyZW5bMV07XG4gICAgICAgIGRheTJpbWcuc3JjID0gZmluZEljb24od2VhdGhlckRhdGEsIDgpO1xuICAgICAgICBjb25zdCBkYXkyaGlnaCA9IGRheTIuY2hpbGRyZW5bMl07XG4gICAgICAgIGRheTJoaWdoLnRleHRDb250ZW50ID0gYEhpZ2g6ICR7d2VhdGhlckRhdGEubGlzdFs4XS5tYWluLnRlbXBfbWF4fWA7XG4gICAgICAgIGNvbnN0IGRheTJsb3cgPSBkYXkyLmNoaWxkcmVuWzNdO1xuICAgICAgICBkYXkybG93LnRleHRDb250ZW50ID0gYExvdzogJHt3ZWF0aGVyRGF0YS5saXN0WzhdLm1haW4udGVtcF9taW59YDtcblxuICAgICAgICBjb25zdCBkYXkzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS10aHJlZScpO1xuICAgICAgICBjb25zdCBkYXkzZGF0ZSA9IGRheTMuY2hpbGRyZW5bMF07XG4gICAgICAgIGRheTNkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSh3ZWF0aGVyRGF0YSwgMTYpO1xuICAgICAgICBjb25zdCBkYXkzaW1nID0gZGF5My5jaGlsZHJlblsxXTtcbiAgICAgICAgZGF5M2ltZy5zcmMgPSBmaW5kSWNvbih3ZWF0aGVyRGF0YSwgMTYpO1xuICAgICAgICBjb25zdCBkYXkzaGlnaCA9IGRheTMuY2hpbGRyZW5bMl07XG4gICAgICAgIGRheTNoaWdoLnRleHRDb250ZW50ID0gYEhpZ2g6ICR7d2VhdGhlckRhdGEubGlzdFsxNl0ubWFpbi50ZW1wX21heH1gO1xuICAgICAgICBjb25zdCBkYXkzbG93ID0gZGF5My5jaGlsZHJlblszXTtcbiAgICAgICAgZGF5M2xvdy50ZXh0Q29udGVudCA9IGBMb3c6ICR7d2VhdGhlckRhdGEubGlzdFsxNl0ubWFpbi50ZW1wX21pbn1gO1xuXG4gICAgICAgIGNvbnN0IGRheTQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWZvdXInKTtcbiAgICAgICAgY29uc3QgZGF5NGRhdGUgPSBkYXk0LmNoaWxkcmVuWzBdO1xuICAgICAgICBkYXk0ZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUod2VhdGhlckRhdGEsIDI0KTtcbiAgICAgICAgY29uc3QgZGF5NGltZyA9IGRheTQuY2hpbGRyZW5bMV07XG4gICAgICAgIGRheTRpbWcuc3JjID0gZmluZEljb24od2VhdGhlckRhdGEsIDI0KTtcbiAgICAgICAgY29uc3QgZGF5NGhpZ2ggPSBkYXk0LmNoaWxkcmVuWzJdO1xuICAgICAgICBkYXk0aGlnaC50ZXh0Q29udGVudCA9IGBIaWdoOiAke3dlYXRoZXJEYXRhLmxpc3RbMjRdLm1haW4udGVtcF9tYXh9YDtcbiAgICAgICAgY29uc3QgZGF5NGxvdyA9IGRheTQuY2hpbGRyZW5bM107XG4gICAgICAgIGRheTRsb3cudGV4dENvbnRlbnQgPSBgTG93OiAke3dlYXRoZXJEYXRhLmxpc3RbMjRdLm1haW4udGVtcF9taW59YDtcblxuICAgICAgICBjb25zdCBkYXk1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS1maXZlJyk7XG4gICAgICAgIGNvbnN0IGRheTVkYXRlID0gZGF5NS5jaGlsZHJlblswXTtcbiAgICAgICAgZGF5NWRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXREYXRlKHdlYXRoZXJEYXRhLCAzMik7XG4gICAgICAgIGNvbnN0IGRheTVpbWcgPSBkYXk1LmNoaWxkcmVuWzFdO1xuICAgICAgICBkYXk1aW1nLnNyYyA9IGZpbmRJY29uKHdlYXRoZXJEYXRhLCAzMik7XG4gICAgICAgIGNvbnN0IGRheTVoaWdoID0gZGF5NS5jaGlsZHJlblsyXTtcbiAgICAgICAgZGF5NWhpZ2gudGV4dENvbnRlbnQgPSBgSGlnaDogJHt3ZWF0aGVyRGF0YS5saXN0WzMyXS5tYWluLnRlbXBfbWF4fWA7XG4gICAgICAgIGNvbnN0IGRheTVsb3cgPSBkYXk1LmNoaWxkcmVuWzNdO1xuICAgICAgICBkYXk1bG93LnRleHRDb250ZW50ID0gYExvdzogJHt3ZWF0aGVyRGF0YS5saXN0WzMyXS5tYWluLnRlbXBfbWlufWA7XG4gICAgfTtcbiAgICBjb25zdCBzd2l0Y2hNZWFzdXJlbWVudCA9ICgpID0+IHtcblxuICAgIH07XG4gICAgY29uc3QgbG9hZEVycm9yID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhLWNvbnRyb2wnKTtcbiAgICAgICAgY29uc3QgdG9nZ2xlTWVhc3VyZVN5c3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLW1lYXN1cmUtc3lzdCcpO1xuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSAnU29ycnksIHdlIGNvdWxkIG5vdCBmaW5kIHRoYXQgbG9jYXRpb24uJztcbiAgICAgICAgZGF0YUNvbnRyb2wuaW5zZXJ0QmVmb3JlKGVycm9yTXNnLCB0b2dnbGVNZWFzdXJlU3lzdCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVFcnJvciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUNvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YS1jb250cm9sJyk7XG4gICAgICAgIGlmIChkYXRhQ29udHJvbC5jaGlsZHJlblsxXS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICd0b2dnbGUtbWVhc3VyZS1zeXN0Jykge1xuICAgICAgICAgICAgZGF0YUNvbnRyb2wuY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyTWFpbldlYXRoZXIsXG4gICAgICAgIHJlbmRlckV4dHJhV2VhdGhlcixcbiAgICAgICAgcmVuZGVyRm9yZWNhc3QsXG4gICAgICAgIHN3aXRjaE1lYXN1cmVtZW50LFxuICAgICAgICBsb2FkRXJyb3IsXG4gICAgICAgIHJlbW92ZUVycm9yLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET007XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBET00gZnJvbSAnLi9ET00nO1xuXG5jb25zdCBhc3luYyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB1bml0cyA9ICdpbXBlcmlhbCc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0yMjAwMzJhZjJlZmMyNWQyNmZjMmU3MmQzYWJjMzkxNGAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBET00ubG9hZEVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHN3aXRjaE1lYXN1cmVtZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLW1lYXN1cmUtc3lzdCA+IHAnKS50ZXh0Q29udGVudDtcbiAgICAgICAgaWYgKHRvZ2dsZVRleHQgPT09ICdGwrAnKSB7XG4gICAgICAgICAgICAvLyBjYWxsIGdldFdlYXRoZXIgYnV0IHdpdGggY2Vsc2l1c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2FsbCBnZXRXZWF0aGVyIGJ1dCB3aXRoIGZhaHJlbmhlaXRcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRXZWF0aGVyLCBzd2l0Y2hNZWFzdXJlbWVudCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pbXBvcnQgc3RhdGVzIGZyb20gJ3VzLXN0YXRlLWNvbnZlcnRlci9pbmRleCc7XG5pbXBvcnQgbG9va3VwIGZyb20gJ2NvdW50cnktY29kZS1sb29rdXAnO1xuaW1wb3J0IGFzeW5jIGZyb20gJy4vYXN5bmMnO1xuaW1wb3J0IERPTSBmcm9tICcuL0RPTSc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFjcXVpcmVMb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWU7XG4gICAgICAgIGRhdGEgPSBkYXRhLnNwbGl0KCcsICcpO1xuICAgICAgICBsZXQgbG9jYXRpb247XG5cbiAgICAgICAgLy8gSWYgZm9ybWF0ID0gc3RhdGUgb3Igc3RhdGUsIGNvdW50cnlcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGVzLmFiYnIoZGF0YVswXSkgIT09ICdObyBhYmJyZXZpYXRpb24gZm91bmQgd2l0aCB0aGF0IHN0YXRlIG5hbWUnKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSBbc3RhdGVzLmFiYnIoZGF0YVswXSksICdVUyddO1xuICAgICAgICAgICAgLy8gSWYgZm9ybWF0ID0gY291bnRyeVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb29rdXAuYnlDb3VudHJ5KGRhdGFbMF0pICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSBbbG9va3VwLmJ5Q291bnRyeShkYXRhWzBdKS5pc28zXTtcbiAgICAgICAgICAgIC8vIElmIGZvcm1hdCA9IGNpdHlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSBbZGF0YVswXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIElmIGZvcm1hdCA9IGNpdHksIHN0YXRlIG9yIGNpdHksIHN0YXRlLCBjb3VudHJ5XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGVzLmFiYnIoZGF0YVsxXSkgIT09ICdObyBhYmJyZXZpYXRpb24gZm91bmQgd2l0aCB0aGF0IHN0YXRlIG5hbWUnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IFtkYXRhWzBdLCBkYXRhWzFdLCAnVVMnXTtcbiAgICAgICAgLy8gSWYgZm9ybWF0ID0gY2l0eSwgY291bnRyeVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb24gPSBbZGF0YVswXSwgZGF0YVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLmpvaW4oJywnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdG9nZ2xlTWVhc3VyZW1lbnRTeXN0ZW0gPSAoKSA9PiB7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlTG9jYXRpb24gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgRE9NLnJlbW92ZUVycm9yKCk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYWNxdWlyZUxvY2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXN5bmMuZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgRE9NLnJlbmRlck1haW5XZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgRE9NLnJlbmRlckV4dHJhV2VhdGhlcih3ZWF0aGVyRGF0YSk7XG4gICAgICAgIERPTS5yZW5kZXJGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZSA9ICcnO1xuICAgIH07XG4gICAgcmV0dXJuIHsgYWNxdWlyZUxvY2F0aW9uLCB0b2dnbGVNZWFzdXJlbWVudFN5c3RlbSwgY2hhbmdlTG9jYXRpb24gfTtcbn0pKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNvbnRyb2xsZXIuY2hhbmdlTG9jYXRpb24pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykuY2xpY2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==