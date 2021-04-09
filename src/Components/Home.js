import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_DATA } from '../GraphQL/Query';

export const Home = () => {
    const [cityName, setCityName] = useState("");
    const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_DATA, {
        variables: { name: cityName }
    });
    if (error) {
        console.log("error found")
    }
    if (data) {
        console.log(data)
    }
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="City Name..."
                    onChange={(event) => { setCityName(event.target.value) }}
                />
                <button onClick={() => { getWeather() }}>Search</button>
            </div>
            <div>
                {data && 
                <>
                <h1>{data.getCityByName.weather.temperature.actual}</h1>
                <h1>{data.getCityByName.weather.wind.speed}</h1>
                </>
                }
            </div>
        </div>

    )
}
