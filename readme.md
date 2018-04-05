# REST & Relaxation

Example API. Convert to a RESTful architecture.

## Getting Started

1. Fork/clone this repository
1. `npm install`
1. `npm start`

## Guiding Questions

* What is the [shortid](https://www.npmjs.com/package/shortid) package? How can you create a new shortid?

* What is the [moment](https://www.npmjs.com/package/moment) package? What will the following code do?
    ```js
    const moment = require('moment')
    moment().format('YYYY-MM-DD')
    ```

* Try hitting the `/alldreams` route. What is the top level key of the JSON response and where is it set?

## Next Steps

- [ ] Make our two existing `GET` routes more RESTful
- [ ] Create a **SHOW** route for each resource with an appropriate status code
- [ ] Create a **DESTROY** route for each resource with an appropriate status code
- [ ] Create a **SHOW** route for the path `/dreams/:id/people` that only returns the people with the associated dream
- [ ] Update the custom error handler to return an appropriate status code and helpful content
- [ ] Add a **CREATE** route for each resource and return an appropriate status code
- [ ] Update the **CREATE** routes so that they validate for all fields except for ID and, in the case of **dreams**, people; return the correct status code if it's invalid