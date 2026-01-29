import React from "react";

function Footer() {
  const footerLinks = {
    Product: [
      { text: "Home", href: "#" },
      { text: "Features", href: "#" },
      { text: "Pricing", href: "#" },
    ],
    Resources: [
      { text: "Blog", href: "#" },
      { text: "Changelog", href: "#" },
      { text: "Help Centre", href: "#" },
      { text: "Community", href: "#" },
    ],
    Company: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Brand Guidelines", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "Press", href: "#" },
    ],
    Legal: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Use", href: "#" },
      { text: "Security", href: "#" },
    ],
    "Compare to": [
      { text: "ChatGPT", href: "#" },
      { text: "Perplexity", href: "#" },
      { text: "Gemini", href: "#" },
    ],
  };

  return (
    <footer className="footer">
      {/* glass container handled by CSS ::before */}
      <div className="footer-inner">
        {/* BRAND */}
        <div className="footer-brand">
          <img
            src="/Frame 249 1.svg"
            alt="Qyuro"
            className="footer-logo"
            width="72"
            height="72"
          />

          <span className="footer-name">Qyuro</span>
          <p className="footer-tagline">Tag Line goes here</p>

          <p className="footer-copy">© 2026 Qyuro AI Inc.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links-wrap">
          <div className="footer-links">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer-col">
                <h4 className="footer-col-title">{title}</h4>

                <ul className="footer-col-list">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
