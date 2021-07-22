import React, {ReactElement} from 'react';
import {GuessedWordModel} from "../models/guessed-word-model";

export default function GuessedWordComponent (props: {
        guessedWords: GuessedWordModel[]
    }) {
    let contents: ReactElement;
    let guessedWords: any = props.guessedWords.map((word, index) => {
        return (
            <tr key={index} data-test="guessed-word">
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        )
    });
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    } else {
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Guess</th>
                            <th>Matching letter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWords}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="guessed-word-component">
            {contents}
        </div>
    )
};
