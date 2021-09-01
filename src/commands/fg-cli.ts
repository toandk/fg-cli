
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'fg-cli',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your Flutter generator CLI')
  },
}

module.exports = command
