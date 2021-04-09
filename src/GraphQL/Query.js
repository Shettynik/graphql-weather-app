import { gql } from '@apollo/client';

export const GET_WEATHER_DATA = gql`
query getCityByName($name: String!){
    getCityByName(name: $name){
        name
        country
        weather{
            summary{
                title
                description
                icon
            }
            temperature{
                actual
                feelslike
                min
                max
            }
            wind{
                speed
                deg
            }
            clouds{
                all
                visibility
                humidity
            }
            timestamp
        }
    }
}`