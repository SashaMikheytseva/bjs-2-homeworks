function parseCount(num) {
    const result = Number.parseFloat(num);
    if (isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  }
  
  function validateCount(num) {
    try {
      return parseCount(num);
    } catch (error) {
      return error;
    }
  }


  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a > b + c || b > a + c || c > a + b) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    
  
    get perimeter() {
      let p = this.a + this.b + this.c;
      return p;
    }
  
    get area() {
      let semiP = this.perimeter / 2;
      let s =parseFloat((Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c))).toFixed(3));
      return s;
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c)
    } catch (e) {
      return {
       get perimeter() {
         return "Ошибка! Треугольник не существует";
       },
       get area() {
         return "Ошибка! Треугольник не существует";
       }
     };
    }
  }