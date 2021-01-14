input = process.argv.slice(2)

let alarm = function(time) {
  for (i = 0; i < time.length; i++){
    if (time < 0 || time === NaN || time.length === 0) {
      console.log('error')
    } else {
      setTimeout(() => {
        process.stdout.write('hello \n');
      }, time[i] * 1000)
    }
  }
}

alarm(input);


  