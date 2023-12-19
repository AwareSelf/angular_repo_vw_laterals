/* class ValidationError uses default constructor, it passes all args (args array)
 to base constructor. */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor


class ValidationError extends Error {

    constructor(message)
    {
        super(message);
        this.name="Validation Error";
        this.code=42;
    }
    printCustomerMessage() {
      return `Validation failed :-( (details: ${this.message}) and code:${this.code}) `;
    }
  }
  
  try {
    throw new ValidationError("Not a valid phone number");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.name); // This is Error instead of ValidationError!
      console.log(error.printCustomerMessage());
    } else {
      console.log("Unknown error", error);
      throw error;
    }
  }