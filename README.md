# Javascript utilities we use at Konnektid

Opinionated javascript utilities used at Konnektid.

They include functional utilities, validation utilities and more.

The goals of this project is to enhance reusability, promote functional programming and simplicity.

## Utils
Generic purpose utilities

### slugify
```
import { slugify } from "konnektid-js-utils";

// or

import slugify from "konnektid-js-utils/dist/slugify";
```

It converts strings to slugs that can be use in urls.

## Types

These utilities functions are used to check if values are of a certain types.

### isGiven(value: any): Boolean
Returns true id the value is given. A not given value is undefined, null or empty string.

### isString(value: any): Boolean
Returns true if the value is a string.

### isEmail(value: String): Boolean
Returns true if the value is valid email string.
