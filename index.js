const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('gitignore file deleted and git file updated')
})

app.get('/courses', (req, res) => {
  res.send(courses)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse  = courses.find(course => course._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port in the port of  ${port}`)
})














// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;
//     if (id === '08') {
//         res.send(news);
//     }
//     else {
//         const category_news = news.filter(n => n.category_id === id);
//         res.send(category_news);
//     }
// })

// app.get('/news', (req, res) =>{
//     res.send(news);
// });









