import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";

import { getExchangeList } from "../api";

const Section = styled.div`
    margin-bottom:25px;
`;

const CoinName = styled.p`
    height:25px;
    font-weight:600;
    font-size:20px;
`;

const PayOn = styled.span`
    font-weight:500;
`;

export default class extends React.Component {
    state = {
        loading: true,
        exchangeList: null
    };

    getExchange = async (id) => {
        try {
            const { data: exchangeList } = await getExchangeList(id);
            this.setState({ exchangeList });
            console.log(exchangeList);
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false });
        }
    };
    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        this.getExchange(id);
    }

    render() {
        return (
            this.state.loading ? (
                <Loader />
            ) : (
                this.state.exchangeList.map((exchange) => (
                    <Section>
                        {exchange.fiats && exchange.fiats.length > 0 ?
                            (
                                <>
                                    <CoinName>{exchange.name}</CoinName>
                                    < PayOn > Pay On </PayOn >
                                </>
                            ) : null
                        }
                        {exchange.fiats && exchange.fiats.length > 0 && exchange.fiats.map((money) => <PayOn>{money.symbol} </PayOn>)}
                    </Section>
                ))

            )
        );
    }
}
