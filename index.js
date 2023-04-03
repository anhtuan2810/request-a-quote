const getProductTitle = document.querySelector('[data-hook=product-title]');
const newElement = document.createElement('button');
newElement.innerHTML = 'Request A Quote'
newElement.setAttribute("class", "request-a-quote-button")
getProductTitle.insertAdjacentElement('afterend', newElement);
const style = document.createElement('style');
style.innerHTML = `
      .request-a-quote-button {
        background-color: black;
        color:white;
        padding: 5px 10px;
      }
    `;
document.head.appendChild(style);