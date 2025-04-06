    const express =require('express');
    const { getEmployee } = require('../controller/employee.controller');
    const { addUser } = require('../controller/user.controller');
    const router= express.Router()



    router.get('/getemployee',getEmployee)
    router.post('/employee', addUser)
    module.exports = router;