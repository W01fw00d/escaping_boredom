'use strict';

var mongoose = require('mongoose'),
  Tag = mongoose.model('Tags'),
  Room = mongoose.model('Rooms'),
  RoomDetails = mongoose.model('RoomDetails');

exports.list_all_tags = function(req, res) {
  Tag.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.list_all_rooms = function(req, res) {
  Room.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_room_details = function(req, res) {
  RoomDetails.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};
