import Button from '../src/Button';

let button;

describe('Button', () => {
  afterEach(() => {
    if (button) {
      button.dispose();
    }
  });

  it('should generate the default markup', () => {
    button = new Button();

    expect(button).toMatchSnapshot();
  });
});
