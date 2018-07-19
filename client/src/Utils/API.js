import axios from "axios";

export default {
  // Gets List
  getList: function(id) {
    return axios.get("/api/api/lists/" + id);
  },
  // find or add user
  getUser: function(userData){
      return axios.post("/api/api/users", userData)
  }, 
  // Save a list
  saveList: function(listData) {
    return axios.post("/api/api/createList", listData);
  },
  // Deletes the list with the given id
  deleteList: function(id) {
    return axios.delete("/api/api/deleteList/" + id);
  },
  // creates an item inside a list
  createItem: function(itemData) {
    return axios.post("/api/api/addItem/" + itemData._listId, itemData)
  },
  // gets all items from inside a list
  getAllItemsForList: function(id) {
      return axios.get("/api/api/getAllItems/" + id);
  },
  deleteItem: function(id) {
      return axios.delete("/api/api/deleteItem/" + id)
  },
  getLocation: function (name) {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

        let apiKey = "AIzaSyCW61taUbxNOQxHhdLBcp3SU_kI0lCV-VQ"
        let pos = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
        let geoQuery = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${pos.lat},${pos.long}&radius=30000&name=${name}&key=${apiKey}`;

      axios.get(geoQuery).then(res => {
        console.log(res);
        return res 
      })
      })
    }
  }
};
