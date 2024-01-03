<<<<<<< HEAD
import mongoose from 'mongoose'

export interface Answers extends mongoose.Document {
  user: string
  answers: any,
  mail:string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserAnswers = new mongoose.Schema<Answers>({
  user: {
    type: String,
    required: [true, 'Please provide a user.'],
  },
  answers: {
    type: Array,
    required: [true, "Please provide the Answer data"],
  },
  mail: {
    type: String,
    required: [true, 'Please provide a mail.'],
  },

})

=======
import mongoose from 'mongoose'

export interface Answers extends mongoose.Document {
  user: string
  answers: any
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserAnswers = new mongoose.Schema<Answers>({
  user: {
    type: String,
    required: [true, 'Please provide a user.'],
  },
  answers: {
    type: Array,
    required: [true, "Please provide the Answer data"],
  },

})

>>>>>>> d41b87b295531bd90442968f8cdea9476952fa57
export default mongoose.models.UserAnswers || mongoose.model<Answers>('UserAnswers', UserAnswers)