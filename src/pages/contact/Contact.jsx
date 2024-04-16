import React from "react";
import './Contact.scss'

const Contact = () => {
  return (
    <div>
      <div class="contact-bgImg-container">


        <main class="contact">
          <h2>Contact Me ...</h2>
          <div class="contact__list">
            <div class="contact__item">
              <i class="fas fa-envelope"></i> Email
              <div class="text-secondary">wednesday@nevermoreacademy.edu</div>
            </div>
            <div class="contact__item">
              <i class="fas fa-mobile-alt"></i> Phone
              <div class="text-secondary">+40 (571) 360-1234</div>
            </div>
            <div class="contact__item">
              <i class="fas fa-map-marker-alt"></i> Address
              <div class="text-secondary">
                Strada Zamorei 1, Bușteni 105500, Romania
              </div>
            </div>
          </div>
        </main>

        <footer class="middle">
          <div class="social-icons">
            <a href="#twitter">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#facebook">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#instagram">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#github">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div class="copyright">&copy; Copyright 2023</div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
