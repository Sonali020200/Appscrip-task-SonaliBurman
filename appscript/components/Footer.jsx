import styles from '../styles/Footer.module.css';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Newsletter Section */}
      <div className={styles.topSection}>
        <div className={styles.leftTop}>
          <p className={styles.newsHeading}>BE THE FIRST TO KNOW</p>
          <p className={styles.subText}>Sign up for updates from metta muse.</p>
          <div className={styles.subscribeWrapper}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.rightTop}>
          <p className={styles.sectionHeading}>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <div className={styles.currency}>
            <p className={styles.sectionHeading}>CURRENCY</p>
            <p>🇺🇸 • USD</p>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Bottom Grid Links */}
      <div className={styles.bottomLinks}>
        <div>
          <p className={styles.bottomHeading}>appscript</p>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <p className={styles.bottomHeading}>QUICK LINKS</p>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <p className={styles.bottomHeading}>FOLLOW US</p>
          <div className={styles.socialIcons}>
      <Instagram size={20} strokeWidth={1.5} />
      <Linkedin size={20} strokeWidth={1.5} />
    </div>
          <p className={styles.acceptsHeading}>appscript ACCEPTS</p>
          <div className={styles.paymentIcons}>
            <img src="/images/Group 136188.png" alt="Google Pay" />
            <img src="/images/Group 136190.png" alt="Mastercard" />
            <img src="/images/Group 136192.png" alt="PayPal" />
            <img src="/images/Group 136193.png" alt="Amex" />
            <img src="/images/Group 136194.png" alt="Apple Pay" />
            <img src="/images/Group 136195.png" alt="Shopify Pay" />
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 appscript. All rights reserved.
      </p>
    </footer>
  );
}
