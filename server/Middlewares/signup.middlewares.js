export const validationSignupInformation = (req, res, next) =>{
    const {firstname, lastname, email, password, phoneNumber} = req.body;
    if(firstname === ""){
        return res.status(400).json({ success: false, message: "first name is required"});
        }
        if(!lastname){
            return res.status(400).json({ success: false, message: "last name is required"});
            }
            if(!email){
                return res.status(400).json({ success: false, message: "email is required"}
                    );
                    }
                    if(!password){
                        return res.status(400).json({ success: false, message: "password is required"});
                            }
                            if(!phoneNumber){
                                return res.status(400).json({ success: false, message: "phone number is required"});
                                    }
        next();
        
  }
 
