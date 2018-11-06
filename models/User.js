const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  email: String,
  gender: { type: String, default: 'unknown' },
  name: { first: String, last: String },
  profileImage: String,
  location: String,
  timezone: String,
  expertise: [String],
  createdDate: Date,
  active: { type: Boolean, default: true },
  role: { type: String, default: 'Contractor' },
  registration: { type: Boolean, default: false },
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'teams'
    }
  ],
  activeTasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tasks'
    }
  ],
  completedTasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tasks'
    }
  ],
  totalHours: { type: Number, default: 0 },
  rating: Number
});

mongoose.model('users', UserSchema);

// const User = mongoose.model('users', userSchema);
// module.exports = User;
