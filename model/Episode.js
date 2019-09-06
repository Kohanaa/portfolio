const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  id: 'number',
  title: 'string',
  date:'string',
  image:'string',
  videos:['string']
});
module.exports={
  schema
}
