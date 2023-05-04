import * as fs from 'fs';
import { json } from 'stream/consumers';
export default function handler(req,res){
  
  fs.readFile(`courses/${req.query.slug}.json`,'utf-8',(err,data)=>{

  })
  
  console.log(req.query.slug)
  res.status(200).json(json.parse(data))
}