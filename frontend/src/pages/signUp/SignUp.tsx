import { Apple, Google } from '@mui/icons-material'
import Navbar from '../../components/navbar/Navbar'
import styles from './SignUp.module.css'

const SignUp = () => {
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
            <form className={styles.formWrapper}>
              <div className={styles.groupPair}>
                <div className={styles.formGroup}>
                  <span>FirstName</span>
                  <input type="text" placeholder='your first name'/>
                </div>
                <div className={styles.formGroup}>
                  <span>LastName</span>
                  <input type="text" placeholder='your last name'/>
                </div>
              </div>
              <div className={styles.formGroup}>
                <span>Email Address</span>
                <input type="email" placeholder='your email'/>
              </div>
              <div className={styles.formGroup}>
                <span>Country</span>
                <input type="text" placeholder='your country'/>
              </div>
              <div className={styles.groupPair}>
                <div className={styles.formGroup}>
                  <span>Password</span>
                  <input type="password" placeholder='your password'/>
                </div>
                <div className={styles.formGroup}>
                  <span>Confirm Password</span>
                  <input type="password" placeholder='confirm password'/>
                </div>
              </div>
              <div className={styles.formGroup}>
                <span>Phone Number</span>
                <input type="number" placeholder='your country'/>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" name="" id="" />
                <p>By registering, you agree with our <span>Terms, Privacy and policy</span></p>
              </div>
              <div className={styles.checkItem}>
                <input type="checkbox" name="" id="" />
                <p>Sign up for early sale access plus tailored arrivals and promotions</p>
              </div>
              <button className={styles.formButton}>
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