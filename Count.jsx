import './Count.css';
import { useEffect , useState } from 'react';


const Count = () => {

  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const countdown = () =>{
      const launchDate = new Date ('2025-12-31T00:00:00')
      const now = new Date();
      const diff = launchDate - now ;

      if(diff <= 0){
        clearInterval(timer)
        setTime({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        })
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({
        days:String(days).padStart(2 ,'0'),
        hours:String(hours).padStart(2, '0'),
        minutes:String(minutes).padStart(2, '0'),
        seconds:String(seconds).padStart(2, '0'),
      })



    }

    const timer = setInterval(countdown , 1000)
    countdown()

    return () => clearInterval(timer) 


  }, [])




  return(
    <div className='count'>
      <div className='count-up'>
        <h2>We're launching soon</h2>
        <div className='count-num'>
          <div className='number'>
            <div className='num'>
              <span className="line"></span>
              <h1 className='days'>{time.days}</h1>
            </div>
            <span className='mmm'>Days</span>
          </div>
          <div className='number'>
            <div className='num'>
              <span className="line"></span>
              <h1 className='hours'>{time.hours}</h1>
            </div>
            <span className='mmm'>Hours</span>
          </div>
          <div className='number'>
            <div className='num'>
              <span className="line"></span>
              <h1 className='minutes'>{time.minutes}</h1>
            </div>
            <span className='mmm'>Minutes</span>
          </div>
          <div className='number'>
            <div className='num'>
              <span className="line"></span>
              <h1 className='seconds'>{time.seconds}</h1>
            </div>
            <span className='mmm'>Seconds</span>
          </div>
        </div>
        <div className="icons">
          <img src="./images/icon-facebook.svg" alt="" />
          <img src="./images/icon-pinterest.svg" alt="" />
          <img src="./images/icon-instagram.svg" alt="" />
        </div>
      </div>
    </div>
  )
}




export default Count;