import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from "../loc.js"
import {fetchAvailabelPlaces} from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  
  const [availablePlaces , setAvailablePlace] = useState([]);
  const [fetchingData , setFetchingData] = useState(false);
  const [error , setError] = useState();

  // useEffect( () => {
  //    fetch("http://localhost:3000/places")
  //    .then((response)=>{
  //   return response.json();
  //   })
  //   .then((resData) =>{
  //     setAvailablePlace(resData.places);
  //   });
  // },[]);

  //with asyn await 
  //  useEffect( () => {
  //  async function fetchPlaces(){
  //   setFetchingData(true);
  //   const response = await fetch("http://localhost:3000/places");
  //   const resData = await response.json();
  //   setAvailablePlace(resData.places);
  //   setFetchingData(false);
  //  }
  //   fetchPlaces();
  // },[]);

  //to see error 
   useEffect( () => {
   async function fetchPlaces(){
    setFetchingData(true);
    
    try{
    const places = await fetchAvailabelPlaces();

    navigator.geolocation.getCurrentPosition( 
      (position) => {
        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlace(sortedPlaces);
         setFetchingData(false);
    });
    }catch(error){
       setError({
        message:
        error.message || "Could not able to fetch data please try after sometime"});
         setFetchingData(false);
    }
   }
    fetchPlaces();
  },[]);

  if(error){
    return (
    <Error 
    title="An error occured!"
    message={error.message}
    />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetchingData}
      loadingText="Fetching place data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
