window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiURL = 'https://mygetresumecounter.azurewebsites.net/api/GetResumeCounter?code=Sa-8Hie3vhwRCuHlNLLSZBHbe4SmH2vLXPUirz35Xl-dAzFuYPTNSw==';
const localfunctionAPi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 10;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response =>{
        console.log('website called function API.');
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}