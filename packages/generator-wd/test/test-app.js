const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('wd-generator:app', () => {
  beforeAll(done => {
    helpers
      .run(path.join(__dirname, '../app'))
      .withOptions({skipInstall: true})
      .withPrompts({
        componentName: 'WDComponent'
      })
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'demos/index.html',
      'src/WDComponent.js',
      'src/WDComponent.soy',
      'test/WDComponent.js',
      'test/__snapshots__/WDComponent.js.snap',
      '.babelrc',
      '.gitignore',
      'package.json',
      'README.md',
      'webpack.config.js',
    ]);
  });

  it('content of WDComponent.js', () => {
    assert.fileContent(
      'src/WDComponent.js',
      /class WDComponent extends Component/
    );
    assert.fileContent(
      'src/WDComponent.js',
      /Soy\.register\(WDComponent, templates\)/
    );
    assert.fileContent('src/WDComponent.js', /export {WDComponent}/);
    assert.fileContent('src/WDComponent.js', /export default WDComponent/);
  });

  it('content of WDComponent.soy', () => {
    assert.fileContent('src/WDComponent.soy', /{namespace WDComponent}/);
  });
});
