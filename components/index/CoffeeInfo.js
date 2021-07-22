import Image from 'next/image'
import walshsCoffee from '../../public/walshs-coffee.png'
import toucan from '../../public/coffee-toucan.svg'
import ScrollTrigger from 'react-scroll-trigger';

const CoffeeInfo = () => {

    const onEnterViewport = () =>{
        const toucan = document.querySelector('#toucan')
        toucan.classList.toggle("translate-x-full")
    }

    const onExitViewport = () =>{
        const toucan = document.querySelector('#toucan')
        toucan.classList.toggle("translate-x-full")
    }


    return ( 

        <section className="relative w-full h-1/3 flex items-center">     
            <div className="relative w-1/2 ml-16 md:w-1/3 flex">
                <div className="w-full">
                    <Image src={walshsCoffee} alt="Man with coffee" layout="responsive"/>
                </div>
                <div className="w-1/2 absolute right-2 md:right-6 transition duration-3500 ease-in-out" id="toucan">
                    <Image src={toucan} alt="Toucan stealing coffee" layout="responsive"/>
                </div>
                <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}/>
            </div>
        </section>

     );
}
 
export default CoffeeInfo;