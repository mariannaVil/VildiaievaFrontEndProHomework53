const rulesText = {
  required: 'This field is required',
  minLength: (min) => `This field should be at least ${min} characters long`,
  maxLength: (max) => `This field should be at moast ${max} characters long`,
};

export const quizRules = {
  title: {
    required: { value: true, message: rulesText.required },
    minLength: { value: 3, message: rulesText.minLength(3) },
    maxLength: { value: 25, message: rulesText.maxLength(25) },
  },
  description: {
    required: { value: true, message: rulesText.required },
    minLength: { value: 15, message: rulesText.minLength(15) },
    maxLength: { value: 100, message: rulesText.maxLength(100) },
  },
  image: {
    required: { value: true, message: rulesText.required },
    pattern: {
      value: /^(http(s?):)([/|.|\w|\s|-|%])*\.jpg(\?.*)?$/,
      message: 'Image should be a valid URL',
    },
  },
};
