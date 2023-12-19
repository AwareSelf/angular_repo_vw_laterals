class ClassWithStaticMethod {

  static staticProperty1 = 'property1';
  static staticProperty2 = 'prop';
 
  static {
    this.staticProperty2 = 'property2'; 
    console.log('static block called');
  }

  static staticMethod() {
    console.log('isnide static method..:'
                  +this.staticProperty2+','
                  +this.staticProperty1);

    return 'static method has been called.';
  }

  meth1()
  {
    console.log(this.staticProperty2); //static variables are undefined in member function
    console.log(this.staticProperty1);
  }
 
}

console.log(ClassWithStaticMethod.staticProperty1);
console.log(ClassWithStaticMethod.staticProperty2);

console.log(ClassWithStaticMethod.staticMethod());
ob = new ClassWithStaticMethod();
ob.meth1();
//ob.staticMethod(); - gives type error - static method cant be called on instance

