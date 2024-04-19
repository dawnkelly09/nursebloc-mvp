import Image from "next/image";
import Link from 'next/link';
import styles from "./globals.css"
import nurseheart from '../public/homePage/nurse-heart.svg'
import chatbubble from '../public/icons/ChatBubbles.svg'
import door from '../public/icons/door-icon.svg'
import rtarrow from '../public/icons/right-arrow-icon.svg'
import paper from '../public/icons/paper.svg'

const imageStyle = {
  borderRadius: '12px',
}

export default function Home() {
  return (
    <main>
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
          <div >
            <Image 
              src={nurseheart} 
              alt="smiling nurse with hands in a heart shape" 
              style={imageStyle}
              width={500}
              height={500}
              className="heroImage"
              priority
            />
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div className="feature-heading">
          <h1 className="h1-primary-color">Changing the way you manage your health care</h1>
        </div>
        <div className="feature-container">
          <div className="feature">
            <Image 
              src={chatbubble}
              width='97'
              height='60'
              alt='chat bubbles icon'
            />
            <span>Online consultations with your nurse</span>
            <div className="icon-link-container">
              <Link href="" className="small-link">
                Learn More 
                <Image 
                  src={rtarrow}
                  width='12'
                  height=''
                  alt=''
                  className="arrow-icon"
                />
              </Link>
            </div>
          </div>

          <div className="feature">
            <Image 
              src={door}
              width='48'
              height='60'
              alt='open door icon'
            />
            <span>Healthcare delivered in your home</span>
            <div className="icon-link-container">
              <Link href="" className="small-link">
                Learn More 
                <Image 
                  src={rtarrow}
                  width='12'
                  height=''
                  alt=''
                  className="arrow-icon"
                />
              </Link>
            </div>
          </div>

          <div className="feature">
            <Image 
              src={paper}
              width='65'
              height='60'
              alt='paper icon'
            />
            <span>Digital medical records</span>
            <div className="icon-link-container">
              <Link href="" className="small-link">
                Learn More 
                <Image 
                  src={rtarrow}
                  width='12'
                  height=''
                  alt=''
                  className="arrow-icon"
                />
              </Link>
            </div>
          </div>

        </div>

      </section>
      
    </main>
  );
}
