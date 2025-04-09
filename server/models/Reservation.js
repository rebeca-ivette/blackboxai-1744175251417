const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  guestName: {
    type: String,
    required: [true, 'Guest name is required'],
    trim: true
  },
  roomNumber: {
    type: String,
    required: [true, 'Room number is required'],
    match: [/^[A-Z]\d{3}$/, 'Room number must be in format A100']
  },
  checkInDate: {
    type: Date,
    required: [true, 'Check-in date is required'],
    min: [Date.now, 'Check-in date cannot be in the past']
  },
  checkOutDate: {
    type: Date,
    required: [true, 'Check-out date is required'],
    validate: {
      validator: function(value) {
        return value > this.checkInDate;
      },
      message: 'Check-out date must be after check-in date'
    }
  },
  status: {
    type: String,
    enum: ['confirmed', 'checked-in', 'checked-out', 'cancelled'],
    default: 'confirmed'
  },
  specialRequests: {
    type: String,
    maxlength: [500, 'Special requests cannot exceed 500 characters']
  }
}, {
  timestamps: true
});

// Add index for frequently queried fields
reservationSchema.index({ roomNumber: 1, checkInDate: 1 });

module.exports = mongoose.model('Reservation', reservationSchema);
