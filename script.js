var form = document.getElementById("myForm")


form.addEventListener('submit',function(e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var origi = search.split(' ').join('')

    fetch("https://api.github.com/users/"+search)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
            <div class="profile-box">
                <img class="pro-pic" src="${data.avatar_url}"/>
                <h2>${data.name}</h2>
                <div class="follow-detail">
                    <h3>Followers: ${data.followers}</h3>
                    <h3>Following: ${data.following}</h3>
                    <h3>Repos: ${data.public_repos}</h3>
                </div>
            </div>
    
            `
            
        
    })
})