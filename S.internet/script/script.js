class Internet{
    constructor(nombre, contrato) {
        this.nombre = nombre;
        this.contrato = contrato;
        this.plan = "";
        this.velocidad = 0
        this.precio = 0
         
    }

    getNombre(){
        return this.nombre
    }

    getContrato(){
        return this.contrato
    }

    getPlan(){
        return this.plan
    }

    getVelocidad(){
        return this.velocidad
    }

    getPrecio(){
        return this.precio
    }

    setplan(plan){
        if (plan == "Basico"){
            this.velocidad = 100
            this.precio = 1000
        }
        else if (plan == "Intermedio"){
            this.velocidad = 500
            this.precio = 5000
        }
        else if (plan == "Avanzado"){
            this.velocidad = 1000
            this.precio = 10000
        }
        else{
            alert("Opcion erronea")
        }
    }

    setCambiarPlan(nuevoPlan){
        if (nuevoPlan == "Basico" || nuevoPlan == "Intermedio" || nuevoPlan == "Avanzado")
            this.tipoPlan = nuevoPlan
            if (nuevoPlan == "Basico"){
                this.velocidad = 100 
                this.precio = 1000
            }
            else if (nuevoPlan == "Intermedio"){
                this.velocidad = 500
                this.precio = 5000
            }
            else if (nuevoPlan == "Avanzado"){
                this.velocidad = 1000
                this.precio = 10000
            }
            else{
                alert("Opcion erronea")
            }
    
    }
    calcularPeriodo(cantidadMeses){
        for (let i = 0; i < cantidadMeses; i++){
            this.precio = this.precio + (this.precio * 0.10)
        }
        return this.precio
    }
}

let gestor; 

function iniciarServicio(){
    const nombre = document.getElementById("nombre").value 
    const contrato = document.getElementById("contrato").value 
    const plan = document.getElementById("plan").value
    gestor = new Internet(nombre, contrato)
    gestor.setplan(plan)
    mostrarInformacion()
}

function mostrarInformacion(){
    document.getElementById("info").innerHTML = gestor.getNombre() + "--" + gestor.getContrato() + "--" + gestor.getPlan() + "--" + gestor.getPrecio()+ "$--" + gestor.getVelocidad()+ ""
}

function iniciarnuevoservicio(){
    const nombre = document.getElementById("nuevonombre").value
    const contrato = document.getElementById("nuevocontrato").value
    const plan = document.getElementById("nuevoplan").value
    gestor = new Internet(nombre, contrato)
    gestor.setplan(plan)
    mostrarnuevainformacion()
}

function mostrarnuevainformacion(){
    document.getElementById("info").innerHTML = gestor.getNombre() + "--" + gestor.getContrato() + "--" + gestor.getPlan() + "--" + gestor.getPrecio()+ "$--" + gestor.getVelocidad()
}