import * as mongoose from 'mongoose';
export const ItemsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  description: String,
});
