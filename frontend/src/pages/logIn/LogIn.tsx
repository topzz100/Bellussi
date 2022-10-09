import { useMutation } from '@apollo/client'
import { Apple, Google } from '@mui/icons-material'
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { LOGIN_USER } from '../../mutations/users'
import styles from './LogIn.module.css'


const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, {data, error} ] = useMutation(LOGIN_USER, {
    variables: {email, password}
  });

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(email === '' || password === ''){
      alert('please fill in all fields')
    }
 
    login()
  console.log(data)
  // sessionStorage.setItem("token", data?.createUser.token)
  console.log(error)

  }
  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   console.log(email, password)
  // }

  return (
    <div className={styles.signUp}>
      <Navbar/>
      <div className={styles.wrapper}>
        {/* left */}
        <div className={styles.left}>
          <img src="/images/two.webp" alt="" />
        </div>
        {/* right */}
        <div className={styles.right}>
          <div className={styles.top}>
            <p>Dont have an Account yet? <span>Sign up</span></p>
          </div>
          <div className={styles.formContainer}>
            <h3 className={styles.title}>Create an Account</h3>
            <div className={styles.signUpOptions}>
              <button className={styles.appleButton}>
                <Apple style={{fontSize: '1rem'}}/>
                <p>Sign up with Apple</p>
              </button>
              <span className={styles.option}>
                <Google style={{fontSize: '1rem', color: 'red' }}/>
              </span>
            </div>  
            <div className={styles.horizontal}>
              <div className={styles.divider}></div>
              <span>Or</span>
              <div className={styles.divider}></div>
            </div>
            <form className={styles.formWrapper} >
              <div className={styles.formGroup}>
                <span>Email Address</span>
                <input 
                  type="email" 
                  placeholder='your email'
                  value={email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <span>Password</span>
                <input 
                  type="password" 
                  placeholder='your password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <p className={styles.forget}>Forget password?</p>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" name="" id="" />
                <p>Keep me signed in</p>
              </div>
              <button type='submit' className={styles.formButton} onClick={handleSubmit}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn