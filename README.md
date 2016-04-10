# dice-constants

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## What is it?

### install
```
npm i --S dice-constants
```

### usage
```
var DICE_CONSTANT = require('dice-constants')

DICE_CONSTANT.OPERATOR // 'OPERATOR'
DICE_CONSTANT.DIE // 'DIE'
DICE_CONSTANT.LITERAL // 'LITERAL'
```

## How do I work on it?

### development
```
git clone https://github.com/sterpe/dice-constants.git
cd dice-constants
make
```

### test
```
make JEST_FLAGS=--coverage test
```

### lint
```
make lint
```

Consult the [`Makefile`](Makefile) for further details.
