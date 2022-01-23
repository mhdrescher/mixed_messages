// Creating Objects for random messages
// Can be filled with addMessage functions, see file. 

const randomMessages1Starter = 'Starter 1: '
const randomMessages1 = [
    {message: 'Message 1'},
    {message: 'Message 2'},
    {message: 'Message 3'},
    {message: 'Message 4'},
    {message: 'Message 5'},
    {message: 'Message 6'},
    {message: 'Message 7'},
    {message: 'Message 8'},
    {message: 'Message 9'}
];

const randomMessages2Starter = 'Starter 2: '
const randomMessages2 = [
    {message: 'Message A'},
    {message: 'Message B'},
    {message: 'Message C'},
    {message: 'Message D'},
    {message: 'Message E'},
    {message: 'Message F'},
    {message: 'Message G'},
    {message: 'Message H'},
    {message: 'Message I'}
];

const randomMessages3Starter = 'Starter 3: '
const randomMessages3 = [
    {message: 'Message a'},
    {message: 'Message b'},
    {message: 'Message c'},
    {message: 'Message d'},
    {message: 'Message e'},
    {message: 'Message f'},
    {message: 'Message g'},
    {message: 'Message h'},
    {message: 'Message i'}
]

console.log(randomMessages1Starter + randomMessages1[Math.floor(Math.random() * randomMessages1.length)].message)
console.log(randomMessages2Starter + randomMessages2[Math.floor(Math.random() * randomMessages2.length)].message)
console.log(randomMessages3Starter + randomMessages3[Math.floor(Math.random() * randomMessages3.length)].message)

