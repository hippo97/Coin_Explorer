import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Ranking = styled.span`
  font-weight: 600;
`;

const SLink = styled(Link)`
    text-decoration:underline;
`;

const Coin = ({ id, name, symbol, rank }) => (
    <Container>
        <SLink to={`coins/${id}`}><Ranking>#{rank}</Ranking> {name}/{symbol} ➔</SLink>
    </Container >
);

Coin.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
};

export default Coin;