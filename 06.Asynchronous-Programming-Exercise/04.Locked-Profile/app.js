
async function lockedProfile() {

    const main = document.querySelector('#main');
    const profileDiv = document.querySelector('.profile')

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const response = await fetch(url);
    const data = await response.json();

    const dataArray = Object.values(data)


    dataArray.forEach(x => {

        const profile = profileDiv.cloneNode(true)
        const editedProfile = editProfile(profile, x)

        main.appendChild(editedProfile);
    })
     main.children[0].remove();

    function editProfile(profile, data) {
        profile.querySelector('input[name="user1Username"]').value = data.username;
        profile.querySelector('input[name="user1Email"]').value = data.email;
        profile.querySelector('input[name="user1Age"]').value = data.age;
        profile.querySelector('input[name="user1Age"]').type = 'email';

        const div = profile.getElementsByClassName('user1Username')[0];
        
        div.className = '';
        div.id = 'user1HiddenFields';
        div.style.display = 'none';

        profile.querySelector('button').addEventListener('click', showMore);
        return profile;
    }
    function showMore(e) {
       
        const button = e.currentTarget;        
        const profile = button.parentNode;
        
        const lock = profile.querySelector('input[value="lock"]').checked;
        const unlock = profile.querySelector('input[value="unlock"]').checked;

        if (lock) {
            return;
        }

        if (unlock && button.textContent === 'Show more') {
            profile.querySelector('#user1HiddenFields').style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            profile.querySelector('#user1HiddenFields').style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}






