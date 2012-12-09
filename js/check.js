window.onload = function () {
    // Validacion de campos de entrada
    document.getElementById("inputname").onchange = usercheck;
    document.getElementById("inputlastname").onchange = lastnamecheck;
    document.getElementById("inputemail").onchange = emailcheck;
    // document.getElementById("woman").onclick = sexcheck
    // document.getElementById("men").onclick = sexcheck
    document.getElementById("inputuniv").onchange = univcheck;
    document.getElementById("inputdegree").onchange = degreecheck;

    // asignacion de acciones a botones
    document.getElementById("reset").onclick = limpiatodo;
    document.getElementById("send").onclick = enviarform;
}


function usercheck(){
    // Validacion de usuario
    var user = document.getElementById("inputname")
    var userbool = user.value.length > 2;

    // console.log(userbool) // Comenzamos con el habito de debuguear con
                             // console.log()

    color_status((user.value != null) && userbool && 
		 !(/^\s+$/.test(user.value)),
		 user.parentNode.parentNode);

    return userbool;
}

function lastnamecheck(){
    // Validacion de apellido
    var lastname = document.getElementById("inputlastname")
    var lastnamebool = lastname.value.length > 2

    color_status((lastname.value != null) && lastnamebool && 
		 !(/^\s+$/.test(lastname.value)),
		 lastname.parentNode.parentNode);

    return (lastname.value.length > 2);
}

function emailcheck() {
    // Valicion de email - regexp basico
    var remail = /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    var email = document.getElementById("inputemail");
    var emailbool = remail.test(email.value);

    color_status(emailbool,
		 email.parentNode.parentNode);

    return emailbool;
}

function sexcheck() {
    // Primero las damas
    var woman = document.getElementById("woman");
    var men = document.getElementById("men");


    color_status((woman.checked || men.checked),
		 woman.parentNode.parentNode.parentNode);

    if (woman.checked){
	console.log("Le gustaria ir a cenar esta noche?");
	return woman.value;
    }
    else if (men.checked){
	console.log("Tomamos una cerveza y luego unas vencidas?");
	return men.value;
    }
    else{
	console.log("¡Cielos, no estaba preparado para esto!")
	return false;
    }
}


function univcheck(){
    // validacion de universidad
    var univ = document.getElementById("inputuniv");
    var univbool = univ.value.length > 2;

    color_status((univ.value != null) && univbool && 
		 !(/^\s+$/.test(univ.value)),
		 univ.parentNode.parentNode);

    return (univ.value.length > 2);
}

function degreecheck(){
    // validacion de carrera
    var degree = document.getElementById("inputdegree");
    var degreebool = degree.value.length > 6;

    color_status((degree.value != null) && degreebool &&
		 !(/^\s+$/.test(degree.value)),
		 degree.parentNode.parentNode);

    return degreebool;
}


function limpiatodo(){
    /* 
     * Pero la mayoria de los que pudieron hacer algo por impedir el crimen y
     * sin embargo no lo hicieron, se consolaron con el pretexto de que los
     * asuntos de honor son estancos sagrados a los cuales sólo tiene acceso
     * los dueños del drama.
     */

    items = ["inputname","inputlastname","inputemail",
	     "inputuniv","inputdegree"]

    for (item=0; item < items.length; item++) {
	tmpelement = document.getElementById(items[item]);
	tmpelement.value = "";
	color_status("reset", tmpelement.parentNode.parentNode);
    }

    tmpelement = "";

    document.getElementById("woman").checked = true;
}

function color_status(value, objectclass)
{
    if (value == "reset"){
	objectclass.className = "control-group";
    }
    else if (value){
	objectclass.className = "control-group success";
    }
    else {
	objectclass.className = "control-group error";
    }
}

function enviarform(){
    /*
     * Al día siguiente tuvo que mandar un telegrama, y él mismo lo 
     * transmitió con el manipulador y además le enseño al telegrafista
     * una fórmula suya para seguir usando las pilas agotadas.
     */
    if (usercheck() && lastnamecheck() && emailcheck() &&
	univcheck() &&  degreecheck()) {
	sexcheck(); // Como se declara??
	document.register.submit();
    }
    else{
	console.log("¡Algo a sucedido mal capitan!")
	return 0;
    }
}
