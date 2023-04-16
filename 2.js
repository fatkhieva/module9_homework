const list = `{
    "list": [
      {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
      },
      {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
      }
    ]
  }`;
  
  const obj = JSON.parse(list, (key, value) => {
    if (!isNaN(value)) { 
      return Number(value); 
    }
    return value; 
  });
  
  console.log(obj);