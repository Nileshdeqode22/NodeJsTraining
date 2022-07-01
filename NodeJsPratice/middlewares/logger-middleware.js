const myLogger=(req,res,next)=>{
  console.log('Logging...');
  next();
}

export default myLogger;