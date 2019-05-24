import React, {Component} from 'react'

class Login extends Component {

    render() {
        return (
            <div className={'container'}>
                <h2>AUTHORIZATION</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="login">Login:</label>
                        <input id="login" type="email" name="login" placeholder="Email address" className="form-control"
                               required autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input id="pwd" type="password" name="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="send-button">
                        <button type="submit" className="btn btn-success" onClick={this.handleClick}>SIGN IN</button>
                    </div>
                </form>
            </div>
        );

    }

    handleClick = () => {
        alert("Login");
    }
}

export default Login