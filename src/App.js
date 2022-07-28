import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,InputGroup,FormControl,Container,Card} from "react-bootstrap";
import './App.css';




const api={
    key: "2GSEJUUQDXTRYA765LG2JCJPN",
    base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
}

function App() {
    const[query,setQuery]=useState("");
    const[weather,setWeather]=useState({});

    const search = evt => {
        if(evt.key==="Enter"||evt.key==="Submit"){
            fetch(`${api.base}${query}?unitGroup=metric&key=${api.key}&contentType=json`)
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
            {(weather.currentConditions !== undefined)?(
                <>
                <Card style={{ width: '20rem'}} bg="info" className="text-center d-inline-block" text="white">
                    <Card.Body>
                        <Card.Title>{weather.resolvedAddress},{weather.resolvedAddress}</Card.Title>
                        <Card.Text>
                            {weather.currentConditions.datetime}
                        </Card.Text>
                        <Card.Text>
                            {weather.currentConditions.temp} °C
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
