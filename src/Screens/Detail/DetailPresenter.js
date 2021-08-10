import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Detail from "../../Components/Detail";

const DetailPresenter = ({ loading, coinDetail }) =>
    loading ? (
        <Loader />
    ) : (
        <Detail detail={coinDetail} />

    );

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,

};

export default DetailPresenter;
