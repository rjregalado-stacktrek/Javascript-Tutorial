    /**
     * 
     *  JavaScript can "display" data in different ways:

        Writing into an HTML element, using innerHTML.
        Writing into the HTML output using document.write().
        Writing into an alert box, using window.alert().
        Writing into the browser console, using console.log().
     * 
     */
    
    let d = new Date();
    
    function add(x, y){
        return x + y;
    }
    let answer = add(4, 5);

    function mul(x, y){
        return x * y;
    }

    let product = mul(6,9);


    // 1. Using innerHTML

    document.getElementById("demo").innerHTML = d;
    
    document.getElementById("add").innerHTML = `The sum is ${answer}`;

    document.getElementById("mul").innerHTML = `The product is ${product}`;

    // 2. Document Write

    document.write(add(4,12)); //16

    // 3. Alert Box

    window.alert(mul(6,7)); // 42

    // 4. Console log

    console.log(5 + 6);