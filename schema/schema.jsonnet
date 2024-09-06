local components = import 'components.libsonnet';
local utils = import 'utils.libsonnet';

{
  '$schema': 'http://json-schema.org/draft-07/schema#',
  title: 'Component',
  definitions: {
    [component.title]: component
    for component in components + utils
  },
  oneOf: [
    {
      type: 'object',
      properties: {
        [c.title]: {
          '$ref': '#/definitions/' + c.title,
        },
      },
      additionalProperties: false,
    }
    for c in components
  ],
}
