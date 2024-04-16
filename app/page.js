import Image from "next/image";
import styles from "./globals.css"
import nurseheart from '../public/homePage/nurse-heart.svg'

const imageStyle = {
  borderRadius: '12px',
}

export default function Home() {
  return (
    <main className="main">
      <section className="heroSection">
        <div className="leftCol">
          <h1>Medical care simplified for everyone</h1>
          <p>Personalized care delivered in your home from nurses in your community</p>
          <div className="waitlistBox">
            <h2>Join the Waitlist</h2>
            <div>
              <button className="button">Nurses</button>
              <button className="buttonPurple">Patients</button>
            </div>
          </div>
        </div>
        <div className="rightCol">
          <div className="heroImage">
            <Image 
              src={nurseheart} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              alt="smiling nurse with hands in a heart shape" 
              style={imageStyle}
            />
          </div>
        </div>
      </section>
      <section className="featuresSection">

      </section>
      
    </main>
  );
}
