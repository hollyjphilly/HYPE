// import React from 'react';
// import {
//   useLoadScript,
// } from '@react-google-maps/api';
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption
// } from "@reach/combobox"
// // import { googleMapsApi } from '../../config/keys_dev2';
// const googleAPI = require("../../config/keys2").googleMapsApi;

// const libraries = ["places"];

// export default function SearchBar() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: googleAPI,
//     libraries,
//   });

//   if (loadError) return "Error loading maps";
//   if (!isLoaded) return "Loading maps";

//   return <Search />
// };

// function Search() {
//   const {
//     ready, 
//     value, 
//     suggestions: {status, data}, 
//     setValue, 
//     clearSuggestions 
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: {lat: () => 40.673842, lng: () => -73.970083},
//       radius: 20000, // 20km
//     },
//   });

//   return (
//     <Combobox
//       onSelect={(addy) => {
//         console.log(addy);
//       }} 
//     >
//       <ComboboxInput 
//         value={value} 
//         onChange={(e) => {
//           setValue(e.target.value);
//         }}
//         disabled={!ready}
//         placeholder="enter an addy"
//       />
//     </Combobox>
//   );
// }