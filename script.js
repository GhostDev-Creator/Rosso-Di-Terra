function handleFormSubmit(event) {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const interest = form.interest.options[form.interest.selectedIndex].text;
            const messageBox = document.getElementById('message-box');
            
            console.log(`Dados Coletados: Nome: ${name}, Email: ${email}, Interesse: ${interest}`);

            messageBox.textContent = `Obrigado, ${name}! Seu interesse em "${interest}" foi registrado com sucesso. Entraremos em contato!`;
            messageBox.classList.remove('hidden');
            messageBox.style.backgroundColor = 'var(--cor-pastel-vinho)';
            messageBox.style.color = 'var(--cor-vinho-principal)';

            setTimeout(() => {
                form.reset();
                messageBox.classList.add('hidden');
            }, 5000);
        }

        document.querySelectorAll('#menu-lateral a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                
            });
        });