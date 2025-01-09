import React from 'react'

const About = () => {
  return (
    
     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>About Us</h1>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "justify" }}>
        <p>
          Welcome to <strong>EasyDrop</strong>, your trusted source for high-quality homemade products! 
          We are a platform dedicated to bringing you the freshest and most natural products, directly from local farmers, artisans, and homemakers. 
        </p>
        <h2 style={{ marginTop: "20px", color: "#34495e" }}>Our Mission</h2>
        <p>
          At EasyDrop, we believe in the power of sustainability and supporting local communities. 
          Our mission is to connect buyers with local producers to ensure that everyone has access to fresh, homemade, and organic products.
          By choosing EasyDrop, you're not just purchasing items—you’re supporting families, small businesses, and a healthier planet.
        </p>
        <h2 style={{ marginTop: "20px", color: "#34495e" }}>What We Offer</h2>
        <ul style={{ marginLeft: "20px" }}>
          <li><strong>Dairy:</strong> Fresh milk, homemade butter, creamy yogurt, and organic cheese.</li>
          <li><strong>Poultry:</strong> Free-range eggs and fresh poultry products from trusted local farmers.</li>
          <li><strong>Vegetables:</strong> Organically grown, seasonal vegetables straight from the farm.</li>
          <li><strong>Fruits:</strong> Handpicked, naturally ripened fruits bursting with flavor.</li>
          <li><strong>Meat:</strong> Ethically sourced, fresh cuts of meat for your family meals.</li>
        </ul>
        <h2 style={{ marginTop: "20px", color: "#34495e" }}>Why Choose Us?</h2>
        <p>
          When you shop with EasyDrop, you are:
        </p>
        <ul style={{ marginLeft: "20px" }}>
          <li>Getting products that are fresh, homemade, and preservative-free.</li>
          <li>Supporting local farmers and homemakers in your community.</li>
          <li>Making a positive impact on the environment by reducing the carbon footprint.</li>
        </ul>
        <h2 style={{ marginTop: "20px", color: "#34495e" }}>Join Us!</h2>
        <p>
          Whether you're looking for the best homemade products or want to showcase your own, EasyDrop is the perfect place for you. 
          Let’s work together to promote health, sustainability, and community growth.
        </p>
        <p style={{ marginTop: "20px", textAlign: "center", fontStyle: "italic" }}>
          "From our nest to yours—bringing freshness home."
        </p>
      </div>
    </div>
   

  )
}

export default About;