const Home = () => {
  return ( 
    <>
      <form className='search'>
        <input className='search-bar' type='text' placeholder='Type some city...' />
        <input className='search-button' type='submit' value='Search' />
      </form>
      <h1 className='title'>Weather in New York, US</h1>
      <div className='wrapper'>
        <img className='icon' src='/icons/status/sunny.svg' alt='Weather status icon' />
        <div className='info'>
          <span className='temp'>19.82°</span>
          <p className='description'>Clear Sky</p>
        </div>
      </div>
      <div className='wrapper'>
        <div className='wind'>
          <img src='/icons/wind.svg' alt='Wind icon' />
          <span>1.6 m/s</span>
        </div>
        <div className='humidity'>
          <img src='/icons/humidity.svg' alt='Humidity icon' />
          <span>65%</span>
        </div>
        <div className='pressure'>
          <img src='/icons/pressure.svg' alt='Pressure icon' />
          <span>1016</span>
        </div>
      </div>
    </>
   );
}
 
export default Home;