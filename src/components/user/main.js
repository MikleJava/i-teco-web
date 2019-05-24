import React, {Component} from 'react'

class Main extends Component {

    state = {
        isLoggedIn: false
    };

    render() {

        const logout = this.state.isLoggedIn &&
            <div className="sign-out-button text-center">
                <button type="submit" className="btn btn-outline-danger btn-lg" onClick={this.handleClickSignOut}>SIGN OUT</button>
            </div>;

        return (
            <div className={'init-buttons'}>
                <div className="sign-in-button text-center">
                    <button type="submit" className="btn btn-outline-success btn-lg " onClick={this.handleClickSignIn}>SIGN IN</button>
                </div>
                <div className="sign-up-button text-center">
                    <button type="submit" className="btn btn-outline-info btn-lg" onClick={this.handleClickSignIn}>SIGN UP</button>
                </div>
                {logout}
            </div>
        );

    }

    handleClickSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
    };
    handleClickSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }
}

export default Main