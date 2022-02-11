function fizzbuzz(n) {
    if (n > 1) {
      fizzbuzz(n - 1);
    };
  
    if (n % 3 == 0 && n % 5 == 0) {
      console.log("Fizz,Buzz");
    }else if (n % 3 == 0) {
      console.log("Fizz");
    }else if (n % 5 == 0) {
      console.log("Buzz");
    }else {
      console.log(n);
    }
  };

  fizzbuzz(1000);