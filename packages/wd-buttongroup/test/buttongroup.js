import buttongroup from '../src/buttongroup';

let buttongroup;

describe('buttongroup', () => {
  afterEach(() => {
    if (buttongroup) {
      buttongroup.dispose();
    }
  });

  it('should generate the default markup', () => {
    buttongroup = new buttongroup();

    expect(buttongroup).toMatchSnapshot();
  });
});
