// init new object
const github = new Github;
const ui = new UI;

const searchInput = document.getElementById('searchUser');

searchInput.addEventListener('keyup', (e) => {
    const inputText = e.target.value;

    if(inputText !== ''){
        // make request
        github.getUser(inputText)
        .then( data => {
            if(data.profilData.message === 'Not Found'){
                //error alert
                ui.showAlert('User not found', 'alert alert-danger');
            }else{
                //display profilData
                ui.showProfil(data.profilData);
                ui.showRepos(data.repoData);
            }
        });
    }else{
        // clear profilData
        ui.clearProfil();
    }
});