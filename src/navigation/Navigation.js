import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Partner from '../components/Partner/Partner'
import PartnerUser from '../components/Partneruser/PartnerUser'
import Games from '../components/Games/Games'
import PartnerGames from '../components/Partnergames/PartnerGames'
import GameReport from '../components/GameReport/GameReport'
import PlayerReport from '../components/PlayerReport/PlayerReport'
import SupplierReport from '../components/SupplierReport/SupplierReport'
import SummaryReport from '../components/SummaryReport/SummaryReport'
export default function navigation() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/partnerusers" element={<PartnerUser />} />
          <Route path="/games" element={<Games />} />
          <Route path="/partnergames" element={<PartnerGames />} />
          <Route path="/gamesreport" element={<GameReport/>} />
          <Route path="/playerreport" element={<PlayerReport/>} />
          <Route path="/supplierreport" element={<SupplierReport/>} />
          <Route path="/summaryreport" element={<SummaryReport/>} />
          
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}
