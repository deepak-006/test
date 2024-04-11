import React from "react";
import styles from "./TnC.module.css";
import Home from "./Home";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Link className={styles.Back} to="/home">
          Back
        </Link>
        <h2 className={styles.sectionTitle}>Terms and Conditions</h2>
        <p>
          These terms and conditions ("Terms") govern your use of QandA, owned
          and operated by QandA Pvt. Ltd. By using the App, you agree to be
          bound by these Terms. If you do not agree to these Terms, please
          refrain from using the App.
        </p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>1. Acceptance of Terms</h3>
        <ul>
          <li className={styles.listItem}>
            By accessing or using the App, you agree to these Terms, as well as
            any additional terms and conditions that may apply to specific
            features or services within the App.
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          2. User Rights and Responsibilities
        </h3>
        <ul>
          <li className={styles.listItem}>
            You must be 12 years or older to use the App.
          </li>
          <li className={styles.listItem}>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </li>
          <li className={styles.listItem}>
            You agree to provide accurate and up-to-date information when using
            the App.
          </li>
          <li className={styles.listItem}>
            You agree not to use the App for any unlawful or prohibited purpose.
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>3. Privacy Policy</h3>
        <p>
          Your privacy is important to us. Please review our Privacy Policy{" "}
          <span className={styles.link}>[link to Privacy Policy]</span>, which
          governs how we collect, use, and disclose your personal information
          when you use the App.
        </p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>4. Intellectual Property</h3>
        <p>
          All content and materials available on the App, including but not
          limited to text, graphics, logos, images, and software, are the
          property of the Company or its licensors and are protected by
          copyright and other intellectual property laws.
        </p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>5. Content Guidelines</h3>
        <ul>
          <li className={styles.listItem}>
            You agree not to upload, post, or transmit any content that:
            <ul>
              <li className={styles.listItem}>
                Infringes upon the rights of others.
              </li>
              <li className={styles.listItem}>
                Is unlawful, harmful, threatening, abusive, harassing,
                defamatory, vulgar, obscene, or otherwise objectionable.
              </li>
              <li className={styles.listItem}>
                Contains viruses or other harmful components.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>6. Limitation of Liability</h3>
        <p>
          To the fullest extent permitted by applicable law, the Company shall
          not be liable for any direct, indirect, incidental, special,
          consequential, or punitive damages arising out of or in any way
          connected with your use of the App.
        </p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>7. Governing Law</h3>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India, without regard to its conflict of law provisions.
        </p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>8. Changes to Terms</h3>
        <p>
          The Company reserves the right to modify or update these Terms at any
          time without prior notice. Your continued use of the App after any
          changes indicates your acceptance of the updated Terms.
        </p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>9. Contact Us</h3>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at qanda@gmail.com
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
