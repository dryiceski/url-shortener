import { URL } from "../models/url.js";
import { nanoid } from "nanoid";

const handleShortenURL = async (req, res) => {
        const url_name = req.body.url_name
        const shortId = nanoid(9)
    try {
        await URL.create({shortId,url_name});
        res.json({ status: "sucessfull", id: shortId})
    } catch (error) {
        console.log(error);
        }
}
    
const handleRedirectURL= async (req, res) => {
        const dest_url = await URL.findOne({shortId:req.params.id});
        await URL.findOneAndUpdate({shortId:dest_url.shortId}, {clicks : dest_url.clicks+ 1})
        res.redirect(dest_url.url_name)
}

const handleGetClicksCount= async (req, res) => {
        const dest_url = await URL.findOne({shortId:req.params.id});
        res.json({clickCount: dest_url.clicks})
}
    

export {
    handleGetClicksCount,
    handleRedirectURL,
    handleShortenURL
}
