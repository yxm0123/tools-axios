# @lola/tools-axios

## Installation
``` bash
yarn add @lola/tools-axios
```

## Examples
``` bash
import service from "@lola/tools-axios";

export const getUser = (params: any) => {
  return service({
    url: "ass",
    method: "get",
    data: params,
  });
};

```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
