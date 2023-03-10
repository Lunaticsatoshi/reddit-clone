import { FC, ReactNode, useEffect } from 'react';
import Head from 'next/head';

import {
  AuthModalContextProvider,
  DirectoryContextProvider,
} from 'src/contexts';

import Navbar from '../navigation/Navbar';

type LayoutProps = {
  title: string;
  description?: string;
  keywords?: string;
  children: JSX.Element | ReactNode;
};

const Layout: FC<LayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <DirectoryContextProvider>
        <AuthModalContextProvider>
          <div className="relative">
            <Navbar />
            <div className="main-content flex flex-col h-screen bg-gray-100 dark:bg-black-900">
              {children}
            </div>
          </div>
        </AuthModalContextProvider>
      </DirectoryContextProvider>
    </>
  );
};

Layout.defaultProps = {
  title: 'Reddit',
  description: 'A blogging platform for developers',
  keywords: 'social media, youtuber, social media influencer',
};

export default Layout;
