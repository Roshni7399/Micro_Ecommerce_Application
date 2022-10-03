import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    default: "",
  },
  phone: {
    type: Number,
    required: false,
  },
  // image: {
  //   type: String,
  //   required: false,
  // }
});

userSchema.plugin(paginate);
const User = mongoose.model("ecom", userSchema);
export default User;
