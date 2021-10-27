function acesso(form){

    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()

    if (form.nome.value == "marta" && form.senha.value =="123"  ||  form.nome.value == "art"
    && form.senha.value =="321") {

        location="acesso.html"
    }
    
    else {

        form.nome.value=""
        form.senha.value=""
        alert("usuario ou senha incorretos")
    }

}