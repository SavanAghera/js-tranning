// let eventMixin = {
//     /**
//      * Subscribe to event, usage:
//      *  menu.on('select', function(item) { ... }
//     */
//     on(eventName, handler) {
//       if (!this._eventHandlers) this._eventHandlers = {};
//       if (!this._eventHandlers[eventName]) {
//         this._eventHandlers[eventName] = [];
//       }
//       this._eventHandlers[eventName].push(handler);
//     },
  
//     /**
//      * Cancel the subscription, usage:
//      *  menu.off('select', handler)
//      */
//     off(eventName, handler) {
//       let handlers = this._eventHandlers?.[eventName];
//       if (!handlers) return;
//       for (let i = 0; i < handlers.length; i++) {
//         if (handlers[i] === handler) {
//           handlers.splice(i--, 1);
//         }
//       }
//     },
  
//     /**
//      * Generate an event with the given name and data
//      *  this.trigger('select', data1, data2);
//      */
//     trigger(eventName, ...args) {
//       if (!this._eventHandlers?.[eventName]) {
//         return; // no handlers for that event name
//       }
  
//       // call the handlers
//       this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//     }
//   };
//   function a() {
//     console.log('test triggerd');
//   };
//   function b() {
//     console.log('test triggerd 2');
//   }
//   eventMixin.on('test', a);
//   eventMixin.on('test', b)

//   eventMixin.trigger('test');

//   eventMixin.off('test',a);
//   eventMixin.trigger('test');


// function a() {
//      b = 10
// }
// a()
// console.log(b);



// let a = [1,2,3];
// console.log(a.map((v,i,arr) => {
//     //  console.log(v,i,[...arr]);
//      return v*2
// }).filter((v,i,arr) => {
//      console.log([...arr],[...a]);
// }));



// let arr = [ {age: 10}, {age: 20}, {age: 30}];
// let  a = arr.filter((v) => {
//      v = {age : v.age + 1};
//      // v.age = v.age + 1;
//      return v.age > 20;
// });
// a[0].age = 21
// console.log(arr , a);


// let a = [1,2,3];

// a.name = 'hi';
// a.push(4)
// console.log(a, a[0],a[1],a[2],a[3], a.name , a.length);



// let  obj = {
//      1 : 10,
//      '1': 11,
//      "1" : 12,

// };
// console.log(obj['1'], obj[1] , obj["1"]);
// console.log(Object.keys(obj));


function test(a) { 
     a =  [10]
}
const a = [1,2,3];
test(a);
console.log(a);