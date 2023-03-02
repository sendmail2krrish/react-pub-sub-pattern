import React, { useEffect, useState } from "react";
import messageService from "./MessageService";

const SubscriberComponent = () => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleMessage = (message) => {
    // Handle the message that was received
    console.log("Subscribe 2: " + message);
    setMessage(message);
    setCount(count + 1);
  };

  useEffect(() => {
    messageService.subscribe(handleMessage);

    return () => {
      messageService.unsubscribe(handleMessage);
    };
  });

  return (
    <div>
      Subscribe 2:&nbsp;
      {message}
      {count > 0 && count}
    </div>
  );
};

export default SubscriberComponent;
