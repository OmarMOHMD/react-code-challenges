import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [message, setMessage] = useState('')

  const findErrors = () => {
    const errors = []

    if (!email || !password || !passwordConfirm) errors.push('All fields are required')
    if ([...email].filter(char => char === '@').length !== 1) 
    errors.push('Email must contain a @')
    if (password.length < 8) errors.push('Password must be at least 8 characters')
    if (passwordConfirm === '') errors.push('Password confirmation is required')
    if (password !== passwordConfirm) errors.push('Passwords must match')

    return errors
  }
  // preventDefault() is used to prevent the default action of the form
  // from being triggered. In this case, the default action is to refresh
  // the page. We don't want that to happen, so we use preventDefault().
  const handleSubmit = e => {
    e.preventDefault()

    const errors = findErrors()
    setMessage(errors.length ? errors.join(', ') : 'User created!')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <p>{message}</p>
      <input type='submit' value='Submit' />
    </form>
  )
}
