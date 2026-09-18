"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type BookingContextValue = {
  bookingOpen: boolean;
  activity: string;
  enquiryOpen: boolean;
  openBooking: (activity: string) => void;
  openEnquiry: () => void;
  closeAll: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activity, setActivity] = useState("");

  const openBooking = useCallback((activityName: string) => {
    setActivity(activityName);
    setBookingOpen(true);
  }, []);

  const openEnquiry = useCallback(() => {
    setEnquiryOpen(true);
  }, []);

  const closeAll = useCallback(() => {
    setBookingOpen(false);
    setEnquiryOpen(false);
  }, []);

  return (
    <BookingContext.Provider
      value={{ bookingOpen, activity, enquiryOpen, openBooking, openEnquiry, closeAll }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
