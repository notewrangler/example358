import React, { Component } from 'react';

export default class Block1 extends Component {
    render() {
        let block1Style = {
            width: "100%",
            padding: "20px",
            fontFamily: "Arial",
            paddingTop: '60px'
        }
        return (
            <div style={block1Style}>
                <h1>Sardi's/Hardee's Estates</h1>
                <p>Located in sunny Las Vegas, Nevada, in select neighborhoods, these beautiful gated communities feature
                 spacious 2-story apartments with convenient parking, modern or salvaged appliances,
                    community swimming pools (not available at all locations), and lush, verdant landscaping commensurate with credit scores.
                </p>
                <p>Prices range from $2k/mo and up, or $125/wk and up, depending on location <strong><em>(Management not
                responsible for damages caused by squatters on Hardees premises. Vermin control at extra cost)
                </em></strong></p>

            </div>
        )
    }
}
