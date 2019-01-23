# sns-confirmation
This is a simple Express server to confirm a http confirmation from AWS SNS.
If you want to subscribe to a SNS topic aws sends a http post with a confirmation URL. The script parse it and call the URL.
This script can easily be extended to handle messages as well

## Develop

1. Fork this Repo
2. Clone it
3. Install dependencies
``` js
npm install
```
4. Run the server
``` js
npm run dev
```

## Production

1. Build the server
``` js
npm run build
```
2. Run the server
``` js
npm run start
```

## EBS
This script can be easily executed in an EBS instance. Simply use the EB CLI.
1. Init EB
``` bash
eb init
```
2. Deploy it
``` bash
eb deploy
```
