import React from 'react';
import Payments from '../../My_Payments.json';

class DataBudget extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>Budget</h1>
                {Payments.map((paymentsDetail, index) => {
                    return <h2>{paymentsDetail.properties.montant}</h2>
                })}

            </React.Fragment>
        )
    }
}
export default DataBudget;
