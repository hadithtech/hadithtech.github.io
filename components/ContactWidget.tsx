"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const ContactWidget = () => {
  return (
    <section className="container">
      <InlineWidget
        url="https://calendly.com/nahhas909/30min"
        styles={{
          height: "800px",
          borderRadius: 25,
          overflow: "visible",
          marginBottom: "50px",
          borderWidth: "0",
        }}
        pageSettings={{
          primaryColor: "#F97316",
          hideEventTypeDetails: false,
        }}
      />
    </section>
  );
};

export default ContactWidget;
