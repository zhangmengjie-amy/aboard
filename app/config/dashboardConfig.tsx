export interface IHeader {
    name: string,
    value: string,
    percent: number
}

const CountriesConfig: IHeader[] = [{
    name: "United States",
    value: "us",
    percent: 100
}, {
    name: "Canada",
    value: "ca",
    percent: 80
}, {
    name: "Ukraine",
    value: "ua",
    percent: 70
}, {
    name: "Spain",
    value: "es",
    percent: 60
}, {
    name: "United Kingdom",
    value: "gb",
    percent: 50
}]


export {
    CountriesConfig,
}