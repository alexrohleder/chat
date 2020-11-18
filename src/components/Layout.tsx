import React, { ReactNode } from "react";
import Head from "next/head";
import LayoutHeader from "./LayoutHeader";

type Props = {
  title: string;
  children: ReactNode;
};

function Layout(props: Props) {
  return (
    <div className="flex flex-col bg-gray-100 h-screen">
      <Head>
        <title>{props.title}</title>
      </Head>
      <LayoutHeader />
      <main className="flex-1 lg:container m-auto p-4">{props.children}</main>
    </div>
  );
}

export default Layout;
