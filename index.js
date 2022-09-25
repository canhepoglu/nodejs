const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    fs.readFile('fsModulSystem/employesFile/employees.json', 'utf8', (err, data) => { 
        if (err) console.log(err);                        
        console.log(data);                                 
    });
}); 

fs.appendFile('employees.json', '\n{"name": "New Employee 1 Name", "New salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    fs.readFile('fsModulSystem/employesFile/employees.json', 'utf8', (err, data) => { 
        if (err) console.log(err);                         
        console.log(data);                                 
    });
});

fs.rmdir('employees.json', { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log('employees.json doyası başarıyla silindi');
});
