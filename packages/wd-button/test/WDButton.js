import WDButton from '../src/WDButton';

let button;

describe('WDButton', () => {
  afterEach(() => {
    if (button) {
      button.dispose();
    }
  });

  it('should generate a default button', () => {
    button = new WDButton({
      label: 'Default',
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a disabled default button with id=\"test-id\", class=\"test-class\", name=\"test-name\", and type=\"submit\"', () => {
    button = new WDButton({
      label: 'Default',
      id: 'test-id',
      elementClasses: 'test-class',
      name: 'test-name',
      type: 'submit',
      disabled: true,
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a link with href and target=\"_blank\"', () => {
    button = new WDButton({
      label: 'Default',
      href: 'https://wedeploy.com',
      target: '_blank',
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a default button with valid svg element', () => {
    button = new WDButton({
      icon: `<svg>
              <path d="test" />
            </svg>`,
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a default button with an empty span with class=\"test-icon\"', () => {
    button = new WDButton({
      classIcon: 'test-icon',
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a button with classes \"wd-btn-outline-violet\" and \"wd-btn-xxl\"', () => {
    button = new WDButton({
      label: 'Default',
      style: 'outline',
      color: 'violet',
      size: 'xxl',
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a button with inline min-width of \"128px\"', () => {
    button = new WDButton({
      label: 'Default',
      width: '128px',
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a button with inline width= of \"36px\"', () => {
    button = new WDButton({
      label: 'Default',
      width: '36px',
      hardWidth: true,
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a default button with class \"wd-btn-rounded\"', () => {
    button = new WDButton({
      label: 'Default',
      borderRadius: 'rounded',
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a default button with class \"wd-btn-borderRadius-6px\"', () => {
    button = new WDButton({
      label: 'Default',
      borderRadius: 'borderRadius-6px',
    });

    expect(button).toMatchSnapshot();
  });

  it('should generate a default button with class \"wd-btn-justified-padding\" and valid svg aligned to the right of label', () => {
    button = new WDButton({
      label: 'Default',
      icon: `<svg>
              <path d="test" />
            </svg>`,
      iconAlignment: 'right-justified',
    });

    expect(button).toMatchSnapshot();
  });
});
