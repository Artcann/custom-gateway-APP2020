import SerialPort from 'serialport';
const port = new SerialPort('/dev/tty.Bluetooth-Incoming-Port');

port.on('data', (data: any) => {
  let tra = data[0];
  
  switch(tra) {
    case 0x31: {
      parseStandardFrame(data);
      break;
    }
      
    case 0x32: {
      port.write('sync', (err) => handleError(err));
      break;
    }

    case 0x33: {
      parseFastFrame(data);
      break;
    }

  }
  
});

let handleError = (err: any) => {
  if(err) return console.log('Error :', err.message);
}

// port.write('Data from gateway :', (err) => {
//   if(err) return console.log('Error :', err.message);

//   console.log('Message written');
// });

let parseStandardFrame = (data: Buffer) => {
  let obj = data.slice(1, 5);
  let req = data[5];
  let typ = data[6];


  console.log(data);

}

let parseFastFrame = (data: Buffer) => {
  console.log(data);
}
