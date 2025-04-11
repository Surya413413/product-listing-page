import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    // const userDetails = {username: 'surya', password: 'surya@2024'}
    // const url = 'https://dummyjson.com/c/6cbf-e4f3-4fa4-82ca'

    // https://jsonplaceholder.typicode.com/posts

    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(userDetails),
    // }
    // const response = await fetch(url, options)
    // const data = await response.json()

    // if (response.ok === true) {
    //   this.onSubmitSuccess(data.jwt_token)
    // } else {
    //   this.onSubmitFailure(data.error_msg)
    // }
    const {username, password} = this.state

    // Hardcoded credentials
    const hardcodedUsername = 'surya'
    const hardcodedPassword = 'surya@2024'

    if (username === hardcodedUsername && password === hardcodedPassword) {
      const fakeJwtToken = 'fake-jwt-token-123456'
      this.onSubmitSuccess(fakeJwtToken)
    } else {
      this.onSubmitFailure('Invalid username or password')
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzz-Clbxd_HVzN4D6lnQZbRvo3ujaKc9Yd3g&s"
          className="login-website-logo-mobile-img"
          alt="website logo"
        /> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzz-Clbxd_HVzN4D6lnQZbRvo3ujaKc9Yd3g&s"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="logo-heading">LOGIN PAGE</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginPage
