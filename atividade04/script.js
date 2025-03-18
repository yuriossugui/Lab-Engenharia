document.addEventListener("DOMContentLoaded", function () {

    const radioProfessor = document.getElementById('tipoProfessor');
    const radioAluno = document.getElementById('tipoAluno');

    radioAluno.addEventListener('change', function () {
        let alunoFields = document.getElementById('alunoFields');
        let professorFields = document.getElementById('professorFields');
        alunoFields.style.setProperty('display','block');
        professorFields.style.setProperty('display','none');
    });

    radioProfessor.addEventListener('change', function () {
        let alunoFields = document.getElementById('alunoFields');
        let professorFields = document.getElementById('professorFields');
        professorFields.style.setProperty('display','block');
        alunoFields.style.setProperty('display','none');
    });


    class Pessoa{
        constructor(nome,email,data,telefoneFixo,telefoneCelular,matricula){
            this.nome = nome;
            this.email = email;
            this.data = data;
            this.telefoneFixo = telefoneFixo;
            this.telefoneCelular = telefoneCelular;
            this.matricula = matricula;
        }
    }

    class Aluno extends Pessoa{
        constructor(nome,email,data,telefoneFixo,telefoneCelular,matricula,curso){
            super(nome,email,data,telefoneFixo,telefoneCelular,matricula);
            this.curso = curso;
        }
    }

    class Professor extends Pessoa{
        constructor(nome,email,data,telefoneFixo,telefoneCelular,matricula,area,lattes){
            super(nome,email,data,telefoneFixo,telefoneCelular,matricula)
            this.area = area;
            this.lattes = lattes;
        }
    }

    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', function() {

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let dataNascimento = document.getElementById('dataNascimento').value;
        let telFixo = document.getElementById('telFixo').value;
        let telCelular = document.getElementById('telCelular').value;
        let matricula = document.getElementById('matricula').value;
        let area = document.getElementById('area').value;
        let lattes = document.getElementById('area').value;
        let curso = document.getElementById('curso').value;

        const radios = document.getElementsByName('tipoPessoa');
        let valorSelecionado = null;

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                valorSelecionado = radios[i].value;
                break; // Sai do loop assim que encontrar um selecionado
            }
        }

        if(valorSelecionado == 'aluno')
        {
           const aluno = new Aluno(nome, email, dataNascimento, telFixo, telCelular, matricula, curso);    
           console.log(aluno);
        }


    });

});