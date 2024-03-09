function calculateSurface(a, b, operator) {
    // hasil = a operator b
 
    if(operator == '+'){
        return a + b;
    }
    else if(operator == '*'){
        return a * b;
    }

    else if(operator == '-'){
        return a - b;
    }

    else if(operator == '/'){
        return  a / b;
    }

    return;
}
