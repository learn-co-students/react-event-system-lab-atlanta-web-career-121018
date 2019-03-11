import React from 'react';

class EyesOnMe extends React.Component {

    focusOnMe = () => console.log('Good!')


    blurAwayFromMe = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <div>
                <button onFocus={this.focusOnMe} onBlur={this.blurAwayFromMe} ></button>
            </div>
        )
    }
}

export default EyesOnMe;