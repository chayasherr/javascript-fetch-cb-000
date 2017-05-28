const app = "I don't do much.";
const token = "02e80d42ed0ba472bd413961742c91748bfbfaba"
function listRepos(){
	fetch('https://api.github.com/user/repos',{
		headers:{
			Authorization: `token ${token}`
		}
	}).
	then(res => res.json()).
	then(json => console.log(json))
}