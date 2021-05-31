import React,{useState} from 'react'
import '../App.css'
import './DisplayData';
import DisplayData from './DisplayData';

function WeatherForm() {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({city:'',states:''});
    const [valid, setValid] = useState(false);
    // const [message, setMessage] = useState(false);

    const handleChanges=(e)=>{
       let name = e.target.name
       let value = e.target.value

       if (name === 'states'){
           setForm({...form,states:value})
       } 
       if(name === "city"){
           setForm({...form,city:value})
       }
    };

    
    const APIKEY = '3dfb91f0e60ff809e124a78428cd8405'
    
    async function weatherData(e){
        e.preventDefault();
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.states}&APPID=${APIKEY}`)
        .then(res => res.json())
        .then((data) => data);
        
        setWeather({data:data});
        
    }
    const onSubs=(e)=>{
         e.preventDefault();
         if(form && valid){
            console.log(form)
         }
        setValid(true)
    }


    return (
        <React.Fragment className="whole">
        <div className='form'>
        <form onSubmit={onSubs}>
            <input 
                placeholder='Enter your city'
                type='text'
                name='city'
                onChange={handleChanges}
            />
            {!form.city && valid ? (<p style={{color:'red'}}>enter city name</p>):(null)}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input 
                placeholder=' Enter state or Country'
                type='text'
                name='states'
                onChange={handleChanges}
            />
            {!form.states && valid ? (<p style={{color:'red'}}>enter state name</p>):(null)}      
            <br/>
            <br />
            <button type='submit' onClick={(e)=>weatherData(e)}>Submit</button>
        </form>
        {form.city && form.states && valid ? <p>Here's the Weather Results</p>:null}
    </div>


        {weather.data != undefined ? (
            <div>
                <DisplayData data={weather.data} />
            </div>
        ):(null)}
        </React.Fragment>
    )
}

export default WeatherForm
