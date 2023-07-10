import axios from "axios"
let API = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=65d65b2716db429895cbc3254a475c0e'
let data = null 
export const BusinessNews = async () => {

        await axios.get(API)
        .then(res=>{
                console.log(res)
                data = res.data.articles
        })
        .catch(err=>{
                console.log(err)
        })

        return data;
}