function visitorCounter() {
    fetch("https://o1qdpet5j5.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
        document.getElementById("visitor-counter").innerHTML=body
    })
}