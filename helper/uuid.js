// uuid generate radom string()  

function uuid() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring();
};

module.exports = uuid;
    
    // we have a radom number whatever we raun that the  number will
     // 0 - 0.9999999999 but never will be one
    
     // then i wanna change that whatever we run
     // 1 - 1.99999999999
    
     // hexalnall number 
    
     // 0.1,2,3,4,5,6,7,8,9,A,B,C,D,E
    
     // 10 became A
     // 11 became B
     // 12 became C
     // 13 became D
     // 14 became E

