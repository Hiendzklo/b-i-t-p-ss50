import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Bt1 from './components/Bt1'
import Bt2 from './components/Bt2'
import Bt3va4 from './components/Bt3va4'
import Login from './components/Bt5+6/Login'
import PrivateRouter from './components/Bt5+6/PrivateRouter'
import Account from './components/Bt5+6/Account'
import Teams from './components/Bt7/Teams'
import TeamsIndex from './components/Bt7/TeamsIndex'
import Team from './components/Bt7/Team'
import PrivateRouter2 from './components/Bt8/PrivateRouter2'
import AdminIndex from './components/Bt8/AdminIndex'
import Account2 from './components/Bt8/Account2'
import Product from './components/Bt8/Product'
import Order from './components/Bt8/Order'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/product/:id" element={<Bt1/>}></Route>
        <Route path="/student/:name" element={<Bt2 />} />
        <Route path="/employee" element={<Bt3va4 />} />

        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<PrivateRouter />}>
          <Route path="/account" element={<Account />} />
        </Route>

        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>

        <Route path="/admin" element={<PrivateRouter2 />}>
          <Route index element={<AdminIndex />} />
          <Route path="account" element={<Account2 />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  )
}
