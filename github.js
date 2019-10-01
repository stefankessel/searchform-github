
class Github{
    constructor(){
        this.client_id = 'xxxxx';
        this.client_secret = 'xxxxxx';
        this.repos_count = '3';
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.repos_sort}&per_page=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profilData = await profileResponse.json();
        const repoData = await repoResponse.json();
        // return an Object
        return {
            profilData:profilData,
            repoData
        };

    }
}
