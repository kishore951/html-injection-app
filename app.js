const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Vulnerable endpoint
app.get('/greet', (req, res) => {
  const name = req.query.name;
  // HTML Injection vulnerability: unsanitized input in HTML output
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(3000, () => {
  console.log('HTML Injection app listening on port 3000');
});
