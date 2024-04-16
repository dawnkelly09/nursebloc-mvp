import Image from 'next/image';
import Link from 'next/link';
import NurseBlocHoriz from '../../public/shared/nursebloc-logo-horiz.svg'
import TG from '../../public/icons/tg-purple.svg'
import Insta from '../../public/icons/insta-purple.svg'
import Twitter from '../../public/icons/twitter-purple.svg'
import styles from '../../app/globals.css'

export default function Navigation(){

    return (
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid nav-logo">
            <Link href="/" passHref legacyBehavior>
              <Image priority src={NurseBlocHoriz} alt="Nursebloc" height="80"/>
            </Link>
            <div>
              <Link href="" className='icons-row'>
                <Image priority src={TG} height={20} alt="telegram"/>
              </Link>
              <Link href="" className='icons-row'>
                <Image priority src={Insta} height={20} alt="instagram"/> 
              </Link>
              <Link href="" className='icons-row'>
                <Image priority src={Twitter} height={20} alt="Twitter aka X"/>
              </Link>
            </div>
            <div>
              <Link href="" className='links-row'>About</Link>
              <Link href="" className='links-row'>Plans</Link>
              <Link href="" className='links-row'>Membership</Link>
              <Link href="" className='links-row'>Nurses</Link>
            </div>
          </div>
        </nav>
      );
}