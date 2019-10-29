import express, {Application, Request, Response, NextFunction} from 'express';

const port = 5000;
const __dirname = '.';
import path from 'path';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, nexp: NextFunction) => {
    console.log(add(5,5));
    // res.sendFile('../index.html');
    res.sendFile('index.html', {root: __dirname});
    // res.send('HELLO');
});

app.listen(port, ()=>{
    console.log('Server runnning...');
});