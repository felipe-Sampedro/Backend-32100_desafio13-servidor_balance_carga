const random = (data) => {
    const objRandom = {};
    for (let i = 0; i < data; i++) {
      const numRandom = Math.floor(Math.random() * 1000);
      objRandom[numRandom] ? objRandom[numRandom]++ : (objRandom[numRandom] = 1);
    }
    return objRandom;
  };
  
  process.on('message', data => {
      const cantidad = random(data)
      process.send(cantidad) 
  });