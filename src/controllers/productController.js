const {
  insertProduct,
  removeProduct,
  updateProduct,
  showProduct,
} = require('../repositories/productRepository');

const create = async (req, res) => {
  try {
    const {
      name,
      color,
      value
    } = req.body;
    const newProduct = await insertProduct({
      name,
      color,
      value
    });
    return res.status(201).send(newProduct);
  } catch (error) {
    return console.error(res.status(404));
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      color,
      value
    } = req.body;
    const options = {
      new: true
    }
    const productUpdate = await updateProduct({
      id,
      name,
      color,
      value,
      options
    });
    return res.status(200).send(productUpdate);
  } catch (error) {
    return console.error(res.status(404));
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    await removeProduct({
      id
    });
    return res.status(200).send();
  } catch (error) {
    return console.error(res.status(404));
  }
};

const show = async (req, res) => {
  try {
    const allProduct = await showProduct();
    return res.status(226).json(allProduct);
  } catch (error) {
    return console.error(res.status(404));
  }
};

module.exports = {
  create,
  update,
  remove,
  show,
};