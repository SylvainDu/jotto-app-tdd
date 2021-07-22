import {findByTestAttr} from "../../../test/testUtils";
import {shallow, ShallowWrapper} from "enzyme";
import GuessedWordComponent from "./guessed-word-component";
import {GuessedWordModel} from "../models/guessed-word-model";


describe('GuessedWordComponent', () => {
    let wrapper: ShallowWrapper;
    let guessedWordComponent: ShallowWrapper;

    describe('if no word guessed', () => {
        const guessedWords: GuessedWordModel[] = [];

        beforeEach(() => {
            wrapper = shallow(<GuessedWordComponent guessedWords={guessedWords} />)
        });

        test('should return no error', () => {
            guessedWordComponent = findByTestAttr(wrapper, 'guessed-word-component');
            expect(guessedWordComponent.length).toBe(1)
        });

        test('render instructions to guess a word', () => {
            guessedWordComponent = findByTestAttr(wrapper, 'guess-instructions');
            expect(guessedWordComponent.length).not.toBe(0)
        })
    });

    describe('if word guessed', () => {
        const guessedWords: GuessedWordModel[] = [
            {
                guessedWord: 'train',
                letterMatchCount: 3
            },
            {
                guessedWord: 'agile',
                letterMatchCount: 1
            },
            {
                guessedWord: 'party',
                letterMatchCount: 5
            }];

        beforeEach(() => {
            wrapper = shallow(<GuessedWordComponent guessedWords={guessedWords} />)
        });

        test('should return no error', () => {
            guessedWordComponent = findByTestAttr(wrapper, 'guessed-word-component');
            expect(guessedWordComponent.length).toBe(1)
        });

        test('should return "guessed words" section', () => {
            guessedWordComponent = findByTestAttr(wrapper, 'guessed-words');
            expect(guessedWordComponent.length).toBe(1)
        });

        test('should return number of guessed words', () => {
            guessedWordComponent = findByTestAttr(wrapper, 'guessed-word');
            expect(guessedWordComponent.length).toBe(3)
        });
    });
});
