import React from 'react';

export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return ( 
    <section className="footer">
        <div className="wrapper">
            <p>© {year} FALAH ALKHAIR TECHNICAL SERVICES CO.</p>
        </div>
    </section>
  );
}
