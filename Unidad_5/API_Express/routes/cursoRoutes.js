const express = require('express');
const router = express.Router();
const Estudiantes = require('./modelos/cursos');

router.get('/',async(req,res)=>{
    const estudiantes = await Estudiante.find();
    res.send(estudiantes);
});

router.get('/:id',async(req,res)=>{
    const estudiante = await Estudiante.findById(req.params.id);
    res.send(estudiante);
});

router.post('/',async (req,res)=>{
    const estudiantes = new Estudiante({
        Nombre: req.body.Nombre,
        Apellido : req.body.Apellido,
        CC : req.body.CC,
        promedio:req.body.promedio,
        Cursos : req.body.Cursos
    })
    await curso.save().catch((err) => {
        console.log(err);
    });
    res.send(curso);
    });

    router.put('/',async (req,res)=>{
        const estudiantes = await Estudiante.findByIdAndUpdate(req.body.id,{
            promedio: req.body.promedio,
            Cursos : req.body.Cursos,
    },{new :true});
    res.send(estudiantes);
});

    router.delete('/',async (req,res)=>{
    const estudiantes = await Estudiante.findByIdAndDelete(req.body.id,{
        res.send(estudiantes);
    });
}); 

