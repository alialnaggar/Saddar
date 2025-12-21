const express = require('express');
const router = express.Router();
const { getUsers, getUserById, updateUser, deleteUser, registerUser, createUser } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', protect, getUsers);
router.post('/', protect, authorize('admin'), createUser);
router.post('/register', registerUser);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

module.exports = router;
