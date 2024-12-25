const { read_file, write_file } = require("../api/api");
const { v4 } = require("uuid");
const dataMain = read_file("food.json");

const getAllFood = (req, res) => {
  res.render("food", { dataMain });
};
const getSingleFood = (req, res) => {
  const {id} = req.params
  const foundFood = dataMain.find((food) => food.id === id)
  res.render("details", {foundFood})
};
const createData = (req, res) => {
   dataMain.push({
    id: v4(),
    img: "https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    ...req.body
   })
   write_file('food.json', dataMain)
   res.redirect('http://localhost:4003/get_data')
};
const updateData = (req, res) => {
  const {title, desc, old_price, new_price} = req.body
  const {id} = req.params
dataMain.forEach(element => {
  if(element.id === id){
    element.title = title || element.title
    element.desc = desc || element.desc
    element.old_price = old_price || element.old_price
    element.new_price = new_price || element.new_price
  }
    })
    write_file('food.json', dataMain)
    res.redirect('http://localhost:4003/get_data')
  }

const deleteData = (req, res) => {
  const {id} = req.params
  dataMain.forEach((food, ind) => {
    if(food.id === id){
      dataMain.splice(ind, 1)
    }
  })
    write_file('food.json', dataMain)
    res.redirect('http://localhost:4003/get_data')
  }


module.exports = {
    getAllFood,
    getSingleFood,
    createData,
    updateData,
    deleteData
}