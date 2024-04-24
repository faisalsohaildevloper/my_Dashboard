import React, { useContext, useState } from "react";
import { Button, Col, Drawer, Row } from "antd";
import Siderbar from "./Siderbar";
import TopHeader from "./TopHeader";
import { authContext } from "../../context/auth.context";
import {  redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// layout play a role of main display of this project 

const Layout = ({ children }) => {

  const [auth,setAuth] = useContext(authContext)

 const router2 = useNavigate();
 

 useEffect(()=>{
  if(!auth?.token){
    return router2('/')
   
  }
 },[])


 const router = () => {
  router2('/')
 }


  const [mobileSiderbar,setMobileSiderbar]=useState(false)


  return (
    <>
      {/* // md = 8, large-8 larger 8
// sm = ?
// xs = ?
   */}

      <Row style={{ minHeight: "100vh" }}>
        <Col md={4} xs={0} className="sidebar">
          <div className="logo">
            <h3>Faisal Khan Surma</h3>
          </div>
          <Siderbar />
        </Col>

        <Col md={16} xs={24} className="rightSide">
          <TopHeader setMobileSiderbar={setMobileSiderbar}/>

          
          {children}
        </Col>

        <Col md={4} xs={0} className="sidebar">
          <div className="logo">
          <Button onClick={()=> router()}>logout</Button>
            <Siderbar />
          </div>
        
        </Col>
      </Row>

      <div className="d-block d-md-none">
        <Drawer title="Basic Drawer" placement="left" onClose={()=> setMobileSiderbar(false)} open={mobileSiderbar}>
          <Siderbar/>
        </Drawer>
      </div>
      
    </>
  );
};

export default Layout;
