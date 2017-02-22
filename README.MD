# _Pig Latin Translator_

#### BDD/ JS exercise for Epicodus, 2/22/17

### By Megan Warnock & Josh Linton

## Description

#### This page will take user input and translate it into Pig latin.

### Specs

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.| 3 | 3 |
|The program adds "ay" to single-letter words beginning with a vowel.| i | iay |
|The program recognizes a single vowel, regardless of case. | I | Iay |
|The program adds for a word beginning with one consonants, move the consonant to the end, and add "ay". | do | oday |
|The program recognizes a single word, regardless of case. | Do | Doay|
|The Program adds recognition that any words starting with y function as a consonant| you | ouyay |
|The program adds for a word beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".| the | ethay |
|The program adds for words with the first consonants including "qu" moving the "u" along with the "q".| quick | ickquay |
|The program can tell when words start| "the cat" | "the" , "cat" |
