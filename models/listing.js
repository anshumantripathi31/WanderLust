const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");

const listingSchema=new Schema({
    title:{
        type:String,
        require:true,
    },
    description :{
        type:String,
        require:true
    },
    image:{
        url:String,
        filename:String,
       
    },
    price:Number,
    location:String,
    country:String,
    reviews :[
        {  
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry: {
        type:{
            type:String,
            enum:['Point'],//location type must be "point"
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
     } ,
    category:{
     type:String,
     enum:["earthome",
     "beachfort",
     "treefort",
     "lakehouse",
     "trending",
     "design_cave",
     "camp",
     "pool",
     "room",
     "national_park"]
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }  
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;