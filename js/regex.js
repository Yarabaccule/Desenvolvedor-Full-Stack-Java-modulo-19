const form = document.getElementsByTagName('form')[0];
        form.addEventListener('submit', function (event) {
            if (!nome.validity.valid || !email.validity.valid || !cpf.validity.valid ||
            !p.validity.valid) {
               
                alert('Há dados cadastrais inválidos.');
                event.preventDefault();
            } else {
                
                alert('Cadastro feito com sucesso!');
            }
        })
       
        function getCheckedNome() {
            
            let nome = document.getElementById('nome').value;            
            console.log(nome);
            
            const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']+$/i;
            
            const validoNome = nome.split(/ +/).every(parte => regex.test(parte));
            console.log(validoNome);
            
            const erroNome = document.querySelector('#erroNome');
            
            if (validoNome === false) {
            
                nome = document.querySelector('#nome').setCustomValidity('Nome inválido.');
                
                erroNome.style.display  = 'block';
            
                erroNome.textContent = 'Nome inválido.';
            
                erroNome.style.color = '#F5A9A9';
            } else {
            
                document.querySelector('#nome').setCustomValidity('');
                
                erroNome.style.display  = 'none';
            
                erroNome.textContent = '';
            }
        }

        function getCheckedEmail() {
            
            let email = document.getElementById('email').value;            
            console.log(email);
            
            const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            
            const validoEmail = regex.test(email);            
            console.log(validoEmail);
            
            const erroEmail = document.querySelector('#erroEmail');
            
            if (validoEmail === false) {
            
                email = document.querySelector('#email').setCustomValidity('Email inválido.');
            
                erroEmail.style.display  = 'block';
            
                erroEmail.textContent = 'Email inválido.';
            
                erroEmail.style.color = '#F5A9A9';
            } else {
            
                document.querySelector('#email').setCustomValidity('');
            
                erroEmail.style.display  = 'none';
            
                erroEmail.textContent = '';
            }
        }


        function getCheckedCPF() {
            
            let cpf = document.getElementById('cpf').value; 
            console.log(cpf);

            const regex = /[0-9]{11}/;

            const validoCPF = regex.test(cpf); 
            console.log(validoCPF);

            const erroCPF = document.querySelector('#erroCPF');

            if (validoCPF === false) {
                
                cpf = document.querySelector('#cpf').setCustomValidity('CPF inválido.');

                erroCPF.style.display = 'block';
                
                erroCPF.style.color = '#F5A9A9';

                erroCPF.textContent = 'CPF inválido.'
            } else {
                
                document.querySelector('#cpf').setCustomValidity('');

                erroCPF.style.display = 'none';

                erroCPF.textContent = '';
            }
        }

        