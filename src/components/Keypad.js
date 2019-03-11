import React from 'react';

class Keypad extends React.Component {

    logger = () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.logger} />
            </div>
        )
    }

}

export default Keypad;