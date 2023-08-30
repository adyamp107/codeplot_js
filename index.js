const express = require('express');
const app = express();
const path = require('path');
const nlp = require('compromise');
const fs = require('fs');
const csv = require('csv-parser');
const port = process.env.PORT || 5500;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

function calculateSimilarity(input, problem) {
    const inputDoc = nlp(input);
    const problemDoc = nlp(problem);
    const inputTokens = inputDoc.terms().out('array');
    const problemTokens = problemDoc.terms().out('array');
    const intersection = inputTokens.filter(token => problemTokens.includes(token));
    const similarity = intersection.length;
    return similarity;
}

app.get('/run-nlp', (req, res) => {    
    const inputText = req.query.input;
    const getInput = nlp(inputText);
    const input = getInput.sentences().toPresentTense().out('text');
    const csvFile = 'ProblemSolutionPythonV3.csv';
    const datasetPath = path.join(__dirname, 'public', 'chat', 'dataset', csvFile);
    const dataset = [{
        problem: null,
        index: null,
        pythonCode: null,
        similarity: 0
    }];

    fs.createReadStream(datasetPath)
        .pipe(csv())
        .on('data', (data) => {
            dataset.push({
                problem: data.Problem,
                index: data.Index,
                pythonCode: data['Python Code'],
                similarity: calculateSimilarity(input, data.Problem)
            });
        })
        .on('end', () => {
            dataset.sort((x, y) => y.similarity - x.similarity);
            if(dataset[0].similarity === 0) {
                res.json('Sorry we do not have the data you mean!');
            } else {
                res.json(dataset[0].pythonCode);
            }
        })
        .on('error', () => {
            res.json('Sorry there was an error!');
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});