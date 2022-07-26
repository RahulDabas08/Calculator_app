function val( a){

    var h = document.getElementById("textbox").value;

    var len = h.length;

    if((h[len-1] == '*' || h[len-1] == '-' || h[len-1] == '+' || h[len-1] == '/') && (a == '*' || a == '-' || a == '+' || a == '/') ){
        document.getElementById("textbox").value = "Enter a Valid Operation ";
        return;
    }

    if(a == 'delete'){



        document.getElementById("textbox").value = document.getElementById("textbox").value.slice(0 , document.getElementById("textbox").value.length-1);

        return ;
    }


    else if(a == 'result'){

        document.getElementById("textbox").value = eval(document.getElementById("textbox").value);
        return ;
    }

    else if(a == 'AC'){

        document.getElementById("textbox").value = '';
        return ;
    }

    document.getElementById("textbox").value += a;

}
