window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionAPi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 10;
    fetch(functionAPi).then(response => {
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