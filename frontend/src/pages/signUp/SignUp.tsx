import { useMutation } from '@apollo/client';
import { Apple, Google } from '@mui/icons-material'
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import { CREATE_USER } from '../../mutations/users';
import styles from './SignUp.module.css'

interface User {
  createUser: DataValue
}
interface DataValue {
   id: number;
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  phoneNumber: string;
  createdAt: string
}
   interface InputData {
     firstname: string;
     lastname: string;
     email: string;
     country: string;
     phoneNumber: string;
     password: string
   }

const SignUp = () => {
    
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [createUser, {data, error} ] = useMutation(CREATE_USER);

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(firstname === '' || lastname === '' || email === '' || country === ''|| phoneNumber === '' || password === '' || confirmPassword === ''){
      alert('please fill in all fields')
    }
    if(password !== confirmPassword){
      alert('passwords do not match')
    }
    createUser({
    variables: {firstname, lastname, email, country, phoneNumber, password}
  })
  // if(error){ 
  //   console.log(error)
  // }

  //sessionStorage.setItem("token", data?.createUser.token)

  console.log( data?.createUser)
    // setFirstname('')
    // setLastname('')
    // setEmail('')
    // setCountry('')
    // setPhoneNumber('')
    // setPassword('')
    // setConfirmPassword('')
  }

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
            <p>Already a member? <span>Sign in</span></p>
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
              <div className={styles.groupPair}>
                <div className={styles.formGroup}>
                  <span>FirstName</span>
                  <input 
                    type="text" 
                    placeholder='your first name'
                    value={firstname} 
                    onChange={(e)=>setFirstname(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <span>LastName</span>
                  <input 
                    type="text" 
                    placeholder='your last name'
                    value={lastname} 
                    onChange={(e)=>setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <span>Email Address</span>
                <input 
                  type="email" 
                  placeholder='your email' 
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <span>Country</span>
                <input 
                  type="text" 
                  placeholder='your country'
                  value={country} 
                  onChange={(e)=>setCountry(e.target.value)}
                />
              </div>
              <div className={styles.groupPair}>
                <div className={styles.formGroup}>
                  <span>Password</span>
                  <input 
                  type="password" 
                  placeholder='your password'
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <span>Confirm Password</span>
                  <input 
                    type="password" 
                    placeholder='confirm password'
                    value={confirmPassword} 
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <span>Phone Number</span>
                <input 
                  type="text" 
                  placeholder='your country'
                  value={phoneNumber}
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                />
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" name="" id="" />
                <p>By registering, you agree with our <span>Terms, Privacy and policy</span></p>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" name="" id="" />
                <p>Sign up for early sale access plus tailored arrivals and promotions</p>
              </div>
              <button type='submit' className={styles.formButton} onClick={(e) => handleSubmit(e)}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp