import React, { ReactNode } from "react";
import Head from "next/head";
import LayoutHeader from "./LayoutHeader";

type Props = {
  title: string;
  children: ReactNode;
};

function Layout(props: Props) {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Head>
        <title>{props.title}</title>
      </Head>
      <LayoutHeader />
      <main className="flex-1 p-4 lg:container lg:m-auto lg:flex lg:gap-4">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
