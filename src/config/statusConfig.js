import UpComingStatus from "@/pages/booking-status-page/pages/UpComingStatus";
import CompletedStatus from "@/pages/booking-status-page/pages/CompletedStatus";
import CancelledStatus from "@/pages/booking-status-page/pages/CancelledStatus";
import { order } from "@mui/system";

/**
 * Maps booking status to components.
 */
export const STATUS_COMPONENT_MAP = {
  upcoming: UpComingStatus,
  completed: CompletedStatus,
  cancelled: CancelledStatus,
};

/**
 * Maps booking status to functions that extract props.
 */
export const STATUS_PROPS_MAP = {
  completed: ({ orderData }) => ({
    ticketID: orderData.ticketID,
    ticketMessage: orderData.ticketMessage,
    ticketImage: orderData.ticketImage,
    bookingStatus: orderData.bookingStatus,
    bookingTitle: orderData.bookingTitle,
    bookingMessage: orderData.bookingMessage,
  }),
  upcoming: ({ orderData }) => ({
    ticketID: orderData.ticketID,
    ticketMessage: orderData.ticketMessage,
    ticketImage: orderData.ticketImage,
    bookingStatus: orderData.bookingStatus,
    bookingTitle: orderData.bookingTitle,
    bookingMessage: orderData.bookingMessage,
  }),
  cancelled: ({ orderData }) => ({
    ticketID: orderData.ticketID,
    ticketMessage: orderData.ticketMessage,
    ticketImage: orderData.ticketImage,
    bookingStatus: orderData.bookingStatus,
    bookingTitle: orderData.bookingTitle,
    bookingMessage: orderData.bookingMessage,
  }),
};
