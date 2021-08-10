import './Home.css';

//pulls in default values from app.js
function Home(props) {
    return (
      <div className='header__user'>
          <h2>
              {props.name}
          </h2>
          <div className='header__email'>
              {props.email}
          </div>
          <div className='header__date'>
            {props.date.toISOString()}
          </div>
      </div>
    );
  }
  
  export default Home;
  