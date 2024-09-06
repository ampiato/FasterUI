[
  {
    type: 'object',
    title: 'Action',
    properties: {
      action: {
        type: 'string',
        enum: [
          'navigate_to',
          'open_modal',
          'close_modal',
          'submit_form',
          'reset_form',
        ],
      },
      go_to_url: {
        type: [
          'string',
          'null',
        ],
      },
      modal_component: {
        type: 'object',
        additionalProperties: true,
      },
    },
    required: [
      'action',
    ],
    additionalProperties: false,
  },
]
