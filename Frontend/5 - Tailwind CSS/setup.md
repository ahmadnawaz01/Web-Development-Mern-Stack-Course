## How to setup Tailwind CSS

Step 1 : Run the following commands

```
npm install tailwindcss @tailwindcss/cli
```

Step 2 : Now in src folder make input.css and add
```
@import "tailwindcss";
```
step 3: Run command
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

step 4: Link in your html 
```
<link rel="stylesheet" href="src/output.css">
```