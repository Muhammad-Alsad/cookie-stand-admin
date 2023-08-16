import Head from "next/head";
import Header from "@/components/Header";
import Form from '@/components/Form';
import Table from '@/components/Table';
import Footer from '@/components/Footer';
import React, { useState } from 'react';


export default function Home() {
  const [reports, setReports] = useState([]);

  function addReport(newReport) {
    setReports([...reports, newReport]);
  }


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header/>
      <main className="flex-grow p-12 flex flex-col items-center space-y-8">



        <Form onCreate={addReport} />
        <Table reports={reports} />
        


      </main>
      <Footer/>

    </div>
  );
}



