const User=require('../model/user.js');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken')
const signupUser=async (req,res)=>{
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    let hashPassword= await bcrypt.hash(password,10);
    const newUser = await User.create({
      name,
      email,
      password:hashPassword,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}
const loginUser=async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: "Invalid Credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch) {
          return res.status(401).json({ message: "Wrong Password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPRIRESIN,
        });
        res.cookie(
          "token",
          token,
          {
            maxAge: 604800000,
            secure: true, 
            sameSite: "none",
          }
        );
        return res.status(200).json({
          message: "User logged in",
          id: user._id,
        });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports={signupUser,loginUser};