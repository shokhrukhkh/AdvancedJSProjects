class UI {
    constructor() {
         this.init();
    }
    init() {
         this.printCryptoCurrencies();
    }
    // Prints the <option> for the form
    printCryptoCurrencies() {
         cryptoAPI.getCryptoCurrenciesList()
              .then(data => {
                   const cryptoCurrencies = data.cryptoCurrencies;

                   // Build the <select> from the REST API
                   const select = document.getElementById('cryptocurrency');

                   cryptoCurrencies.forEach(currency => {
                        // add the <option>
                        const option = document.createElement('option');
                        option.value = currency.id;
                        option.appendChild(document.createTextNode(currency.name));
                        select.appendChild(option);
                   })
              })
    }
    
    // Print the message 2 parameters, message and classes
    printMessage(message, className) {
        const div = document.createElement('div');

        // add tje classes
        div.className = className;
        //add the message
        div.appendChild(document.createTextNode(message));

        const messageDiv = document.querySelector('.message');

        messageDiv.appendChild(div);

        // remove the message
        setTimeout(() => {
            document.querySelector('.message div').remove();
        }, 3000);
    }

    // Prints the result of the valuation / rate
    displayResult(result, currency){
        console.log(result);
        // read the currency
        let currencyName;
        currencyName = 'price_' + currency.toLowerCase();
        // read the result from the object
        const value = result[currencyName];

        // remove the previous result
        const prevResult = document.querySelector('#result > div');
        if(prevResult){
            prevResult.remove();
        }

        let HTMLTemplate = '';
        HTMLTemplate += `
             <div class="card cyan darken-3">
                  <div class="card-content white-text">
                       <span class="card-title">Result</span>
                       <p>The Price of ${result.name} from ${currency} is $ ${value}</p>
                       <p>Last Hour: ${result.percent_change_1h} %</p>
                       <p>Last Day: ${result.percent_change_24h} %</p>
                       <p>Last 7 Days: ${result.percent_change_7d} %</p>
                  </div>
             </div>
        `;

        // print the spinner
        this.showSpinner();

        // After 2 seconds print the result and remove the spinner
        setTimeout(() => {
            // print the result
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;

            // hide the spinner
            document.querySelector('.spinner img').remove();
        }, 3000);
    }

    // print the spinner 
    showSpinner(){
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}