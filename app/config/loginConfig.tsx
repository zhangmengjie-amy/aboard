interface ILoginCard {
    image: string,
    width: string,
    height: string,
    transformRotate: number,
    contentFontSize: string,
    footerFontSize: string,
    translateY: number,
    transformOrigin: string,
    content: string,
    userName: string,
    animationDirection: "left" | "down" | "right" | "up" | undefined,
    date: string
}

const LoginCard: ILoginCard[] = [{
    image: "/images/44.jpg",
    width: "180px",
    height: "190px",
    transformRotate: -20,
    contentFontSize: "13px",
    footerFontSize: "10px",
    translateY: 70,
    transformOrigin: "top right",
    content: "Shrimp and Chorizo Paella",
    userName: "Lucy",
    animationDirection: "left",
    date: "2025"
}, {
    image: "/images/22.jpg",
    width: "200px",
    height: "210px",
    contentFontSize: "14px",
    footerFontSize: "11px",
    transformRotate: -10,
    translateY: 0,
    transformOrigin: "top right",
    content: "Shrimp and Chorizo Paella",
    userName: "Bob",
    animationDirection: "left",
    date: "2025"
}, {
    image: "/images/55.jpg",
    width: "240px",
    height: "250px",
    contentFontSize: "16px",
    footerFontSize: "12px",
    transformRotate: 0,
    translateY: -20,
    transformOrigin: "center",
    content: "Shrimp and Chorizo Paella",
    userName: "Amy",
    animationDirection: "down",
    date: "2025"
}, {
    image: "/images/11.jpg",
    width: "200px",
    height: "210px",
    contentFontSize: "14px",
    footerFontSize: "11px",
    transformRotate: 10,
    translateY: 0,
    transformOrigin: "top left",
    content: "Shrimp and Chorizo Paella",
    userName: "Strong",
    animationDirection: "right",
    date: "2025"
}, {
    image: "/images/33.jpg",
    width: "180px",
    height: "190px",
    contentFontSize: "13px",
    footerFontSize: "10px",
    transformRotate: 20,
    translateY: 70,
    transformOrigin: "top left",
    content: "Shrimp and Chorizo Paella",
    userName: "Jack",
    animationDirection: "right",
    date: "2025"
}]

export {
    LoginCard
}