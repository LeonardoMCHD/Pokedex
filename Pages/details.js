import React from "react";
import styled from "styled-components";
import GetPokemonData from "../Utils/GetPokemonData";
const { useState, useEffect } = require("react")
import { Row, Col, Divider } from 'antd';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `;

const Image = styled.div`
    width: 600px;
    height: 600px;
    margin: 15px;
     `;

    const TileTypeMiss = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 80px;
    border-radius: 15px;
    border: 1px solid black;
    color: black;
    
    `;


export default function PokemonData() {
   
    return (
        <Wrapper>
           <Row>
      <Col span={12}>col-12</Col>
      <Divider />
      <Col span={12}>col-12</Col>
    </Row>
        </Wrapper>
    );
    }