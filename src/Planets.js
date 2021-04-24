import { useQuery } from '@apollo/client';
import { GET_PLANETS_QUERY } from './queries/getPlanets.js';


export default function Planet() {
    const { 
        data,
        loading,
        error
     } = useQuery(GET_PLANETS_QUERY);

    const planets = data?.getPlanets

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>{error.message}</p>;
    return (
        <>
        <h2>planets</h2>
        {/* <p>{planets}</p> */}
        
        {planets.map(planet => (
          <ul key={planet.id}>
            <li>
              {planet.name}
            </li>
          </ul>
        ))}
      </>
    )
}


