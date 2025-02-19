export interface IHeader {
    name: string,
    value: string,
}

const HeaderConfig: IHeader[] = [{
    name: "dashBoard",
    value: "dashBoard"
}, {
    name: "content",
    value: "content"
}, {
    name: "finance",
    value: "finance"
}, {
    name: "reports",
    value: "reports"
}]

export {
    HeaderConfig,
}