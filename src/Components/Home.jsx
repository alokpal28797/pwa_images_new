import { Card, Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgAction from "../Redux/Action/imgAction";
import styles from './index.module.scss'
const Home = ({ integrationsAccountCards }) => {
  const logoData = integrationsAccountCards?.integrationsAccountCards;

  
  return (
    <>
      <h4 className="mx-5 mt-3 mb-3">Here we have some images.........</h4>
      <div className="mx-5">
        <Row>
          {logoData?.map((data, i) => {
            return (
              <Col key={i} sm={12} xs={24} md={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<div className={styles[`${data.logoClass}`]}/>}
                >
                  {data?.title}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Home;
