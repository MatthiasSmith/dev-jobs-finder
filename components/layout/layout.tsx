import React from 'react';
import Head from 'next/head';

import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({
  children,
  pageTitle,
  headerChildren,
  footerChildren,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  headerChildren?: React.ReactNode;
  footerChildren?: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>devjobsfinder {pageTitle ? `| ${pageTitle}` : ''}</title>
      </Head>
      <Header>{headerChildren ? headerChildren : null}</Header>
      <main>{children}</main>
      <Footer>{footerChildren ? footerChildren : null}</Footer>
    </>
  );
};

export default Layout;
