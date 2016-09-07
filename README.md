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

### isEmail(value: String)
Returns true if the value is valid email string
