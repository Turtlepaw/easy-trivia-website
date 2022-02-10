const codeSnippets = {
  example_1: {
    code: "import { getQuestions } from 'easy-trivia';\n\nconst questions = await getQuestions({\n      amount: 1,\n      difficulty: 'easy',\n      type: 'multiple',\n      category: 'SCIENCE_COMPUTERS'\n});\n\nconsole.log(questions);",
    result: "{\n   value: '...',\n   category: '...',\n   difficulty: '...',\n   type: '...',\n   correctAnswer: '...',\n   incorrectAnswers: ['...', '...', '...'],\n   allAnswers: ['...', '...', '...', '...'],\n   checkAnswer: [Function: checkAnswer]\n}"
  }
};

export default codeSnippets;