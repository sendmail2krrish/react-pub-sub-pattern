import React from "react";
import messageService from "./MessageService";

const PublisherComponent = () => {
  const handleClick = () => {
    // Send a message to all subscribers
    messageService.publish("Hello, world!");
  };

  return (
    <div>
      <button onClick={handleClick}>Send Message</button>
    </div>
  );
};

export default PublisherComponent;
