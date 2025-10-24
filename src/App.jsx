import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import CardSwap, { Card } from "./Components/Navbar/Hero";
import image1 from './assets/poza-cnch.jpeg'

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      
      <div style={{ height: '800px', position: 'relative', marginTop: '-200px' }}>
        <CardSwap
          width={700}
          height={550}
          cardDistance={80}
          verticalDistance={90}
          delay={5000}
          pauseOnHover={false}
        >
          <Card style={{ background: '#1a1a1a', padding: '60px', color: '#fff', fontSize: '18px' }}>
            <img src={image1} alt="Card 1" />
          </Card>
          <Card style={{ background: '#2a2a2a', padding: '60px', color: '#fff', fontSize: '18px' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card style={{ background: '#3a3a3a', padding: '60px', color: '#fff', fontSize: '18px' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </div>
  )
}

export default App;