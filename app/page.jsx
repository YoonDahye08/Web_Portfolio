import Header from '/components/Header';

export default function Home() {
  return (
    <div>
      <Header/>
      <div>
        <p className='homehello' id='homehello1'>
          안녕하세요.
        </p>
        <p className='homehello'>
          정보보호학전공,
        </p>
        <p className='homehello'>
          윤다혜입니다.
        </p>
      </div>
      <div className='homeimg'>
        <img className='image' src='/images/joongbu.png' />
      </div>
    </div>
  )
}
