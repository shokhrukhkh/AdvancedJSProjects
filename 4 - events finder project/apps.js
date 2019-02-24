
// Instanciate both classes
const eventBrite = new EventBrite();
const ui = new UI();


// Listener for the submit button

document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    //get values from form
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    //console.log(eventName + ' ' + category);

    if (eventName !== '') {
        // Query event Brite Api
        eventBrite.qeuryAPI(eventName, category)
            .then(events => {
                // check for events
                const eventsList = events.events.events;
              if (eventsList.length > 0) {
                  //print the events
                  ui.displayEvents(eventsList);
              }   else {
                  // there are no events , print a message
                  ui.printMessage('No Results Found', 'text-center alert alert-danger mt-4');
              }
            });
    } else {
        // Print a message
        ui.printMessage('Add an event or City', 'text-center alert alert-danger mt-4');
    }
});