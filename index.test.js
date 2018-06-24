const MyButton = require('./components/MyButton.svelte');

let target;
let component;

describe('MyButton Component', () => {
    beforeEach(() => {
        target = document.createElement('div')

        component = new MyButton({ target });
    });

    it('should render', () => {
        const text = 'Hello world';
        const expected = `<button>${text}</button>`;

        component.set({ text });

        expect(target.innerHTML).toEqual(expected);
    });
});
