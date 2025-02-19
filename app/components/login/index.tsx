"use client";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@app/context/LanguageContext';
import { Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import AppleIcon from '@mui/icons-material/Apple';
import Face2SharpIcon from '@mui/icons-material/Face2Sharp';
import { LoginCard } from "@app/config/loginConfig";
import { useRouter } from 'next/navigation';
import { useSpring, animated } from '@react-spring/web';
import OpenAI from "openai";
import Link from 'next/link';

interface ILogin {
    name?: string;
}

const Login: React.FC<ILogin> = () => {
    const { t } = useTranslation();
    const { language, setLanguage } = useLanguage();
    const LOGO_COLOR = "#1976d2";



    const setStyles = (item: any, index: number) => {
        const friction = [150, 100, 300, 100, 150];
        const opacity = [0, 0, 1, 1, 0];
        const styles = useSpring({
            opacity: opacity[index],
            // transformOrigin: item.transformOrigin,
            from: { opacity: 0, transform: `rotate(0deg) translateY(-80px)`, },
            // to: { opacity: 1, transform: `rotate(${item.transformRotate}deg) translateY(${item.translateY}px)` },
            to: { opacity: 1, transform: `rotate(${item.transformRotate}deg) translateY(${item.translateY}px)` },
            config: { tension: 500, friction: friction[index] },
        });

        return styles
    }

    const router = useRouter();

    const handleLogin = () => {
        // 模拟登录成功后跳转到首页
        router.push('/pages/home');
    };

    const handleLanguage = () => {
        setLanguage(language === "zh" ? "en" : "zh")
    }

    const showLanguage = () => {
        return language === "zh" ? "中" : "zh"
    }

    const AnimatedCard = animated(Card);

    const AnimatedButton = animated(Button);

    const AnimatedTypography = animated(Typography);

    return <Box sx={{ bgcolor: 'rgba(237, 239, 241)', height: '100vh' }} padding={"15px"}>
        <Card sx={{ height: '100%', boxShadow: "2px 2px 8px rgba(128, 128, 128, 0.2)", borderRadius: "20px" }}>
            <CardHeader title={<Typography variant="h6">Aboard</Typography>}
                action={<><>{showLanguage()}</><LanguageIcon sx={{ cursor: "pointer", color: LOGO_COLOR, fontSize: "26px" }} onClick={handleLanguage} /></>
                }
                avatar={<Face2SharpIcon sx={{ color: LOGO_COLOR, fontSize: "28px" }} />}
                sx={{ height: "50px", borderBottom: "1px solid rgb(237, 239, 241)" }} />
            <CardContent sx={{ bgcolor: '#cfe8fc', textAlign: "center", paddingTop: "150px", height: '100%', backgroundImage: "linear-gradient(90deg, white, rgba(255, 183, 197, .7), rgba(173, 216, 230, .5), white)" }}>
                <Box display="flex" alignItems={"center"} flexWrap="wrap" gap={"0px"} justifyContent="space-between" width={"1000px"} margin={"auto"}>
                    {
                        LoginCard.map((item, index) => {
                            return <AnimatedCard style={setStyles(item, index)} key={index} sx={{ cursor: "pointer", display: 'flex', flexDirection: 'column', padding: "8px", width: item.width, height: item.height, boxShadow: "2px 2px 8px rgba(128, 128, 128, 0.2)", borderRadius: "10px", margin: 0 }}>
                                <CardMedia component="img" height="168px" image={item.image} alt="banner" sx={{ borderRadius: "8px", height: "60%" }} />
                                <CardContent sx={{ bgcolor: '#fff', padding: "10px 0 0 0" }}>
                                    <Typography color="#000" fontSize={item.contentFontSize} component="span">
                                        {item.content}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", padding: 0 }}>
                                    <Box>
                                        <AppleIcon sx={{ color: "text.secondary", fontSize: item.contentFontSize }} />
                                        <Typography color="text.secondary" fontSize={item.footerFontSize} component="span">
                                            {item.userName?.toUpperCase()}
                                        </Typography>
                                    </Box>

                                    <Typography color="text.secondary" fontSize={item.footerFontSize} component="span">
                                        {item.date}
                                    </Typography>
                                </CardActions>
                            </AnimatedCard>
                        })
                    }
                </Box>
                <AnimatedTypography style={useSpring({
                    opacity: 0,
                    from: { opacity: 0, transform: `translateY(-30px)`, },
                    to: { opacity: 1, transform: `translateY(20px)` },
                    config: { tension: 800, friction: 200 },
                })} marginTop="100px" fontWeight="bolder" variant="h3" align="center">{t("common:login.welcome")}</AnimatedTypography>
                <AnimatedTypography style={useSpring({
                    opacity: 0,
                    from: { opacity: 0, transform: `translateY(-60px)`, },
                    to: { opacity: 1, transform: `translateY(0px)` },
                    config: { tension: 1000, friction: 300 },
                })} marginTop="30px" variant="body2" align="center">{t("common:login.description")}</AnimatedTypography>
                <AnimatedButton style={useSpring({
                    opacity: 0,
                    from: { opacity: 0, transform: `translateY(60px)`, },
                    to: { opacity: 1, transform: `translateY(0px)` },
                    config: { tension: 2000, friction: 400 },
                })} variant="contained" sx={{ width: "200px", marginTop: "30px", borderRadius: "30px" }} disableElevation onClick={handleLogin}>{t("common:login.goTo")}</AnimatedButton>
            </CardContent>
        </Card>
    </Box>
}

export default Login;