import mongoose from 'mongoose';


const conectDB = async () => {
    try {
        const conecction = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true
        }
        );

        const url = `${conecction.connection.host}:${conecction.connection.port}`;
        console.log(`MongoDB connected on: ${url}`)
    } catch (err) {
        console.log(`error: ${err.message}`);
        process.exit(1);
    }
}

export default conectDB
