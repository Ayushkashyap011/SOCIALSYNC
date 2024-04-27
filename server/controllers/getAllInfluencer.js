const influencer1=require('../models/influencer');

exports.getAllInfluencer= async(req,res)=>{
    try{
        const id=req.params.id;
        const influencer=await influencer.findById({ });
        if(!influencer){
            return  res.status(404).json({
                sucess:false,
                message: 'No Influencer found',
            })
        }
        res.status(200).json({
            sucess:true,
            data:influencer,
            message:`influencer ${id} is retrived`,
        })

    }
    catch(error) {
        console.log("error", error);
        return res.status(500).json({
          status: 500,
          message: error.message,
        });
    }
}
