const { mongoose } = require("../DbConnection");
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quotes: {
    type: [{ author: String, quote: String }],
    required: true,
  },
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
