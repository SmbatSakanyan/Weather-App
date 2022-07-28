import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,InputGroup,FormControl,Container,Card} from "react-bootstrap";
import './App.css';


const api={
    key: "cc2c01498ce5f72b24bba3d6a386947b",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
    const[query,setQuery]=useState("");
    const[weather,setWeather]=useState({});

    const search = evt => {
        if(evt.key==="Enter"||evt.key==="Submit"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery("");
                    console.log(result)
                });
        }
    }
  return (
    <div className="App">
        <Container >
        <main className="d-inline-block">
            <div className="search-bar" style={{width: "20rem"}}>

                <InputGroup size="lg">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-lg">City</InputGroup.Text>
                    </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                                 onChange={e=>setQuery(e.target.value)}
                                 value={query}
                                 onKeyPress={search}
                                 type="text"
                        />
                </InputGroup>


            </div>
            {(weather.main !== undefined)?(
                <>
                <Card style={{ width: '20rem'}} bg="info" className="text-center d-inline-block" text="white">
                    <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    <Card.Body>
                        <Card.Title>{weather.name},{weather.sys.country}</Card.Title>
                        <Card.Text>
                            {Date()}
                        </Card.Text>
                        <Card.Text>
                            {weather.main.temp} °C
                        </Card.Text>
                        <Button variant="primary">Add City !!!</Button>
                    </Card.Body>
                </Card>

                </>
            ):('')}

        </main>
        </Container>
    </div>
  );
}

export default App;
