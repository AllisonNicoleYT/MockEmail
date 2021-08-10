import './Home.css';

//pulls in default values from app.js
function Home(props) {
    
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

    return (
      <div className='header__user'>
          <h2>
              {props.name}
          </h2>
          <div className='header__email'>
              {props.email}
          </div>
          <div className='header__date'>
            {/*props.date.toISOString()*/}
            <div>{month} {day}, {year}</div>            
          </div>
      </div>
    );
  }
  
  export default Home;
  