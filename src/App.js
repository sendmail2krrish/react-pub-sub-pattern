import React from "react";
import PublisherComponent from "./PublisherComponent";
import SubscriberComponent from "./SubscriberComponent";
import SubscriberComponent2 from "./SubscriberComponent2";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <PublisherComponent />
        <hr />
        <SubscriberComponent />
        <SubscriberComponent2 />
      </div>
    );
  }
}

export default App;
