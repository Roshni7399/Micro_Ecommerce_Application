import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const imgSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
      },
});

imgSchema.plugin(paginate);
const Img = mongoose.model("img", imgSchema);
export default Img;
