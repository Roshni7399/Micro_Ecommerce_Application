import mongoose from "mongoose";
import paginate  from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema(
{
    productName: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    desc: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    quantity: {
        type: Number,
        required: false,
    },
    total: {
      type: Number,
      required: false,
  },

}
);

  
productSchema.plugin(paginate);
const Product = mongoose.model("product",productSchema);
export default Product;