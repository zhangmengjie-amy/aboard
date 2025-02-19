'use client'; // 启用客户端渲染
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageProvider } from '@app/context/LanguageContext';
import { HighchartsProvider } from '@app/context/HighchartsContext';

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/pages/login'); // 自动跳转到登录页面
  }, [router]);

  return null;
};

const Page = () => {
  return (
    <HomeRedirect />
  );
};

export default Page;


