'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the tag',
  },
  code: {
    type: String,
    required: 'Kindly enter the code of the tag',
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the tag',
  },
});

module.exports = mongoose.model('Tags', TagSchema);

var RoomSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the room',
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the room',
  },
  description: {
    type: String,
  },
  likeCount: {
    type: Number,
  },
  commentsCount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  isGroupPrice: {
    type: Boolean,
  },
  isEditorsChoice: {
    type: Boolean,
  },
  image: {
    type: String,
  },
  tags: {
    type: [Number],
    default: [],
  },
});

module.exports = mongoose.model('Rooms', RoomSchema);

var RoomDetailSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the room',
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the room',
  },
  description: {
    type: String,
  },
  likeCount: {
    type: Number,
  },
  commentsCount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  isGroupPrice: {
    type: Boolean,
  },
  isEditorsChoice: {
    type: Boolean,
  },
  image: {
    type: String,
  },
  tags: {
    type: [Number],
    default: [],
  },
});

module.exports = mongoose.model('RoomDetails', RoomDetailSchema);
