const { read_file, write_file } = require("../api/api");
const { v4 } = require("uuid");
const dataMain = read_file("phone.json");

const getAllFood = (req, res) => {
  res.render("phoneMain", { dataMain });
};
const getSingleFood = (req, res) => {
  const {id} = req.params
  const foundPhone = dataMain.find((phone) => phone.id === id)
  res.render("phoneDetail", {foundPhone})
};
const createData = (req, res) => {
   dataMain.push({
    id: v4(),
    img: "https://www.androidauthority.com/wp-content/uploads/2021/07/2021-Best-Smartphone-Cameras.jpg",
    ...req.body
   })
   write_file('phone.json', dataMain)
   res.redirect('http://localhost:4009/get_data')
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
    write_file('phone.json', dataMain)
    res.redirect('http://localhost:4009/get_data')
  }

const deleteData = (req, res) => {
  const {id} = req.params
  dataMain.forEach((food, ind) => {
    if(food.id === id){
      dataMain.splice(ind, 1)
    }
  })
    write_file('phone.json', dataMain)
    res.redirect('http://localhost:4009/get_data')
  }


module.exports = {
    getAllFood,
    getSingleFood,
    createData,
    updateData,
    deleteData
}