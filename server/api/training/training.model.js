'use strict';

import mongoose from 'mongoose';

var TrainingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Training', TrainingSchema);
