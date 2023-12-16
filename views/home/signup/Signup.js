// Filename: SignupContainer.jsx
import React from "react";
import styles from "./Signup.module.css"; // Importing the CSS module
import {
  ArrowRightIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  MinusIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Signup = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   // Yahan aap form data ko handle kar sakte hain
  //   console.log(data);
  // };

  return (
    <section className={styles.signupContainer}>
      <div className={styles.signupContent}>
        <div className={styles.header}>
          <div className={styles.branding}>
            <Image
              width={316}
              height={67}
              src="/logo.svg"
              alt="eReferrals Logo"
            />
          </div>
          <span className={styles.divider}></span>
          <div className={styles.signupSection}>
            <p>Sign up for</p>
            <p>BETA VERSION</p>
          </div>
        </div>
        <div className={styles.toggleButtons}>
          <button
            className={`${styles.toggleBtn} ${styles.active}`}
            aria-pressed="true"
          >
            For Practitioners
          </button>
          <button className={styles.toggleBtn} aria-pressed="false">
            For Patients
          </button>
        </div>
        <div className={styles.container}>
          <form className={styles.signupForm}>
            <div className={styles.inputGroup}>
              <div className={styles.inputContainer}>
                <UserIcon className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputContainer}>
                <PhoneIcon className={styles.inputIcon} />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputContainer}>
                <EnvelopeIcon className={styles.inputIcon} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={styles.formFooter}>
              <div className={styles.consent}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  // {...register("consent", { required: true })}
                />
                <label htmlFor="consent">
                  I agree with the storage & processing of my personal data
                </label>
              </div>
              <div className={styles.links}>
                <Link className={styles.link} href="/">
                  Terms
                </Link>
                <span>|</span>
                <Link className={styles.link} href="/">
                  Privacy
                </Link>
              </div>
              <button type="submit" className={`${styles.submitButton}`}>
                Get Started <ChevronRightIcon className="btn-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
