const list = document.querySelector('.projects__list--js');

const url ='https://api.github.com/users/jagodakosinska/repos?diuration=asc';
fetch(url)
.then(resp => resp.json()).then(resp => {for (repo of resp){const { description, homepage, html_url, name } = repo; 
list.innerHTML += 
` <li class="project">
<div class="project__container">
<img class="project__logo" src="../assets/icons/github.png" alt="github">
<h3 class="project__title">${name}</h3>${description ? `<p class="project__description">${description}</p>` : 'No description' }    
</div>   
 <div class="project__footer">   
  ${homepage ?  `<a class="project__link project__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}">Demo</a>` : ''    }               
<a class="project__link project__link--github" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}">Github</a>    </div></li>` } }).catch(err => {        console.log(err)})