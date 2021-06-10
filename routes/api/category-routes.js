const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { // Finds all categories and related associations
  try {
    const allCat = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(allCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async  (req, res) => { // Finds one category by its ID value and related associations
  try {
    const catByID = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    if (!catByID) {
      res.status(404).json({message: 'Could not find a category with that ID!'});
    } else {
      res.status(200).json(catByID);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => { // Creates a new category
  try {
    const data = await Category.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => { // Updates a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!data[0]) {
      res.status(404).json({message: 'Could not find a category with that ID!'});
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => { // Deletes a category by its `id` value
  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!data) {
      res.status(404).json({message: 'Could not find a category with that ID!'});
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
