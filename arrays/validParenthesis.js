/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /***
    1.- initializa an array that will be used as a stack
    2.- we will iterate each character from s and we will see the 
         type of char
         -if they are (,{,[, push them to the stack.
         -otherwise when they are ),},], check the top of the stack and see if 
         its the pair. In case that they are. Then pop it. Otherwise keep it.
     */
    var stack = []
    
    for(const char of s){
         if( char ==')' &&stack[stack.length-1]=='(' ){
             stack.pop()
         }
         else if(
              char ==']' &&stack[stack.length-1]=='[' 
         ){
             stack.pop()
         }
         else if( char =='}' &&stack[stack.length-1]=='{' ){
             stack.pop()
         }
         else{
             stack.push(char)
         }
     }
     return (stack.length === 0) 
 }; 
 