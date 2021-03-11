console.log("tyagi")


let newsAccordion = document.getElementById("newsAccordian");
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=07d4ad700f207ea8ef6000183595c656&lang=en`, true);
//xhr.getResponseHeader('content-type', 'aplication/Json')
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element ,index) {

            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              <b> BREAKING NEWS:- ${index+1} </b> &emsp; ${element["title"]}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="newsAccordion">
              <div class="accordion-body">
                ${element["content"]}  <a href="${element['url']}" target="_blank" >Read more here</a>
              </div>
            </div>
          </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
}
xhr.send()

