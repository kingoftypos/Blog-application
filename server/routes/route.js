const express=require('express');
const cors=require('cors');
const {signupUser, loginUser}=require('../controllers/user-controller.js');
const router=express.Router();
router.use(cors());
router.use(express.json());

router.post('/signup',signupUser);
router.post('/login',loginUser);

module.exports= router;