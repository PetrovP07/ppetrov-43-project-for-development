import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { calculateRoutes } from "../../actions";

import GeneralOptions from "./generalOptions/GeneralOptions";
import ShipOptions from "./shipOptions/ShipOptions";
import CharacterOptions from "./characterOptions/CharacterOptions";
import ResultList from "./resultList/ResultList";

import "./TradeRoutes.scss";

function TradeRoutes(props) {
    const formGeneralOptions = useRef();

    const onClickHandler = (e) => {
        e.preventDefault();
        // formGeneralOptions.current.onSubmitHandler();
        console.log(formGeneralOptions.current);
        props.calculateRoutes();
    };

    return (
        <div className="TradeRoutes">
            <div className="container">
                <div>
                    <GeneralOptions ref={formGeneralOptions} />
                    <ShipOptions />
                    <CharacterOptions />
                    <button onClick={onClickHandler}>Calculate Routes</button>
                </div>
                <ResultList />
            </div>
        </div>
    );
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//         isValid:
//             state.placeParams.startingOptions?.isValid &&
//             state.placeParams.endingOptions?.isValid,
//     };
// };
export default connect(null, { calculateRoutes })(TradeRoutes);
