interface Country {
  Country: string;
  CountryCod: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  newRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Global {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
}

interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: Date;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}

type CountrySummaryResponse = CountrySummaryInfo[];

enum CovidStatus {
  Confirmed = 'confirmed',
  Recovered = 'recovered',
  Deaths = 'deaths',
}

export {
  Country,
  CovidSummaryResponse,
  CountrySummaryInfo,
  CountrySummaryResponse,
  CovidStatus,
};
