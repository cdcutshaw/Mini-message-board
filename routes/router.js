const {Router} = require("express");
const router = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
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

  router.post("/new", (req, res) => {
    const {user, text} = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
  });

  module.exports = router;