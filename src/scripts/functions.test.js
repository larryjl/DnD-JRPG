import actions, {mon1} from "./functions.js"

test('test actions', () => {
    expect(actions.attack(30, 80)).toEqual(50);
});

test('test objects', () => {
    expect(mon1.HP).toEqual(30);
});