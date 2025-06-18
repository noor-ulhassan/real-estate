import express from 'express';

const route =express.Router()

router.get('/test',(req,res) =>{
    res.json({
        message: "Hello World",
});
})

export default router