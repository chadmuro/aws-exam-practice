// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'question',
      type: 'document',
      title: 'Question',
      initialValue: {
        type: "single"
      },
      fields: [
        {
          name: 'id',
          type: 'number',
          title: 'Id',
          validation: Rule => Rule.required().integer().positive()
        },
        {
          name: "type",
          type: "string",
          title: "Type",
          options: {
            list: [
              {title: "Single", value: "single"},
              {title: "Multiple", value: "multiple"}
            ]
          },
          validation: Rule => Rule.required()
        },
        {
          name: "question",
          type: "string",
          title: "Question",
          validation: Rule => Rule.required()
        },
        {
          name: "answers",
          type: "array",
          title: "Answers",
          of: [
            {
              type: "object", 
              fields: [
                { 
                  name: "value", 
                  type: "number", 
                  title: "Value"
                },
                {
                  name: "text", 
                  type: "string", 
                  title: "Text"
                }
          ]}],
          validation: Rule => Rule.required().min(1)
        },
        {
          name: "correctAnswers",
          type: "array",
          title: "Correct Answers",
          of: [{type: "number"}],
          validation: Rule => Rule.required().min(1)
        }
      ]
    }
  ]),
})
