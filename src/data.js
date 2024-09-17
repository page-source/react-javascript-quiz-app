//THIS IS fallback

const js = [
  {
    question: 'What is the Javscript compiler name in Google Chrome?',
    options: ['Chrome V6', 'Chrome V7', 'Chrome V8', 'Chrome V9'],
    key: 3,
  },
  {
    question: "How can you detect the client's browser name?",
    options: [
      'navigator.userAgent',
      'navigator.browser',
      'browser.appName',
      'app.browserName',
    ],
    key: 1,
  },
  {
    question:
      'Nearly all objects in JavaScript are instances of which of the following?',
    options: ['Object', '_proto_', 'Prototypes', 'DOM'],
    key: 1,
  },
  {
    question: 'Which of the following is a correct way to empty an array?',
    options: [
      'arrayName.empty();',
      'arrayName.splice(0, arrayList.length);',
      'arrayName = null;',
      'arrayName = Obejct.empty();',
    ],
    key: 2,
  },
  {
    question:
      'Which of the following is not a React Component Lifecycle method?',
    options: [
      'componentWillUpdate ',
      'componentDidUpdate ',
      'componentWillUnmount ',
      'componentGoingToUpdate',
    ],
    key: 4,
  },
  {
    question: 'In Experience Technology world, What does MEAN stand for?',
    options: [
      'Mongodb, ES6, Angularjs and Node',
      'Mongodb, Ember, Angularjs and Node',
      'Mongodb, Express, Angularjs and Node',
      'Meteor, Express, Angularjs and Node',
    ],
    key: 3,
  },
  {
    question:
      'In which of the following React Component Lifecycle methods, React refs do not work?',
    options: [
      'componentWillMount',
      'componentDidMount ',
      'componentWillUnmount ',
      'componentDidUpdate',
    ],
    key: 1,
  },
];

const react = [
  {
    name: 'React JS Quiz 1',
    quizKey: 'reactjs-1',
    categories: ['trending', 'recentlyadded'],
    questions: [
      {
        question:
          'What is the method used to render a React component to the DOM?',
        options: [
          'React.render()',
          'ReactDOM.render()',
          'ReactComponent.render()',
          'ReactDOM.create()',
        ],
        key: 2,
      },
      {
        question: 'How can you create a functional component in React?',
        options: [
          'function MyComponent() {}',
          'class MyComponent extends React.Component {}',
          'const MyComponent = () => {}',
          'Both 1 and 3',
        ],
        key: 4,
      },
      {
        question:
          'Which hook is used to manage state in functional components?',
        options: ['useState', 'useEffect', 'useReducer', 'useContext'],
        key: 1,
      },
      {
        question: 'How can you handle form submissions in React?',
        options: [
          'By using the onSubmit event handler',
          'By using the onClick event handler',
          'By using the onChange event handler',
          'By using the onInput event handler',
        ],
        key: 1,
      },
      {
        question: 'What does the useEffect hook do?',
        options: [
          'It allows you to perform side effects in functional components',
          'It manages state in functional components',
          'It handles events in functional components',
          'It renders components to the DOM',
        ],
        key: 1,
      },
      {
        question:
          'Which method is used to update the state in a class component?',
        options: [
          'this.setState()',
          'this.updateState()',
          'this.changeState()',
          'this.modifyState()',
        ],
        key: 1,
      },
      {
        question: 'What is the purpose of the key prop in React?',
        options: [
          'To identify which items have changed, are added, or are removed',
          'To set the ID of a component',
          'To pass data between components',
          "To define the component's CSS class",
        ],
        key: 1,
      },
      {
        question:
          'How do you pass data from a parent component to a child component?',
        options: [
          'By using props',
          'By using state',
          'By using context',
          'By using refs',
        ],
        key: 1,
      },
      {
        question: 'What is JSX?',
        options: [
          'A syntax extension that allows writing HTML in JavaScript',
          'A JavaScript library for building user interfaces',
          'A CSS preprocessor',
          'A JavaScript framework for server-side rendering',
        ],
        key: 1,
      },
      {
        question: 'How can you conditionally render a component in React?',
        options: [
          'By using ternary operators or && operator',
          'By using if statements directly in JSX',
          'By using for loops in JSX',
          'By using switch statements in JSX',
        ],
        key: 1,
      },
    ],
  },
];

module.exports = js;
