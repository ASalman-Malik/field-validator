# My Field Validator

This package validate most common used validation in forms.

## Installation

```sh
npm install my-field-validator
```
## Usage ES6
Let's first start with an little example on how to use this filed validator. 
```javascript
//import 
import {validateEmail} from 'my-filed-validator'
validateEmail('test@gmail.com')
//require
const validateEmail = require('my-field-validator')
```
## Description
| Function | Description |
| --- | --- |
| validateEmail | Validate email address |
| validateAadhar | validate Indian Aadhar numbers |
| validatePan | validate Indian PAN numbers |
| validateGST | validate Indian GST numbers |
| validateCIN | validate Indian CIN numbers |
| validatePinCode | validate Indian PIN codes |
| validateINMobile | validate Indian validate indian mobile number starting with 6,7,8,9 |
| validateVoterID | validate Indian voter IDs numbers |
| validateDrivingLicense | validate Indian driving license numbers |
| validateAlphabetWithSpace | validate alphabet with space |
| validateAlphabetOnly | validate alphabet only |
| validateUrl | validate URL |
| validateNameWithHyphensSlashDotBracketSpaceNumber | validate alphabets having " " - / () 9  |

