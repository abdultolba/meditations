# meditations
Retrieve random or specific phrases from Marcus Aurelius' meditations.

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## Usage
#### Use module in a JavaScript/Node.js application
- To install this package, save it as a dependency using npm:
```bash
$ npm install --save meditations
```
- Require the module in your application:
```javascript
const meditations = require('meditations');
```

- Retrieve a random quote
```javascript
const meditations = require('meditations');

meditations.random();
// "All that is from the... and from thy heart thankful to the gods. "
```

- Retrieve a specific quote
```javascript
const meditations = require('meditations');

meditations.retrieve(1,3); // Retrieves Meditations [1:3]
// "From my mother, piety and beneficence, and abstinence, not only from
// evil deeds, but even from evil thoughts; and further, simplicity in
// my way of living, far removed from the habits of the rich."
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/abdultolba/meditations.svg?style=for-the-badge
[contributors-url]: https://github.com/abdultolba/meditations/graphs/contributors

[stars-shield]: https://img.shields.io/github/stars/abdultolba/meditations.svg?style=for-the-badge
[stars-url]: https://github.com/abdultolba/meditations/stargazers

[issues-shield]: https://img.shields.io/github/issues/abdultolba/meditations.svg?style=for-the-badge
[issues-url]: https://github.com/abdultolba/meditations/issues

[license-shield]: https://img.shields.io/github/license/abdultolba/meditations.svg?style=for-the-badge
[license-url]: https://github.com/abdultolba/goodbooks/blob/main/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/abdultolba
