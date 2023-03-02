const MessageService = {
  subscribers: [],

  subscribe: (callback) => {
    MessageService.subscribers.push(callback);
  },
  unsubscribe: (callback) => {
    MessageService.subscribers = MessageService.subscribers.filter(
      (subscriber) => subscriber !== callback
    );
  },

  publish: (message) => {
    MessageService.subscribers.forEach((subscriber) => subscriber(message));
  }
};

export default MessageService;
