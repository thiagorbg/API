document.addEventListener('DOMContentLoaded',function() {

    let avatar = this.getElementById('avatar')
    let name = this.getElementById('name')
    let username = this.getElementById('username')

    let repositorios  = this.getElementById('repost')
    let seguidores  = this.getElementById('seguidores')
    let seguindo  = this.getElementById('seguindo')
    let linkGitGub = this.getElementById('linkElement')

    try{
        const endPoit = 'https://api.github.com/users/thiagorbg'

        const xhttp = new XMLHttpRequest

        xhttp.open('GET',endPoit);
        xhttp.send();

        xhttp.onload = function (){
            if (xhttp.status === 200) {
                const valor = JSON.parse(xhttp.responseText);
                avatar.src = valor.avatar_url;
                name.innerText = valor.name || 'Sem nome';
                username.innerText = valor.login;
                repositorios.innerText = valor.public_repos;
                seguidores.innerText = valor.followers;
                seguindo.innerText = valor.following;
                linkGitGub.href = valor.html_url;
            }else {
                console.log('error na requisição')
            }
        }
    }catch (error){
        console.log('ocorreu um error', error);
    }
    
})
// document.addEventListener('DOMContentLoaded', async function () {
//     const avatar = document.getElementById('avatar');
//     const name = document.getElementById('name');
//     const username = document.getElementById('username');
//     const repositorios = document.getElementById('repost');
//     const seguidores = document.getElementById('seguidores');
//     const seguindo = document.getElementById('seguindo');
//     const linkGitGub = document.getElementById('linkElement');

//     const endPoint = 'https://api.github.com/users/thiagorbg';

//     try {
//         const response = await fetch(endPoint);
//         if (!response.ok) {
//             throw new Error('Erro na requisição: ' + response.status);
//         }

//         const valor = await response.json();

//         avatar.src = valor.avatar_url;
//         name.innerText = valor.name || 'Sem nome';
//         username.innerText = valor.login;
//         repositorios.innerText = valor.public_repos;
//         seguidores.innerText = valor.followers;
//         seguindo.innerText = valor.following;
//         linkGitGub.href = valor.html_url;
//     } catch (error) {
//         console.error('Ocorreu um erro:', error);
//     }
// });
