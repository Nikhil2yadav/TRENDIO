import React from 'react'
import SellerHeader from '../Components/SellerHeader/SelllerHeader'
import SellerSidedbar from '../Components/SellerDashboard/SellerSidedbar'
import { Outlet } from 'react-router-dom'
import SellerFooter from '../Components/SellerFooter/SellerFooter'

const SellerLayout = () => {
  return (
    <div className='main-container'>
        <SellerHeader/>
        <SellerSidedbar/>
        <main>
            <Outlet/>
        </main>
        <SellerFooter/>
    </div>
  )
}

export default SellerLayout
