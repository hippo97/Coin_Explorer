import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { getMarketList } from "../api";
import Loader from "./Loader";

const Section = styled.div`
  margin-bottom: 10px;
`;

const SLink = styled.a`
  text-decoration: underline;
`;

const MarketName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export default class extends React.Component {
    state = {
        loading: true,
        marketList: null
    };

    getMarket = async (id) => {
        try {
            const { data: marketList } = await getMarketList(id);
            this.setState({ marketList });
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
        this.getMarket(id);
    }

    render() {
        return this.state.loading ? (
            <Loader />
        ) : (
            this.state.marketList &&
            this.state.marketList.length > 0 &&
            this.state.marketList.map((market) => (
                <Section>
                    <MarketName>
                        <SLink href={market.market_url}>{market.exchange_name}</SLink>
                    </MarketName>
                </Section>
            ))
        );
    }
}
