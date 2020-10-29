# meditations
Retrieve random or specific phrases from Marcus Aurelius' meditations.

## Usage
#### Use module in a JavaScript/Node.js application
- To install this package, save it as a dependency using npm:
```bash
$ npm install --save meditations
```
- Require the module in your application:
```javascript
const meditations = require('meditations')
```

- Retrieve a random quote
```javascript
const meditations = require('meditations')

meditations.random()
// "All that is from the... and from thy heart thankful to the gods. "
```

- Retrieve a specific quote
```javascript
const meditations = require('meditations')

meditations.retrieve(1,3) // Retrieves Meditations [1:3]
// "From my mother, piety and beneficence, and abstinence, not only from
// evil deeds, but even from evil thoughts; and further, simplicity in
// my way of living, far removed from the habits of the rich."
```

## License

MIT Abdulrahman Tolba
