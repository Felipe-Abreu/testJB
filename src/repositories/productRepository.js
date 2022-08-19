const {
  Product
} = require('../schema/productSchema');

const insertProduct = async ({
  name,
  color,
  value
}) => {
  try {
    const newProduct = await Product.create({
      name,
      color,
      value
    });
    return newProduct;
  } catch (error) {
    console.error(error);
  }
};

const removeProduct = async ({
  id
}) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(id);
    return removeProduct;
  } catch (error) {
    console.error(error);
  }
};

const updateProduct = async ({
  id,
  name,
  color,
  value,
  options
}) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, {
      name,
      color,
      value
    }, {
      options
    });
    return updateProduct;
  } catch (error) {
    console.error(error);
  }
};

const showProduct = async () => {
  try {
    const showProduct = await Product.find();
    return showProduct;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
};