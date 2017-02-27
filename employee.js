function isEmployee(employee) {    
    function emp () { }
    emp.and = function(andVal) { 
    	employee = employee && andVal; 
        return emp; 
    };
    emp.or = function(orVal) { 
    	employee = employee || orVal; 
        return emp; 
    };
    emp.valueOf = function() { 
    	return employee; 
    };
    return emp;
}