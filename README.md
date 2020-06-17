# console-log-timestamp

Automatically adds <b>timestamp</b> prefix to all <b>console.log()<b>

From:
```bash
Server started on port 3737
```

to:

```bash
2020-06-17 17:30:25.4320 (Europe/London) ==> Server is runing on port 3737
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
