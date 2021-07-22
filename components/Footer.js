import Image from 'next/image'
import walshs3 from '../public/walshs3.jpg'

const Footer = () => {
    

    return ( 
        <div className="h-4 w-full">
            <Image src={walshs3} layout='responsive'/>
        </div>
     );
}
 
export default Footer;