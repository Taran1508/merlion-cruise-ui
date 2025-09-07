export const defaultConfig = {
  Status: false,
  Booking: true,
  Payment: true,
  RSVP: true,
  Table: true,
};

export const statusMap = {
  cancelled: {
    Status: true,
    Booking: true,
    Payment: true,
    Table: true,
    RSVP: false,
  },
  completed: {
    Status: true,
    Booking: true,
    Payment: true,
    Table: true,
    RSVP: true,
  },
  declined: {
    Status: true,
    Booking: true,
    Payment: false,
    Table: false,
    RSVP: false,
  },
};
