

import mongoose from 'mongoose'
const Connection = async () => {
    try {
        
        const url = `mongodb+srv://intern:${process.env.PASS}@cluster0.edmewzs.mongodb.net/${process.env.USERNAME}?retryWrites=true&w=majority`
    await mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error)
    }
}
export default Connection
 
