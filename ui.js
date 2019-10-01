
class UI{
    constructor(){
        this.profil = document.getElementById('profil');
    }

    showProfil(user){
        this.profil.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}"></img>
                    <a href="${user.html_url}" class="btn  btn-primary btn-block mb-3" target="_blank">View Profil</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public gists: ${user.public_gists}</span>
                    <span class="badge badge-secondary">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <span class="badge badge-success">Public repos: ${user.public_repos}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Website: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">User since: ${user.created_at}</li>
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>   
        `;
    }
    //show repos method
    showRepos(repos){
        let output = '';
        let repoDiv = document.getElementById('repos');
        repos.forEach(function(repo){
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-secondary">Forks: ${repo.forms_count}</span>
                        <span class="badge badge-info">Stars: ${repo.stargazers_count}</span> 
                        </div>
                    </div>
                </div>
            `;
        });
        repoDiv.innerHTML = output;
    }
    //show alert div method
    showAlert(msg, className){
        // clear UI of fromer alerts
        this.clearAlert();
        //get Elements
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        // create alert div
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(msg));
        div.className = className;
        //append created Element to DOM
        container.insertBefore(div, search);
        // clear alert massage after 2s
        setTimeout( ()=> {
             this.clearAlert() 
        },2500)
    }
    //clear alert div method
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    //clear profil method
    clearProfil(){
        this.profil.innerHTML= '';
    }
}