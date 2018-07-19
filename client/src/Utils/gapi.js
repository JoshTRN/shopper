import axios from "axios";

export default {
  getLocation: function (name) {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

        let apiKey = "AIzaSyCW61taUbxNOQxHhdLBcp3SU_kI0lCV-VQ"
        let pos = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
        let geoQuery = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${pos.lat},${pos.long}&radius=30000&name=${name}&key=${apiKey}`;

        return console.lof(axios.get(geoQuery))
      })
    }
  }
}