const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: { type: String, required: true },
  request: { type: String, required: true },
  completed: { type: Boolean, default: false },
  deliverableUrl: String,
  dateAssigned: Date,
  dateCompleted: Date,
  team: { type: Schema.Types.ObjectId, ref: 'teams' },
  maxLaborTime: Number,
  laborTime: { type: Number, default: 0 },
  timeEntries: [
    {
      timeStart: { type: Date, required: true },
      timeStop: { type: Date, required: true },
      totalTime: Number
    }
  ],
  assignedUser: { type: Schema.Types.ObjectId, ref: 'users' },
  userNotes: [
    {
      message: String,
      postDate: Date
    }
  ],
  clientFeedback: [
    {
      message: String,
      postDate: Date
    }
  ]
});

mongoose.model('tasks', TaskSchema);
