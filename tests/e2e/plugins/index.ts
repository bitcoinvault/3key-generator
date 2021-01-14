import path from 'path';
import fs from 'fs-extra';

const getConfigurationByFile = (filename: string) => {
  const pathToConfigFile = path.resolve('..', '3key-generator', 'tests', 'e2e', 'config', `${filename}.json`);

  return fs.readJson(pathToConfigFile);
}

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  const file = config.env.configFile || 'local';

  return getConfigurationByFile(file);
};
