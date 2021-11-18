
const express= require('express')
const app= express();

app.use(express.json());

const courses = [
     {id : 1 , name:'abc'}, 
     {id : 2 , name:'xyz'} ,
     {id : 3 , name:'pqr'}   
]

app.get('/',(req,res) =>  {
    res.send('Hello world!');
});


app.get('/api/courses',(req,res) =>  {
    res.send(courses);
});

app.get('/api/courses/:id' ,(req,res) => {
  const course =  courses.find (c => c.id === parseInt(req.params.id));
  res.send(course); 
});

app.post('/api/courses',(req,res) => {

    const course = {
        id: courses.length+1,
        name: req.body.name 

    }
    courses.push(course);
    res.send(course);   
});


app.put('/api/courses/:id',(req,res) => {

    const course =  courses.find (c => c.id === parseInt(req.params.id));
    course.name= req.body.name;
    res.send(course);

} );


app.delete('api/courses/:id',(req,res) => {
    const course =  courses.find (c => c.id === parseInt(req.params.id));
    const index = courses.indexOf(course);
    courses.splice(index);

    res.send(course);
})

const port= 5000;

app.listen(port, () => console.log(`on ${port} port...`));    
