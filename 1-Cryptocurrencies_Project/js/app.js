// Instanciate the classes / 1 - project

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the variables

const form = document.getElementById('form');

// Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read the currency
    const currencySelect = document.getElementById('currency').value;

    // read the cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;


    // validate that selects have something
    if (currencySelect === '' || cryptoCurrencySelect === '') {
            // display an erron
            ui.printMessage('All the fields are mandatory')
    } else {
        // Query the rest API
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
                    .then(data => {
                        ui.displayResult(data.result[0], currencySelect);
                    })
    }

})

