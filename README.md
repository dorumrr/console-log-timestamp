# console-log-timestamp

Automatically adds timestamp prefix to all console.log()

From:
```bash
Server is runing on port 3000
```

to:

```bash
2020-05-17 20:44:52.3420 ==> Server is runing on port 3000
```

## Installation

```javascript
npm i console-log-timestamp
```

## Usage

```javascript
require('console-log-timestamp')();
```

If you need a specific timezone, just pass it as an argument:

```javascript
require('console-log-timestamp')('Europe/Paris');
```

---
