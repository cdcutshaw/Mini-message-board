const {Router} = require("express");
const router = Router();

const messages = [
    {
      subject: "Hi there!",
      message: "How are you, today?",
      user: "Amando",
      added: new Date()
    },
    {
      subject: "Hello World!",
      message: "What a lovely day we are having",
      user: "Charles",
      added: new Date()
    }
  ];

  router.get("/", (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages });
  });

  router.get("/new", (req, res) => {
    res.render("new", { title: "Add a New Message"});
  });

  router.get("/message/:id", (req, res) => {
    const id = req.params.id;
    const message = messages[id];
  
    if (!message) {
      res.status(404).send("Message not found");
      return;
    }
  
    res.render("message", { title: message.subject, message });
  });

  router.post("/new", (req, res) => {
    const {subject, message, user} = req.body;
    messages.push({ subject, message, user, added: new Date() });
    res.redirect('/');
  });

  module.exports = router;