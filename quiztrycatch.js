class ValidationError extends Error {
    constructor(message)
    {
        super(message);
        this.name = "ValidationError";
    }
}

function validateNumberInput(number1, number2, number3)
{
    if(typeof number1 !== "number")
    {
        throw new ValidationError("Argumen pertama harus number");
    }

    if(typeof number2 !== "number")
    {
        throw new ValidationError("Argumen kedua harus number");
    }

    if(typeof number3 !== "number")
    {
        throw new ValidationError("Argumen ketiga harus number");
    }
}

const detectTriangle = (a, b, c) => {
  // TODO 3
  try{  
    validateNumberInput(a, b, c);
    
    if (a === b && b === c) {
        return 'Segitiga sama sisi';
    }

    if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
    }

    return 'Segitiga sembarang';

  }catch (e) {
    return e.message;
  }
};





