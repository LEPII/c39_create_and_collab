const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    to: {
      type: String
    },
    toID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    toAvatar: {
      type: String
    },
    from: {
      type: String
    },
    fromID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fromAvatar: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

messageSchema.virtual('user', {
  ref: 'User',
  localField: 'from',
  foreignField: '_id'
});

messageSchema.methods.toJSON = function () {
  const message = this;
  const messageObject = message.toObject();
  if (messageObject.dateOfMideo) {
    messageObject.dateOfMideo = moment().diff(messageObject.dateOfMessage);
  }
  return messageObject;
};

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
