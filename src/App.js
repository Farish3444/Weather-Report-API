import './App.css';
import WeatherForm from './components/WeatherForm'
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
        <h1>Weather Reports</h1>
        <WeatherForm />
        <LoginForm />
    </div>
  );
}

export default App;