import mongoose from 'mongoose'
const Db_Connection = async (): Promise<void> => {
  const mongoUri: string = "mongodb+srv://adilmalik01:adilmalik@cluster0.sidm8e9.mongodb.net/AI_PAPER_CHECKER?retryWrites=true&w=majority&appName=Cluster0"

  if (mongoose.connections[0].readyState) {
    console.log('MongoDB already connected - Skipping reconnection')
    return
  }
  try {
    await mongoose.connect(mongoUri)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

export default Db_Connection;
