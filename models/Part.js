const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const partSchema = new Schema(
  {
    quantity: { type: Number, required: true },
    value: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: String, required: false },
    mount: { type: String, required: true },
    description: { type: String, required: false },
    id_user: { type: String, required: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} },
);

const Part = mongoose.model('Part', partSchema);

module.exports = Part;
