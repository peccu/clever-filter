'use strict';

import mongoose from 'mongoose';

var TrainingSchema = new mongoose.Schema({
  articleId: String,
  userId: String,
  isLike: Boolean,
  active: Boolean
});

export default mongoose.model('Training', TrainingSchema);
