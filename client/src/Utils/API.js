import axios from "axios";

export default {
  getUser: userData => axios.post(`/api/users`, userData), 
  getList: id =>  axios.get(`/api/lists/${id}`),
  getAllLists: id => axios.get(`/api/lists/getAll/${id}`),
  saveList: listData => axios.post(`/api/lists/create`, listData),
  updateList: (id, listData) => axios.put(`/api/lists/${id}`, listData),
  deleteList: id => axios.delete(`/api/lists/` + id),
  getAllItemsForList: id => axios.get(`/api/items/getAll/${id}`),
  createItem: itemData => axios.post(`/api/items/add/${itemData._listId}`, itemData),
  deleteItem: id => axios.delete(`/api/items/${id}`),
}
