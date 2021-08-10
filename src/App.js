import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

//created default values
function App() {
  const home_dummy = [
    {
      name: 'John Smith',
      email: 'jsmith@txstate.edu',
      date: new Date(2021, 7, 14),
    },
    {
      name: 'Karen Omall',
      email: 'komall@txstate.edu',
      date: new Date(2021, 6, 22),
    },
    {
    name: 'Mike Johnson',
      email: 'mjohnson@txstate.edu',
      date: new Date(2021, 7, 1),
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Home
        name={home_dummy[0].name}
        email={home_dummy[0].email}
        date={home_dummy[0].date}
      ></Home>

      <Home
        name={home_dummy[1].name}
        email={home_dummy[1].email}
        date={home_dummy[1].date}
      ></Home>

      <Home
        name={home_dummy[2].name}
        email={home_dummy[2].email}
        date={home_dummy[2].date}
      ></Home>
    </div>
  );
}

export default App;