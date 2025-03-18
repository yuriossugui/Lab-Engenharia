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

        let nome = document.getElementById('nome').value ?? 'Não informado';
        let email = document.getElementById('email').value ?? 'Não informado';
        let dataNascimento = document.getElementById('dataNascimento').value ?? 'Não informado';
        let telFixo = document.getElementById('telFixo').value ?? 'Não informado';
        let telCelular = document.getElementById('telCelular').value ?? 'Não informado';
        let matricula = document.getElementById('matricula').value ?? 'Não informado';
        let area = document.getElementById('area').value ?? 'Não informado';
        let lattes = document.getElementById('lattes').value ?? 'Não informado';
        let curso = document.getElementById('curso').value ?? 'Não informado';

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
           
           const cardSuccess = document.getElementById('cardSuccess');
           cardSuccess.style.setProperty('display','block');

           const userInfo = document.getElementById('userInfo');

           const html = `
            <p>Nome: ${aluno.nome}</p>
            <p>E-mail: ${aluno.email}</p>
            <p>Data Nascimento: ${aluno.dataNascimento}</p>
            <p>Telefone Fixo: ${aluno.telFixo}</p>
            <p>Telefone Celular: ${aluno.telCelular}</p>
            <p>Matricula: ${aluno.matricula}</p>
            <p>Curso: ${aluno.curso}</p>
           `;

           userInfo.innerHTML = html;

        }

        if(valorSelecionado == 'professor')
        {
           const professor = new Professor(nome, email, dataNascimento, telFixo, telCelular, matricula, area, lattes);    
           
           const cardSuccess = document.getElementById('cardSuccess');
           cardSuccess.style.setProperty('display','block');

           const userInfo = document.getElementById('userInfo');

           const html = `
            <p>Nome: ${professor.nome}</p>
            <p>E-mail: ${professor.email}</p>
            <p>Data Nascimento: ${professor.dataNascimento}</p>
            <p>Telefone Fixo: ${professor.telFixo}</p>
            <p>Telefone Celular: ${professor.telCelular}</p>
            <p>Matricula: ${professor.matricula}</p>
            <p>Area: ${professor.area}</p>
            <p>Lattes: ${professor.lattes}</p>
           `;

           userInfo.innerHTML = html;

        }

    });

});