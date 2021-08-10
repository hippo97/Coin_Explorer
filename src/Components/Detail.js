import React from "react";
import { withRouter, Link, Route } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Description = styled.span`
`;

const Info = styled.div`
margin-top:15px;
`;

const InfoTitle = styled.span`
    font-weight:600;
`;

const InfoText = styled.p`
`;

const Header = styled.header`
    margin-top:15px;
    margin-bottom: 30px;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin-right: 20px;
  padding: 5px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${props => (props.selected ? "white" : "black")};
  background-color: ${props => (props.selected ? "#0CECDD" : "white")};
  border: 2px solid #0CECDD;
  border-radius: 5px;
`;

const Detail = ({ detail, location: { pathname } }) => (
    <Container>
        <h1>{detail.name} / {detail.symbol}</h1>
        <Description>{detail.description}</Description>
        <Info>
            <InfoText><InfoTitle>Rank: </InfoTitle>{detail.rank}</InfoText>
            <InfoText><InfoTitle>Open Source: </InfoTitle>{`${detail.open_source}`}</InfoText>
            <InfoText><InfoTitle>Proof Type: </InfoTitle>{detail.proof_type}</InfoText>
            <InfoText><InfoTitle>Structure: </InfoTitle>{detail.org_structure}</InfoText>
        </Info>

        <Header>
            <List>
                <Item selected={pathname === `/coins/${detail.id}/markets`}>
                    <Link to={`/coins/${detail.id}/markets`}>Markets</Link>
                </Item>
                <Item selected={pathname === `/coins/${detail.id}/exchange`}>
                    <Link to={`/coins/${detail.id}/exchange`}>Exchange</Link>
                </Item>
            </List>
        </Header>


    </Container >
);

Detail.propTypes = {
    detail: PropTypes.object.isRequired
};

export default withRouter(Detail);