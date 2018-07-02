import WDButton from '../src/WDButton';

let button;

describe('WDButton', () => {
  afterEach(() => {
    if (button) {
      button.dispose();
    }
  });

  it('should generate the default markup', () => {
    button = new WDButton();

    expect(button).toMatchSnapshot();
  });
});
